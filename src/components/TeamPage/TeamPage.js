import TeamCard from '../UI/Teamcard';
import './TeamPage.css';
import { Component } from 'react';
import axios from 'axios';

class TeamPage extends Component{
  state={
    dummy:[]
  }
  componentDidMount(){
    console.log("uhgukyfdut");
    axios.get('https://spec-backend.herokuapp.com/api/team/')
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
      <div >

<h1>Final Year Members</h1>
< div className="content">

  {this.state.dummy.map(element=>(<TeamCard 
  name={element.name}
  post={element.title}
 />))}

</div>
<h1>Coordinators</h1>
<div className="content">
{this.state.dummy.map(element=>(<TeamCard 
 name={element.name}
 post={element.title} />))}
</div>
<h1>Executive Members</h1>
<div className="content">
{this.state.dummy.map(element=>(<TeamCard 
 name={element.name}
 post={element.title} />))}


</div>

    </div>
    )
  }
}

export default TeamPage;
