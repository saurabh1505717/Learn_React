import React from 'react'

// function Card({username, btnText="Visit Me"}) {

 // This way we can directly consume the props(properties) which has been passed while calling the component instead of writing like "props.username", we can directly consume it as "username"

function Card(props) {
    
    const buttonText = props.btnText || 'View Profile'

  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
        <img src="https://images.pexels.com/photos/34160545/pexels-photo-34160545.jpeg" alt="" class="z-0 h-full w-full rounded-md object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{props.username}</h1>
          <p className="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, consequatur?</p>
          <button class="mt-2 inline-flex cursor-pointer items-center text-sm font semibold text-white">{buttonText}</button>

          {/* <button class="mt-2 inline-flex cursor-pointer items-center text-sm font semibold text-white">{props.btnText}</button> */}
        </div>
      </div>
  )
}

export default Card