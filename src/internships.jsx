import './App.css'
import farmlogo from  "./images/farm___logo.png"
import synclogo from "./images/sync-logo.jpeg"
import oasislogo from "./images/oasis_infobyte_logo.jpeg"
import taslogo from "./images/tasinnovation_logo.jpeg"
import nptel from "./images/nptel.png"
import metalogo from "./images/meta.png"
import eduprep from "./images/eduprep.png"
import certificate from "./images/Screenshot 2024-02-17 210309.png"
import certificate1 from "./images/farm__direct.pdf"
import certificate2 from "./images/oasis-certi.pdf"
import certificate3 from "./images/Python For Data Science.pdf"
import certificate4 from "./images/react-certi.pdf"
import certificate5 from "./images/sync-certii.pdf"
import certificate6 from "./images/tas-certi.pdf"
import certificate7 from "./images/tech.pdf"
import certificate8 from "./images/python.jpeg"

import { useState } from 'react'
function Internships() {
    const [display, setDisplay] = useState(true)
    function Change() {
        setDisplay(!display)
    }
    return (
        <div>
            <h1 class="text-center text-4xl font-bold p-3 m-8 uppercase">Internships & Certifications</h1>

        <section class="certificates m-8 md:m-20  " id="certificates1" style={{display: display?"block":"none"}}>
                <div class="title flex gap-10 p-5" style={{ backgroundcolor: "#332941", borderradius: "10px", cursor: "pointer" }}>
                    <h1 class="text-xl border-b-2" id="interns1">Internships</h1>
                    <h1 class="text-xl " onClick={Change} id="certify1">Certifications</h1>
                </div>
                <div class="internships">
                    <div class="image p-3">
                        <img src={farmlogo} class=""></img>
                        <div class="content text-center">
                            <a href={certificate1} target="_blank"> <button class="p-1">View</button></a>

                        </div>
                    </div>
                    <div class="image p-3">
                        <img src={synclogo} class=""></img>
                        <div class="content text-center">
                            <a href={certificate5} target="_blank"> <button class="p-1">View</button></a>

                        </div>
                    </div>
                    <div class="image p-3">
                        <img src={oasislogo} class=""></img>
                        <div class="content text-center">
                            <a href={certificate2} target="_blank"> <button class="p-1">View</button></a>

                        </div>
                    </div>
                    <div class="image p-3">
                        <img src={taslogo} class=""></img>
                        <div class="content text-center">
                            <a href={certificate6} target="_blank"> <button class="p-1">View</button></a>

                        </div>
                    </div>
                </div>


            </section>
        <section class="certificates m-8 md:m-20 hidden " id="certificates2" style={{display:display?"none":"block"}}>
                <div class="title flex gap-10 p-5" style={{ backgroundcolor: "#332941", borderradius: "10px", cursor: "pointer" }}>
                    <h1 class="text-xl " id="interns2" onClick={Change}>Internships</h1>
                    <h1 class="text-xl border-b-2" id="certify2">Certifications</h1>
                </div>
                <div class="internships">
                    <div class="image p-3">
                        <img src={metalogo} class=""></img>
                        <div class="content text-center">
                            <a href={certificate4} target="_blank">  <button class="p-1">View</button></a>

                        </div>
                    </div>
                    <div class="image p-3">
                        <img src={eduprep} class=""></img>
                        <div class="content text-center">
                            <a href={certificate8} target="_blank"> <button class="p-1">View</button></a>

                        </div>
                    </div>
                    <div class="image p-3">
                        <img src={certificate} class=""></img>
                        <div class="content text-center">
                            <a href={certificate7} target="_blank">  <button class="p-1">View</button></a>

                        </div>
                    </div>
                    <div class="image p-3">
                        <img src={nptel} class=""></img>
                        <div class="content text-center">
                            <a href={certificate3} target="_blank"> <button class="p-1">View</button></a>

                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}
export default Internships