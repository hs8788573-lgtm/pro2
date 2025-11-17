import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Detials from './components/Detials';
import Project from './components/Project';
import Login from './components/Login';




const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>  
        <Header />
      </main>
      <About/>
       <main/>
       <Detials/>
       <main/>
         <Project/>
       <main/>
       <Login>
       </Login>
    </>
  );
};

export default App;
