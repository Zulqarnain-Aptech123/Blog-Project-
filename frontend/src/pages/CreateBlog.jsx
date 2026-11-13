import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await axios.post("http://localhost:3000/create-blog", formData);
      navigate("/blogs");
    } catch (err) {
      console.log(err);
      alert("Error creating blog");
    }
  };

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
  );
};

export default CreateBlog