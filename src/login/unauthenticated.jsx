import React from "react";

import { Button } from "react-bootstrap";

import './login.css';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassWord] = React.useState('');
    const [email, setEmail] = React.useState('');

    async function loginUser() {
        loginOrCreate('/api/auth/login');
    }

    async function createUser() {
        loginOrCreate('/api/auth/create');
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ userName: userName, email: email, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`Error: ${body.msg}`);
        }
    }

    return (
        <div className="userfront">
            <div className="login-cont">
                <h3>Log in</h3>
                <hr />
                <form>
                    <div className="form-group">
                        <label>Username: </label>
                        <input className="form-control" type="text" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input className="form-control" type="password" id="password" onChange={(e) => setPassWord(e.target.value)} />
                    </div>
                    <Button variant="primary" className="btn btn-primary" onClick={() => loginUser()} disabled={!userName || !password} >
                        Log in
                    </Button>
                </form>
            </div>

            <div className="register-cont">
                <h3>Sign up</h3>
                <hr />
                <form>
                    <div className="form-group">
                        <label>Email: </label>
                        <input className="form-control" type="email" placeholder="your@email.com" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                        <input className="form-control" type="text" id="newUsername" onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input className="form-control" type="password" id="newPassword" placeholder="Your Password" onChange={(e) => setPassWord(e.target.value)}/>
                    </div>
                    <Button variant="primary" className="btn btn-primary" onClick={() => createUser()} disabled={!userName || !password || !email} >
                        Sign up
                    </Button>
                </form>
            </div>
        </div>
    );
}