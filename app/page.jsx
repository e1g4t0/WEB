import "./page.css";
import Footer from "./Components/Footer/Footer";
import App from "./App";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <h1 className="title"> My projects</h1>

        <div className="cardHolder">
          <App />
        </div>
      </main>

      <Footer />
    </div>
  );
}
