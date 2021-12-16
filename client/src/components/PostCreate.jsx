import { useState } from "react";
import "../css/PostCreate.css";

const PostCreate = ({ handlePostCreate }) => {
  const [formData, setFormData] = useState({
    content: "",
    image_url: "",
  });
  const { content, image_url } = formData;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((pineapple) => ({
      ...pineapple,
      [name]: value,
    }));
  };

  return (
    <form
      id="create-form"
      onSubmit={(ev) => {
        ev.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <h3 id='seed'>Drop-a-Seed</h3>
      <div className="post-form">
        <textarea
          id='caption'
          type="text"
          name="content"
          placeholder="content"
          value={content}
          onChange={handleChange}
        />
        <textarea
          id="post-picture"
          type="text"
          name="image_url"
          placeholder="image url"
          value={image_url}
          onChange={handleChange}
        />
        <button id='publish'>Publish</button>
      </div>
    </form>
  );
};

export default PostCreate;
