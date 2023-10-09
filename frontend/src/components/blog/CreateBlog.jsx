import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import './CreateBlog.scss'

const CreateBlog = ({handleForm}) => {
  return (
    <section className='create-blog'>
        <form>
            <h1>Create New Blog</h1>
            <AiOutlineClose className='form-close' onClick={handleForm} />
            <div className='input-group'>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' required />
                <span className='focus-border'></span>
            </div>
            <div className='input-group'>
                <label htmlFor="image">Image</label>
                <input type="file" name='image' required />
            </div>
            <div className='input-group'>
                <label htmlFor="content">Content</label>
                <textarea name="content" required ></textarea>
            </div>
            <div className='buttons'>
                <button type='submit'>Save</button>
            </div>
        </form>
    </section>
  )
}

export default CreateBlog