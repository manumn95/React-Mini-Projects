const Feature = (Props) => {
  return (
    <p className="card-text">
      {Props.symbol}
      {Props.feature}
    </p>
  );
};

const Card = (Props) => {
  return (
    <div>
      <div className="card  mb-3 mt-3 mx-3" style={{ maxWidth: "18rem" }}>
        <p className="text-center text-muted mt-4">{Props.data.type}</p>
        <div className="card-header ">
          <h1>{Props.data.amount}</h1>
        </div>
        <div className="card-body">
          {Props.features.map((feature, index) => {
            return <Feature feature={feature} key={index} />;
          })}
        </div>
        <div className="card-footer">
          <button className=" btn btn-primary rounded-pill bg-primary">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
