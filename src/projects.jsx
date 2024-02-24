import './App.css'
import image1 from "./images/reface.png"
import image2 from "./images/chat_app.jpg";
import image3 from "./images/nike_clone.jpg"
import image4 from "./images/wp_clone.jpeg"

function Projects() {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold p-3 m-8 uppercase">projects</h1>
            <section id="projects" class="project m-8 md:m-20 flex-wrap md:flex-wrap md:flex gap-5">
                <div class="card m-7 md:w-64">
                    <img src={image1} class="p-3"></img>
                    <div class="text p-3">
                        <h1 class="text-xl font-semibold">Reface App UI</h1>
                        <p class="opacity-50 ">A mobile App User Interface has been designed in Figma for the real time application called Faceswap.</p>
                        <a href="https://www.figma.com/file/tTkmPJf0jwOeRcRenmZCkY/Reface-Update?type=design&node-id=0%3A1&mode=design&t=N4tejmcLnfnjrZUI-1" target="_blank"> <button class="cursor-pointer p-1 mt-2">Preview</button></a>
                    </div>
                </div>
                <div class="card m-7 md:w-64">
                    <img src={image2} class="p-3"></img>
                    <div class="text p-3">
                        <h1 class="text-xl font-semibold">Chat Application</h1>
                        <p class="opacity-50 ">The chat application that allows the user to communicate with other users using this platform. Here we provide email account as a login credentials which is unique as compared to other apps.</p>

                    </div>
                </div>
                <div class="card m-7 md:w-64">
                    <img src={image3} class="p-3"></img>
                    <div class="text p-3">
                        <h1 class="text-xl font-semibold">Nike Website Clone</h1>
                        <p class="opacity-50 ">Recreated the Nike website with some basic functionalities using JavaScript in my own creativity.</p>
                        <a href="https://sameena1911.github.io/Nike/" target="_blank"> <button class="cursor-pointer p-1 mt-2">Preview</button></a>
                    </div>
                </div>
                <div class="card m-7 md:w-64">
                    <img src={image4} class="p-3"></img>
                    <div class="text p-3">
                        <h1 class="text-xl font-semibold">WhatsApp UI</h1>
                        <p class="opacity-50 ">Recreated the UI of the WhatsApp apllication using web technologies.</p>
                        <a href="https://6b1uilxjchhpvrz5xjnjnq.on.drv.tw/day%205/" target="_blank"> <button class="cursor-pointer p-1 mt-2">Preview</button> </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Projects