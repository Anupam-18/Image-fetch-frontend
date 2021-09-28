
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImageDetails } from './imageDetail';

export const ImageCard = ({ selectedImage, setSelectedImage }) => {
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        fetchAllData();
    }, [])

    const fetchAllData = async () => {
        const id = selectedImage;

        const rootApi = `http://localhost:5000/recordClick/${id}`;

        axios.get(`${rootApi}`).then((response) => {

            // console.log("click");
            setDescription(response.data.data.description);
            setImage(response.data.data.image);
            setName(response.data.data.name);
            setClickCount(response.data.data.clickCount);

        });
    }
    return (
        <div>
            <ImageDetails description={description} image={image} name={name} clickCount={clickCount} setSelectedImage={setSelectedImage} />
        </div>
    );
}
