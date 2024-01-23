
import React from 'react'
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { Editor } from 'primereact/editor';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePost() {
  const toast = useRef(null);
  const [description, setDiscription] = useState('');
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("")
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate()
  const [image, setImage] = useState()
  const [status, setStatus] = useState()

  const successMsg = () =>
    toast.success("Post successfully created", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

  const onUpload = () => {
    toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };
  const onHandle = () => {



    if (title !== "" && category !== "") {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description)
      formData.append("category", category);
      formData.append("image", image);
      
      setLoading(true);
      axios.post(`http://localhost:4000/user/createpost`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"

        },
      })

        .then((res) => {
          console.log(res)

          if (res.status == 201) {
            successMsg();
            setTimeout(() => {
              navigator("/dashboard")
              props.setUpdated(true);
            }, 2000);

          }
        })

        .catch((er) => { console.log(er.message) })
        .finally(() => {
          setLoading(false);
        })
    }
    else {
      alert("Field are empty")
    }


  };

  const onFileSelect = (event) => {
    // The 'event.files' array contains the selected files
    if (event.files.length > 0) {
      setImage(event.files[0])
    }
  };


  return (
    <>

      <h1>Create New Post</h1>
      <div className="field">
        <label htmlFor="id">Post Title</label>
        <input id="id" value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" placeholder='Enter the Post Title' />
      </div>
      <div className="field">
        <label htmlFor="postcategory">Category Type</label>
        <input id="postcategory" value={category} onChange={(e) => { setCategory(e.target.value) }} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" placeholder='Category Type' />
      </div>

      <div className="card flex justify-content-center items-center align-items-center  gap-4">
        <Toast ref={toast}></Toast>
        <label htmlFor="posttitle">Upload File</label>
        <FileUpload className='mr-auto my-2' mode="basic" onSelect={onFileSelect} onFil auto={false} accept="image/*"  maxFileSize={1000000} />
      </div>
      <div className="card">
        <Editor value={description} onTextChange={(e) => setDiscription(e.htmlValue)} style={{ height: '320px' }} />
      </div>

      <div className="card flex justify-content-center my-4">
        <Button onClick={onHandle} label="Submit" />
      </div>


    </>
  )
}

export default CreatePost