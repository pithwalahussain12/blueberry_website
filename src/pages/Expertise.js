import React from 'react'
import Header from '../component/Header'
import Work from '../component/work'
import Footer2 from '../component/footer2'
import Collab from '../component/Collab'
import ExpertiseSection from '../component/ExpertiseSection'

export default function ExpertisePage() {
    return (
        <div className='app'>
            {/* <Header /> */}
            <div className='container'>
                <div className='lg:w-[40vw] pt-[7vw] pb-[8vw]'>
                    <h2 className='lg:text-[9vw] productBold exp-end'>Expertise</h2>
                    <p className='pt-[1vw] productBold text-we-co lg:text-[1.25vw] '>Focusing on core areas, we combine our creative and
                        technical skills to uncover brand’s essences.</p>
                </div>
            </div>
            <div className=''>
                <video loop autoPlay muted className='video w-full'>
                    <source src='/assets/images/BlueB-Web_12.mp4' type="video/mp4"></source>
                </video>
            </div>

            {/* <Work /> */}
            <ExpertiseSection />
            <Collab />
            <Footer2 />
        </div>
    )
}
