import React from 'react'
import mobileLogin from '../assets/icons/mobilelogin.png'
import teslaPic from '../assets/icons/pic.png'

const Products = () => {
  return (
    <div className='px-4 Ig:px-14 max-w-screen-2xl mx-auto my-8' id='products'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
            <div>
                <img src={mobileLogin} alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className='btn-primary mt-6'>Learn More</button>

            </div>
        </div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/3'>
                    <img src={teslaPic} alt="" />
                </div>
                <div className='md:w-2/3 mx-auto'>
                <div>
                    <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-6'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                    <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                    <div>
                        <div className='flex items-center gap-8 flex-wrap'>
                            <img src="/src/assets/icons/company1.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/icons/company2.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/icons/company3.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/icons/company4.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/icons/company5.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/icons/company6.png" alt="" className='cursor-pointer' />
                            <div>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers</a>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

            </div>
        </div>

    </div>
  )
}

export default Products