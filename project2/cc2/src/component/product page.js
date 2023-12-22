import React from 'react';
import '../assets/product page.css';
// import Image from '../assets/343549.jpg';
const ProductPage = () => {
  const addToCart = (productName, quantity, price) => {
    alert(`Added ${quantity} ${productName}(s) to the cart. Total cost: $${quantity * price}`);
  };

  return (
    <div style={{  backgroundColor:'lightyellow' }} className='bimgage'>
    <div className="product-page">
      <h2>Sports Materials</h2>
      <div className="product-list">
        <div className="product-card">
          <img
            src="https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.webp?b=1&s=170667a&w=0&k=20&c=4oNEgrdFtVJYSURsdIL9mBiPSgeZdvzh99eU0S9bCpU="
            alt="Cricket Bat"
            className="product-image"
          />
          <h3>Cricket Bat</h3>
          <p className="price">PRICE: RS.1,699</p>
          <label htmlFor="quantity1">QUANTITY:</label>
          <input type="number" id="quantity1" defaultValue="0" />
          <button onClick={() => addToCart('Cricket Bat', document.getElementById('quantity1').value,20)}>
            Add to Cart
          </button>
        </div>

        <div className="product-card">
          <img
            src="https://media.istockphoto.com/id/533861572/photo/football-in-the-sunset.webp?b=1&s=170667a&w=0&k=20&c=4HZznbK1-n2ZWUFYqvh86j9-FKMMHWsx9ELrEnDJYVc="
            alt="Football"
            className="product-image"
          />
          <h3>Football</h3>
          <p className="price">PRICE: RS.2,100</p>
          <label htmlFor="quantity2">QUANTITY:</label>
          <input type="number" id="quantity2" defaultValue="0" />
          <button onClick={() => addToCart('Football', document.getElementById('quantity2').value, 25)}>
            Add to Cart
          </button>
        </div>

        <div className="product-card">
          <img
            src="https://media.istockphoto.com/id/881205244/photo/badminton-racket-and-shuttlecock-in-arena-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=4bMHf0szQGKRwSNJJn92wBHCY-1FbSR0XAt1WRQIUEM="
            alt="Badminton Racket"
            className="product-image"
          />
          <h3>Badminton Racket</h3>
          <p className="price">PRICE: RS.2,495</p>
          <label htmlFor="quantity3">QUANTITY:</label>
          <input type="number" id="quantity3" defaultValue="0" />
          <button onClick={() => addToCart('Badminton Racket', document.getElementById('quantity3').value, 30)}>
            Add to Cart
          </button>
        </div>
        
        {/* Table Tennis Bat */}
        <div className="product-card">
          <img
            src="https://media.istockphoto.com/id/92285366/photo/ping-pong-paddle-and-table-with-net.webp?b=1&s=170667a&w=0&k=20&c=eIxPh6EJstTQLgsMNpbMgXRXtyP7mVWRzCgI6s5UU8M="
            alt="Table Tennis Bat"
            className="product-image"
          />
          <h3>Table Tennis Bat</h3>
          <p className="price">PRICE: RS.1,250</p>
          <label htmlFor="quantity4">QUANTITY:</label>
          <input type="number" id="quantity4" defaultValue="0" />
          <button onClick={() => addToCart('Table Tennis Bat', document.getElementById('quantity4').value, 15)}>
            Add to Cart
          </button>
        </div>

        {/* Hockey Bat */}
        <div className="product-card">
          <img
            src="https://plus.unsplash.com/premium_photo-1676963748638-df3bb4b7da74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9ja2V5JTIwJTIwYmF0fGVufDB8fDB8fHww"
            alt="Hockey Bat"
            className="product-image"
          />
          <h3>Hockey Bat</h3>
          <p className="price">PRICE: RS.3,330</p>
          <label htmlFor="quantity5">QUANTITY:</label>
          <input type="number" id="quantity5" defaultValue="0" />
          <button onClick={() => addToCart('Hockey Bat', document.getElementById('quantity5').value, 40)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductPage;
