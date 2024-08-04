import aboutUsImage from '../../../../assets/images/about-us-image.png'
import './AboutUs.css'
import AboutUsContent from './elements/AboutUsContent/AboutUsContent'

export default function AboutUs() {
  return (
    <div className="about-us _container">
      <img src={aboutUsImage} alt="" />
      <AboutUsContent />
    </div>
  )
}
    