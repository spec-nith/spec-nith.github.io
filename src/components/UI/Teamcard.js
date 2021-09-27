import React from 'react'

function TeamCard(props) {
    return (
        <>
<div className="card 1">
  <div className="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt={props.name} /> </div>
  <div className="card_title title-white">
    <p >{props.name}</p>
    <a href={props.linkedin} ><i className="fa fa-linkedin"></i></a>
  <a href={props.github}><i className="fa fa-github"></i></a>
    <p className="post">{props.post}</p>

  </div>
</div>
</>
    )
}

export default TeamCard
