import {Fragment} from "react";

function Footer(){
    return (
        <Fragment>
        <footer className="footer-area">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-sm-6 col-md-5">
                        <div className="single-footer-widget">
                            <h4>Copyright &copy; 2024 ARA SHIN <br/>All Rights Reserved.</h4>

                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="single-footer-widget footer_icon">
                            <h4>Contact Me</h4>
                            <p>ARA SHIN</p>
                            <span>sar1999@naver.com</span>
                            <div className="social-icons">
                                <a href="#"><i className="ti-facebook"></i></a>
                                <a href="#"><i className="ti-twitter-alt"></i></a>
                                <a href="#"><i className="ti-pinterest"></i></a>
                                <a href="#"><i className="ti-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="copyright_part_text text-center">
                            <p className="footer-text m-0">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </Fragment>
    )
}
export default Footer