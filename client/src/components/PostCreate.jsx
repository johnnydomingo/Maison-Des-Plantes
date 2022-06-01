import React,{ useState } from "react";
import "../css/PostCreate.css";

const PostCreate = ({ handlePostCreate }) => {
  const [formData, setFormData] = useState({
    content: "",
    image_url: "",
  });
  const {content, image_url } = formData;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((pineapple) => ({
      ...pineapple,
      [name]: value,
    }));
  };

  // const fileSelectedHandler = ev => {
  //   console.log(ev.target.files[0])
  // }
  return (
    <section>
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
          placeholder="Say something...Anything!"
          value={content}
          onChange={handleChange}
          required
        />
        
        <textarea
          id="post-picture"
          type="text"
          name="image_url"
          placeholder="image url"
          value={image_url}
            onChange={handleChange}
            required
        />
          {/* <input type="file" onChange={fileSelectedHandler}/> */}
        <button id='publish'>Publish</button>
      </div>
      </form>
      
      </section>
  );
};

export default PostCreate;
