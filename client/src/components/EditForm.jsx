import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const EditForm = ({ posts, handlePostUpdate }) => {
  const [formData, setFormData] = useState({
    content: '',
    image_url: '',
  });
  const { content, image_url } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const postContent = posts.find((post) => post.id === Number(id));
      setFormData({ content: postContent.content, image_url: postContent.image_url });
    };
    if (posts.length) prefillFormData();
  }, [posts, id]);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        handlePostUpdate(id, formData);
      }}
    >
      <h3>Not happy with your post? Edit it!</h3>
      <label>
        Content:
        <input type='text' name='content' value={content} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type='text' name='image_url' value={image_url} onChange={handleChange} />
      </label>
      <button>Publish</button>
    </form>
  );
}

export default EditForm;