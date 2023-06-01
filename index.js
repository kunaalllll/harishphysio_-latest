// testimonials
const testimonials = [
  {
    name: "Ashwani Jha",
    job: "Developer, Cognizant",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac leo vitae metus fringilla pulvinar. Nulla facilisi. Donec nec malesuada nulla. Sed efficitur nisi vitae nulla finibus, ac euismod urna aliquet. Mauris sit amet nulla sed tellus malesuada pulvinar at nec nunc.",
    image: "https://www.w3schools.com/bootstrap4/img_avatar1.png",
  },
  {
    name: "Ananya Saxena",
    job: "Engineer, Delloite",
    text: "Vivamus bibendum nisl ac odio laoreet convallis. Aenean dictum semper magna, in tincidunt elit. In nec scelerisque sem, id feugiat nunc. Praesent dapibus orci ac quam consequat efficitur. Nunc ut facilisis justo, nec suscipit tortor.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/001/921/774/small/beautiful-woman-red-hair-in-frame-circular-avatar-character-free-vector.jpg",
  },
  {
    name: "Kunal Mathur",
    job: "Developer, Freelancer",
    text: "Vivamus bibendum nisl ac odio laoreet convallis. Aenean dictum semper magna, in tincidunt elit. In nec scelerisque sem, id feugiat nunc. Praesent dapibus orci ac quam consequat efficitur. Nunc ut facilisis justo, nec suscipit tortor.",
    image: "https://www.w3schools.com/bootstrap4/img_avatar1.png",
  },
  {
    name: "Tanmay Sharma",
    job: "Tester, MindTree",
    text: "Vivamus bibendum nisl ac odio laoreet convallis. Aenean dictum semper magna, in tincidunt elit. In nec scelerisque sem, id feugiat nunc. Praesent dapibus orci ac quam consequat efficitur. Nunc ut facilisis justo, nec suscipit tortor.",
    image: "https://www.w3schools.com/bootstrap4/img_avatar1.png",
  },
  // Add more testimonials here
];

let currentTestimonial = 0;
const testimonialImage = document.getElementById("testimonialImage");
const testimonialName = document.getElementById("testimonialName");
const testimonialJob = document.getElementById("testimonialJob");
const testimonialText = document.getElementById("testimonialText");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
function updateTestimonial() {
  const testimonial = testimonials[currentTestimonial];
  testimonialImage.src = testimonial.image;
  testimonialName.textContent = testimonial.name;
  testimonialJob.textContent = testimonial.job;
  testimonialText.textContent = testimonial.text;
}

function showPreviousTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

function showNextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial();
}

prevButton.addEventListener("click", showPreviousTestimonial);
nextButton.addEventListener("click", showNextTestimonial);

// Initial testimonial display
updateTestimonial();

//menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});

const menuItems = document.querySelectorAll('.md\\:block a');
menuItems.forEach(item => {
  item.addEventListener('click', function () {
    menuItems.forEach(item => item.classList.remove('text-white', 'bg-gray-900'));
    this.classList.add('text-white', 'bg-gray-900');
  });
});

//stats

function startCounterAnimation() {
  const totalCustomers = document.getElementById('totalCustomers');
  const totalClients = document.getElementById('totalClients');
  const totalProjects = document.getElementById('totalProjects');

  const animationDuration = 3000;
  const startValue = 0;
  const endValueCustomers = 5000; // Replace with your desired number
  const endValueClients = 13; // Replace with your desired number
  const endValueProjects = 100; // Replace with your desired number
  const frameRate = 24;
  const frameDuration = Math.floor(animationDuration / frameRate);
  const stepValueCustomers = Math.ceil((endValueCustomers - startValue) / frameRate);
  const stepValueClients = Math.ceil((endValueClients - startValue) / frameRate);
  const stepValueProjects = Math.ceil((endValueProjects - startValue) / frameRate);

  let currentValueCustomers = startValue;
  let currentValueClients = startValue;
  let currentValueProjects = startValue;

  const animateCounter = () => {
    if (currentValueCustomers <= endValueCustomers) {
      totalCustomers.textContent = currentValueCustomers;
      currentValueCustomers += stepValueCustomers;
    }
    if (currentValueClients <= endValueClients) {
      totalClients.textContent = currentValueClients;
      currentValueClients += stepValueClients;
    }
    if (currentValueProjects <= endValueProjects) {
      totalProjects.textContent = currentValueProjects;
      currentValueProjects += stepValueProjects;
    }

    if (
      currentValueCustomers <= endValueCustomers ||
      currentValueClients <= endValueClients ||
      currentValueProjects <= endValueProjects
    ) {
      requestAnimationFrame(animateCounter);
    }
  };

  // Check if the section is in view
  const section = document.querySelector('.container');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter();
        sectionObserver.unobserve(entry.target);
      }
    });
  });
  sectionObserver.observe(section);
}
startCounterAnimation();
