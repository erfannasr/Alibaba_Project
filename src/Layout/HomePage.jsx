import React from 'react'
import Banner from '../Components/Banner/Banner'
import Services from '../Components/Service/Services'
import Application from '../Components/Application/Application'
import YourQuestions from '../Components/YourQuestions/YourQuestions'
import Description from '../Components/Description/Description'
import TopFooter from '../Components/TopFooter/TopFooter'

function HomePage() {
  return (
    <div>
       <Banner />
       <Services />
       <Application />
       <YourQuestions />
       <Description />
       <TopFooter />
    </div>
  )
}

export default HomePage