console.log("here");

// Data

const students = [];
const army = [];

const houses = [
  {
    name: 'Gryffindor',
    className: 'gryffindor-card',
  },
  {
    name: 'Hufflepuff',
    className: 'hufflepuff-card',
  },
  {
    name: 'Ravenclaw',
    className: 'ravenclaw-card',
  },
  {
    name: 'Slytherin',
    className: 'slytherin-card',
  },
  {
    name: "Voldemort's Army",
    className: 'voldey-card',
  },
];

const renderToDom =(divId, htmlToRender) => {
  const selectedDivId = document.querySelector(divId); // a variable that stores the desired div (first parameter)
  selectedDivId.innerHTML = htmlToRender; // applies the .innerHTML property to the variable that stores the desired div and results in the htmlToRender (second parameter)
}

const cardsOnDom = () => { // the array parameter can be taco 
  let domString = `<form class="row gy-2 gx-3 align-items-center">
    <div class="col-auto">
      <label class="visually-hidden" for="autoSizingInput">Name</label>
      <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
    </div>
      <button type="submit" class="btn btn-primary">Sort!</button>
    </div>
  </form>`//and adds the html to render to variable for each pet (or the element of the array 'taco')
  
  renderToDom("#form-id", domString); // renderToDom is called with the arguments of #app (divId) and domString (htmlToRender)
}

cardsOnDom()


// Helper Functions
const printToDOM = (query, newHTML) => {
  document.querySelector(query).innerHTML = newHTML;
};

const createEventListener = (query, callbackFn, action = 'click') => {
  document.querySelector(query).addEventListener(action, callbackFn);
};

const getRandomHouse = () =>
  houses[Math.floor(Math.random() * (houses.length - 1))];

const getRandomSaying = () =>
  loremIpsum.split('.')[
    Math.floor(Math.random() * loremIpsum.split('.').length)
  ];

const createStudentObj = (studentName) => {
  return {
    studentName,
    house: getRandomHouse(),
    uuid: uuidv4(),
    canExpel: true,
  };
};

const filterHouse = (studentArray, house) => {
  const filteredStudents = studentArray.filter(
    (student) => student.house.name.toLowerCase() === house
  );
  return [filteredStudents, []];
};

// Components
const jumbotronHTML = () =>
  `<div class="jumbotron jumbotron-container">
        <h1 class="display-4">Welcome to Hoggy Warts</h1>
        <p class="lead">
            ${getRandomSaying() || 'Palominos scarlet train black robes,'}
        </p>
        <hr class="my-4">
        <div class="lead" id="sort-button-container">
            <p>Click the botton below to start sorting students</p>
            <button class="btn btn-primary btn-lg" id="sorting-button" role="button">Start Sorting</button>
        </div>
        <div class="lead" id="student-form"></div>
    </div>`;

const formHTML = () => `
<form id="submit-sort-student">
    <div class="form-group">
        <label for="studentName">Student Name</label>
        <input type="text" class="form-control" id="studentName" required>
    </div>
    <button type="submit" class="btn btn-primary mb-2" >Sort Student</button>
</form>
`;

const studentCardHTML = (studentObj) => `
    <div class="card student-card ${
      studentObj.house.className
    }" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${studentObj.studentName}</h5>
            <p class="card-text">${studentObj.house.name}</p>
            ${
              studentObj.canExpel
                ? `<button class="btn ${studentObj.house.className}-button mb-2" id="expel--${studentObj.uuid}">Expel</button>`
                : ''
            }
        </div>
    </div>
`;

const cardContainer = () => {
  const filters = [
    'Original',
    'Alphabetically',
    'House',
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin',
    'Voldemorts',
  ];
  return `
  <div class="form-group option-buttons-container">
    <label for="option-buttons">Select Order: </label>
    <select class="form-control" id="option-buttons">
    ${filters
      .map(
        (filter) =>
          `<option id="${filter.toLowerCase()}--filter" type="button" value="${filter.toLowerCase()}" class="${filter.toLowerCase()}-filter-button">${filter}</option>`
      )
      .join('')}
  </select> 
  </div>
  </div>
      </div>
      <div class="column-toggler">
          <button id="toggle-first-years" class="btn btn-secondary active">First Years</button>
          <button id="toggle-voldeys-army" class="btn btn-secondary" type="button" >Voldey's Army</button>
      </div>
      <div class="card-containers">
          <div id="first-years-column" class="card-column">
              <h2 class="container-heading">First Years</h2>
              <div class="card-container" id="student-cards"></div>
          </div>
          <div id="voldeys-column" class="card-column voldeys-column-hidden"> 
              <h2 class="container-heading">Voldey's Army</h2>
              <div class="card-container" id="student-cards-army"></div>
          </div>
      </div>
`;
};

const studentCardListHTML = (studentArray) =>
  studentArray.map((student) => studentCardHTML(student)).join('');

// Rendering functions
const rerenderCards = (studentsArray = students, armyArray = army) => {
  printToDOM('#student-cards', studentCardListHTML(studentsArray));
  printToDOM('#student-cards-army', studentCardListHTML(armyArray));
};

const renderCardContainers = () => {
  printToDOM('#card-container-div', cardContainer());
  createEventListener('#student-cards', handleCardClick);
  createEventListener('#toggle-voldeys-army', handleToggleColumn);
  createEventListener('#toggle-first-years', handleToggleColumn);
  createEventListener('#option-buttons', handleOptionButtons, 'input');
};

// Event Callbacks
const handleSubmitStudentForm = (e) => {
  e.preventDefault();
  const studentInput = document.querySelector('#studentName');
  const studentName = studentInput.value;
  studentInput.value = '';
  students.unshift(createStudentObj(studentName));
  renderCardContainers();
  rerenderCards();
};

const handleToggleForm = () => {
  printToDOM('#student-form', formHTML());
  printToDOM('#sort-button-container', '');
  createEventListener(
    '#submit-sort-student',
    handleSubmitStudentForm,
    'submit'
  );
};

const handleCardClick = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  if (targetType === 'submit' && targetId.startsWith('expel--')) {
    const itemId = targetId.split('--')[1];
    const targetStudentIndex = students.findIndex(
      (student) => student.uuid === itemId
    );
    const expelledStudent = students.splice(targetStudentIndex, 1);
    army.unshift(
      Object.assign(...expelledStudent, { canExpel: false, house: houses[4] })
    );
    rerenderCards();
  }
};

const handleToggleColumn = (e) => {
  const targetId = e.target.id;
  const firstYearsSelector = document.querySelector('#first-years-column');
  const firstYearsButtonSelector = document.querySelector(
    '#toggle-first-years'
  );
  const voldeysSelector = document.querySelector('#voldeys-column');
  const voldeysButtonSelector = document.querySelector('#toggle-voldeys-army');

  if (targetId === 'toggle-first-years') {
    firstYearsSelector.classList.remove('first-years-column-hidden');
    voldeysSelector.classList.add('voldeys-column-hidden');
    voldeysButtonSelector.classList.remove('active');
    firstYearsButtonSelector.classList.add('active');
  } else if (targetId === 'toggle-voldeys-army') {
    voldeysSelector.classList.remove('voldeys-column-hidden');
    firstYearsSelector.classList.add('first-years-column-hidden');
    firstYearsButtonSelector.classList.remove('active');
    voldeysButtonSelector.classList.add('active');
  }
};

const handleOptionButtons = (e) => {
  const targetValue = e.target.value;
  let newStudents = [...students];
  let newArmy = [...army];

  if (targetValue === 'alphabetically') {
    newStudents.sort((a, b) =>
      a.studentName.toLowerCase() > b.studentName.toLowerCase() ? 1 : -1
    );
    newArmy.sort((a, b) =>
      a.studentName.toLowerCase() > b.studentName.toLowerCase() ? 1 : -1
    );
  } else if (targetValue === 'house') {
    newStudents.sort((a, b) => {
      return a.house.name.toLowerCase() > b.house.name.toLowerCase()
        ? 1
        : a.house.name.toLowerCase() < b.house.name.toLowerCase()
        ? -1
        : a.studentName.toLowerCase() > b.studentName.toLowerCase()
        ? 1
        : -1;
    });
    newArmy.sort((a, b) =>
      a.studentName.toLowerCase() > b.studentName.toLowerCase() ? 1 : -1
    );
  } else if (targetValue === 'voldemorts') {
    [newArmy, newStudents] = filterHouse(army, "voldemort's army");
  } else if (targetValue === 'original') {
  } else {
    [newStudents, newArmy] = filterHouse(newStudents, targetValue);
  }
  rerenderCards(newStudents, newArmy);
};

const handleDarkMode = () => {
  const buttonSelector = document.querySelector('#dark-mode');
  const styleSelector = document.querySelector('#dark-toggler-styles');

  if (styleSelector.href.includes('normal.css')) {
    styleSelector.href = 'styles/dark.css';
    buttonSelector.textContent = 'Light Mode';
  } else {
    styleSelector.href = 'styles/normal.css';
    buttonSelector.textContent = 'Dark Mode';
  }
};

// Functions that run initially
const addInitialEventListeners = () => {
  createEventListener('#sorting-button', handleToggleForm);
  createEventListener('#dark-mode', handleDarkMode);
};

const printInitialHTML = () => {
  const initialHTML = `
    <button class="btn dark-mode-toggler" id="dark-mode" type="button">Dark Mode</button>
    ${jumbotronHTML()}
    <div id="card-container-div">
    </div>
    `;
  printToDOM('#app', initialHTML);
};

const init = () => {
  printInitialHTML();
  addInitialEventListeners();
};

init();
