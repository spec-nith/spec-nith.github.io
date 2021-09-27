import React,{Component} from 'react'
import Workshopnavbar from './Workshopnavbar'
import axios from 'axios';

class Workshop extends Component{
      state={
        dummy:[]
      }
      componentDidMount(){
        axios.get('https://spec-backend.herokuapp.com/api/alumni/')
        .then(response => {
          console.log(response.data)
          this.setState({dummy:response.data});
        })
        .catch(err => {
          console.log(err)
        })
      }
    
      render(){
        return (
          <div className="bg-black">
            <div  className="text-center font-serif ... text-7xl text-white" >WORKSHOP</div>  
            <Workshopnavbar dummy = {this.state.dummy}color="grey"/>
        </div>
        );
      }
    }
    
export default Workshop;
