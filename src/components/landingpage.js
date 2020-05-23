import React from 'react';
import { Grid, Cell } from 'react-mdl';
function Landing() {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className="landing-grid">
                <Cell col={12}></Cell>
                <div className="container">
                    <div className="avatar">
                        <div className="chat">
                            <div>
                                <span class="text_1">Hi! My name is Harsha.</span>
                                <span class="text_2">I <span>💖</span> to code</span>
                            </div>
                        </div>
                        <div className="avatardiv">
                            <div>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png" alt="Skytsunami" className="avatarimg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-text">
                    <h1>
                        Full Stack Web Developer
                        </h1>
                    <hr />
                    <p>HTML/CSS | Javascript | React | NodeJS | Android</p>

                </div>
            </Grid>


        </div>
    )

}

export default Landing;