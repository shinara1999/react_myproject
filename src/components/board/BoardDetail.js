import {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

/*
        Fragment : 임시 루트를 만들 때
        <>
        </>
        useState : 변수 => state(계속 변셩되는 데이터가 있는 경우 설정)
        props : 고정된 데이터 => 태그의 속성값을 전송
        => 함수 매개변수로 받는다
        useEffect : mounted (window.onload)
        ,[])
        ,[변수명]) => 변수가 변경시마다 호출
        useParams : URL을 이용해서 데이터 전송 => getParameter()
        useRef : 태그를 제어
        useNavigate : 브라우저 이동 제어 (-1) : 이전페이지 (--1) : 이전이전페이지
        useMemo / useContext / useReducer ==> Redux에서 사용 (Front의 MVC)
        사용자 정의 Hooks
        금융권 / 증권 / next.js
 */
function BoardDetail(){
    const {no}=useParams()
    const [detail, setDetail]=useState({})
        /*
                => List => [{}, {}, {}...] useState([])
                => VO => {} useState({})
                => 정수 => useState(0)
                => useState(true)
                => 문자열 useState('')
         */
    useEffect(() => {
        axios.get('http://localhost/board/detail_react', {
            params:{
                no:no
            }
        }).then(response=>{
            setDetail(response.data)
        })
    }, []); // []
    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>내용 보기</h2>
            </div>
        <div className={"row"} style={{"width":"65%","margin":"0px auto"}}>

            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center success"} width={"20%"}>번호</td>
                    <td className={"text-center"} width={"30%"}>{detail.no}</td>
                    <td className={"text-center success"} width={"20%"}>작성일</td>
                    <td className={"text-center"} width={"30%"}>{detail.regdate}</td>
                </tr>
                <tr>
                    <td className={"text-center success"} width={"20%"}>이름</td>
                    <td className={"text-center"} width={"30%"}>{detail.name}</td>
                    <td className={"text-center success"} width={"20%"}>조회수</td>
                    <td className={"text-center"} width={"30%"}>{detail.hit}</td>
                </tr>
                <tr>
                    <td className={"text-center success"} width={"20%"}>제목</td>
                    <td colSpan={"3"}>{detail.subject}</td>
                </tr>
                <tr>
                    <td className={"text-left"} height={"200"} colSpan={"4"} valign={"top"}>
                        <pre style={{"whiteSpace":"pre-wrap", "backgroundColor":"white", "border":"none"}}>{detail.content}</pre>
                    </td>
                </tr>
                <tr>
                    <td className={"text-right"} colSpan={"4"}>
                        <Link to={"/board/update/"+no} className={"btn-info btn-sm"} id={"allBtn"}>수정</Link>&nbsp;
                        <Link to={"/board/delete/"+no} className={"btn-info btn-sm"} id={"allBtn"}>삭제</Link>&nbsp;
                        <Link to={"/board/list"} className={"btn-info btn-sm"} id={"allBtn"}>목록</Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </Fragment>
    )
}

export default BoardDetail