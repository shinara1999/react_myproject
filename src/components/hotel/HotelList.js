import {Fragment, useState, useEffect} from "react";
import axios from "axios";
/* global kakao */

function HotelList(){
    const [startPage, setStartPage] = useState(0);
    const [endPage, setEndPage] = useState(0);
    const [totalpage, setTotalpage] = useState(0);
    const [curpage, setCurpage] = useState(1);
    const [hotelList, setHotelList] = useState([]);
    const [hotelDetail, setHotelDetail]=useState({})
    const [open, setOpen]=useState(false)

    useEffect(() => {
        axios.get('http://localhost/hotel/list_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
            setCurpage(response.data.curpage)
            setHotelList(response.data.list)
        })
    }, [curpage]);

    useEffect(()=>{
        const script=document.createElement("script")
        // <script></script>
        // 비동기화 방식
        script.async=true
        script.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4d9d9ca62321ffd7cb4e3c7f71e6a9dc&autoload=false&libraries=services"
        document.head.appendChild(script)
        /*
            <head>
                <script src=""></script>
            </head>
         */
        script.onload=()=>{
            kakao.maps.load(()=>{
                var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                    mapOption = {
                        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                        level: 3 // 지도의 확대 레벨
                    };

                // 지도를 생성합니다
                var map = new kakao.maps.Map(mapContainer, mapOption);

                // 주소-좌표 변환 객체를 생성합니다
                var geocoder = new kakao.maps.services.Geocoder();

                // 주소로 좌표를 검색합니다
                geocoder.addressSearch(hotelDetail.address, function(result, status) {

                    // 정상적으로 검색이 완료됐으면
                    if (status === kakao.maps.services.Status.OK) {

                        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                        // 결과값으로 받은 위치를 마커로 표시합니다
                        var marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                        });

                        // 인포윈도우로 장소에 대한 설명을 표시합니다
                        var infowindow = new kakao.maps.InfoWindow({
                            content: '<div style="width:150px;text-align:center;padding:6px 0;">'+hotelDetail.name+'</div>'
                        });
                        infowindow.open(map, marker);

                        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                        map.setCenter(coords);
                    }
                });
            })
        }
    },[hotelDetail])

    const onHotelDetail=(vo)=>{
        setOpen(true)
        setHotelDetail(vo)
    }
    // 페이지
    const pageChange=(page)=>{
        setCurpage(page)
    }
    const prevHandler=()=>{
        setCurpage(startPage-1)
    }
    const nextHandler=()=>{
        setCurpage(endPage+1)
    }
    let html=hotelList.map((vo) =>
        <div className="col-md-6" style={{"width": "300px"}}>
            <div className="single_place" style={{"paddingBottom": "10%", "width": "300px"}}>

                    <img src={vo.poster} style={{"width": "300px", "height": "200px", "borderRadius": "25px"}} onClick={()=>onHotelDetail(vo)}/>
                    <p style={{
                        "fontSize": "13px",
                        "color": "#fe5c24",
                        "paddingTop": "0.5%"
                    }}>#&nbsp;{vo.tag}&nbsp;&nbsp;#&nbsp;호텔&nbsp;&nbsp;#&nbsp;숙박</p>
                    <p style={{
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "color": "#0c3e72",
                        "padding": "0.5%"
                    }}>{vo.name}</p>

            </div>
        </div>
    )

    let row = []
    if (startPage > 1) {
        row.push(<li><a href={"#"} onClick={prevHandler}>&laquo;</a></li>)
    }
    for (let i = startPage; i <= endPage; i++) {
        if (curpage === i) {
            row.push(<li className={"active"}><a href={"#"} onClick={() => pageChange(i)}>{i}</a></li>)
        } else {
            row.push(<li><a href={"#"} onClick={() => pageChange(i)}>{i}</a></li>)
        }
    }
    if (endPage < totalpage) {
        row.push(<li><a href={"#"} onClick={nextHandler}>&raquo;</a></li>)
    }

    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>호텔 & 숙박</h2>
            </div>
            <div className={"row justify-content-center"} style={{"marginLeft": "11%"}}>
                <div className={"col-sm-6"} style={{"paddingLeft": "10%"}}>
                    {html}

                </div>

                <div className={"col-sm-6"} style={{"paddingRight": "15%"}}>
                    {open ? <Detail vo={hotelDetail}/> : null}
                    <div style={{"height": "10px"}}></div>
                    <div id="map" style={{"width": "100%", "height": "350px"}}></div>
                </div>
            </div>
            <div style={{"height": "20px"}}></div>
            <div className={"row justify-content-center"} style={{"paddingBottom": "3%"}}>
                <ul className={"pagination"}>
                    {row.map((item, index) => (
                        <li key={index} className={"mr-2 font-weight-bold"}
                            style={{"fontSize": '1.1em'}}>{item}</li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

function Detail(props) {
    return (
        <table className={"table"} style={{"paddingRight": "5%"}}>
            <tbody>
            <tr>
                <td colSpan={"2"} className={"text-center"}>
                    <img src={props.vo.poster} style={{"width": "279px", "height": "165px"}}/>
                </td>
            </tr>
            <tr>
                <td width={"1%"} className={"text-center"}></td>
                <td width={"99%"}><h3>{props.vo.name}</h3></td>
            </tr>
            <tr>
                <td width={"25%"} className={"text-center"}>소재지</td>
                <td width={"75%"}>{props.vo.address}</td>
            </tr>
            <tr>
                <td width={"25%"} className={"text-center"}>문의처</td>
                <td width={"75%"}>{props.vo.phone}</td>
            </tr>
            <tr>
                <td width={"25%"} className={"text-center"}>홈페이지</td>
                <td width={"75%"}>{props.vo.homepage}</td>
            </tr>
            </tbody>
        </table>
    )
}

export default HotelList