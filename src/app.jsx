import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Share } from './share/share';
import { Canvas } from './canvas/canvas';
import { AuthState } from "./login/authState";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <div className="body">
                <header className="container-fluid">
                    <nav className="navbar">
                        <NavLink className="nav-link" to=""><h2>PixelShare&trade;</h2></NavLink>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="">Login</NavLink>
                            </li>
                            {authState === AuthState.Authenticated && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="canvas">Start Creating</NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="share">Community Posts</NavLink>
                                </li>
                            )}
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<Login 
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                        }}
                    />} exact />
                    <Route path="/share" element={<Share />} />
                    <Route path="/canvas" element={<Canvas />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer className="footer text-white-50">
                    <div className="footer-cont">
                        <span className="text-reset">David Higueros</span>
                        <NavLink className="text-reset" href="https://github.com/TheDavSmasher/startup">GitHub</NavLink>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>
}