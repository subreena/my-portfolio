import React from 'react';
import './Skills.css'
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {





    return (
        <div className="skills">
            <div className="container">
                <h2 className="text-center">My Skills</h2>
                <div className="row text-center">
                    <div className="col-12 col-md-6 mt-3">
                        <ProgressBar variant="secondary" animated now={83} label={`React js`} className="skill-bar" />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <ProgressBar variant="secondary" animated now={70} label={`Node js`} className="skill-bar" />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <ProgressBar variant="secondary" animated now={70} label={`Mongodb`} className="skill-bar" />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <ProgressBar variant="secondary" animated now={60} label={`Express`} className="skill-bar" />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <ProgressBar variant="secondary" animated now={45} label={`Firebase`} className="skill-bar"/>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <ProgressBar variant="secondary" animated now={85} label={`JavaScript`} className="skill-bar" />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <ProgressBar variant="secondary" animated now={80} label={`Material Ui`} className="skill-bar" />
                    </div>
                    <div className="col-12 col-md-6  mt-3">
                        <ProgressBar variant="secondary" animated now={95} label={`Bootstrap`} className="skill-bar"/>
                    </div>
                    <div className="col-12 col-md-6  mt-3">
                        <ProgressBar  variant="secondary" animated now={96} label={`Css`} className="skill-bar" />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                    
                        <ProgressBar variant="secondary" animated now={98} label={`Html`} className="skill-bar" />
                       
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Skills;