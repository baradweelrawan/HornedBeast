import React, { Component } from 'react'

export class HornedBeasts extends Component {
    constructor(props){
        super(props);
        this.state={
            likeNumber:props.likeNumber,
        }
    }

    favoriteBeast=()=>{
        this.setState({likeNumber:this.props.raisLikes(this.state.likeNumber)});
           
    }
    
    
    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
               <h1>{this.props.title}</h1>
               <p>{this.state.votes}</p>
               {/* <img onClick={this.favoriteBeast}/> */}
               <img src={this.props.img} alt={this.props.title} width="250" height="250"/>  
               <button onClick={this.favoriteBeast} >Votes ♥️ </button>
               <h2>{this.props.description}</h2>
               <span>{this.state.likeNumber}</span>
               
            </div>
        )
    }
}

export default HornedBeasts
