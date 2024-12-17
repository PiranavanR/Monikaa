window.onload = function() {
    const toggleButton = document.getElementById('switch');
    const profileImage = document.querySelector('.images img');

    if (toggleButton && profileImage) {
        toggleButton.addEventListener('change', function() {
            document.documentElement.setAttribute('data-theme', this.checked ? 'dark' : 'light');
            localStorage.setItem('theme', this.checked ? 'dark' : 'light');
            
            profileImage.src = this.checked ? './img/Profile Dark.png' : './img/Profile Light.png';

            profileImage.alt = this.checked ? 'Profile Dark Mode' : 'Profile Light Mode';
        });

        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            toggleButton.checked = currentTheme === 'dark';
            
            profileImage.src = currentTheme === 'dark' ? './img/Profile Dark.png' : './img/Profile Light.png';

            profileImage.alt = currentTheme === 'dark' ? 'Profile Dark Mode' : 'Profile Light Mode';
        }
    } else {
        console.error('Toggle button or profile image not found!');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburg');
    const navBar = document.getElementById('nav-bar');

    hamburger.addEventListener('change', () => {
        navBar.style.opacity = hamburger.checked ? '1' : '0';
    });
});

const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    const dots = parseInt(circle.getAttribute("data-dots"));
    const marked = parseInt(circle.getAttribute("data-percent"));
    const percent = Math.floor((dots * marked) / 100);
    let points = '';
    const rotate = 360 / dots;
    // console.log(rotate)
    
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    circle.innerHTML = points;
    const pointsMarked = circle.querySelectorAll('.points');

    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

window.addEventListener('resize', () => {
  AOS.refresh();
});

const navLinks = document.querySelectorAll('nav a');

function handleNavigation(event) {
  event.preventDefault();

  navLinks.forEach(link => link.classList.remove('active'));

  this.classList.add('active');

  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

navLinks.forEach(link => link.addEventListener('click', handleNavigation));


document.getElementById("dismiss-btn").addEventListener('click', function(){
    console.log('Sample Button Clicked')
    document.getElementById('successMessage').classList.remove('active');
  });
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var formData = new FormData(this);
  
    fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        console.log('Sample Button Clicked')
        document.getElementById('successMessage').classList.add('active');
        this.reset(); // Reset the form fields
      } else {
        alert('There was a problem with your submission.');
      }
    }).catch(error => {
      console.error('Error:', error);
      alert('There was a problem with your submission.');
    });
  });