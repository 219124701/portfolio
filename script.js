

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the menu icon and the navigation menu
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.querySelector('.navbar');

    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation menu
        navbar.classList.toggle('active');
    });
});


    /*========scroll section active link ========*/

    let sections = document.querySelectorAll('section');
    let navLink = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec =>{
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach.apply(Links => {
                       Links.classList.remove('active');
                       document.querySelector('header nav a[href=' + id +'}') .classList.add('active');

                });  
            };
        });
    };




function toggleDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
}

function toggleLightMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
}


function sendMessage() {
    (function () {
      emailjs.init("xSpbX9MCq3BRrB199"); // Account Public key
    })();
  
    var params = {
      FullName: document.querySelector("#FullName").value,
      Email: document.querySelector("#Email").value,
      Subject: document.querySelector("#Subject").value,
      Mobile: document.querySelector("#Mobile").value,
      Message: document.querySelector("#Message").value
    };
  
    var serviceID = "service_sr97xy8"; // Email Service ID
    var templateID = "template_7fi70m6"; // Email template ID
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        alert("Email sent successfully");
        // clear the form
        document.getElementById('contact-form').reset();
      })
      .catch(err => {
        alert("Failed to send email: " + JSON.stringify(err));
      });
  }


