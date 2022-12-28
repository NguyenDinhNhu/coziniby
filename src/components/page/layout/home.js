import '../../css/home.css';
import '../../../App.css';
import BannerSlider from './slider/bannerSlider';
import FoodSlider from './slider/foodSlider';
import OtherSlider from './slider/otherSlider';

function Home() {
    return (
        <div className="home">
            <section>
                <div className="banner">
                    <div className="banner-slider">
                        <BannerSlider />
                    </div>
                </div>
            </section>

            <section>
                <div className="introduce bg-sena">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="intro-content">
                                    <h2 className="intro-title">Welcome to <br/>
                                        <b className="text-uppercase">cozynibi hotel</b>
                                    </h2>
                                    <p className="intro-text">
                                        Thing lesser replenish evening called void a sea blessed meat fourth called moveth place 
                                        behold night own night third in they’re abundant and don’t you’re the upon fruit. 
                                        Divided open divided appear also saw may fill. 
                                        whales seed creepeth. Open lessegether he also morning land i saw.          
                                    </p>
                                    <a href="#" className="read-more text-uppercase">Read more</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-9">
                                <div className="list-intro row">
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="intro-item"> 
                                            <img src={require("../../Assets/img/intro-1.jpg")} alt="" className="intro-image" />  
                                            <div className="intro-item-title text-uppercase">
                                                <h3>
                                                    <a href="#">Double room</a> 
                                                </h3>
                                            </div>
                                            <a href="#" className="intro-bgImage" >
                                                <img src={require("../../Assets/icon/inrtro-k.png")} alt="#" className="w-100" />
                                            </a>
                                        </div> 
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="intro-item"> 
                                            <img src={require("../../Assets/img/intro-2.jpg")} alt="" className="intro-image" />  
                                            <div className="intro-item-title text-uppercase">
                                                <h3>
                                                    <a href="#">Double room</a> 
                                                </h3>
                                            </div>
                                            <a href="#" className="intro-bgImage" >
                                                <img src={require("../../Assets/icon/inrtro-k.png")} alt="#" className="w-100" />
                                            </a>
                                        </div> 
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="intro-item"> 
                                            <img src={require("../../Assets/img/intro-3.jpg")} alt="" className="intro-image" />  
                                            <div className="intro-item-title text-uppercase">
                                                <h3>
                                                    <a href="#">Double room</a> 
                                                </h3>
                                            </div>
                                            <a href="#" className="intro-bgImage" >
                                                <img src={require("../../Assets/icon/inrtro-k.png")} alt="#" className="w-100" />
                                            </a>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="travel">
                    <div className="container">
                        <h2 className="title-heading">Tour travel</h2>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <div className="travel-item d-flex">
                                    <a href="#" className="travel-img">
                                        <img src={require("../../Assets/img/travel-1.jpg")} alt="" />
                                    </a>
                                    <div className="travel-content">
                                        <h3>
                                            <a href="#">Bich Dong Pahoga Mua Cave - Phat Diem Cathedral</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <div className="travel-item d-flex">
                                    <a href="#" className="travel-img">
                                        <img src={require("../../Assets/img/travel-2.jpg")} alt="" />
                                    </a>
                                    <div className="travel-content">
                                        <h3>
                                            <a href="#">Bich Dong Pahoga Mua Cave - Phat Diem Cathedral</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <div className="travel-item d-flex">
                                    <a href="#" className="travel-img">
                                        <img src={require("../../Assets/img/travel-3.jpg")} alt="" />
                                    </a>
                                    <div className="travel-content">
                                        <h3>
                                            <a href="#">Bich Dong Pahoga Mua Cave - Phat Diem Cathedral</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <div className="travel-item d-flex">
                                    <a href="#" className="travel-img">
                                        <img src={require("../../Assets/img/travel-4.jpg")} alt="" />
                                    </a>
                                    <div className="travel-content">
                                        <h3>
                                            <a href="#">Bich Dong Pahoga Mua Cave - Phat Diem Cathedral</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <div className="travel-item d-flex">
                                    <a href="#" className="travel-img">
                                        <img src={require("../../Assets/img/travel-5.jpg")} alt="" />
                                    </a>
                                    <div className="travel-content">
                                        <h3>
                                            <a href="#">Bich Dong Pahoga Mua Cave - Phat Diem Cathedral</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <div className="travel-item d-flex">
                                    <a href="#" className="travel-img">
                                        <img src={require("../../Assets/img/travel-6.jpg")} alt="" />
                                    </a>
                                    <div className="travel-content">
                                        <h3>
                                            <a href="#">Bich Dong Pahoga Mua Cave - Phat Diem Cathedral</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="frs-service bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <div className="food">
                                    <h2 className="frs-title">food restaurant</h2>
                                    <div className="food-res">
                                        <div className="food-border">
                                            <span></span>
                                        </div>
                                        <div className="food-slide">
                                            <div className="foodSlide-wrapper">
                                                <FoodSlider />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <div className="services">
                                    <h2 className="frs-title">services</h2>
                                    <div className="service-content row">
                                        <div className="service-item col-md-12 col-lg-6 col-sm-12">
                                            <a href="#" className="service-icon">
                                                <img src={require("../../Assets/icon/ser-1.png")} alt="" />
                                            </a>
                                            <div className="service-title">
                                                <h3>
                                                    <a href="#">Massage & Sauna</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="service-item col-md-12 col-lg-6 col-sm-12">
                                            <a href="#" className="service-icon">
                                                <img src={require("../../Assets/icon/ser-2.png")} alt="" /> 
                                            </a>
                                            <div className="service-title">
                                                <h3>
                                                    <a href="#">Charles bar</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="service-item col-md-12 col-lg-6 col-sm-12">
                                            <a href="#" className="service-icon">
                                                <img src={require("../../Assets/icon/ser-3.png" )}alt="" />
                                            </a>
                                            <div className="service-title">
                                                <h3>
                                                    <a href="#">Wedding</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="service-item col-md-12 col-lg-6 col-sm-12">
                                            <a href="#" className="service-icon">
                                                <img src={require("../../Assets/icon/ser-4.png")} alt="" />
                                            </a>
                                            <div className="service-title">
                                                <h3>
                                                    <a href="#">Meetings & events</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="news">
                    <div className="container">
                            <h2 className="title-heading">News highlights</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <div className="news-item">
                                    <a href="#" className="news-img">
                                        <img src={require("../../Assets/img/news-1.jpg")} alt="" className="w-100" />
                                    </a>
                                </div>
                                <h3>
                                    <a href="#">World Tourism Day 2019: Tourism and Jobs - A better Future for All</a>
                                </h3>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <div className="news-item">
                                    <a href="#" className="news-img">
                                        <img src={require("../../Assets/img/news-2.jpg")} alt="" className="w-100" />
                                    </a>
                                </div>
                                <h3>
                                    <a href="#">Vietnam featured in Louis Vuitton advertisement</a>
                                </h3>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <div className="news-item">
                                    <a href="#" className="news-img">
                                        <img src={require("../../Assets/img/news-3.jpg")} alt="" className="w-100" />
                                    </a>
                                </div>
                                <h3>
                                    <a href="#">Foodwise: Cuon dap Da Nang and its Ha Noi brother are must-try dishes</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="other bg-white">
                    <div className="container">
                        <div className="other-slider">
                            <OtherSlider />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;