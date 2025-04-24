import React from 'react'
import MainSection from './MainSection'
import Pricing from './Pricing'
import Stories from './Stories'

const App = () => {
  return (
  <>
  {/* navbar section */}
    <div className='bg-black w-full h-20'>
      <nav className=' md:flex justify-between items-center mx-auto my-auto'>
        <div className='h-15 w-15'>
        <a href=""><img className='rounded-full h-15 w-15' src="https://picsum.photos/200/300" alt="image" /></a>
        </div>
        {/* unlike other tag like div the ul does not take the full width or defined size so we cannot 
        use the justify-between but we can use space-x*/}
        <ul className='flex space-x-6 font-medium text-white text-xl'>
          <li className='hover:text-gray-400'><a href="">Services</a></li>
          <li className='hover:text-gray-400'><a href="">Contact us</a></li>
          <li className='hover:text-gray-400'><a href="">About</a></li>
          <li className='hover:text-gray-400'><a href="">Pricing</a></li>
        </ul>
        <button className='rounded-full px-5 py-2 text-white font-medium text-lg hover:text-gray-400'>Sign-Up</button>
      </nav>
    </div>

    {/* Hero section*/}
    <div className='container mt-5 mx-auto flex flex-col md:flex-row items-center'>
    <div className='w-3/4 text-center '>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quas aspernatur aperiam sapiente nemo facere architecto tenetur 
      blanditiis iste obcaecati voluptatum ratione assumenda ut reiciendis ullam maiores 
      fugit, quia libero autem.</p> 
      <button className='mt-3 bg-black px-6 py-2 rounded-full text-white font-medium hover:text-gray-400'>Get Started</button>
    </div>
    <div>
        <img src="/public/hero.png" alt="image" width ="300px"/>
    </div>
    </div>

    {/* main section */}
    <MainSection></MainSection>
    <Pricing></Pricing>
    <Stories></Stories>
  </>
  )
}

export default App