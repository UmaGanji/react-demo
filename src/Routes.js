import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './components/create.js';
import Read from './components/read';
import Update from './components/update';

const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path='/create' component={Create} />
            <Route exact path='/read' element={<Read></Read>} />
            <Route path='/update' component={Update} />
        </Routes>
    );
}

export default MyRoutes;