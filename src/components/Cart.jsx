import "../components/Home.css";
const Cart = () => {
  return (
    <div>
      <div className="container my-md-5 my-3">
        <div className="row">
          <div className="col-md-6">
            <div className="d-md-flex gap-5">
              <img
                className="images"
                src="https://www.gizmochina.com/wp-content/uploads/2022/03/Apple-iPhone-13-Pro-Green.jpeg"
              ></img>
              <div className="d-flex flex-column justify-content-between gap-1">
                <h1 className="mt-3">Iphone 13</h1>
                <h6>Details</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  ullam dolores. Unde tenetur accusamus inventore debitis iste
                  aliquam nobis nemo?
                </p>
                <p>Sustainability</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-md-flex flex-column justify-content-between">
            <div className="d-md-flex  gap-5">
              <form className="d-flex flex-row gap-2">
                <div>
                  <button type="button">+</button>
                </div>

                <span>0</span>
                <div>
                  <button type="button">-</button>
                </div>
              </form>
              <p className="mt-2">Price:$123234</p>
            </div>
            <div className=" d-grid w-md-50">
              <button className="bg-warning">Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <p>SUBTOTAL:</p>
              <p>#123</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>SHIPPING</p>
              <p>Free</p>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between">
              <h1>Total:</h1>
              <h1>$232323</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
