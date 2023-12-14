import React from 'react'
import BannerFlight from '../Components/Domestic flight/BannerFlight'
import ServicesFlight from '../Components/Domestic flight/ServicesFlight'
import ApplicationFlight from '../Components/Domestic flight/ApplicationFlight'
import YourQuestionsFlight from '../Components/Domestic flight/YourQuestionsFlight'
import DescriptionsFlight from '../Components/Domestic flight/DescriptionsFlight'
import TopFooter from '../Components/TopFooter/TopFooter'

function DomesticFlight() {
  return (
    <div>
      <BannerFlight />
      <ServicesFlight />
      <ApplicationFlight />
      <YourQuestionsFlight />
      <DescriptionsFlight />
      <TopFooter />
    </div>
  )
}

export default DomesticFlight