import Store from './screens/Store'
import {TopNavBar} from './components/navbar'
import { Footer } from './components/footer';
import './App.css';

function App() {
  return (
    <>
      <TopNavBar/>
      <hr/>
      <Store/>
      {/* Routes */}
      <br/>
      <Footer/>
    </>
  );
}

export default App;
