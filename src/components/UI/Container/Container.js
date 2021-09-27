import React from 'react';
const container=(props)=>{
    return(<div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">{props.title}</h1>
        </div>
        </header>
        {props.text?(<main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-gray-200 rounded-lg text-xl h-auto">{props.text}</div>
          </div>
        </div>
        </main>):null}
    </div>)
};
export default container;