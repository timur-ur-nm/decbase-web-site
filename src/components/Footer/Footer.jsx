import './Footer.css'

import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/icons/fc.png'
import twitter from '../../assets/images/icons/tw.png'
import instagram from '../../assets/images/icons/in.png'
import linkedin from '../../assets/images/icons/li.png'

export default function Footer() {
  return (
    <footer className="footer">
        <div className='footer_container _container'>
            <div className="foooter_title">
                <div className='foooter_title_logo'>
                    <img src={logo} alt="" />
                    <p>But i must explain to you all this mistaken
                    idea of dencouncing pleasure.</p>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Quick Links</a></li>
                        <li><a href="#">About Our Company</a></li>
                        <li><a href="#">Services WE provide</a></li>
                        <li><a href="#">Career & Opportunity</a></li>
                        <li><a href="#">Privacy & policy</a></li>
                        <li><a href="#">Contact US</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">About Company</a></li>
                        <li><a href="#">Our Testimonials</a></li>
                        <li><a href="#">Latest News</a></li>
                        <li><a href="#">Our misson</a></li>
                        <li><a href="#">Get a free Quot</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Sagrada Familia, Herba</a></li>
                        <li><a href="#">Street Front USA</a></li>
                        <li><a href="#">brandoxide@gmail.com</a></li>
                        <li><a href="#">002-568423591</a></li>
                    </ul>
                </nav>
                <div className='foooter_title_follow'>
                    <h1>Follow Us</h1>
                    <div>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer_copy">
                <span>Copyright @ 2020 Brandoxide.all right reserved.</span>
            </div>
        </div>
    </footer>
  )
}















