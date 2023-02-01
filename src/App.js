import './index.css'

import CustomNavbar from './Components/Navbar.jsx'
import UseState from './Components/Hooks/UseState.jsx'
import CustomNotes from './Components/Notes/Notes';
import CreateNote from './Components/Notes/CreateNote';
import UseEffect from './Components/Hooks/UseEffect';
import UseRef, { UseRef2, UseRef3 } from './Components/Hooks/UseRef';
import NoteDetail from './Components/Notes/NoteDetail';
import LifeCycle from './Components/LifeCycle/LifeCycle'
import UseContext from './Components/Hooks/UseContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Routes>
 
          <Route path='/' element={
            <>
              <UseState />
              <UseEffect />
              <UseRef />
              <UseRef2 />
              <UseRef3 />
              <UseContext />
            </>
          } />
          <Route path='/notes' element={<CustomNotes />} />
          <Route path='/createNote/:id?' element={<CreateNote />} />
          <Route path='/noteDetail/:id' element={<NoteDetail />} />
          <Route path='/lifecycle' element={<LifeCycle />} />

        </Routes>
      </Router>
    </>
  );
}
export default App;
