import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import createDOMPurify from 'dompurify'



function Details(props) {

    const DOMPurify = createDOMPurify(window)
    const [post, setPost] = useState(null)
    const params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/user/getallpostbyid/${params.pid}`)
            .then((response) => {
                if (response.status == 200) {

                    setPost(response.data.createpost);
                }
            });
    }, []);


    if (post === null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col spin">
                        <div className="spinner-border text-danger " role="status">
                            <span className="visually-hidden ">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            {post !== null ? (
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="imgfit">
                                <img className="" src={`http://localhost:4000/${post.image}`} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="fw-bold fs-4">{post.title}</h3>

                            <h6><span className="fw-bold">Category:</span> {post.category}</h6>
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.detail) }} />
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.description) }} />
                            <div>


                            </div>
                        </div>
                    </div>
                </div>



            ) : (
                <p className="alert alert-danger">No product found</p>
            )}
        </>
    );


}
export default Details;