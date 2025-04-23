import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Why from "./pages/Why";
import Who from "./pages/Who";
import What from "./pages/What";

const App: React.FC = () => {
  return (
    <>
    	<BrowserRouter>
      <Routes>
        <Route path="/" element={<Why />} />
        <Route path="/Who" element={<Who />} />
        <Route path="/What" element={<What/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
