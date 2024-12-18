import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";

import './login.css';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
        })
        .catch(() => {})
        .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
        });
    }

    return (
        <div>
            <div className="playerName">{props.userName}</div>
            <div className="optionsButtons">
                <Button variant="primary" onClick={() => navigate("/canvas")}>
                    Start Creating
                </Button>
                <Button variant="secondary" onClick={() => logout()}>
                    Log Out
                </Button>
            </div>  
        </div>
    );
}