import { useState } from "react";
import "./App.css";
import ModalItem from "./components/Modal";
import Footer from "./components/Footer";
import ListUser from "./components/ListUser";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Navbar data={data} />
      <main>
        <ListUser data={data} setData={setData} />
      </main>
      <Footer />
      <ModalItem data={data} setData={setData} />
    </div>
  );
}

export default App;
