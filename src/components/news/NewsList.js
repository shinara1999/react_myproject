import {Fragment, useState, useEffect, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

function NewsList(){
    const nav=useNavigate()
    const [fd, setFd]=useState('마포')
    const [newsList, setNewsList]=useState([])
    const fdRef=useRef(null)
    useEffect(() => {

    }, []);
    const fdChange=(e)=>{
        setFd(e.target.value)
    }
    const newsFind=()=>{
        if(fd.trim()==="")
        {
            fdRef.current.focus()
            return
        }
        axios.get('http://localhost/news/list_react',{
            params:{
                fd:fd
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data.items)
        })
    }
    let html=newsList.map((news)=>
        <table className={"table"}>
            <tbody>
            <tr>
                <td><a href={news.link}><h3 style={{"color":"#0c3e72"}} dangerouslySetInnerHTML={{__html: news.title}}></h3></a></td>
            </tr>
            <tr>
                <td dangerouslySetInnerHTML={{__html: news.description}}></td>
            </tr>
            </tbody>
        </table>
    )
    return (
        <Fragment>
            <div className={"row justify-content-center"} style={{"padding": "2%"}}>
                <h2>뉴스 검색</h2>
            </div>
            <div className={"row justify-content-center"}>
                <table className={"table text-center"} style={{"border":"none"}}>
                    <tbody>
                    <tr>
                        <td style={{"border":"none"}}>
                            <input type={"text"} size={"20"} className={"input-sm"} ref={fdRef} value={fd} onChange={fdChange} style={{"borderRadius":"25px"}}/>&nbsp;
                            <input type={"button"} value={" 검 색 "} className={"btn btn-sm btn-primary"} onClick={newsFind} id={"allBtn"}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"row justify-content-center"} style={{"width":"70%", "margin":"0px auto"}}>
                <table className={"table"} width={"70%"}>
                    <tbody>
                    <tr>
                        <td style={{"border":"none"}}>{html}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default NewsList