import React from 'react'
import Header from '../component/Header'
import Work from '../component/work'
import Footer2 from '../component/footer2'
import Collab from '../component/Collab'
import WorkShowcase from '../component/WorkShowcase'
export default function Portfolios() {
    return (
        <div className='app'>
            <Header />
            <div className='container'>
                <div className=' pt-40 pb-32'>
                    <h2 className='text-9xl productBold'>Showcase</h2>
                    <div className='flex justify-between items-end'>
                        <div>
                            <p class=""><span class="text-6xl productBold">5+</span> <label class="productregular text-2xl">completed projects</label></p>
                        </div>
                        <div>
                            <p className=' w-[500px] productBold text-3xl '>We use holistic design approach
                                to tell brand stories, resonate with
                                values, and create memorable
                                impressions.</p>

                        </div>
                    </div>
                </div>
            </div>
            <Work />
            <WorkShowcase />
            <Collab />
            <Footer2 />
        </div>
    )
}
