
import { BrowserRouter as Router, Routes, Route, MemoryRouter } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import MovieDetail from "./screens/MovieDetail";
import {useState} from 'react'
import SearchScreen from './screens/SearchScreen'
import ResultScreen from './screens/ResultScreen'
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
        {/* <Route path="/:pageNum" element={<HomeScreen/>}/> */}
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/:title" element={<MovieDetail/>}/>
        <Route path="/search/:title" element={<SearchScreen/>}/>
        <Route path="/search/:title/details" element={<ResultScreen/>}/>
      </Routes>
      </div> 
    </Router>
      )
}

export default App
