import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Why from "./pages/Why";
import Who from "./pages/Who";
import What from "./pages/What";
import Where from "./pages/Where";

const App: React.FC = () => {
  return (
    <>
    	<BrowserRouter>
      <Routes>
        <Route path="/" element={<Why />} />
        <Route path="/Who" element={<Who />} />
        <Route path="/What" element={<What/>}/>
        <Route path="/Where" element={<Where />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
