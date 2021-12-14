import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/EditForm.css";

const EditForm = ({ posts, handlePostUpdate }) => {
  const [formData, setFormData] = useState({
    content: "",
    image_url: "",
  });
  const { content, image_url } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const postContent = posts.find((post) => post.id === Number(id));
      setFormData({
        content: postContent.content,
        image_url: postContent.image_url,
      });
    };
    if (posts) prefillFormData();
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
      id="edit-form"
      onSubmit={(ev) => {
        ev.preventDefault();
        handlePostUpdate(id, formData);
      }}
    >
      <h3 id="not-happy">Not happy with your post? Edit it!</h3>
      <div className="form-container">
        <textarea
          id="content-box"
          type="text"
          name="content"
          placeholder="Content"
          value={content}
          onChange={handleChange}
        />
        <textarea
          id="image-box"
          type="text"
          name="image_url"
          placeholder="Image-Url"
          value={image_url}
          onChange={handleChange}
        />
        <button id="publish-button">Publish</button>
      </div>
    </form>
  );
};

export default EditForm;
