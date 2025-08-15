import React from 'react'
import Body from './components/Body/Body'

const App = () => {

  return (
    <>
    <div className="absolute w-screen top-0 mr-6">
      <div>
      <div className=" bg-purple-100 flex align-center items-center justify-between " >
        <h1 className="font-bold text-blue-400">JEWELRY</h1>
        <ul className=" flex space-x-20 text-xl">
        
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Menu</a></li>
          <li> <a href="#">Email</a></li>
          
        </ul>
      </div>
      </div>
    </div>
   
  <Body/>
  </>
  )
 };

export default App;
