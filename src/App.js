import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AllCourse from './Components/AllCourse/AllCourse';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Tutors from './Components/Tutors/Tutors';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
    <Switch>
    <Route exact path="/">
    <Home></Home>
    <Tutors></Tutors>
    </Route>
    <Route path="/home">
    <Home></Home>
    <Tutors></Tutors>
    </Route>
    <Route path="/courses">
    <AllCourse></AllCourse>
    </Route>
    <Route path="/tutors">
    <Tutors></Tutors>
    </Route>
    <Route path="/about">
    <About></About>
    </Route>
    <Route path="*">
    <Error></Error>
    </Route>
    </Switch>


      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
