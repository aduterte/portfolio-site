import React from "react"
import { blogsState } from "../Atoms"
import {useRecoilValue} from "recoil"
import BlogCard from "../BlogCard"

export default function BlogsContainer(){

    const blogs = useRecoilValue(blogsState)

    return(
        <div className="blog-card-container">
            <h2>My Recent Blogs</h2>
            {blogs.slice(0,4).map((blog, index) => <BlogCard key={index} blog={blog}/>)}
        </div>
    )

}