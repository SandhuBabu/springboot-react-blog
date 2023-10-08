import React, { useState } from 'react'
import Blogs from '../../components/blog/Blogs'
import CreateBlog from '../../components/blog/CreateBlog'
import ScrollToTop from '../../components/utilities/ScrollToTop'

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