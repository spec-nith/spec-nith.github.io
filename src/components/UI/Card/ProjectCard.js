import React from 'react';

const card=(props)=>{
  const pic="https://wallpaperaccess.com/full/1132656.jpg"
  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
  <img className="w-full" src={pic} alt="Project1"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.title}</div>
    <p className="text-gray-700 text-base">
      {props.description}
    </p>
    <div className="pt-12">
				<button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
				  PROJECTS
				</button> 
			</div>
  </div>
</div>
  )
  };
export default card;