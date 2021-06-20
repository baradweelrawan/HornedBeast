import React, { Component } from 'react'

export class HornedBeasts extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
               <h1>{this.props.title}</h1>
               <img src={this.props.img} alt={this.props.title}/> 
               <h2>{this.props.description}</h2>
            </div>
        )
    }
}

export default HornedBeasts
