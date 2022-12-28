import "../../css/gallery.css";
import "../../../App.css"
 
function Gallery() {
    return(
        <div>
            <section>
                <div className="banner">
                    <div className="banner-img">
                        <img src={require("../../Assets/img/banner-gallery.png")} alt="" className="w-100" />
                    </div>
                    <div className="banner-title">
                        <h1 className="banner-heading">Gallery</h1>
                    </div>
                </div>
            </section>

            <section>
                <div className="gallery bg-white">
                    <div className="container">
                        <div className="gallery-box">
                            <div className="gallery-list row">
                                <div class="col-md-4 col-lg-3 col-sm-6">
                                    <div class="gallery-item">
                                        <a href="#" class="gallery-img">
                                            <img src={require("../../Assets/img/gallery-item.jpg")} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-3 col-sm-6">
                                    <div class="gallery-item">
                                        <a href="#" class="gallery-img">
                                            <img src={require("../../Assets/img/gallery-item2.png")} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-3 col-sm-6">
                                    <div class="gallery-item">
                                        <a href="#" class="gallery-img">
                                            <img src={require("../../Assets/img/gallery-item3.png")} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-3 col-sm-6">
                                    <div class="gallery-item">
                                        <a href="#" class="gallery-img">
                                            <img src={require("../../Assets/img/gallery-item4.png")} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-3 col-sm-6">
                                    <div class="gallery-item">
                                        <a href="#" class="gallery-img">
                                            <img src={require("../../Assets/img/gallery-item5.png")} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-3 col-sm-6">
                                    <div class="gallery-item">
                                        <a href="#" class="gallery-img">
                                            <img src={require("../../Assets/img/gallery-item6.png")} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-3 col-sm-6">
                                    <div class="gallery-item">
                                        <a href="#" class="gallery-img">
                                            <img src={require("../../Assets/img/gallery-item7.png")} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-3 col-sm-6">
                                    <div class="gallery-item">
                                        <a href="#" class="gallery-img">
                                            <img src={require("../../Assets/img/gallery-item8.png")} alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination">
                                <ul id="pagination-gallery"></ul>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </div>
    )
}

export default Gallery;