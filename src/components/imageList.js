import React from 'react';
import './imageList.css'


export const ImageList = ({ image, setSelectedImage }) => {
    return (
        <div className="container" onClick={() => setSelectedImage(image._id)}>
            <img src={`https://borderfree-products.s3.ap-south-1.amazonaws.com/${image.image}`} alt=""></img>
            <div className="content">
                <ul>
                    <li className="items">
                        <strong>{image.name}</strong>
                    </li>

                    <li className="items">
                        Rs.{image.price}
                    </li>
                </ul>
            </div>
        </div>
    )

}