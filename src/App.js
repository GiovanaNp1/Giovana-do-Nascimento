import {
    BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <>  
        <Header />
        <Routes>
            <Route exact path="/" element={<Main/>}/>
        </Routes>
    </>
    </Router>
);
}

export default App;
