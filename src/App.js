import React from 'react';
import './style.css';


import Product from "./components/Product";


const products = [
  {
    id: 1,
    name: "Apple",
    description: "Red apples",
    img: "https://5.imimg.com/data5/YY/EN/MY-8155364/fresh-apple-500x500.jpg",
    price: 3
  },

  {
    id: 2,
    name: "Eggs",
    description: "Nice and well farmed eggs",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVupNmpTXCDz5HExUwnyuweVvS7_nM3gIBAfJDcYph-D4GuDO2&s",
    price: 7
  },


  {
    id: 3,
    name: "Milk",
    description: "Milk for the lactose tollerent",
    img: "https://www.gaelscoilriada.com/wp-content/uploads/2019/09/Bainne.jpg",
    price: 11
  },

  {
    id: 4,
    name: "Banana",
    description: "Bananas are a good source of carbs",
    img: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/more_potassium_banana_slideshow/1800x1200_more_potassium_banana_slideshow.jpg",
    price: 2
  },


  {
    id: 5,
    name: "Orange",
    description: "Oranges are orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtz8d-65VJzol8g3SozJ_SlCMS-qi4yD3eNMiLXDedop1Uic1&s",
    price: 3.5
  }

];


function App() {
  return (
    <html>
    <div className="assign_descrip">
      <h1 className="assign_text"> Software Engineering II Assignment</h1>
        <h2 className="assign_text"> Strategy Pattern</h2>
          <h4 className="assign_text"> Cristian Alejandro Mantilla Duque</h4>
          <h4 className="assign_text"> Juan Jesus Pulido Sanchez</h4>
          <h4 className="assign_text"> Camilo Pulido </h4>

    </div>
      <main className="pa3 pa5-ns flex flex-wrap">
        {
          products.map(p => <Product key={p.id} {...p} />)
        }
      </main>
    </html>
  );
}

export default App;
