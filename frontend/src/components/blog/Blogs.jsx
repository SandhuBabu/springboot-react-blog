import React from 'react'
import { Link } from "react-router-dom"
import { BsPencilSquare } from "react-icons/bs"
import "./Blogs.scss"

const blogs = [
    { title: "The Future of AI: Advancements and Applications" },
    { title: "Mastering Web Development: A Comprehensive Guide" },
    { title: "Cybersecurity Unveiled: Protecting Your Digital World" },
    { title: "Data Science Demystified: Insights and Innovations" },
    { title: "Mobile App Development Trends: What's Next in Tech" },
    { title: "Cloud Computing: From Basics to Best Practices" },
    { title: "DevOps Decoded: Bridging the Gap Between Dev and Ops" },
    { title: "UI/UX Design: Crafting Exceptional User Experiences" },
    { title: "Blockchain Beyond Cryptocurrency: Transforming Industries" },
    { title: "Machine Learning Marvels: Algorithms and Applications" },
]

const Blogs = () => {
    return (
        <>
            {
                blogs.map((blog, index) => (
                    <article key={index}>
                        <h3>
                            <BsPencilSquare className='pen' />
                            {blog.title}
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at nulla vitae, quisquam suscipit vel dicta quibusdam nemo velit facilis maiores voluptatum, unde soluta et fuga harum reiciendis beatae sit! Dignissimos quis nisi itaque inventore. Sit vero nihil ducimus assumenda autem eius illum dignissimos quisquam reprehenderit! Inventore itaque, reprehenderit perferendis at iste accusantium amet, doloremque, hic dolorum culpa corporis nihil.</p>
                        <Link to="/">Read More</Link>
                    </article>
                ))
            }
        </>
    )
}

export default Blogs