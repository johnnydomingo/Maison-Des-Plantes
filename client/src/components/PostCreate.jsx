import { useState } from 'react';
import '../css/PostCreate.css';

const PostCreate = ({ handlePostCreate }) => {
  const [formData, setFormData] = useState({
    content: '',
    image_url: '',
  });
  const { content, image_url } = formData;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((pineapple) => ({
      ...pineapple, 
      [name]: value,
    }))
  };

  return (
    <form id="create-form" 
      onSubmit={(ev) => {
        ev.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <h3>Drop-a-Seed</h3>
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
  )
}

export default PostCreate;