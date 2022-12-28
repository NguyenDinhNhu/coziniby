import '../../css/header.css';
import '../../../App.css';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="header">
                <div className="header-logo">   
                    <img src={require("../../Assets/img/logo.png")} alt="" />
                </div>
                <div className="header-nav">
                    <div className="nav-top">
                        <div className="search-box">
                            <input type="text" className="search" placeholder="Search" />
                            <button className="search-btn"></button>
                        </div>
                        <div className="language">
                            <select name="language" id="lang-list">
                                <option value="VN">Việt Nam</option>
                                <option value="US">English</option>
                            </select>
                        </div>
                        <div className="btn-book">
                            <a href="#">BOOK A ROOM</a>
                        </div>
                    </div>
                    <div className="nav-bottom">
                        <ul className="nav-menu d-flex flex-wrap justify-content-end">
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><a href="#">ABOUT US</a></li>
                            <li><a href="#">ACCOMMODATION</a></li>
                            <li><Link to={"/menu"}>MENU</Link></li>
                            <li><a href="#">TOUR TRAVEL</a></li>
                            <li><a href="#">SERVICE</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><Link to={"/gallery"}>GALLERY</Link></li>
                            <li><Link to={'/contact'}>CONTACT</Link></li>
                        </ul>
                    </div>
                    <button className="nav-btn"><i className="fa-solid fa-bars"></i></button>
                    <div className="nav-sm">
                        <ul className="nav-menu">
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><a href="#">ABOUT US</a></li>
                            <li><a href="#">ACCOMMODATION</a></li>
                            <li><Link to={"/menu"}>MENU</Link></li>
                            <li><a href="#">TOUR TRAVEL</a></li>
                            <li><a href="#">SERVICE</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><Link to={"/gallery"}>GALLERY</Link></li>
                            <li><Link to={'/contact'}>CONTACT</Link></li>
                        </ul>
                        <div className="form-lang">
                            <label for="language">Language</label><br/>
                            <select name="language" className="lang-res">
                                <option value="VN">Việt Nam</option>
                                <option value="US">English</option>
                            </select>
                        </div>
                    </div>
                </div>  
            </div>
            <button className="book-res"><a href="#"><i className="fa-solid fa-credit-card"></i></a></button>

        </div>
    )
}

export default Header;