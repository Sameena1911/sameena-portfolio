import './App.css'
function About() {
    return (
        <div>
            <h1 class="text-center text-4xl font-bold p-3">ABOUT ME</h1>
            <section id="about" class="about md:flex m-8 md:mx-20 p-5 items-center" style={{backgroundcolor: "#332941"}}>

                <div class="about-left" style={{backgroundcolor: "#332941"}}>
                    <h1 class="text-lg p-3" style={{backgroundcolor: "#332941"}}>Hello! I'm a <span
                        class="text-violet-700 text-xl font-semibold" style={{backgroundcolor: "#332941"}}>FULL STACK WEB
                        DEVELOPER</span></h1>
                    <p class="text-lg p-3" style={{backgroundcolor: "#332941"}}>I'm a dedicated B.E. Computer Science student with
                        a passion for innovation and problem-solving. As a tech-savvy individual, I thrive on challenges and am
                        committed to excellence in all my endeavors. With a keen eye for detail and a creative approach to
                        coding, I enjoy collaborating with others to tackle complex projects.</p>
                    <h3 class="text-lg p-4" style={{backgroundcolor: "#332941"}}><i
                        class="fa-solid fa-location-dot text-violet-700" style={{backgroundcolor: "#332941"}}></i> Chennai,
                        India</h3>
                </div>

            <div class="about-right ">
                    <div class="box">
                        <p class="text-violet-700 text-2xl">#</p>
                        <h1 class="text-center">Years of Experience</h1>
                    </div>
                    <div class="box">
                        <p class="text-violet-700 text-2xl">3</p>
                        <h1 class="text-center">Projects Completed</h1>
                    </div>
                    <div class="box">
                        <p class="text-violet-700 text-2xl">4</p>
                        <h1 class="text-center">Internships</h1>
                    </div>
                    <div class="box">
                        <p class="text-violet-700 text-2xl">5</p>
                        <h1 class="text-center">Certifications</h1>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About