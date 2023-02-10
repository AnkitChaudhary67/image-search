import React from 'react';

const Bookmarks = ({ images }) => {
  return (
    <div className="bookmarks">

      <div className="images">
        {images.map(id => (
          <div className="image" key={id}>
            {}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
