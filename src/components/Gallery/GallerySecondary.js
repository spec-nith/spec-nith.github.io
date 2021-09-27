import React, { useState,Component } from 'react';

import './Gallery.css';
const secondaryGalleryCard = [{
    title:'2017',
    img : `url('https://source.unsplash.com/random/')`
},
{
    title:'2018',
    img : `url('https://source.unsplash.com/random/)`
},
{
    title:'2019',
    img : `url('https://source.unsplash.com/random/')`
},
{
    title:'2020',
    img : `url('https://source.unsplash.com/random/')`
},
{
    title:'2021',
    img : `url('https://source.unsplash.com/random/')`
}]



export default class GallerySecondary extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    SecondaryComponent = secondaryGalleryCard.map((card)=>{
        return (
            <div className="panel" style={{ backgroundImage: card.img }}>
                        <h3>{card.title}</h3>
                    </div>
        )
    })
    render() {
        return (
            <div className="container-int">
            <div className="container">
                {this.SecondaryComponent}
                
            </div>

        </div>
        )
    }
}




