import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Createnote from './Createnote';
import Note from './Note';

const App=()=>{
  const[addItem,setAddItem]=useState([])
  const AddNote=(note)=>{
    setAddItem((prevdata)=>{
      return [...prevdata,note]
    })
   
  
  }
  const onDelete=(id)=>{
    setAddItem((prevdata)=>{
    return  prevdata.filter((value,index)=>{
      return index!==id;
    })})


  }
  
  return (
  <>
  <Header/>
  <Footer/>
  <Createnote passNote={AddNote}/>
  <br/>
  <br/>
  {
  addItem.map((value,index)=>{
    return <Note key={index} id={index} title={value.title} content={value.content} deleteItem={onDelete}/>
  })
}
  </>)
}
export default App;