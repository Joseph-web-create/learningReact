import Header from "./Header.jsx";
import Typo from "./Typo.jsx";
import { useState, useEffect } from "react";
import { products } from "./data.js";

function App() {
  const [textColor, setTextColor] = useState("green");
  const [car, setCar] = useState({
    brand: "BMW",
    year: 1998,
    model: "E30",
  });
  const myStyle = {
    color: "orange",
    border: "1px solid black",
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount((count) => count + 1), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const updateTextColor = () => {
    setTextColor("brown");
  };

  const change = () => {
    setCar((prev) => {
      return { ...prev, brand: "Toyota" };
    });
  };
  return (
    <>
    {products.map((items)=> (
      <div>
        <h1>{items.title}</h1>
      </div>
    ))}
      <h1 className="text-green-600">{count}</h1>
      <ul>
        <li>{car.brand}</li>
        <li>{car.year}</li>
        <li>{car.model}</li>
      </ul>
      <button onClick={change}>Change me plz 😎</button>
      <h1 style={{ color: textColor }}>Set state Color</h1>
      {/* <h1>{textColor}</h1> */}
      <button onClick={updateTextColor}>Click me</button>
      <h1 className="head">Hello to React</h1>
      <h1 style={{ color: "red", fontSize: "50px" }}>
        This is an inline style in React
      </h1>
      <h1 style={myStyle}>Style using Object</h1>
      <Header tj={myStyle} />
      <Typo text="Hello wolrd" font="50px" col="blue" />
    </>
  );
}

export default App;
