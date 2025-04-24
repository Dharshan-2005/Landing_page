import React from 'react'

const Stories = () => {
  return (
    <>
    <div className='container mt-6 mx-auto'>
        <div className='text-center'>
            <h1>Recent updates</h1>
            <h1 className='text-2xl'>Featured Stories</h1>
        </div>
      <div className='grid grid-cols-3 gap-4'>
            <div className='bg-black rounded-xl hover:shadow-2xl'>
              <div>
                <img className='w-full h-40' src="https://picsum.photos/200" alt="" />
              </div>
              <p className='font-thin text-white text-center mt-3'>Connect to the world</p>
            </div>
            <div className='bg-black rounded-xl hover:shadow-2xl'>
              <div>
                <img className='w-full h-40' src="https://picsum.photos/200" alt="" />
              </div>
              <p className='font-thin text-white text-center mt-3'>Good communication</p>
            </div>
            <div className='bg-black rounded-xl hover:shadow-2xl'>
              <div>
                <img className='w-full h-40' src="https://picsum.photos/200" alt="" />
              </div>
              <p className='font-thin text-white text-center mt-3'>Connect to the world</p>
            </div>
      </div>
    </div>
    </>
  )
}

export default Stories