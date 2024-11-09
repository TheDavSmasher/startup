import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Share } from './share/share';
import { Canvas } from './canvas/canvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    return (
        <BrowserRouter>
            <header className="container-fluid">
                <nav className="navbar">
                    <a className="nav-link" href="#"><h2>PixelShare&trade;</h2></a>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="canvas.html">Start Creating</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="share.html">Community Posts</a>
                        </li>
                    </menu>
                </nav>
            </header>

            //Routes

            <footer className="footer text-white-50">
                <div className="footer-cont">
                    <span className="text-reset">David Higueros</span>
                    <a className="text-reset" href="https://github.com/TheDavSmasher/startup">GitHub</a>
                </div>
            </footer>
        </BrowserRouter>
    );
}