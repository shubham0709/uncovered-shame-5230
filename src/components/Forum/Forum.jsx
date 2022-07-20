import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./forum.css"

const Forum = () => {


    const [post, setPost] = useState("")

    const handlePost = (e) => {
        setPost(e.target.value)

    }

    const handleSubmit = () => {
        axios.post("http://localhost:8080/posts", {
            "content": post,
            "answers": [
                {
                    "repliedContent": "",
                    "upvotes": 0,
                    "replies": []
                }
            ]
        }
        ).then(()=>getdata())
        setPost("")
    }
    const [data, setData] = useState([])
    const getdata = () => {
        axios.get("http://localhost:8080/posts").then((res) => setData(res.data))
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <div>
                <input type="text" name="" value={post} id="post" onChange={(e) => handlePost(e)} style={{ border: "1px solid" }} />
                <button style={{ border: "1px solid" }} onClick={() => handleSubmit()} >Post</button>
            </div>
            <div>
                {
                    data.map((el,i) => (
                        <div key={i}>
                            <h1>{el.content}</h1>
                            <button>Wishlist</button>
                            <button onClick={(e)=>{
                                    e.target.nextElementSibling.classList.toggle("none")
                                }
                        }>Answer</button>
                            <div style={{color:"red"}} className='none'>
                                hidden div
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Forum