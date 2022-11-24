import "./App.css";
import Card from "./Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.Id} item={item} />;
  });
  return <>{cards}</>;
}
