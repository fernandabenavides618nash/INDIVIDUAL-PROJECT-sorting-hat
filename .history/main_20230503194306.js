console.log("here");

// Data

const students = [];
const army = [];

const houses = [
  {
    number: 1,
    name: "Gryffindor",
    color: "red",
  },
  {
    number: 2,
    name: "Hufflepuff",
    color: "yellow",
  },
  {
    number: 3,
    name: "Ravenclaw",
    color: "blue",
  },
  {
    number: 4,
    name: "Slytherin",
    color: "green",
  },
];

const voldemort = [
  {
    name: "'Voldemort's Army",
    color: "black",
  },
];

const formHtml = `<div  class="row gy-2 gx-3 align-items-center">
    <div class="col-auto">
      <label class="visually-hidden" for="autoSizingInput">Name</label>
      <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
    </div>
      <button class="btn btn-primary" >Sort!</button>
    </div>
  </div>`;

const renderToDom = (divId, htmlToRender) => {
  const selectedDivId = document.querySelector(divId); // a variable that stores the desired div (first parameter)
  selectedDivId.innerHTML = htmlToRender; // applies the .innerHTML property to the variable that stores the desired div and results in the htmlToRender (second parameter)
};

const start = () => {
  const initialScreen = `<div><h1>Welcome to Hogwarts</h1></div><div><h4>Let the Sorting Hat assign you to one of the houses</h4></div><button type="button" class="btn btn-outline-secondary" id='startButton'>Put on The Hat</button>`;
  renderToDom("#intro-screen", initialScreen);
  const showFormButton = document.querySelector("#startButton");
  showFormButton.addEventListener("click", () => {
    renderToDom("#form-div", formHtml);
  });
};
start();


const form = document.querySelector();
    form.addEventListener("", () => {
      renderToDom("#students-div", newStudentCard);
      form.reset();
    });



const createNewStudent = () => {
  e.preventDefault();
  const newStudentCard = {
    name: document.querySelector("#autoSizingInput").value,
    house: Math.floor(Math.random() * 4),
    expel: document.querySelector("#expelId"),
  };
  students.push(newStudentCard);
};

const roster = (array) => {
  let domString = `<div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">${students.name}</h5>
    <p class="card-text">${students.house}</p>
    <a href="#" class="btn btn-primary" id="expelId">Expel</a>
  </div>
</div>`;
};
