import React from 'react'
class ProfileImage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            defaultValue: 100
        }

    }
    
    // arrow function 
    increaseCount = () => { 
        console.log('hi')
        // takes 1 argument and callback function 
        // callback function takes object properties 
        this.setState(prevState =>({
            count: prevState.count +1 

        }))

    }
    decreaseCount(){


    }

    render(){
        console.log(this.state)

        return(
            <div>
            <h1> The current count is {this.state.count}</h1>
            <button onClick={this.increaseCount}> Count +  </button>
            <button> Count -  </button>
            </div>
        )

        // return(
        //     <h1> I am a Class Component </h1>
        // )
    
    }
} 
export default ProfileImage


