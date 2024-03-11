import {Fragment, useState, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import axios from "axios";

function HotelFind(){
    const [startPage, setStartPage]=useState(0);
    const [endPage, setEndPage]=useState(0);
    const [totalpage, setTotalpage]=useState(0);
    const [curpage, setCurpage]=useState(1);
    const [hotelList, setHotelList]=useState([]);
    const [address, setAddress]=useState('양화로');

    useEffect(()=>{
        axios.post('http://localhost/hotel/find_react', null, {
            params:{
                page:curpage,
                address:address
            }
        }).then(response=>{
            setHotelList(response.data.list)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
            setCurpage(response.data.curpage)
        })
    }, [address, curpage])

    let html=hotelList.map((vo) =>
        <div className="col-md-4" style={{"width": "300px"}}>
            <div className="single_place" style={{"paddingBottom": "10%", "width": "300px"}}>
                <Link to={"/hotel/detail/" + vo.hno}>
                <img src={vo.poster} style={{"width": "300px", "height": "200px", "borderRadius": "25px"}}
                     />
                </Link>
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
    const findHandler=()=>{
        setCurpage(1)
    }
    const changeHandler=(e)=>{
        setCurpage(1)
        setAddress(e.target.value)
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
    let row=[]
    if(startPage>1)
    {
        row.push(<li><a href={"#"} onClick={prevHandler}>&laquo;</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(curpage===i)
        {
            row.push(<li className={"active"}><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
        else
        {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li><a href={"#"} onClick={nextHandler}>&raquo;</a></li>)
    }

    return (
        <Fragment>

            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>호텔 검색 결과</h2>
            </div>
            <div className={"row justify-content-center"} style={{"paddingBottom":"2%"}}>
                <input type={"text"} size={"20"} className={"input-sm"} placeholder={"도로명주소 입력"}
                       value={address}
                       onChange={changeHandler} style={{"borderRadius": "25px"}}
                />
                <input type={"button"} className={"btn btn-sm btn-success"} value={" 검 색 "}
                       onClick={findHandler} id={"allBtn"}
                />
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"row justify-content-center"} style={{"marginLeft": "11%"}}>
                {html}
            </div>
            <div className={"row justify-content-center"} style={{"paddingBottom":"3%"}}>
                <div className={"text-center"}>
                    <ul className={"pagination"} >
                        {row.map((item, index) => (
                            <li key={index} className={"mr-2 font-weight-bold"} style={{"fontSize": '1.1em'}}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default HotelFind