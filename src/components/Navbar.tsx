
import "../style/Navbar.css";



// Components/navbar.tsx
const Navbar = () => {
  return (

<section className="section">
  <div className="hamu">
    <h1  className="hamu">
   Himaanshu
</h1>
  </div>
  <div>
    <nav className="list">
     <li><a href="" className="list">Home</a> </li>
     <li><a href=""  className="list"> About</a> </li>
     <li><a href=""  className="list"> Detials </a> </li>
     <li><a href=""  className="list"> Project</a> </li>
     <li><a href="./resume.docx" className="list" download=""> Download CV</a> </li>
     
    </nav>

   
   
  </div>
</section>

  );
};

export default Navbar; // ✅ Now you can do: import Navbar from './Components/navbar'
