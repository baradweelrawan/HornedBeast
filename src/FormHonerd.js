import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import HornedBeasts from "./HornedBeasts";
import Main from "./Main.js";


let hornsNumber=0;
class FormHonerd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horns: HornedBeasts,
            show:false

        }
    }
    userhornsHandler = (e) => {
        this.setState({
            horns: e.target.value
        })
        console.log(this.state.horns)
    }

    onClickHandler = (e) => {
        e.preventDefault()
        this.props.horns({
           
                title: this.props.title,
                image_url: this.props.img,
                description: this.props.description,
               show:true

            })
            
    }


    render() {
        // if (horns== 'all')
        // {

        // } elseif (horns== '1')
        // {
        //     hornedData.map((beast) => { 
        //         return <HornedBeasts title={beast.title} img={beast.image_url} description={beast.description}
        //          horns={this.horns.selectedBeast}/>
        // }
        return (
            <div>
                <Form onSubmit={(e) => { this.onClickHandler(e) }}>
                    <Form.Group as="select" aria-label="Default select example" onChange={(e) => this.userhornsHandler(e)}>
                        <option>Custom Select</option>
                        <option value='' >all</option>
                        <option value='1' >1</option>
                        <option value='2'>2</option>
                        <option value='3' >3</option>
                        <option value='100'>100</option>

                    </Form.Group>
                </Form>
                {
                    this.state.show &&
                    <HornedBeasts horns={this.state.horns} />
                    
                }
            </div>
        )
    }
}

export default FormHonerd
