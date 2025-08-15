import React from 'react'



const Body = () => {
  return (
    <div className="bg-purple-600 h-screen w-screen mt-14 flex flex-row items-center align-center" >
        {/*tetx container*/}
        <div className="flex flex-col ml-30 mr-30 p-4 w-full">
            <h1 className="font-bold">Luxurious Jewelry</h1><br />

            <p1 className="font-bold text-3xl"> Welcome to our stunning collection of fine jewelry crafted with love and attention in detail!!!</p1> <br />
      
            <p2 className="text-xl">Sparkle and shine with curated selection of jewelry, perfect for everyday wear or special occassions.</p2><br />


            <button className=" text-bold p-4 text-blue-500">Order now</button> <br />
            <button className="text-blue-500">Contact Us</button><br />

            <p className="font-bold text-blue-450 text-3xl">Hey!!We Got You This Side!!</p>

        </div>
      {/*photo container */}
      <div className="w-full h-auto">
      <img src="/jewelry.jpg" alt="" />
      
      </div>

    </div>
  )
};

export default Body
