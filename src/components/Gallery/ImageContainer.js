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
            currentIndex : 0,
        };
    }


    async showImage(img,ind){

        await this.setState({FullImageCard: true,imageUrl:img,currentIndex:ind});

    }
    async showPrev(ind){
        if(ind>0){
            
            let url = ImageBox[ind-1].img;
        
            await this.setState({FullImageCard: true,imageUrl:url,currentIndex:ind-1});
        }
        console.log(this.state.currentIndex);
    }
    async showNext(ind){
        if(ind<ImageBox.length-1){
            
            let url = ImageBox[ind+1].img;
        
            await this.setState({FullImageCard: true,imageUrl:url,currentIndex:ind+1});
      
            
        }
    }
    async exitButton(){
    
        await this.setState({FullImageCard: false});

    }

    Image = ImageBox.map((element,index)=>{
        return(
            <div className="item" style={{ backgroundImage: `url(${element.img})` }} onClick={()=>this.showImage(element.img,index)} >
            <div className="item__details">
              {element.title}

            </div>
          </div>
    
        )
    })
    render() {
        return (
            <>
            
            {this.state.FullImageCard && <div id="overlay">
            <div id="prevButton" className={this.state.currentIndex==0 ? "disabled":''} onClick={()=>this.showPrev(this.state.currentIndex)}><FontAwesomeIcon icon={faChevronLeft}  /></div>
            <img src= {this.state.imageUrl}/ >
            
            <div id="nextButton" className={this.state.currentIndex==(ImageBox.length-1) ? "disabled":''} onClick={()=>this.showNext(this.state.currentIndex)}><FontAwesomeIcon icon={faChevronRight}  /></div>
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




