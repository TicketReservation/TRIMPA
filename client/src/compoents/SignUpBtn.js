import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import '../css/homePage.css';
import axios from 'axios';

function SignUpBtn() {
    const [anchor, setAnchor] = React.useState(null);
    const [signUp, setSignUp] = React.useState({
        Name: "",
        email: "",
        password: ""
    });
    const [image, setImage] = React.useState(null);
    const [url, setUrl] = React.useState("");

    const handleClick = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    const handleInput = (e) => {
        setSignUp({
            ...signUp,
            [e.target.id]: e.target.value
        });
    };

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const uploadImage = async () => {
        const form = new FormData();
        form.append("file", image);
        form.append("upload_preset", "tripma");
        const res = await axios.post("https://api.cloudinary.com/v1_1/dockwpvkl/upload", form);
        ;
        setUrl(res.data.secure_url);
    };
const handleSubmit = async () => {
        await uploadImage();
        console.log("uploaded")
        axios.post("http://localhost:3000/api/user/register", {
            ...signUp,
            picture: url
        })
        .then(res =>console.log("signed", res))
        .catch(err => console.log(err, "err"));
    };

    return (
        <div>
            <a onClick={handleClick} className="active" id="log" href="#Sign in">
                Sign up
            </a>
            <BasePopup id={id} open={open} anchor={anchor}>
                <div className='signIn'>
                    <form onSubmit={handleSubmit}>
                        <h2>Sign up</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={handleInput} value={signUp.Name} id="Name" name="name" required />
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleInput} value={signUp.email} id="email" name="email" required />
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={handleInput} value={signUp.password} id="password" name="password" required />
                        <label htmlFor="picture">Picture</label>
                        <input type="file" onChange={handleImage} id="picture" name="picture" />
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </BasePopup>
        </div>
    );
}

export default SignUpBtn