import React, { useState } from 'react'
import {ScrollToTop, CreateBlog, Blogs} from '../../components'

const BlogList = () => {

  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleForm = () => {
    setIsFormVisible(!isFormVisible)
  }


  return (
    <div className='container min-h'>
      <button 
          className='create'
          onClick={handleForm}
      >Create New</button>
      {isFormVisible && <CreateBlog handleForm={handleForm} />}
      <Blogs />
      <ScrollToTop />
    </div>
  )
}

export default BlogList