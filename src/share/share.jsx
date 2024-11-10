import React from "react";

import './share.css';

export function Share() {
    return (
        <main>
            <div>
                <h2>Recently Posted:</h2>
                <div className="recent-posts">
                    <div className="post">
                        <div className="post-image-div">
                            <img src="box.gif" className="post-image" />
                        </div>
                        <div className="credits">
                            <span className="image-title">Breaker Box</span>
                            <span>By: MaildropFolder</span>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-image-div">
                            <img src="crow00.png" className="post-image" />
                        </div>
                        <div className="credits">
                            <span className="image-title">Crow Sprite</span>
                            <span>By: Maddie</span>
                        </div>
                    </div>
                </div>
            </div> 
        </main>
    );
}