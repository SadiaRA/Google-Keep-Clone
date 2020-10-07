import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
const Createnote=(props)=>{
    const[note,setNote]=useState({
        title:'',
        content:''
    })
    const[expand,setExpand]=useState(false)
    const InputEvent=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setNote((prevData)=>{
           return {...prevData,[name]:value} 
        })
    }
    const AddEvent=()=>{
        props.passNote(note);
        setNote({title:'',content:''})


    }
    const expandIt=()=>{
        setExpand(true);

    }
    const shrinkIt=()=>{
        setExpand(false);

    }

    return(<>
    <div className="main_note">
        <form >
            { expand?
            <input type="text" name='title' size='60' value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off'/>:null}
            <textarea rows='5' onClick={expandIt}  onDoubleClick={shrinkIt}
            name='content' cols='50'value={note.content} onChange={InputEvent} placeholder='Write note....'></textarea>
            {expand?<Button onClick={AddEvent}>
                < AddCircleIcon className='plus_sign'/>

            </Button>:null}
        </form>
    </div>
    </>
    )
}
export default Createnote