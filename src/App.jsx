import './App.css';
import SwipeButton from "./components/SwipeButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NewsFeeds from './components/NewsFeeds';

function App() {
  const navigate = useNavigate();

  const handleSwipeSuccess = () => {
    navigate('/newsFeed1');
  };

  return (
    <div className="App">
      <Navbar className="bg-body-tertiary">
        <Container >
          <Navbar.Brand href="#home"  className='mx-auto' style={{fontWeight:'bold'}}>News Feeds</Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<SwipeButton onSuccess={handleSwipeSuccess} />}/>
        <Route path='/newsFeed1' element={<NewsFeeds/>}/>
      </Routes>
    </div>
  );
}

export default App;
