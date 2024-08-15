import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router >
  )
}

export default App
{/* <Header />
      <Home /> */}
{/* <h1>Under Construction</h1>
      <a href="https://github.com/jennermaxim">Jenner Maxim</a> */}
{/* <Route path="/" exact Component={Home} /> */ }





