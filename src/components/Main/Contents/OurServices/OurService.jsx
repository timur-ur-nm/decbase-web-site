import './OurService.css'
import ServiceTitle from './elements/ServiceTItle/ServiceTitle'
import ServiceButtons from './elements/ServiceButtons/ServiceButtons'
import ServiceContentBlock from './elements/ServiceContentBlock/ServiceContentBlock'
import {ServiceContentBlockData} from '../../data.js'

import icon1 from '../../../../assets/images/icons/icon1.png'
import icon2 from '../../../../assets/images/icons/icon2.png'
import icon3 from '../../../../assets/images/icons/icon3.png'


export default function OurService() {
    return (

      <div className='our-service _container'>
          <div className='our-service_title'>
                <ServiceTitle />
                <ServiceButtons />
          </div>

          <div className='our-service_content'>
            <ServiceContentBlock 
            img = {icon2}
              {...ServiceContentBlockData[0]}  
            />
            <ServiceContentBlock 
            img = {icon3}
              {...ServiceContentBlockData[1]}
            />
            <ServiceContentBlock 
            img = {icon2}
             {...ServiceContentBlockData[2]}
            />
          </div>
      </div>
    )
  }
  
  