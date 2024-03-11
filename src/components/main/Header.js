import {Fragment} from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <header className="main_menu">

    <div className="main_menu_iner">
        <div className="container">
            <div className="row align-items-center ">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                        <Link className="navbar-brand" to={"/"} style={{fontSize: "30px", fontWeight: "bold", color: "#0B0B61"}}>MAPO inside</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item justify-content-center"
                             id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/nature/list"}>자연 속 힐링</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/culture/list"}>역사와 문화</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/hotel/list"}>호텔</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/hotel/find"}>호텔 검색</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to={"/news/list"}>뉴스</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/board/list"}>소통공간</Link>
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="btn_1 d-none d-lg-block">Log in</a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
    )
}
export default Header