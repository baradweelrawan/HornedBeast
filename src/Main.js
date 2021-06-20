import React, { Component } from 'react'
import HornedBeasts from "./HornedBeasts.js";


export class Main extends Component {
    render() {
        let HornedBeastList = [
            {

                title: 'UniWhal',
                image: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
                description: 'A unicorn and a narwhal nuzzling their horns'

            },

            {
                title: 'Rhino Family',
                image: 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
                description: 'Mother (or father) rhino with two babies'
            },
        ]
        return (
            <div>
                < HornedBeasts title={HornedBeastList[0].title} img={HornedBeastList[0].image} description={HornedBeastList[0].description} />
                < HornedBeasts title={HornedBeastList[1].title} img={HornedBeastList[1].image} description={HornedBeastList[1].description} />
            </div>
        )
    }
}

export default Main
