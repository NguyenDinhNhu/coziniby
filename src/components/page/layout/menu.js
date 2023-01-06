import "../../css/menu.css";
import "../../../App.css"
import React, {Component} from "react"
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
    },
    {
        id: 7,
        img: require("../../Assets/img/menu-item6.png"),
        title: "Lasagne al Forno"
    },
    {
        id: 8,
        img: require("../../Assets/img/menu-item6.png"),
        title: "Lasagne al Forno"
    },
    {
        id: 9,
        img: require("../../Assets/img/menu-item6.png"),
        title: "Lasagne al Forno"
    },
    {
        id: 10,
        img: require("../../Assets/img/menu-item6.png"),
        title: "Lasagne al Forno"
    },
    {
        id: 11,
        img: require("../../Assets/img/menu-item6.png"),
        title: "Lasagne al Forno"
    },
    {
        id: 12,
        img: require("../../Assets/img/menu-item6.png"),
        title: "Lasagne al Forno"
    }
];

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            newsPerPage: 6
        };
    }

    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    
    render() {
    const currentPage = this.state.currentPage;
    const newsPerPage = this.state.newsPerPage;
    const indexOfLastItem = currentPage * newsPerPage;
    const indexOfFirstItem = indexOfLastItem - newsPerPage;
    const currentMenu = listMenu.slice(indexOfFirstItem, indexOfLastItem);
    const renderItem = currentMenu.map((item, index) => {
      return (
        <div className="col-md-6 col-lg-4 col-sm-12" stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} data={item}>
                <div className="menu-item">
                    <a href="#" className="menu-img">
                        <img src={item.img} alt={this.props.stt} />
                    </a>
                    <div className="menu-title">
                        <h3><a href="#">{item.title}</a></h3>
                    </div>
                </div>
            </div>
        );
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(listMenu.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }
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
                                {renderItem}
                            </div>
                            <div className="pagination">
                                <ul id="pagination-menu">
                                    {
                                    pageNumbers.map(number => {
                                        if (this.state.currentPage === number) {
                                        return (
                                            <li key={number} id={number} className="page-active">
                                                {number}
                                            </li>
                                        )
                                        }
                                        else {
                                        return (
                                            <li key={number} id={number} onClick={this.chosePage} >
                                                {number}
                                            </li>
                                        )
                                        }
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}

export default Menu;