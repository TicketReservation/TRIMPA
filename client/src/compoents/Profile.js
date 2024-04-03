import React, { useState, useEffect } from 'react';
import '../css/profile.css';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

function Profile() {
  const [id, setId] = useState(null);
  const [update, setUpdate] = useState({
    Name: "",
    email: "",
    password: "",
    picture: null
  });

  useEffect(() => {
    handleData();
  }, [id]);

  const handleData = () => {
    const token = localStorage.getItem("jwtToken");
    const decoded = jwtDecode(token);
    const userId = decoded.id;

    setId(userId); 

    axios.get(`http://localhost:3000/api/user/${userId}`)
      .then(res => {
        setUpdate(res.data);
      })
      .catch(err => console.log(err));
  };


  const uploadImage = async () => {
    if (!update.picture) return;

    const formData = new FormData();
    formData.append("file", update.picture);
    formData.append("upload_preset", "tripma");

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dockwpvkl/upload", formData);
      return response.data.secure_url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleImage = (e) => {
    setUpdate({
      ...update,
      picture: e.target.files[0]
    });
  };
const handleUpdate = async () => {
    try {
      const imageUrl = await uploadImage();
      const updatedData = { ...update };

      if (imageUrl) {
        updatedData.picture = imageUrl;
      }
      
      await axios.put(`http://localhost:3000/api/user/${id}`, updatedData);
      handleData();
    } catch (error) {
      console.log("error",error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdate({
      ...update,
      [name]: value
    });
  };


  return (
    <div className='updateProfile'>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate();handleData() }}>
        <h2>Update Profile</h2>
        <span className='NameEmail'>
          <label htmlFor="name">Name</label><br />
          <input type="text" value={update.Name} id="name" name="Name" onChange={handleChange} required />
          <label htmlFor="email">Email</label><br />
          <input type="email" value={update.email} id="email" name="email" onChange={handleChange} required />
        </span>
        <span className='PasswordPicture'>
          <label htmlFor="password">Password</label><br />
          <input type="password" value={update.password} placeholder='new password' id="password" name="password" onChange={handleChange} required /><br />
          <label htmlFor="picture">Picture</label><br />
          <img src={update.picture} alt="User" /><br />
          <input type="file" id="picture" name="picture" onChange={handleImage} /><br /><br />
          <button type="submit">Save</button>
        </span>
      </form>
    </div>
  );
}

export default Profile