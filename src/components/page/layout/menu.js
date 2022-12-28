import "../../css/menu.css";
import "../../../App.css"

function Menu() {
    return (
        <div>
            <section>
                <div className="banner">
                    <div className="banner-img">
                        <img src={require("../../Assets/img/banner-menu.png")} alt="" className="w-100" />
                    </div>
                    <div className="banner-title">
                        <h1 className="banner-heading">MENU</h1>
                    </div>
                </div>
            </section>

            <section>
                <div className="menu bg-white">  
                    <div className="container">
                        <div className="menu-box">
                            <div className="menu-list row">
                                <div class="col-md-6 col-lg-4 col-sm-12">
                                    <div class="menu-item">
                                        <a href="#" class="menu-img">
                                            <img src={require("../../Assets/img/menu-item.jpg")} alt="" />
                                        </a>
                                        <div class="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-12">
                                    <div class="menu-item">
                                        <a href="#" class="menu-img">
                                            <img src={require("../../Assets/img/menu-item1.png")} alt="" />
                                        </a>
                                        <div class="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-12">
                                    <div class="menu-item">
                                        <a href="#" class="menu-img">
                                            <img src={require("../../Assets/img/menu-item2.png")} alt="" />
                                        </a>
                                        <div class="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-12">
                                    <div class="menu-item">
                                        <a href="#" class="menu-img">
                                            <img src={require("../../Assets/img/menu-item3.png")} alt="" />
                                        </a>
                                        <div class="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-12">
                                    <div class="menu-item">
                                        <a href="#" class="menu-img">
                                            <img src={require("../../Assets/img/menu-item5.png")} alt="" />
                                        </a>
                                        <div class="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-12">
                                    <div class="menu-item">
                                        <a href="#" class="menu-img">
                                            <img src={require("../../Assets/img/menu-item6.png")} alt="" />
                                        </a>
                                        <div class="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination">
                                <ul id="pagination-menu">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Menu;