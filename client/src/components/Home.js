import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import sample from './sample.jpg';
import ScraperBar from './ScraperBar';

class Home extends Component {

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <div class="container">
                    <div class="chips chips-initial"></div>
     
                    <div>
                        
                     </div>

                        <div class="row">
                            <div class="col s3 m3">
                                <div class="card">
                                    <div class="card-image">
                                        <span class="card-title">Home</span>
                                        <div class="card-content">
                                            <img src={sample} alt="log"></img>
                                            <p>John Doe</p>
                                            <p>New York, NY</p>
                                        </div>
                                        <div class="card-action">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="container">
                                    {
                                        <ScraperBar />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                );
            }
        
        }
        
export default Home;