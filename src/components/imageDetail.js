import React from 'react';
import './imageDetail.css';

export const ImageDetails = ({ clickCount, description, image, name, setSelectedImage }) => {

    const handleCLick = (e) => {
        console.log("clicked");
        setSelectedImage(null);
    }
    return (
        <div className="detailsContainer">
            <i class="fas fa-times" onClick={handleCLick}></i>
            <img src={`https://borderfree-products.s3.ap-south-1.amazonaws.com/${image}`} alt="enlarged"></img>
            <ul>
                <li><strong>Description: </strong> {description}</li>
                <li><strong>Click Count: </strong>{clickCount}</li>
                <li><strong>Prod Name : </strong>{name}</li>
            </ul>
        </div>
    );
}