
import React, { useState, useEffect } from 'react';
import { ImageList } from './components/imageList';
import axios from 'axios';
import { ImageCard } from './components/imageCard';
import './App.css';


function App() {
  const [images, setImage] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = async () => {
    const rootApi = "http://localhost:5000/products";

    const response = await axios.get(`${rootApi}`)

    setImage([...images, ...response.data.data]);
  }
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const filterCard = () => {
    return images.filter(img => img.name.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((image) => (
      <ImageList image={image} key={image._id} setSelectedImage={setSelectedImage} />
    ))
  }

  if (!selectedImage) {
    return (
      <div>
        <form className="searchForm">
          <label htmlFor="searchInput">Filter by name:</label>
          <input type="text" placeholder="search" id="searchInput" className="searchBar" onChange={handleChange} value={searchValue} />
        </form>
        <div className="wrapperImage">
          {filterCard()}
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <ImageCard selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      </div>
    );
  }
}

export default App;