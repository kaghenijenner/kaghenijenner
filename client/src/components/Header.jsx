import '../styles/header.scss';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import X from '../assets/twitter.png';
import Instagram from '../assets/instagram.png';
import Maxim from '../assets/jennermaxim.png';
import Whatsapp from '../assets/whatsapp.png'
import Telegram from '../assets/telegram.png';

const Header = () => {
    return (
        <>
            <div className="header-page">
                <div className="pre-header-position">
                    <div className="pre-header">
                        <div className="contact">
                            <a href="mailto:jennermaximbusiness@gmail.com">jennermaximbusiness@gmail.com</a>
                            <a href="tel:+256740639860">+256740639860</a>
                        </div>
                        <div className="social-media">
                            <a href="http://github.com/jennermaxim" target="_blank" rel="noopener noreferrer">
                                <img src={GitHub} alt="GitHub" srcset="" />
                            </a>
                            <a href="https://www.linkedin.com/in/jenner-maxim-b11051251" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedIn} alt="LinkedIn" srcset="" />
                            </a>
                            <a href="https://x.com/maximjenner" target="_blank" rel="noopener noreferrer">
                                <img src={X} alt="X" srcset="" />
                            </a>
                            <a href="https://www.instagram.com/jennermaxim" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} alt="Instagram" srcset="" />
                            </a>
                            <a href="https://wa.me/+256740639860" target="_blank" rel="noopener noreferrer">
                                <img src={Whatsapp} alt="Whatsapp" srcset="" />
                            </a>
                            <a href="https://t.me/jennermaxim" target="_blank" rel="noopener noreferrer">
                                <img src={Telegram} alt="Whatsapp" srcset="" />
                            </a>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="header">
                    <div className="logo">
                        <img src={Maxim} alt="Jenner Maxim" />
                        <a href="#">
                            <h1>Jenner Maxim</h1>
                        </a>
                    </div>
                    <div className="search">
                        <input type="search" name="" id="" />
                    </div>
                    <div className="right-nav">
                        <a href="#">About Me</a>
                        <a href="#">My Projects</a>
                        <a href="#">Contact Me</a>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Header;