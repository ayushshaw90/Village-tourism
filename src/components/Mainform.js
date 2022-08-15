import { useState } from 'react'
import app from '../firebaseCredentials'
import './Mainform.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Mainform() {
    const auth = getAuth();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const [data, setdata] = useState("");
    function changeData() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div>
            <div id="Form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => {
                    setemail(e.target.value)
                }} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" email={password} onChange={(e) => {
                    setpassword(e.target.value)
                }} />
                <br />
                <button id="submit" onClick={changeData}>Submit</button>
            </div>
            <div>
                {data}
            </div>
        </div>
    )
}