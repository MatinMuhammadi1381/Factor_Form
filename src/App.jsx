import { HashRouter as Router, Routes, Route } from "react-router-dom"
import './app.css'
import  {Home}  from "./pages/home"
import {Second} from "./pages/second"
import {Third} from "./pages/third"
import {Layout} from "./Layout"

const App = () => {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={ <Home/> }/>
        <Route path="/second" element={ <Second/> }/>
        <Route path="/Third" element={ <Third/> }/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
