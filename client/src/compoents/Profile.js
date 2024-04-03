import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


function Profile() {
  const [id, setId] = useState(null);
  const [update, setUpdate] = useState({
    name: "",
    email: "",
    password: "", 
    picture: null
  });

  useEffect(() => {
    handleData();
  }, [id]);

  const handleData = async () => {
    const token = localStorage.getItem("jwtToken");
    const decoded = jwtDecode(token);
    setId(decoded.id);

    try {
      const response = await axios.get(`http://localhost:3000/api/user/${decoded.id}`);
      setUpdate(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const uploadImage = async () => {
    if (!update.picture) return null;

    const formData = new FormData();
    formData.append("file", update.picture);
    formData.append("upload_preset", "tripma");

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dockwpvkl/upload", formData);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleImage = (e) => {
    setUpdate(prevUpdate => ({
      ...prevUpdate,
      picture: e.target.files[0]
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadImage();
      const updatedData = { ...update };

      if (imageUrl) {
        updatedData.picture = imageUrl;
      }

      await axios.put(`http://localhost:3000/api/user/profile/${id}`, updatedData);
      handleData();
      // Clear input fields
      setUpdate({
        name: "",
        email: "",
        password: "",
        picture: null
      });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdate(prevUpdate => ({
      ...prevUpdate,
      [name]: value
    }));
  };


  return (
    <div className='updateProfile'>
      <form onSubmit={handleUpdate}>
        <h2>Update Profile</h2>
        <span className='NameEmail'>
          <label htmlFor="name">Name</label><br />
          <input type="text" value={update.name} id="name" name="name" onChange={handleChange} required />
          <label htmlFor="email">Email</label><br />
          <input type="email" value={update.email} id="email" name="email" onChange={handleChange} required />
        </span>
        <span className='PasswordPicture'>
          <label htmlFor="password">Password</label><br />
          <input type="password" placeholder='new password' id="password" name="password" onChange={handleChange} required /><br />
          <label htmlFor="picture">Picture</label><br />
          <img src={update.picture} alt="User" /><br />
          <input type="file" id="picture" name="picture" onChange={handleImage} /><br /><br />
          <button type="submit">Save</button>
        </span>
      </form>
    </div>
  );
}

export default Profile;
