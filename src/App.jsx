import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  const productDetails = {
    data: [
      {
        id: 1,
        image:
          "https://ae01.alicdn.com/kf/HTB1kjLcdlsmBKNjSZFFq6AT9VXae/GUANQIN-Mens-Watches-Top-Brand-Luxury-Tourbillon-Skeleton-Watch-Men-Sport-Leather-Waterproof-Automatic-Mechanical-Wrist.jpg",
        productName: "Fancy Product",
        productPrice: "$40.00-$80.00",
      },
      {
        id: 2,
        image:
          "https://spy.com/wp-content/uploads/2020/07/91ydwgdc5l._ac_ul1500_.jpg",
        productName: "Special Item",
        productPrice: "$20.00",
      },
      {
        id: 3,
        image:
          "https://i5.walmartimages.com/asr/d6f127b0-46d6-4be3-af1d-c67e7ba98acd.27924610a3f5cfd5de567eb336632a43.jpeg",
        productName: "Sale Item",
        productPrice: "$50.00",
      },
      {
        id: 4,
        image:
          "https://www.ytechb.com/wp-content/uploads/2023/09/Does-the-iPhone-15-have-an-Action-Button.webp",
        productName: "Popular Item",
        productPrice: "$40.00",
      },
      {
        id: 5,
        image:
          "https://www.christies.com/img/LotImages/2008/GNV/2008_GNV_01363_0351_000(035443).jpg",
        productName: "Sale Item",
        productPrice: "$50.00",
      },
      {
        id: 6,
        image:
          "https://www.letemsvetemapplem.eu/bazar/wp-content/uploads/2019/12/IMG_0742-4.jpeg",
        productName: "Fancy Product",
        productPrice: "$120-$280",
      },
      {
        id: 7,
        image:
          "https://n4.sdlcdn.com/imgs/g/x/j/Hero-Sprint-Rx3-21-Speed-SDL053613830-1-8d538.jpg",
        productName: "Special Item",
        productPrice: "$20.00",
      },
      {
        id: 8,
        image:
          "https://www.insidehook.com/wp-content/uploads/2020/04/32.jpg?resize=1024%2C640",
        productName: "Popular Item",
        productPrice: "$40.00",
      },
    ],
  };

  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <Nav count={count}></Nav>
      <Header></Header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productDetails.data.map((val, index) => {
              return (
                <div key={index}>
                  <div className="col mb-5">
                    <Products
                      details={val}
                      image={val.image}
                      price={val.productPrice}
                      name={val.productName}
                      onClick={increment}
                      decrement={decrement}
                      count={count}
                      value={val.id}
                    ></Products>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer email="manumn@gmail.com"></Footer>
    </div>
  );
}

export default App;
