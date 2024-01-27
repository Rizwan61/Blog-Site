import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import createDOMPurify from 'dompurify'
import { useParams } from 'react-router';

 
function Home(props) {
    const params = useParams()
    const [post, setPost] = useState([])
  

  useEffect(() => {
    axios.get(`http://localhost:4000/user/posts/${ (params.category !== undefined) ? params.category : ''}`).then((res) => {
      
      setPost((res.data.allpost))
      console.log(post)
    })

  }, [params.category])



    const DOMPurify = createDOMPurify(window)
    return (
        <>


            {
                post.map((element, index) => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8" key={index.id}>
                                    <div className="card" >
                                        <img src={`http://localhost:4000/${element.image}`} className="card-img-top cardimg" alt="..." />
                                        <div className="card-body">
                                            
                                            <h1><spna className="fw-bold"></spna> {element.title}</h1>
                                            <h6><spna className="fw-bold">Category:</spna> {element.category}</h6>
                                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(element.detail) }} />
                                            <Link to={`/details/${element._id}`} className="no-underline">
                                                <h5 className="card-title">Read More</h5>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Home