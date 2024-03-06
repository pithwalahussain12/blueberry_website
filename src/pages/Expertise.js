import React from 'react'
import Header from '../component/Header'
import Work from '../component/work'
import Footer2 from '../component/footer2'
import Collab from '../component/Collab'
import ExpertiseSection from '../component/ExpertiseSection'

export default function ExpertisePage() {
    return (
        <div className='app'>
            <Header />
            <div className='container'>
                <div className='lg:w-[600px] pt-40 pb-32'>
                    <h2 className='text-9xl productBold'>Expertise</h2>
                    <p className='pt-8 productBold text-xl '>Focusing on core areas, we combine our creative and
                        technical skills to uncover brand’s essences.</p>
                </div>
            </div>
            <Work />
            <ExpertiseSection />
            <Collab />
            <Footer2 />
        </div>
    )
}
