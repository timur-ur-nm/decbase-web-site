import TitleBLock from '../../elements/TitleBlock/TItleBlock'
import mainImage from '../../../../assets/images/main-image.png'
import './MainContent.css'


export default function MainContent() {
  return (
    <>    
      <div className='maincontent _container'>
        <TitleBLock 
          h2="MODERN INTERIOR"
          h1="Create Your Interior Design."
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation."
          btn="CONTACT"
          ></TitleBLock>
          <img src={mainImage} alt="main-image" />
      </div>
    </>
  )
}
