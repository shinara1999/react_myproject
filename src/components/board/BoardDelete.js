import {useState, Fragment} from "react";
import axios from "axios";
import {useParams, useNavigate, Link} from "react-router-dom";
import {useRef} from "react";


function BoardDelete(){
    const {no}=useParams()
    const nav=useNavigate()
    const [pwd, setPwd]=useState('')
    const pwdRef=useRef(null)
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const boarddel=()=>{
        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }
        axios.post('http://localhost/board/delete_react',null,{
            params:{
                pwd:pwd,
                no:no
            }
        }).then(response=>{
            if(response.data==='yes')
            {
                window.location.href="/board/list"
            }
            else
            {
                alert("비밀번호를 다시 입력하세요.")
                setPwd('')
                pwdRef.current.focus()
            }
        })
    }
    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>삭제하기</h2>
            </div>
        <div className={"row row1"} style={{"width":"65%","margin":"0px auto"}}>
            <table className={"table"}>
                <tbody>
                    <tr>
                        <td>
                            비밀번호:&nbsp;<input type={"password"} className={"input-sm"} ref={pwdRef} value={pwd} onChange={pwdChange} style={{"borderRadius":"30px"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center"}>
                            <input type={"button"} value={"삭제"} className={"btn-sm btn-danger"} onClick={boarddel} id={"allBtn"}/>
                            <button className={"btn btn-sm btn-danger"} onClick={()=>nav(-1)} id={"allBtn"}>취소</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </Fragment>
    )
}
export default BoardDelete