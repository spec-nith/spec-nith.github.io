import React from 'react'

import './Gallery.css';

const ImageBox = [{
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
},
{
    title:'2021',
    img : `url('https://source.unsplash.com/random/')`
},
{
    title:'2021',
    img : `url('https://source.unsplash.com/random/')`
},
{
    title:'2021',
    img : `url('https://source.unsplash.com/random/')`
},
{
    title:'2021',
    img : `url('https://source.unsplash.com/random/')`
},
{
    title:'2021',
    img : `url('https://source.unsplash.com/random/')`
},
{
    title:'2021',
    img : `url('https://source.unsplash.com/random/')`
},
{
    title:'2021',
    img : `url('https://source.unsplash.com/random/')`
}]
export default function ImageContainer() {
    return (
        <div className = "image-container-background">
            <div className="grid">
 
    {Image}

  </div>
        </div>


    )
};

let Image = ImageBox.map((element)=>{
    return(
        <div className="item" style={{ backgroundImage: element.img }}>
        <div className="item__details">
          {element.title}
        </div>
      </div>

    )
})
