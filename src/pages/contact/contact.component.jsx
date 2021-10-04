import React from 'react';

import { ReactComponent as Logo } from '../../assets/undraw_male_avatar_323b.svg';

import './contact.style.scss';

const ContactPage = () =>  {
    return (
        <div>
            <div className="Container_1">
                <h1>Contact Us</h1>
            </div>
            
            <div className="main_container_1">
                <div className="content_div">
                        <div style={{padding:'20px'}}>
                            <Logo style={{width: '100px', height: '100px'}}/>
                        </div>

                        <div style={
                            {
                                flexGrow:1,
                                textAlign:"center",
                                borderLeft:"1px solid #cccfcd"
                            }}
                        >
                            <p className="para">Manan Varma</p>
                            <span>
                                <a 
                                    href="https://www.linkedin.com/in/manan-varma-440b66162/?originalSubdomain=in" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="linkedIn"
                                >
                                    <i className="fab fa-linkedin"></i> 
                                    &nbsp;LinkedIn
                                </a>
                            </span>
                        </div>
                </div>

                <div className="content_div">
                        <div style={{padding:'20px'}}>
                            <Logo style={{width: '100px', height: '100px'}}/>
                        </div>

                        <div style={{flexGrow:1,textAlign:"center",borderLeft:"1px solid #cccfcd"}}>
                            <p className="para">Jalaj Yadav</p>
                            <span>
                                <a 
                                    href="https://www.linkedin.com/in/jalajyadav/?originalSubdomain=in" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="linkedIn"
                                >
                                    <i className="fab fa-linkedin"></i> 
                                    &nbsp;LinkedIn
                                </a>
                            </span>
                        </div>
                </div>
            </div>

            <div className="main_container_2">    
                <div className="content_div">
                        <div style={{padding:'20px'}}>
                            <Logo style={{width: '100px', height: '100px'}}/>
                        </div>

                        <div style={{flexGrow:1,textAlign:"center",borderLeft:"1px solid #cccfcd"}}>
                            <p className="para">Ritik Sharma</p>
                            <span>
                                <a 
                                    href="https://www.linkedin.com/in/ritik-sharma-5ab81a211/" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="linkedIn"
                                >
                                    <i className="fab fa-linkedin"></i> 
                                    &nbsp;LinkedIn
                                </a>
                            </span>
                        </div>
                </div>

                <div className="content_div">
                        <div style={{padding:'20px'}}>
                            <Logo style={{width: '100px', height: '100px'}}/>
                        </div>

                        <div style={{flexGrow:1,textAlign:"center",borderLeft:"1px solid #cccfcd"}}>
                            <p className="para">Sanket Agarwal</p>
                            <span>
                                <a 
                                    href="https://www.linkedin.com/in/sanket-agarwal-547508200/?originalSubdomain=in" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="linkedIn"
                                >
                                    <i className="fab fa-linkedin"></i> 
                                    &nbsp;LinkedIn
                                </a>
                            </span>
                        </div> 
                </div>
            </div>
            
        </div>
    )
}

export default ContactPage;
