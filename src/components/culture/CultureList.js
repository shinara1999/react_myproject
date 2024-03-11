import {Fragment, useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function CultureList(){
    const [startPage, setStartPage]=useState(0);
    const [endPage, setEndPage]=useState(0);
    const [totalpage, setTotalpage]=useState(0);
    const [curpage, setCurpage]=useState(1);
    const [cultureList, setCulturelist]=useState([])
    useEffect(() => {
        axios.get('http://localhost/culture/list_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
            setCurpage(response.data.curpage)
            setCulturelist(response.data.list)
        })
    }, [curpage]);

    // 자연관광 1개에 대한 정보
    let html=cultureList.map((vo)=>


        <div className="col-md-4" style={{"width":"300px"}}>
            <div className="single_place" style={{"paddingBottom":"10%","width":"300px"}}>
                <Link to={"/culture/detail/" + vo.cno}>
                    <img src={vo.poster} style={{"width": "300px", "height": "200px", "borderRadius":"25px"}}/>
                    <p style={{"fontSize":"13px","color":"#fe5c24","paddingTop":"0.5%"}}>#&nbsp;{vo.tag}&nbsp;&nbsp;#&nbsp;역사와 문화</p>
                    <p style={{"fontSize":"20px","fontWeight":"bold","color":"#0c3e72","padding":"0.5%"}}>{vo.name}</p>
                </Link>
            </div>
        </div>


    )
    // 이벤트 (이전/다음 버튼 클릭)
    const prevHandler=()=>{
        setCurpage(curpage>1?curpage-1:curpage)
    }
    const nextHandler=()=>{
        setCurpage(curpage<totalpage?curpage+1:curpage)
    }
    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>역사와 문화</h2>
            </div>
            <div className={"row justify-content-center"} style={{"marginLeft":"11%"}}>
                {html}
            </div>
            <div className={"row justify-content-center"} style={{"padding": "3%"}}>
                <div className={"text-center"} style={{"width":"900px"}}>
                    <input type={"button"} value={" 이 전 "} className={"btn-sm btn-danger"} onClick={prevHandler} id={"allBtn"}/>
                    &nbsp;{curpage} page / {totalpage} pages&nbsp;
                    <input type={"button"} value={" 다 음 "} className={"btn-sm btn-danger"} onClick={nextHandler} id={"allBtn"}/>
                </div>
            </div>
        </Fragment>
    )
}
export default CultureList