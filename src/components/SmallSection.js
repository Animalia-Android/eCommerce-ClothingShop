import React from "react";

import "../styles/SmallSection.scss";

const SmallSection = () => {
  return (
    <section className="second-section">
      <div className="allcart">
        <div className="cart">
          <img
            src="https://images.unsplash.com/photo-1619549048272-f86fd3a596ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhbGwlMjBraWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p>Kids</p>
          <h1>Fall Fashion</h1>
        </div>

        <div className="cart">
          <img
            src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFsbCUyMGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p>Unisex</p>
          <h1>Fall Fashion</h1>
        </div>

        <div className="cart">
          <img
            src="https://images.unsplash.com/photo-1536148020659-4dde4128f8ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1lbnMlMjBmYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p>Men</p>
          <h1>Fall Fashion</h1>
        </div>

        <div className="cart">
          <img
            src="https://images.unsplash.com/photo-1656074166642-c1c22b309d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdvbWVucyUyMGZhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p>Women</p>
          <h1>Fall Fashion</h1>
        </div>
      </div>
    </section>
  );
};

export default SmallSection;
