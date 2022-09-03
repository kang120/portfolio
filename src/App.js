import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <Header />

        <div className='inner-spacing'>
          <Section />
        </div>
        
        <Footer />
    </div>
  );
}

export default App;
