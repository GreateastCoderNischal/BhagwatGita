import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Page from './Components/Page';
import "./App.css"
import VersesPage from './Components/VersesPage';
function App(){
  return(
   <BrowserRouter>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/gita' exact element={<Page/>}/>
    <Route path="/gita/verse/:chapter/:id" element={<VersesPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}
export default App