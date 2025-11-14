import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Detials from './components/Detials';
import Project from './components/Project';

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
    </>
  );
};

export default App;
