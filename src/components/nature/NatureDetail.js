import {Fragment, useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

function NatureDetail(){
    const [natureVO, setNatureVO]=useState({})
    const {nno}=useParams()
    const nav=useNavigate()

    useEffect(()=>{
        axios.get('http://localhost/nature/detail_react',{
            params:{
                nno:nno
            }
        }).then(response=>{
            console.log(response.data)
            setNatureVO(response.data)
        })
    },[]);
    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>자연 속 힐링</h2>
            </div>
            <hr style={{"width": "65%"}}/>
            <div className={"row justify-content-center"} style={{"paddingBottom": "3%"}}>
                <table className={"table"} style={{"borderCollapse": "collapse", "border": "none", "width": "70%"}}>
                    <tbody>
                    <tr>
                        <td width={"40%"} className={"text-center"} rowSpan={"7"} style={{"borderTop": "none"}}>
                            <img src={natureVO.poster}
                                 style={{"width": "500px", "height": "300px", "borderRadius": "25px"}}/>
                        </td>
                        <td colSpan={"2"} style={{"borderTop": "none"}}>
                            <h5><span style={{"color":"#fe5c24"}}>#&nbsp;{natureVO.tag}&nbsp;&nbsp;# 자연 속 힐링</span></h5>
                        </td>
                    </tr>
                    <tr>
                        <h3 style={{
                            "fontSize": "27px",
                            "fontWeight": "bold",
                            "color": "#0c3e72",
                            "padding": "0.5%",
                            "width": "200px"
                        }}>{natureVO.name}</h3>
                    </tr>
                    <tr>
                        <th width={"15%"} style={{"borderTop": "none"}}>소재지</th>
                        <td width={"55%"} style={{"borderTop": "none"}}>{natureVO.address}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} style={{"borderTop": "none"}}>문의처</th>
                        <td width={"55%"} style={{"borderTop": "none"}}>{natureVO.phone}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} style={{"borderTop": "none"}}>홈페이지</th>
                        <td width={"55%"} style={{"borderTop": "none"}}>{natureVO.homepage}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} style={{"borderTop": "none"}}>소개</th>
                        <td width={"55%"} style={{"borderTop": "none"}}>{natureVO.content}</td>
                    </tr>
                    </tbody>
                </table>
                <hr style={{"width": "65%"}}/>
            </div>
            <div className={"row justify-content-center"} style={{"paddingBottom": "5%"}}>
                <button className={"btn btn-sm btn-primary"} id={"allBtn"}
                        onClick={() => nav(-1)}>&nbsp;목 록&nbsp;
                </button>
            </div>
        </Fragment>
    )
}

export default NatureDetail