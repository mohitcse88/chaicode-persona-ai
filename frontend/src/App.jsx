import "./App.css";
import Chat from "./components/chat/Chat";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
