import React from "react";
class UserReview extends React.Component{
    constructor(props){
        super(props)

        this.state={
          count:0
        } 
    }

    


    render(){
        const {count}= this.state
       return(
        <div>
            <h1>Hello: {this.props.name}</h1>
            <h2>Count:{count}</h2>
        
        <button className="bg-black text-white" onClick={()=>{
            this.setState({
                count: count+1
            })
        }}>
            Click here 
        </button>
        </div>
       

       )
    }
}

export default UserReview