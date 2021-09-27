import React from 'react';


function spec(props){
    return(<div className="p-20 bg-orange-200">
    <div className="bg-white rounded-lg shadow-2xl md:flex">
        <img src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg" alt="Laptop on Desk" className="w-96 md:w-52 rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover" />
        <div className="p-6">
            <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">{props.name}</h2>
            <p className="text-orange-700 h-48">
                {props.title}
                <h3>{props.batch}</h3>
                <a href={props.link}>Links</a>
            </p>
        </div>
    </div>
</div>)
}
export default spec;