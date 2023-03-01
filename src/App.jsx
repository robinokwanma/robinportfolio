import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Profile from './components/Profile';
import TechStack from './components/TechStack';
import PastProjects from './components/PastProjects';
import PastExperience from './components/PastExperience';
import About from './components/About'


function App() {
  
  return (
    <Router>
    <Header/>
    <Container>
    <main className="py-3">
    <Profile />
    <TechStack/>
    <PastProjects/>
    <PastExperience/>
    <Routes>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    <About/>
    <ContactForm />
    </main>
    </Container>
    <Footer/>

    </Router>
  );
}

export default App;
