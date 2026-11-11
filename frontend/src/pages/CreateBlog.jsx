import axios from "axios";
import navigation from 'react-router-dom';




const CreateBlog = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission logic here

    const formData = new FormData(e.target)
    await axios.post("http://localhost:3000/create-blog", formData)
      .then((res) => {
        navigation("/blogs")
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }
  return (
    <section className='create-blog-section'>
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' name="title" />
        <input type="text" placeholder='Description' name="description" />
        <input type="file" placeholder='Image URL' accept="image/*" name="image" />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default CreateBlog