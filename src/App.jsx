import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import AboutPage from "./Components/AboutPage";
import PageNotFound from "./Components/PageNotFound";
import IndexPage from "./Components/IndexPage";
import ShowPage from "./Components/ShowPage";
import EditPage from "./Components/EditPage";
import NewPage from "./Components/NewPage";
import ContactUsPage from "./Components/ContactUsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/foods" element={<IndexPage />} />
        <Route path="/foods/new" element={<NewPage />} />
        <Route path="/foods/:index" element={<ShowPage />} />
        <Route path="/foods/:index/edit" element={<EditPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
