
import { BrowserRouter as Router, Routes, Route, MemoryRouter } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import MovieDetail from "./screens/MovieDetail";
import {useState} from 'react'
function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const sendQuery= ()=>{
    console.log(searchQuery)
  }
  return (
    <Router> 
      <Header searchQuery={searchQuery} sendQuery={sendQuery} setSearchQuery={setSearchQuery} />
      <div className="my-4 mx-[2rem]">
      <Routes>
        <Route path="/:pageNum" element={<HomeScreen/>}/>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/:pageNum/:title" element={<MovieDetail/>}/>
      </Routes>
      </div> 
    </Router>
      )
}

export default App
