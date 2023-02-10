import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bookmarks from './bookmarks';
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [bookmarkedImages, setBookmarkedImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get(
        `https://api.unsplash.com/photos/?client_id=JN0_ydlWjyDjt2miXYc7TmATg8E_9rWY2KYdsnacmCk&query=${searchTerm}`
      );
      setImages(res.data);
    };

    if (searchTerm) {
      fetchImages();
    }
  }, [searchTerm]);

  const handleSearch = e => {
    e.preventDefault();
    setSearchTerm(e.target.elements.searchTerm.value);
  };

  const handleBookmark = id => {
    setBookmarkedImages([...bookmarkedImages, id]);
  };
const saveImage=()=>{
  console.log(setBookmarkedImages);
}
  return (
    <div className="app">
      <div className='header'>
      <h1> React Image Search</h1>
      
      <button className='book' onClick={saveImage}>Bookmark</button>
   
      </div>
     
      <form  className='box' onSubmit={handleSearch}>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search for images..."
        />
        <button type="submit">Search</button>
      </form>
      <Bookmarks images={bookmarkedImages} />
      <div className="images">
        {images.map(image => (
          <div className="image" key={image.id}>
            <img src={image.urls.small} alt={image.description} />
            <div
              className="bookmark"
            
            >
              <button   onClick={() => handleBookmark(image.id)}>
              Bookmark
              </button>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
