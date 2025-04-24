import React from 'react'

const Pricing = () => {
  return (
    <>
    <div className='contianer mx-32 mt-6'>
        <div className='text-center'>
            <h1 className='text-2xl text-black font-bold'>Pricing</h1>
            <p className='text-xl'>Pricing offers are here for the yearly and monthly subscription</p>
            <p className='text-xl'>Featured plans are here</p>
        </div>
        <div className='grid grid-cols-3 gap-4 text-white text-center mt-6'>
            <div className='bg-black w-80 rounded-2xl hover:shadow-2xl/30'>
                <h1 className='font-bold text-5xl'>$99</h1>
                <h2 className='mt-2'>Basic</h2>
                <p>All the basic features are included</p>
                {/* <li>
                    <div>
                        <img src="/src/assets/checked.svg" alt="" />
                    </div>
                </li> */}
            </div>
            <div className='bg-black w-80 rounded-2xl hover:shadow-2xl/30'>
            <h1 className='font-bold text-5xl'>$199</h1>
            <h2 className='mt-2'>Premium</h2>
            <p>All the basic and advanced features are included</p>
                {/* <li>
                    <div>
                        
                    </div>
                </li> */}
            </div>
            <div className='bg-black w-80 rounded-2xl hover:shadow-2xl/30'>
                <h1 className='font-bold text-5xl'>$299</h1>
                <h2 className='mt-2'>Premium+AI</h2>
                <p>All the basic and advanced features are included</p>
                {/* <li>
                    <div>
                        
                    </div>
                </li> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Pricing