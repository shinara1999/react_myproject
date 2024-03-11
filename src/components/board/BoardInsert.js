import {Fragment, useRef, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function BoardInsert(){
    const nav=useNavigate()
    const [name, setName]=useState('')
    const [subject, setSubject]=useState('')
    const [content, setContent]=useState('')
    const [pwd, setPwd]=useState('')

    const nameRef=useRef(null)
    const subjectRef=useRef(null)
    const contentRef=useRef(null)
    const pwdRef=useRef(null)
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }

    // 서버에 값을 보내는 상태
    const insert=()=>{
        if(name.trim()==="")
        {
            nameRef.current.focus()
            return
        }
        if(content.trim()==="")
        {
            contentRef.current.focus()
            return
        }
        if(subject.trim()==="")
        {
            subjectRef.current.focus()
            return
        }
        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }
        axios.post('http://localhost/board/insert_react', null, {
            params:{
                name:name,
                subject:subject,
                content:content,
                pwd:pwd
            }
        }).then(response=>{
            if(response.data==="yes")
            {
                window.location.href="/board/list"
            }
            else
            {
                alert("실패!!!!!!!!")
            }
        })
    }

    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>새 글 작성</h2>
            </div>
        <div className={"row"} style={{"width":"65%","margin":"0px auto"}}>

            <table className={"table"}>
                <tbody>
                <tr>
                    <td width={"15%"} className={"text-center"}>이름</td>
                    <td width={"85%"}>
                        <input type={"text"} size={"15"} className={"input-sm"} onChange={nameChange} value={name} ref={nameRef} style={{"borderRadius":"20px"}}/>
                    </td>
                </tr>
                <tr>
                    <td width={"15%"} className={"text-center"}>제목</td>
                    <td width={"85%"}>
                        <input type={"text"} size={"50"} className={"input-sm"} onChange={subjectChange} value={subject} ref={subjectRef} style={{"borderRadius":"20px"}}/>
                    </td>
                </tr>
                <tr>
                    <td width={"15%"} className={"text-center"}>내용</td>
                    <td width={"85%"}>
                        <textarea rows={"10"} cols={"53"} onChange={contentChange} ref={contentRef} style={{"borderRadius":"20px"}}>{content}</textarea>
                    </td>
                </tr>
                <tr>
                    <td width={"15%"} className={"text-center"}>비밀번호</td>
                    <td width={"85%"}>
                        <input type={"password"} size={"15"} className={"input-sm"} onChange={pwdChange} value={pwd} ref={pwdRef} style={{"borderRadius":"20px"}}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={"2"} className={"text-center"}>
                        <input type={"button"} className={"btn btn-sm btn-info"} value={"글쓰기"} onClick={insert} id={"allBtn"}/>&nbsp;
                        <input type={"button"} className={"btn btn-sm btn-warning"} value={"취소"} onClick={()=>nav(-1)} id={"allBtn"}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </Fragment>
    )
}

export default BoardInsert