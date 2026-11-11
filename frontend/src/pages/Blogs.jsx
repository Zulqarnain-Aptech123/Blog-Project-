import { useEffect, useState } from "react"
import axios from "axios"

const Blogs = () => {

    const [blogs, setBlogs] = useState([
        {
            _id: 1,
            title: "Blog 1",
            description: "This is the description of blog 1",
            image: "https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
        }
    ])

    useEffect(() => {
        axios.get("http://localhost:3000/blogs")
            .then((res) => {
                console.log(res.data.blogs);
                setBlogs(res.data.blogs)

            })
    }, [])
    return (
        <section className='blog-section'>
            <h1>Blogs</h1>
            {
                blogs.length > 0 ? (
                    blogs.map((blog) => {
                        return (
                            <div className='blog-card' key={blog._id}>
                                <img src={blog.image} alt={blog.title} />
                                <h2>{blog.title}</h2>
                                <p>{blog.description}</p>
                            </div>
                        )
                    })
                ) : (
                    <p>No blogs available.</p>
                )
            }
        </section>
    )
}



export default Blogs
