import './App.css'
import { useState } from 'react';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    function toggle() {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <section class="header flex items-center gap-7 justify-between m-8 text-2xl sm:mx-20 md:mx-20 border-b-2">

                <p>MyPortfolio</p>

                <div class="flex justify-around gap-10 ">
                    <a href="#about" ><p class="hidden sm:block md:block hover:text-violet-700">About</p></a>
                    <a href="#skills"> <p class="hidden sm:block md:block hover:text-violet-700">Skills</p></a>
                    <a href="#certificates1"><p class="hidden sm:block md:block hover:text-violet-700">Internships</p></a>
                    <a href="#projects">   <p class="hidden sm:block md:block hover:text-violet-700">Projects</p></a>
                    <p onClick={toggle} class="sm:hidden md:hidden"><i class="fa-solid fa-bars" id="menu"></i></p>
                </div>
            </section>
            <section class="side-nav md:hidden transition-all duration-1000 z-30 top-0 right-0 fixed" id="sidenav"
                style={{height: "100vh", width: "50%", marginRight: isOpen ? "0%":"-50%", border: "solid black 1px"}}>
                <div class="close m-8 cursor-pointer text-right ">
                    <i onClick={toggle} class="fa-solid fa-x" id="close"></i>

                </div>
                <ul class="p-5 cursor-pointer capitalize">
                    <a href="#about" ><li class="new p-5 border-b-2 hover:text-violet-700">about</li></a>
                    <a href="#skills"> <li class="mens p-5 border-b-2 hover:text-violet-700">skills</li> </a>
                    <a href="#certificates1"> <li class="womens p-5 border-b-2 hover:text-violet-700">Internships</li></a>
                    <a href="#projects">  <li class="kids p-5 border-b-2 hover:text-violet-700">projects</li></a>

                </ul>
            </section>
        </div>
    )
}

export default Navbar