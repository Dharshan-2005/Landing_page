import React from 'react'

const MainSection = () => {
  return (
    <>
    <div className='container flex mx-auto sm:flex-row'>
        <div className='w-1/3 text-center flex flex-col items-center'>
            <h1 className='text-2xl font-bold'>Web Development</h1>
            <img className='h-40 w-40' src="/public/web building.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea temporibus fuga voluptatum a aut pariatur nihil quam nam. Ipsum.</p>
        </div>
        <div className='w-1/3 text-center flex flex-col items-center'>
            <h1 className='text-2xl font-bold'>Mobile App Development</h1>
            <img className='h-40 w-40' src="/public/mobile app.png" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ut at voluptatum dignissimos consequatur, sit repellat suscipit unde, harum, earum maiores molestias explicabo officiis saepe! Laudantium recusandae quisquam dicta odit.</p>
        </div>
        <div className='w-1/3 text-center flex flex-col items-center'>
            <h1 className='text-2xl font-bold'>Personal finance</h1>
            <img className='h-40 w-40' src="/public/Finance.png" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, eos fugiat eveniet cum commodi quos aliquid quo doloremque ducimus nihil vel sequi ullam. Omnis commodi voluptatibus quasi nobis, ipsam recusandae.</p>
        </div>
    </div>
    </>
  )
}

export default MainSection