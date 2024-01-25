

import React, { useEffect } from 'react'

import { Link } from "react-router-dom";
import createDOMPurify from 'dompurify'


 
function Home(props) {



    const DOMPurify = createDOMPurify(window)
    return (
        <>


            {
                props.post.map((element, index) => {
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