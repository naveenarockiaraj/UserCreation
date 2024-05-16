import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Utable from './Utable';

function App() {
  
  return (
    <div >
      
<Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/userdetail" element={<Utable/>} />
    </Routes>
    
    </div>

    
  );
}

export default App;
