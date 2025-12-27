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

/*
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".desktop-slideshow img");
  let current = 0;

  function showNextImage() {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }

  // Change image every 3 seconds
  setInterval(showNextImage, 1000);
});

*/

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-slideshow img");
  let current = 0;

  function showNextImage() {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }

  // Change image every 3 seconds
  setInterval(showNextImage, 1000);
});


const testimonials = [
  {
    name: "Asim Ahmed",
    role: "Founder",
    linkText: "Connecta Ads",
    linkHref: "",
    imgSrc: "Images/asimm.png",
    text: "”Working with Pessoals was honestly one of the best investments I’ve made. It gave me so much clarity and really helped me move forward with my business.”"
  },
  {
    name: "Sofia Bennett",
    role: "CEO",
    linkText: "BrightPath Solutions.",
    linkHref: "#",
    imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "”The process was smooth, creative, working with them felt so easy, and they really understood what I needed. The difference it made in both me and my business was huge.”"
  },
  {
    name: "Emily Dawson",
    role: "Tax Advisor",
    linkText: "NextWave Consulting.",
    linkHref: "#",
    imgSrc: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "”Working with Pessoals was a game-changer for me. They didn’t just design a personal brand they helped me figure out who I really am and how to show that to the world.”"
  },
  {
    name: "James Carter",
    role: "Content Creator",
    linkText: "HorizonWorks.",
    linkHref: "#",
    imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "”I honestly didn’t know where to start with my personal brand, but Pessoals made it simple and real. Now I feel like I’m finally being seen for who I am, and I’ve started getting so much more traffic and attention online.”"
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


  // Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
  const reasons = document.querySelectorAll('.reason');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  reasons.forEach(reason => {
    observer.observe(reason);
  });
});


/* Pop up free download */ 


function showModal() {
  document.getElementById('subscribeModal').style.display = 'flex';
}

function hideModal() {
  document.getElementById('subscribeModal').style.display = 'none';
}

function processForm(event) {
  event.preventDefault();

  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();
  const consent = document.getElementById('userConsent').checked;

  if (!consent) {
    alert("You must agree to receive emails to proceed.");
    return false;
  }

  if (!name || !email) {
    alert("Please fill in your name and email.");
    return false;
  }

  const mailchimpUrl = 'https://us15.list-manage.com/subscribe/post-json?u=07e655f1ee6606d6949ea7dbb&id=4798db1474&c=?';

  const params = new URLSearchParams();
  params.append('EMAIL', email);
  params.append('FNAME', name);

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

  jsonp(mailchimpUrl + '&' + params.toString(), function(response) {
    if (response.result === 'success' || response.result === 'error') {
      hideModal();
      window.location.href = '/personalbrandcompetetiveanalysis.html';
    } else {
      alert('There was an error submitting your email. Please try again.');
    }
  });

  return false;
}

/* Pop up free download end */ 

// Auto tick squares every second
const squares = document.querySelectorAll(".progress-squares .square");
let filled = 0;
const totalFilled = 37; // how many should be filled initially

function tickSquare() {
  if (filled < totalFilled) {
    squares[filled].classList.add("filled");
    filled++;
  }
}

// Fill initial squares instantly
for (let i = 0; i < 37; i++) {
  squares[i].classList.add("filled");
  filled++;
}

// Optional: simulate live sales after page load
let liveIndex = 37; // starting after initial filled
const liveInterval = setInterval(() => {
  if (liveIndex >= squares.length) {
    clearInterval(liveInterval);
  } else {
    squares[liveIndex].classList.add("filled");
    liveIndex++;
  }
}, 2000); // tick every 2 seconds
 // Initialize Clipboard.js for all buttons with class 'accesscodecopybutton'
    var clipboard = new ClipboardJS('.accesscodecopybutton');

    clipboard.on('success', function(e) {
    const btn = e.trigger;
    btn.innerHTML = '✓ Copied';
    setTimeout(() => {
      btn.innerHTML = 'Copy code';
    }, 2000);
    e.clearSelection();
  });

    clipboard.on('error', function(e) {
      console.error('Copy failed:', e);
    });
     // Total number of copies and how many are sold
  const totalCopies = 50;
  const soldCopies = 37;

  // Access the progress container where segments will be added
  const container = document.getElementById('progress');

  // Create 50 segments based on sold and remaining copies
  for (let i = 1; i <= totalCopies; i++) {
    const segment = document.createElement('div');
    segment.classList.add('segment');
    
    // If the segment is sold, mark it as sold
    if (i <= soldCopies) {
      segment.classList.add('sold');
    }
    
    // Append the segment to the container
    container.appendChild(segment);
  }