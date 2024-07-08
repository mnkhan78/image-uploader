import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = (props) => {
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <div>
        <h1>Upload Images</h1>
        <input type="file" accept="image/*" onChange={handleChange} />
        {file && (
          <img
            src={file}
            alt="uploaded_img"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
