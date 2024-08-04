import logo from '../../assets/images/logo.png'; 
import './Header.css';
import '../../assets/styles/common.css'; 

export default function Header() {
    return(
        <header className='header'>
            <div className='header_container _container'>
                <img src={logo} alt="" />
                <nav>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PROJECT</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                    <button>Sign Up</button>
                </nav>
            </div>
        </header>
    )
}
