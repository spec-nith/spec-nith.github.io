import React from 'react'
import './Gallery.css';

import {Link} from 'react-router-dom';

let galleryCards = [{
    title : "SPEC",
    sub: "ELECTROTHON",
    link: "",
    img : `url('https://source.unsplash.com/random/?food')`
},
{
    title : "SPEC",
    sub: "SPECFEST",
    link: "",
    img : `url('https://source.unsplash.com/random/?food')`
},
{
    title : "SPEC",
    sub: "WORKSHOP",
    link: "",
    img : `url('https://source.unsplash.com/random/?food')`
},
{
    title : "SPEC",
    sub: "EVENTS",
    link: "",
    img : `url('https://source.unsplash.com/random/?food')`
}];
export default function Gallery() {
    
    return (
        <div className='gallery-main'>
            <div className="main-container">
                {GalleryComponent}
            </div>

        </div>
    )
}

const GalleryComponent = galleryCards.map((props)=>{
    
    
    return(
        <div className="internal-con">
                    <div className="background" style={{ backgroundImage: props.img }}></div>
                    <div className="text">
                        <div class="gallery-card-title-medium">{props.title}</div>
                        <div className="gallery-card-title">{props.sub}</div>
                        <div className="gallery-card-title-small">Gallery collection</div>
                        <button className="btn-prime">Gallary</button>

                    </div>
                </div>
    )
});