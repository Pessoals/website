const  menulist = document.getElementById("menulist")
const burgermenu = document.getElementById("burgermenu")

menulist.style.maxHeight="0px";



function toggleMenu (){

    if (menulist.style.maxHeight=="0px") {
  
        menulist.style.maxHeight="350px";
    } else {
        menulist.style.maxHeight="0px";
    }
}

const testimonial = [
    {
      name: "Joren Velas",
      role: "Founder",
      linkText: "Legacy Foundation",
      linkHref: "#",
      imgSrc:"Images/drchrstianphoto.png",
      text: "They captured my luxury wellness vibe perfectly. My brand now feels elevated and effortlessly aligned with my clients"
    },
    {
      name: "Jane Doe",
      role: "CEO",
      linkText: "Visionary Co.",
      linkHref: "#",
      imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "The process was smooth, creative, and honestly kind of fun. In just a few weeks, I had a complete brand identity that finally felt like me, plus a content strategy that makes showing up online effortless. If you want a brand that actually reflects who you are, Pessoals is the team you need."
    },
    {
      name: "John Smith",
      role: "Tax Advisory",
      linkText: "InnovateX",
      linkHref: "#",
      imgSrc: "https://randomuser.me/api/portraits/men/62.jpg",
      text: "Working with Pessoals was a game-changer for me. They didn’t just design a personal brand—they helped me figure out who I really am and how to show that to the world."
    },
    {
      name: "Anne william",
      role: "Content Creator",
      linkText: "InnovateX",
      linkHref: "#",
      imgSrc: "images/drchristianphoto.jpg",
      text: "Working with Pessoals was a game-changer for me. They didn’t just design a personal brand—they helped me figure out who I really am and how to show that to the world."
    }
  ];

  let Index = 1;

  function showTestimonial(index) {
    const testimonial = testimonial[index];
    document.getElementById('profile-name').textContent = testimonial.name;
    document.getElementById('profile-link').textContent = testimonial.linkText;
    document.getElementById('profile-link').href = testimonial.linkHref;
    document.getElementById('profile-img').src = testimonial.imgSrc;
    document.getElementById('testimonial-text').textContent = testimonial.text;
  }

  function nextTestimonial() {
    currentIndex = (Index + 1) % testimonial.length;
    showTestimonial(Index);
  }

  function prevTestimonial() {
    currentIndex = (Index - 1 + testimonial.length) % testimonial.length;
    showTestimonial(Index);
  }

  const testimonials = [
    {
      name: "Joren Velas",
      role: "Founder",
      linkText: "Legacy Foundation",
      linkHref: "#",
      imgSrc:"https://randomuser.me/api/portraits/men/33.jpg",
      text: "They captured my luxury wellness vibe perfectly. My brand now feels elevated and effortlessly aligned with my clients"
    },
    {
      name: "Jane Doe",
      role: "CEO",
      linkText: "Visionary Co.",
      linkHref: "#",
      imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "The process was smooth, creative, and honestly kind of fun. In just a few weeks, I had a complete brand identity that finally felt like me, plus a content strategy that makes showing up online effortless. If you want a brand that actually reflects who you are, Pessoals is the team you need."
    },
    {
      name: "Anne william",
      role: "Content Creator",
      linkText: "InnovateX",
      linkHref: "#",
      imgSrc: "https://randomuser.me/api/portraits/men/62.jpg",
      text: "Working with Pessoals was a game-changer for me. They didn’t just design a personal brand—they helped me figure out who I really am and how to show that to the world."
    }
  ];

    let currentIndex = 1;

    function showTestimonial(index) {
      const testimonial = testimonials[index];
      document.getElementById('profile-name').textContent = testimonial.name;
      document.getElementById('profile-link').textContent = testimonial.linkText;
      document.getElementById('profile-link').href = testimonial.linkHref;
      document.getElementById('profile-img').src = testimonial.imgSrc;
      document.getElementById('testimonial-text').textContent = testimonial.text;
    }

    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }

    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }

    showTestimonial(currentIndex);


    function openPage() {
      // Replace 'page2.html' with the actual page you want to navigate to
      window.location.href = "drchristianconte.html";  // This will open page2.html in the same tab
  }

  /* POP UP */
  function openPopup() {
      document.getElementById('popup').style.display = 'flex';
    }

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
    }

    function handleSubmit(event) {
      event.preventDefault();

      // You can collect the data if needed
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const consent = document.getElementById('consent').checked;

      if (consent) {
        // Redirect to PayPal Checkout
        window.location.href = "https://www.paypal.com/ncp/payment/A7CABSKCLJPJE";
      } else {
        alert("You must agree to receive emails to proceed.");
      }
      return false;
    }

 /* End of POP UP */


 // Start of free chapter download 

 function downloadPDF1() {
    const link = document.createElement("a");
    link.href = "https://github.com/danielayana76/pessoals/raw/refs/heads/main/Downloads/brandlikeacelebritychapteronefreeversion.zip"; // Replace with your actual link
    link.download = "brandlikeacelebritychapteronefreeversion.zip"; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function downloadPDF2() {
    const link = document.createElement("a");
    link.href = "https://github.com/danielayana76/pessoals/raw/refs/heads/main/Downloads/brandlikeacelebritychaptertwofreeversion.zip"; // Replace with your actual link
    link.download = "brandlikeacelebritychaptertwofreeversion.zip"; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function downloadPDF3() {
    const link = document.createElement("a");
    link.href = "https://github.com/danielayana76/pessoals/raw/refs/heads/main/Downloads/brandlikeacelebritychaptersixfreeversion.zip"; // Replace with your actual link
    link.download = "brandlikeacelebritychaptersixfreeversion.zip"; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  // end of free chapters download 



  // thankyoupage download instead 


  function downloadInstead() {
    const link = document.createElement("a");
    link.href = "https://github.com/danielayana76/pessoals/raw/refs/heads/main/Downloads/brandlikeacelebrity.zip"; // Replace with your actual link
    link.download = "brandlikeacelebrity.zip"; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  // thankyou page download instead end 


 /* resources data Filter */ 

 // Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const filterLinks = document.querySelectorAll('filter-link');
  const resourceCards = document.querySelectorAll('resource-card');

  filterLinks.forEach(link => {
    link.addEventListener('click', function(e) {
    function downloadPDF1() {
    const link = document.createElement("a");
    link.href = "https://github.com/danielayana76/pessoals/raw/refs/heads/main/Downloads/brandlikeacelebritychapteronefreeversion.zip"; // Replace with your actual link
    link.download = "brandlikeacelebritychapteronefreeversion.zip"; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }  e.preventDefault();

      const filter = this.getAttribute('data-filter');

      resourceCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || filter === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

 
/*  resources data filter end */ 

/* pop of paypal payment button */

/* start of f&q section */

const toggles = document.querySelectorAll('.accordion-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      // If a checkbox is checked
      if (toggle.checked) {
        // Uncheck all others
        toggles.forEach(other => {
          if (other !== toggle) {
            other.checked = false;
          }
        });
      }
    });
  });

  /* end of f&q section */ 
