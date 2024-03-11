import {Fragment} from "react";
import {Link} from "react-router-dom";

function Home(){
    return (
        <Fragment>
        <section className="banner_part">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-10">
                        <div className="banner_text text-center">
                            <div className="banner_text_iner">
                                <h1> MAPO inside</h1>
                                <p>마포구의 다양한 관광지와 소식을 받아보세요.</p>
                                <Link to={"/news/list"} className="btn_1">Discover Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <section className="top_place section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="section_tittle text-center">
                        <h2>자연 속 힐링</h2>
                        <p>도심 속 자연이 어우러진 힐링 공간에서 공원과 강변을 따라 산책하며 <br />휴식을 취해보세요.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="single_place">
                        <img src="../martine/img/skypark.jpg" alt="" style={{"width":"555px","height":"396px"}}/>
                            <div className="hover_Text d-flex align-items-end justify-content-between">
                                <div className="hover_text_iner">
                                    <Link to={"/nature/detail/1"} className="place_btn">상암동</Link>
                                    <h3>하늘공원</h3>
                                    <p>서울특별시 마포구 하늘공원로 95</p>
                                    <div className="place_review">

                                    </div>
                                </div>
                                <div className="details_icon text-right">
                                    <i className="ti-share"></i>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="single_place">
                        <img src="../martine/img/mangwonpark.jpg" alt="" style={{"width":"555px","height":"396px"}}/>
                            <div className="hover_Text d-flex align-items-end justify-content-between">
                                <div className="hover_text_iner">
                                    <Link to={"/nature/detail/10"} className="place_btn">망원2동</Link>
                                    <h3>망원지구 한강시민공원</h3>
                                    <p>서울특별시 마포구 마포나루길 467</p>
                                    <div className="place_review">

                                    </div>
                                </div>
                                <div className="details_icon text-right">
                                    <i className="ti-share"></i>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="single_place">
                        <img src="../martine/img/worldcuppark.jpg" alt="" style={{"width":"555px","height":"396px"}}/>
                            <div className="hover_Text d-flex align-items-end justify-content-between">
                                <div className="hover_text_iner">
                                    <Link to={"/nature/detail/7"} className="place_btn">상암동</Link>
                                    <h3>월드컵공원</h3>
                                    <p>서울특별시 마포구 월드컵로 243-60</p>
                                    <div className="place_review">

                                    </div>
                                </div>
                                <div className="details_icon text-right">
                                    <i className="ti-share"></i>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="single_place">
                        <img src="../martine/img/noeulpark.jpg" alt="" style={{"width":"555px","height":"396px"}}/>
                            <div className="hover_Text d-flex align-items-end justify-content-between">
                                <div className="hover_text_iner">
                                    <Link to={"/nature/detail/4"} className="place_btn">상암동</Link>
                                    <h3>노을공원</h3>
                                    <p>서울특별시 마포구 하늘공원로 108-1</p>
                                    <div className="place_review">
                                        
                                    </div>
                                </div>
                                <div className="details_icon text-right">
                                    <i className="ti-share"></i>
                                </div>
                            </div>
                    </div>
                </div>
                <Link to={"/nature/list"} className="btn_1 text-cnter">전체 보기</Link>
            </div>
        </div>
    </section>


    <section className="hotel_list section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="section_tittle text-center">
                        <h2>호텔 & 숙박</h2>
                        <p>마포구에 위치한 호텔은 현대적인 시설과 편안한 휴식을 제공하여 <br />여행객들에게 완벽한 숙박 경험을 선사합니다.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_ihotel_list">
                        <img src="../martine/img/L7.jpg" alt="" style={{"width":"360px","height":"260px"}}/>
                            <div className="hover_text">
                                <div className="hotel_social_icon">
                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <div className="share_icon">
                                    <i className="ti-share"></i>
                                </div>
                            </div>
                        <div className="hotel_text_iner">
                            <h3><Link to={"/hotel/detail/9"} className="place_btn">L7호텔 동교동</Link></h3>

                            <p>서울특별시 마포구 양화로 141</p>
                            <h5>Tel.&nbsp;<span>02-2289-1000</span></h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_ihotel_list">
                        <img src="../martine/img/glad.jpg" alt="" style={{"width":"360px","height":"260px"}}/>
                            <div className="hover_text">
                                <div className="hotel_social_icon">
                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <div className="share_icon">
                                    <i className="ti-share"></i>
                                </div>
                            </div>
                        <div className="hotel_text_iner">
                            <h3><Link to={"/hotel/detail/10"} className="place_btn">글래드 호텔 마포</Link></h3>

                            <p>서울특별시 마포구 마포대로 92</p>
                            <h5>Tel.&nbsp;<span>02-2197-5000</span></h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_ihotel_list">
                        <img src="../martine/img/mucure.jpg" alt="" style={{"width":"360px","height":"260px"}}/>
                            <div className="hover_text">
                                <div className="hover_text">
                                    <div className="hotel_social_icon">
                                        <ul>
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="share_icon">
                                        <i className="ti-share"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="hotel_text_iner">
                                <h3><Link to={"/hotel/detail/1"} className="place_btn">머큐어 앰배서더 서울 홍대</Link></h3>

                                <p>서울특별시 마포구 양화로 144</p>
                                <h5>Tel.&nbsp;<span>02-3774-1101</span></h5>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </Fragment>


    )
}
export default Home