import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './Testimonial.css'
const Testimonial = () => {
    return (
        <>
            <div className="testimonial">
                <div className="container">
                    <h1 className="text-center mb-5 text-light testi-head">My Projects</h1>
                    <div className="testi-text">
                        <CardDeck>
                            <Card>
                                <a className="text-decoration-none text-dark" href="https://volunteer-network-bysubreena.web.app/" target="_blank" rel="noopener noreferrer">
                                <Card.Img variant="top" src={require('../../../images/slider (1).png')} className="img-card" />
                                <Card.Body style={{maxHeight: '230px'}}>
                                    <Card.Title>Volunteer Network</Card.Title>
                                    <Card.Text>
                                        A simple social service website with a basic admin panel. <br/> <br/>
                                        <h3 className="mr-1 p-2 badge badge-secondary">React js</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">Node js</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">Mongo db</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">Express</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">Firebase auth</h3>
                                       
      </Card.Text>
                                </Card.Body>
                                <Card.Footer>                <a href="https://volunteer-network-bysubreena.web.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mr-2">Live Link </a>
                                        <a href="https://github.com/subreena/volunteer-network" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mr-2"> Github Repository</a>
                                   
                                </Card.Footer>
                                </a>
                            </Card>
                            <Card>
                                <a href="https://creative-agency-bysubreena.firebaseapp.com/" className="text-decoration-none text-dark" target="_blank" rel="noopener noreferrer">
                                <Card.Img variant="top" src={require('../../../images/slider (2).png')} className="img-card"  />
                                <Card.Body style={{maxHeight: '250px'}}>
                                    <Card.Title>Creative Agency</Card.Title>
                                    <Card.Text>
                                       A agency website with admin panel and user panel.
                                       <br/> <br/>
                                        <h3 className="mr-1 p-2 badge badge-secondary">React js</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">Node js</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">Mongo db</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">Express</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">Firebase auth</h3>
  
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <a href="https://creative-agency-bysubreena.firebaseapp.com/"target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mr-2">Live Link </a>
                           <a href="https://github.com/subreena/creative-agency"target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mr-2"> Github Link</a>
                                </Card.Footer>
                                </a>
                            </Card>
                            <Card>
                            <a className="text-decoration-none text-dark" href="https://travel-guru-by-subreena.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                                <Card.Img variant="top" src={require('../../../images/slider (6).png')} className="img-card" />
                                <Card.Body style={{maxHeight: '250px'}}>
                                    <Card.Title>Travel Guru</Card.Title>
                                    <Card.Text>
                                       A travel agency website thats shows hotels in a selected location.
                                       <br/> <br/>
                                        <h3 className="mr-1 p-2 badge badge-secondary">React js</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">React Router</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">Bootstrap</h3>
                                        <h3 className="mr-1 p-2 badge badge-secondary">Firebase auth</h3>
      </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <a href="https://travel-guru-by-subreena.firebaseapp.com/"target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mr-2">Live Link </a>
                           <a href="https://github.com/subreena/travel-guru-app"target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mr-2"> Github Link</a>
                                </Card.Footer>
                                </a>
                            </Card>
                        </CardDeck>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Testimonial;