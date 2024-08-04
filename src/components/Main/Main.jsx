import './Main.css'
import '../../assets/styles/common.css'
import MainContent from './Contents/MainContent/MainContent'
import AboutUs from './Contents/AboutUs/AboutUs'
import OurService from './Contents/OurServices/OurService'
import Success from './Contents/success/Success'
import Achievement from './Contents/Achievements/Achievement'
import Feedback from './Contents/Feedback/Feedback'
import News from './Contents/News/News'
import SignUp from './Contents/SignUp/SignUp'


export default function Main(){
    return(
        <main className='main '>
            <MainContent/>
            <OurService />
            <AboutUs />
            <Success />
            <Achievement />
            <Feedback />
            <News />
            <SignUp />
        </main>
    )
}
