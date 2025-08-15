// Menu toggle code
const menulist = document.getElementById("menulist");
const burgermenu = document.getElementById("burgermenu");

menulist.style.maxHeight = "0px";

function toggleMenu() {
  if (menulist.style.maxHeight === "0px") {
    menulist.style.maxHeight = "350px";
  } else {
    menulist.style.maxHeight = "0px";
  }
}

const testimonials = [
  {
    name: "Asim Ahmed",
    role: "Founder",
    linkText: "Connecta Ads",
    linkHref: "#",
    imgSrc: "Images/asimm.png",
    text: "Working with Pessoals was one of the best investments I’ve made for myself and my business."
  },
  {
    name: "Jane Doe",
    role: "CEO",
    linkText: "Visionary Co.",
    linkHref: "#",
    imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The process was smooth, creative, and honestly kind of fun. In just a few weeks, I had a complete brand identity that finally felt like me, plus a content strategy that makes showing up online effortless."
  },
  {
    name: "John Smith",
    role: "Tax Advisor",
    linkText: "InnovateX",
    linkHref: "#",
    imgSrc: "https://randomuser.me/api/portraits/men/62.jpg",
    text: "Working with Pessoals was a game-changer for me. They didn’t just design a personal brand—they helped me figure out who I really am and how to show that to the world."
  },
  {
    name: "Anne William",
    role: "Content Creator",
    linkText: "InnovateX",
    linkHref: "#",
    imgSrc: "Images/drchristianphoto.jpg",
    text: "Working with Pessoals was a game-changer for me. They didn’t just design a personal brand—they helped me figure out who I really am and how to show that to the world."
  }
];

let currentIndex = 0;

function showTestimonial(index) {
  const t = testimonials[index];
  document.getElementById('profile-name').textContent = t.name;
  document.getElementById('profile-link').textContent = t.linkText;
  document.getElementById('profile-link').href = t.linkHref;
  document.getElementById('profile-img').src = t.imgSrc;
  document.getElementById('profile-img').alt = `${t.name} - ${t.role}`;
  document.getElementById('testimonial-text').textContent = t.text;
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

// Initial load
showTestimonial(currentIndex);
// Function to navigate to another page
function openPage() {
  window.location.href = "drchristianconte.html";
}

  /* POP UP 
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

  End of POP UP */

function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const consent = document.getElementById('consent').checked;

  if (!consent) {
    alert("You must agree to receive emails to proceed.");
    return false;
  }

  if (!name || !email) {
    alert("Please fill in your name and email.");
    return false;
  }

  // Mailchimp JSONP URL (update with your own!)
  const mailchimpUrl = 'https://us15.list-manage.com/subscribe/post-json?u=07e655f1ee6606d6949ea7dbb&id=4798db1474&c=?';

  // Prepare parameters
  const params = new URLSearchParams();
  params.append('EMAIL', email);
  params.append('FNAME', name);

  // JSONP helper
  function jsonp(url, callback) {
    const script = document.createElement('script');
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());

    window[callbackName] = function(data) {
      delete window[callbackName];
      document.body.removeChild(script);
      callback(data);
    };

    script.src = url.replace('=?', '=' + callbackName);
    document.body.appendChild(script);
  }

  // Send to Mailchimp and on success redirect to PayPal
  jsonp(mailchimpUrl + '&' + params.toString(), function(response) {
    if (response.result === 'success' || response.result === 'error') {
      // Close popup just in case
      closePopup();
      // Redirect to PayPal checkout
      window.location.href = 'https://www.paypal.com/ncp/payment/A7CABSKCLJPJE';
    } else {
      alert('There was an error submitting your email. Please try again.');
    }
  });

  return false;
}

  

 // Start of free chapter download 

 function downloadPDF1() {
    const link = document.createElement("a");
    link.href="/Files/BrandlikeaCelebrityChapterOneFreeVersion"; // Replace with your actual link
    link.download = "Brand Like a Celebrity Chapter One Free"; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function downloadPDF2() {
    const link = document.createElement("a");
    link.href = "/Files/BrandlikeaCelebrityChapterOneTwoFreeVersion"; // Replace with your actual link
    link.download = "brandlikeacelebritychaptertwofreeversion.zip"; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function downloadPDF3() {
    const link = document.createElement("a");
    link.href = "/Files/BrandlikeaCelebrityChapterThreeFreeVersion"; // Replace with your actual link
    link.download = "brandlikeacelebritychaptersixfreeversion.zip"; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  // end of free chapters download 



  // thankyoupage download instead 


  function downloadInstead() {
    const link = document.createElement("a");
    link.href = "/Files/BrandlikeaCelebrity"; // Replace with your actual link
    link.download = "Brand Like a Celebrity"; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  // thankyou page download instead end 


 /* resources data Filter */ 
 
document.addEventListener("DOMContentLoaded", () => {
      const filterLinks = document.querySelectorAll('.filter-link');
      const resourceCards = document.querySelectorAll('.resource-card');

      filterLinks.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();

          filterLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          const filter = link.getAttribute('data-filter').toLowerCase();

          resourceCards.forEach(card => {
            const category = card.getAttribute('data-category').toLowerCase();
            card.style.display = (filter === 'all' || filter === category) ? 'inline-block' : 'none';
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
