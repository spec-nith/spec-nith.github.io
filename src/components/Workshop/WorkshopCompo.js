import React from 'react'
// import GridLayout from 'react-grid-layout';
import './WorkshopCompo.css'

export default function WorkshopCompo(props) {

  return (
    <div>
      <div className="centerflipcards">
        <div className="square-flip">
          <div className='square' data-image="">
            <div className="square-container">
              <div className="align-center"><img src="" className="boxshadow" alt="" /></div>
              <h2 className="textshadow">{props.number}</h2>
              <h3 className="textshadow ">{props.workshopname}</h3>
            </div>
            <div className="flip-overlay"></div>
          </div>
          <div className='square2' data-image="">
            <div className="square-container2">
              <div className="align-center"></div>
              <h2>
                {props.content}
              </h2>
            </div>
            <div className="flip-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  )

}
