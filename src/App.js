import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Utable from './Utable';
import { useState } from 'react';


function App() {
  const [isEdit, setEdit] = useState(false);
  const [editDataList, setEditDataList] = useState(null);
  
  return (
    <div >
      
<Routes>
        <Route exact path="/" element={<Home isEdit={isEdit} setEdit={setEdit} editDataList={editDataList} setEditDataList={setEditDataList}   />} />
        <Route path="/userdetail" element={<Utable isEdit={isEdit} setEdit={setEdit} editDataList={editDataList} setEditDataList={setEditDataList} />} />
    </Routes>
    
    </div>

    
  );
}

export default App;
