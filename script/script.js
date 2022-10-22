// Model Dataset
const data = [
  {
    heading: 'Anga WeatherApp',
    image: './images/tonic1.svg',
    description: 'This is a web application that allows a user to post a project they have created and get it reviewed by his/her pairs.',
    liveDemo: 'https://anga-weather.herokuapp.com/',
    code: 'https://github.com/AbdimulhinYussuf3675/HaliAnga',
  },
  {
    heading: 'Project Awards',
    image: './images/Multipost1.svg',
    description: 'This is an app that provides users with weather conditions for the places of their choice',
    liveDemo: 'https://clizzy-awards.herokuapp.com/',
    code: 'https://github.com/AbdimulhinYussuf3675/Awwards-',
  },
  {
    heading: 'Instagram Clone',
    image: './images/tonic2.svg',
    description: 'Instagram_clone is simply a clone of the website for the popular photo app Instagram',
    liveDemo: 'https://adan-insta.herokuapp.com/',
    code: 'https://github.com/BryteLitty/portfolio-project',
  },
  {
    heading: 'Kaniro Neighborhood',
    image: './images/Multpost2.svg',
    description: 'A web application that allows users to get information about everything happening in his/her neighborhood.',
    liveDemo: 'https://kanairo-watch.herokuapp.com/',
    code: 'https://github.com/AbdimulhinYussuf3675/home-watch ',
  },
];

const openBtn = document.querySelector('.nav-icon');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.list-item');
// Modal functionality
const modal = document.getElementById('project');
const modalContent = document.querySelector('.modal-wrapper');
const modalBtn = document.querySelectorAll('.modalBtn');

openBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show-mobile-menu');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show-mobile-menu');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show-mobile-menu');
  });
});

modalBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const i = e.currentTarget.dataset.id - 1;
    modalContent.innerHTML = `
    <div class="content">
                    <span id="closeBtn" class="close">&times;</span>
                    <h1>${data[i].heading}</h1>
                    <ul class="best">
                        <li class="canopy">canopy</li>
                        <li><img src="./images/Counter.svg" alt=""></li>
                        <li>Back End Dev</li>
                        <li><img src="./images/Counter.svg" alt=""></li>
                        <li>2015</li>
                    </ul>
                    <div class="modal-img-container">
                        <img src="${data[i].image}" alt="">
                    </div>

                    <div class="info">
                        <div class="text">
                            <p>${data[i].description}</p>    
                        </div>

                        <div class="side">
                            <ul class="skills">
                                <li>html</li>
                                <li>css</li>
                                <li>javascript</li>
                            </ul>
                            <hr>
                            <div class="btn-container">
                                <a href="${data[i].liveDemo}">
                                    <button class="modal-btn"> 
                                        See Live <img src="./images/icons/live.png" alt="see live">
                                    </button>
                                </a>
                                <a href="${data[i].code}">
                                    <button class="modal-btn">
                                    Source <img src="./images/icons/github_blue.png" alt="see live">
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
    modal.style.display = 'block';
    const closeModal = document.getElementById('closeBtn');
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
});

const form = document.querySelector('.form');
const error = document.querySelector('.error-msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = form.elements.email.value;
  const correctInput = emailInput.toLowerCase();

  if (emailInput === correctInput) {
    form.submit();
  } else {
    error.style.display = 'block';
    form.elements.email.style.border = '1px solid red';
  }
});

const saveData = () => {
  inputInfo.fullName = fullName.value;
  inputInfo.email = email.value;
  inputInfo.message = message.value;
  // Stringify data
  const storeData = JSON.stringify(inputInfo);

  localStorage.setItem('userInfo', storeData);
};

const getData = localStorage.getItem('userInfo');
const newData = JSON.parse(getData);

fullName.value = newData.fullName;
email.value = newData.email;
message.value = newData.message;