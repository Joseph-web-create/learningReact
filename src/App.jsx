import AppRoutes from "./Routs/AppRoutes.jsx";

function App() {
  // const [textColor, setTextColor] = useState("green");
  // const [car, setCar] = useState({
  //   brand: "BMW",
  //   year: 1998,
  //   model: "E30",
  // });
  // const myStyle = {
  //   color: "orange",
  //   border: "1px solid black",
  // };

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => setCount((count) => count + 1), 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  // const updateTextColor = () => {
  //   setTextColor("brown");
  // };

  // const change = () => {
  //   setCar((prev) => {
  //     return { ...prev, brand: "Toyota" };
  //   });
  // };
  return (
    <>
    <AppRoutes/>
    
    </>
  );
}

export default App;
