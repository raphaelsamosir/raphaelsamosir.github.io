/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .project__img, .contact__input',{interval: 200});
sr.reveal('.work__container', {interval: 200});
sr.reveal('.awards__container', {interval: 200});



document.addEventListener("DOMContentLoaded", () => {

    const descriptions = {
        "project1.png": "VANALIKA 1.0: Photovoltaic-Based Energy Harvesting using Sunflower Solar Tracker Optimization (bit.ly/VANALIKA)",
        "project2.png": "Star-Delta Starter Electrical Motor Starter Panel",
        "project3.png": "Buzz-Convt 1.0: 12V - 24V Boost Converter for DC Voltage Step-Up",
        "project4.png": "Rajasaka 2.0: IR Sensor-Based Line Follower Robot",
        "project5.png": "Temperature Controller using LM35 with Arduino-Based PID Controller Implemented using MATLAB",
        "project6.png": "2-Stages Op-Amp Analog Integrated Circuit Designed with Cadence (GPDK 045nm)",
        "project7.png": "2.4 GHz Radio-Frequency Receiver Analog Integrated Circuit Designed with Cadence (GPDK 045nm)",
        "project8.png": "Variational Autoencoder Accelerator Integrated Circuit Design Implemented on FPGA Xilinx Kria KV260 for DNN-based Image Compression",
        "project9.png": "ANN Hardware Accelerator Digital IC Implemented on FPGA Xilinx Kria KV260 (Case Study: Battery Condition Estimation)"
    };

    const items = document.querySelectorAll(".project__img");

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalText = document.getElementById("modal-text");
    const modalClose = document.getElementById("modal-close");

    if (!items.length) {
        console.log("Tidak ada elemen .project__img ditemukan");
    }

    items.forEach(item => {
        item.addEventListener("click", () => {
            const img = item.querySelector("img");
            const fileName = img.src.split("/").pop();

            modalImg.src = img.src;
            modalText.textContent = descriptions[fileName] || "Tidak ada deskripsi.";
            modal.style.display = "flex";
        });
    });

    modalClose.onclick = () => modal.style.display = "none";

    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };

});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Jangan reload halaman

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Template email formal
    let emailBody = 
`Dear Raphael,

I hope this message finds you well.

My name is ${name}, and I would like to get in touch regarding the following:

${message}

You may reach me back at:
Email: ${email}

Best regards,
${name}`;

    // Encode untuk mailto
    const encodedBody = encodeURIComponent(emailBody);

    // Buat mailto link
    window.location.href = `mailto:raphael03samosir@gmail.com?subject=New Contact Form Message&body=${encodedBody}`;
});


