import React,{Component} from 'react';
class Follow extends Component{
    constructor(){
        super();
        this.state={
           count:0
    };
}
increment=()=>{
    this.setState({count:this.state.count+1})
}
    render(){
    return(
        <>
        <h1>{this.state.count} person follows you!</h1>
        <button onClick={this.increment}>click</button>
        </>
    )}
}
export default Follow;