import './App.css'
function Contact() {
    return (
        <div>
            <h1 class="text-center text-4xl font-bold p-3 m-8 uppercase">contact me</h1>
            <section class="footer m-8 md:m-20">
                <div class="footer-up m-7 md:flex md:justify-around">
                    <div class="footer-left mb-5">
                        <p>Get in touch with me!</p>
                        <p>Feel free to contact me, I'll get back to you as soon as possible!</p>

                    </div>
                    <div class="footer-right ">
                        <div class="footer-title"><p class="text-2xl font-semibold">contact info</p>
                            <a href="mailto:sameenaferoz8@gmail.com" target="_blank"> <p class="cursor-pointer">sameenaferoz8@gmail.com</p></a>
                        </div>
                        <div class="footer-icons">
                            <a href="mailto:sameenaferoz08@gmail.com" target="_blank"><i class="fa-solid fa-envelope p-3 text-2xl hover:text-violet-700"></i></a>
                            <a href="https://github.com/Sameena1911" target="_blank"><i class="fa-brands fa-square-github p-3 text-2xl hover:text-violet-700"></i></a>
                            <a href="https://www.linkedin.com/in/sameena-mumtaz-f1911" target="_blank"><i class="fa-brands fa-linkedin p-3 text-2xl hover:text-violet-700"></i></a>
                            <a href="https://www.instagram.com/sam_me_na?igsh=MXV1ZTh3NzRpb2VuMg==" target="_blank"><i class="fa-brands fa-square-instagram p-3 text-2xl hover:text-violet-700"></i></a>

                        </div>
                    </div>
                </div>
                <div class="footer-down m-7 flex gap-1 items-center text-center justify-center  border-t p-1">
                    <p>Developed by Sameena</p>
                    <p>&#128640;</p>
                </div>
            </section >
        </div>


    )

}
export default Contact