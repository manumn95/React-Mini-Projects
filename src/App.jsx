import Card from "./components/pricecard";
const App = () => {
  const data = {
    cards: [
      {
        type: "FREE",
        amount: "$0/month",
        features: [
          "✔ Single User",
          "✔ 50GB Storage",
          "✔ Unlimited public projects",
          "✔ Community Access",
          "✖ Unlimited private projects",
          "✖ Dedicated phone",
          "✖ Free subdomain",
          "✖ Monthly status Reports",
        ],
      },
      {
        type: "PLUS",
        amount: "$9/month",
        features: [
          "✔ 5 Users",
          "✔ 50GB Storage",
          "✔ Unlimited public projects",
          "✔ Community Access",
          "✔ Unlimited private projects",
          "✔ Dedicated phone",
          "✔ Free subdomain",
          "✖ Monthly status Reports",
        ],
      },
      {
        type: "PRO",
        amount: "$49/month",
        features: [
          "✔ Unlimited Users",
          "✔ 50GB Storage",
          "✔ Unlimited public projects",
          "✔ Community Access",
          "✔ Unlimited private projects",
          "✔ Dedicated phone",
          "✔ Free subdomain",
          "✔ Monthly status Reports",
        ],
      },
    ],
  };

  return (
    <div className="d-flex justify-content-center align-item-center mt-5">
      {data.cards.map((val, index) => {
        return <Card data={val} key={index} features={val.features} />;
      })}
    </div>
  );
};
export default App;
