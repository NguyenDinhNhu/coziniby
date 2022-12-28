import "../../css/footer.css";
import "../../../App.css"
import {Link} from "react-router-dom";
function Footer() {
    return(
        <div>
            <div className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="footer-item">
                                    <div className="footer-title">Contact Us</div>
                                    <div className="address">
                                        <p>58, To Huu, Thanh Xuan, Hanoi</p>
                                    </div>
                                    <div className="phone">
                                        <p>
                                            <a href="tel:02437835639">(024).3783.5639</a>
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>info@adcvietnam.net</p>
                                    </div>
                                    <div className="web">
                                        <p>
                                            <a href="#">www.adcvietnam.net</a>
                                        </p> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="footer-item">
                                    <div className="footer-title">Accommodation</div>
                                    <div className="footer-list">
                                        <ul>
                                            <li><a href="#">Double room</a></li>
                                            <li><a href="#">Tripple room</a></li>
                                            <li><a href="#">Dorm room</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="footer-item">
                                    <div className="footer-title">Contact Us</div>
                                    <div className="footer-list">
                                        <ul>
                                            <li><a href="#">Massage & Sauna</a></li>
                                            <li><a href="#">Charles Bar</a></li>
                                            <li><a href="#">Wedding</a></li>
                                            <li><a href="#">Meetings & Events</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="footer-item">
                                    <div className="footer-title">Newsletter</div>
                                    <form action="" className="form-letter">
                                        <div className="d-flex">
                                            <input type="text" placeholder="Enter your email" />
                                            <button></button>
                                        </div>
                                    </form>
                                    <div className="footer-social">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom row">
                        <div className="col-md-6 col-lg-8 col-sm-12">
                            <div className="footer-left">
                                <ul className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Food Restaurant</a></li>
                                    <li><a href="#">Tour Travel</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><Link to={"/gallery"}>Gallery</Link></li>
                                    <li><Link to={'/contact'}>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12">
                            <div className="footer-right">
                                <p>Copyright © COZYNIBI HITEL. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;