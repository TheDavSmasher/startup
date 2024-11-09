import React from 'react';

export function Login() {
    return (
        <main className="container-fluid mainfront text-center">
            <h2>Welcome to PixelShare!</h2>
            <div className="userfront">
                <div className="login-cont" style="width:50%; float: left; text-align: center;">
                    <h3>Log in</h3>
                    <hr />
                    <form action="canvas.html" method="get">
                        <div className="form-group">
                            <label for="username">Username: </label>
                            <input className="form-control" type="text" name="" id="username" />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input className="form-control" type="password" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </form>
                </div>
                <div className="register-cont" style="width:50%; float: right; text-align: center;">
                    <h3>Sign up</h3>
                    <hr />
                    <form action="canvas.html" method="get">
                        <div className="form-group">
                            <label>Email: </label>
                            <input className="form-control" type="email" placeholder="your@email.com" />
                        </div>
                        <div className="form-group">
                            <label>Username: </label>
                            <input className="form-control" type="text" id="newUsername" />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input className="form-control" type="password" id="newPassword" placeholder="Your Password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password: </label>
                            <input className="form-control" type="password" id="confirmPassword" placeholder="Confirm Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
