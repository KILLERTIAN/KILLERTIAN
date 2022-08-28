import React from 'react';
import { Link } from 'react-router-dom';

function AboutCard(props) {
    return (
        <>
            <div className='proCards'>
                <div className="cardcontainer">
                    <h2>{props.no}</h2>
                    <h3>{props.noName}</h3>
                    <p>{props.text}</p>
                    <a href="#">{props.siteText}</a>

                </div>
                <img src={props.src} />
            </div>
        </>
    );
}

export default AboutCard;