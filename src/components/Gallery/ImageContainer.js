import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faChevronRight,faChevronLeft,faTimes } from '@fortawesome/free-solid-svg-icons';
import './Gallery.css';

const ImageBox = [{
    title:'2017',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2018',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2019',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2020',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2021',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2021',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2021',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2021',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2021',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2021',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2021',
    img : 'https://source.unsplash.com/random/'
},
{
    title:'2021',
    img : 'https://source.unsplash.com/random/'
}]



export default class ImageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            FullImageCard: false,
            imageUrl : null,
        };
    }


    async showImage(img){
     
    
        await this.setState({FullImageCard: true,imageUrl:img});

    }
    async exitButton(){
    
        await this.setState({FullImageCard: false});

    }

    Image = ImageBox.map((element)=>{
        return(
            <div className="item" style={{ backgroundImage: `url(${element.img})` }} onClick={()=>this.showImage(element.img)} >
            <div className="item__details">
              {element.title}
              <div class="img-overlay">
              <FontAwesomeIcon icon={faPlusCircle} />
              
              <i class="fas fa-plus-circle" aria-hidden="true"></i>
            </div>
            </div>
          </div>
    
        )
    })
    render() {
        return (
            <>
            
            {this.state.FullImageCard && <div id="overlay">
            <div id="prevButton"><FontAwesomeIcon icon={faChevronLeft}  /></div>
            <img src= {this.state.imageUrl}/ >
            
            <div id="nextButton"><FontAwesomeIcon icon={faChevronRight}  /></div>
            <div id="exitButton" onClick={()=>this.exitButton()}><FontAwesomeIcon icon={faTimes}  /></div>
            </div>}
            
            
            
            
            <div className = "image-container-background">
            <div className="grid">
            
                {this.FullImageCard}
 
    {this.Image}

  </div>
        </div>
        </>
        )
    }
}




