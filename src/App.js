import './App.css';
// import logo from './logo.svg';
import Create from './components/create.jsx';
import Read from './components/read.jsx';
// import Update from './components/update';
// import MyRoutes from './Routes.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sideMenu.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <h2 className="main-header">React Crud Operations</h2> */}
        <Sidebar></Sidebar>
        <div className="main">
        <header className="main-header">
          <h1>Stack Overflow Sample</h1>
        </header>
          <Routes>
            {/* <Switch> */}
            <Route exact path='/create' element={<Create></Create>}>
              {/* <Create></Create> */}
            </Route>
            <Route exact path='/questions' element={<Read></Read>} />
            {/* </Switch> */}
          </Routes>
          {/* <MyRoutes /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
