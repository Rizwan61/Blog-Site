import React from 'react'
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { Editor } from 'primereact/editor';
import { useState } from 'react';
import { Button } from 'primereact/button';

function Comment() {
    const toast = useRef(null);
    const [text, setText] = useState('');
  
    const onUpload = () => {
      toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };
  return (
    <>
        <h1>Comments</h1>
      <div class="field">
        <label for="id">Auther Id</label>
        <input id="id" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" placeholder='Enter the Auther Id' />
      </div>
      <div class="field">
        <label for="posttitle">Post Title</label>
        <input id="posttitle" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" placeholder='Enter the Title of Post' />
      </div>
      <div class="field">
        <label for="category">Post Category</label>
        <input id="category" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" placeholder='Enter the  Post Category' />
      </div>
      
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
        <div className="card flex justify-content-center my-4">
            <Button label="Submit" />
        </div>
    </>
  )
}

export default Comment