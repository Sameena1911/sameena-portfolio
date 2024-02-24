import './App.css'
import homeimage from "./assets/homeimage.jpg"
import resume from "./images/Resume.pdf"
function Home() {
    return (
        <div>
            <section class="home md:flex m-8 justify-evenly md:mx-20 sm:mx-20 items-center">

                <img src={homeimage} alt="dummyimage" class="w-100% h-auto rounded-3xl md:w-1/2 sm:w-100% sm:h-auto p-3 "
                    style={{ backgroundcolor: "#332941" }}></img>

                
                    <div class="home-text p-3" style={{ backgroundcolor: "#332941" }}>
                        <h1 class="text-3xl p-4" style={{ backgroundcolor: "#332941" }}>Hi, This is <span
                            class="text-purple-800 text-nowrap" style={{ backgroundcolor: "#332941" }}>SAMEENA MUMTAZ</span></h1>
                        <p class="p-4" style={{ backgroundcolor: "#332941" }}>Passionate web designer crafting engaging digital
                            experiences. Expert in UI/UX
                            design, responsive layouts, and creating visually stunning websites that captivate audiences worldwide.
                        </p>
                        <div class="items-center justify-center gap-2 text-center " style={{ backgroundcolor: "#332941" }}>
                            <a href={resume} target="_blank"> <button class="p-3 bg-violet-800 text-white w-1/2 ">View
                                CV</button></a>
                        </div>
                    </div>
                
            </section>
        </div>

    )

}
export default Home