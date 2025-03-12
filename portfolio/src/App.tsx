import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Why from "./pages/Why";
import Who from "./pages/Who";

const App: React.FC = () => {
  return (
    <>
    	<BrowserRouter>
      <Routes>
        <Route path="/" element={<Why />} />
        <Route path="/Who" element={<Who />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
