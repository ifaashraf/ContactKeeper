import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import View from './pages/View'
import Update from './pages/Update'
import Create from './pages/Create'
import Landing from './pages/Landing'
import Home from './pages/Home'
import './bootstrap.min.css'

function App(){

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </>
  )
}

export default App
