import React from 'react';

// react snippet imr
// ffc

// function Card(props)to access the username props.username
// handle the props
function Card({username,textBtn}) {
// console.log(props.username)


// this gives empty props that object
// if in App.jsx while calling components if we change props that is 
// reflected in the page
    return ( 
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://source.unsplash.com/301x301/?randomhttps://www.pexels.com/photo/a-green-plant-with-leaves-on-it-against-a-white-background-15074804/"
          alt="plant"
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {textBtn}
          </button>
        </div>
      </div>
     );
}

export default Card;
