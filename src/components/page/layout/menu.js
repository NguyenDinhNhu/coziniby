import "../../css/menu.css";
import "../../../App.css"

function Menu() {
    const listMenu = [
        {
            id: 1,
            img: require("../../Assets/img/menu-item1.png"),
            title: "Lasagne al Forno"
        },
        {
            id: 2,
            img: require("../../Assets/img/menu-item2.png"),
            title: "Lasagne al Forno"
        },
        {
            id: 3,
            img: require("../../Assets/img/menu-item3.png"),
            title: "Lasagne al Forno"
        },
        {
            id: 4,
            img: require("../../Assets/img/menu-item.jpg"),
            title: "Lasagne al Forno"
        },
        {
            id: 5,
            img: require("../../Assets/img/menu-item5.png"),
            title: "Lasagne al Forno"
        },
        {
            id: 6,
            img: require("../../Assets/img/menu-item6.png"),
            title: "Lasagne al Forno"
        }
    ];
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
                                {
                                    listMenu.map(item => (
                                        <div className="col-md-6 col-lg-4 col-sm-12" key={item.id}>
                                            <div className="menu-item">
                                                <a href="#" className="menu-img">
                                                    <img src={item.img} alt="" />
                                                </a>
                                                <div className="menu-title">
                                                    <h3><a href="#">{item.title}</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div className="menu-item">
                                        <a href="#" className="menu-img">
                                            <img src={require("../../Assets/img/menu-item.jpg")} alt="" />
                                        </a>
                                        <div className="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div className="menu-item">
                                        <a href="#" className="menu-img">
                                            <img src={require("../../Assets/img/menu-item1.png")} alt="" />
                                        </a>
                                        <div className="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div className="menu-item">
                                        <a href="#" className="menu-img">
                                            <img src={require("../../Assets/img/menu-item2.png")} alt="" />
                                        </a>
                                        <div className="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div className="menu-item">
                                        <a href="#" className="menu-img">
                                            <img src={require("../../Assets/img/menu-item3.png")} alt="" />
                                        </a>
                                        <div className="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div className="menu-item">
                                        <a href="#" className="menu-img">
                                            <img src={require("../../Assets/img/menu-item5.png")} alt="" />
                                        </a>
                                        <div className="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div className="menu-item">
                                        <a href="#" className="menu-img">
                                            <img src={require("../../Assets/img/menu-item6.png")} alt="" />
                                        </a>
                                        <div className="menu-title">
                                            <h3><a href="#">Lasagne al Forno</a></h3>
                                        </div>
                                    </div>
                                </div> */}
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