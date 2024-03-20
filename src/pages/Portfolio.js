import React from 'react'
import Header from '../component/Header'
import Work from '../component/work'
import Footer2 from '../component/footer2'
import Collab from '../component/Collab'
import WorkShowcase from '../component/WorkShowcase'
export default function Portfolios() {
    return (
        <div className='app'>
            {/* <Header /> */}
            <div className='container'>
                <div className=' pt-[8vw] pb-[8vw]'>
                    <h2 className='text-[9vw] productBold'>Showcase</h2>
                    <div className='flex justify-between items-end'>
                        <div>
                            <p class=""><span class="text-[6vw] productBold">5+</span> <label class="productregular text-[1.8vw]">completed projects</label></p>
                        </div>
                        <div>
                            <p className='w-[500px] productBold text-[2vw]'>We use holistic design approach
                                to tell brand stories, resonate with
                                values, and create memorable
                                impressions.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <video loop autoPlay muted className='video w-full'>
                    <source src='/assets/images/BlueB-Web_12.mp4' type="video/mp4"></source>
                </video>
            </div>

            {/* <Work /> */}
            <WorkShowcase />
            <Collab />
            <Footer2 />
        </div>
    )
}
