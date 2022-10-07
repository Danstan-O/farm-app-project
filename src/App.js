import Home from './components/Home';
import './App.css';
import React, { useEffect } from 'react';
import About from './components/Abouts';
import Product from "./components/Products";
//import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Reviews from './components/Review';
import Services from './components/Services';
import Header from './components/Header';
import Contacts from './components/Contacts';



function App() {




  return (
    <div className="App">
       <div className="App">
    <Home />
    <Header />
    <About />   
    <Product />
    <Services/>
    <Reviews/>
    <Contacts />
    <Footer />           
    </div>
      
    </div>
  );
}

export default App;



// <Switch>
//     <Route exact path="/"><Home ></Route>
//     <Route exact path="/"><Header /></Route>
//     <Route exact path="/"><About />   </Route>
//     <Route exact path="/"><Product /></Route>
//     <Route exact path="/"><Services/></Route>
//     <Route exact path="/"><Reviews/></Route>
//     <Route exact path="/"><Contacts /></Route>
//     {/* <Blogs /> */}
//     <Footer />   
//     </Switch>        