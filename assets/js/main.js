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
        "project1.png": "Deskripsi untuk project 1.",
        "project2.png": "Deskripsi untuk project 2.",
        "project3.png": "Deskripsi untuk project 3.",
        "project4.png": "Deskripsi untuk project 4.",
        "project5.png": "Deskripsi untuk project 5.",
        "project6.png": "Deskripsi untuk project 6.",
        "project7.png": "Deskripsi untuk project 7.",
        "project8.png": "Deskripsi untuk project 8.",
        "project9.png": "Deskripsi untuk project 9."
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

