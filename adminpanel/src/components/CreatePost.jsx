
import React from 'react'


function CreatePost() {
  return (
    <>

      <h1>Create Post</h1>
      <div class="field">
        <label for="id">Owner Id</label>
        <input id="id" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" placeholder='Enter the Owner Id' />
      </div>
      <div class="field">
        <label for="posttitle">Post Title</label>
        <input id="posttitle" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" placeholder='Enter the Title of Post' />
      </div>
    </>
  )
}

export default CreatePost