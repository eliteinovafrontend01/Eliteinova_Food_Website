import Header from "./components/Header";
import Home from "./pages/Home";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-body text-plum">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}