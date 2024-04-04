import Index from "./components/index";
import Contact from "./components/contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
};

export default App;
