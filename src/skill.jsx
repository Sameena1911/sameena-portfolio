import './App.css'
function Skill() {
    return (
        <div>
            <h1 class="text-center text-4xl font-bold p-3 uppercase">My Skills</h1>
            <section id="skills" class="skills-area m-8 md:mx-20">
                <div class="skill">
                    <div class="skill-title mt-2"> HTML,CSS,JS</div>
                    <div class="skill-bar"></div>
                    <div class="html skill-fill">
                        <span class="skill-percent">90%</span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-title"> Python,C</div>
                    <div class="skill-bar"></div>
                    <div class="python skill-fill">
                        <span class="skill-percent">80%</span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-title"> React JS</div>
                    <div class="skill-bar"></div>
                    <div class="react skill-fill">
                        <span class="skill-percent">50%</span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-title"> Adobe Photoshop</div>
                    <div class="skill-bar"></div>
                    <div class="photoshop skill-fill">
                        <span class="skill-percent">80%</span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-title"> Figma</div>
                    <div class="skill-bar"></div>
                    <div class="java skill-fill">
                        <span class="skill-percent">70%</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Skill