console.log("here");

// Data

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
      <label class="visually-hidden" for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Jane Doe">
    </div>
      <button id="sort" class="btn btn-primary" >Sort!</button>
    </div>
  </div>`;

const renderToDom = (divId, htmlToRender) => {
  const selectedDivId = document.querySelector(divId); // a variable that stores the desired div (first parameter)
  selectedDivId.innerHTML = htmlToRender; // applies the .innerHTML property to the variable that stores the desired div and results in the htmlToRender (second parameter)
};

const addRenderToDom = (divId, htmlToRender) => {
  const selectedDivId = document.querySelector(divId); // a variable that stores the desired div (first parameter)
  selectedDivId.innerHTML += htmlToRender; // applies the .innerHTML property to the variable that stores the desired div and results in the htmlToRender (second parameter)
};

const start = () => {
  const initialScreen = `<div><h1>Welcome to Hogwarts</h1></div><div><h4>Let the Sorting Hat assign you to one of the houses</h4></div><button type="button" class="btn btn-outline-secondary" id='startButton'>Put on The Hat</button>`;
  renderToDom("#intro-screen", initialScreen);
  const showFormButton = document.querySelector("#startButton");
  showFormButton.addEventListener("click", () => {
    const schoolString = `<div class="students" id="students-div"><h3>Hogwarts</h3></div>
    <div class="expelled" id="expelled-div"><h3>Voldemorts</h3></div>`
    enderToDom('#school-div', schoolString)
    renderToDom("#form-div", formHtml);
    const btnSort = document.querySelector('#sort')
    btnSort.addEventListener('click', () => {
      r
      const name = document.querySelector('#name').value
      createNewStudent(name)
    })
   
  });
};
start();


const createNewStudent = (name) => {
  const houseNumber = Math.floor(Math.random() * 4)
  console.log(houseNumber)
  const houseName = ''
   /*houses.forEach(house => {
    if(house.number === houseNumber){
      houseName += house.name
    }
   })*/
   createStudentCard(name, houseName)

}

const createStudentCard = (name, house) => {
  const domString = `<div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${house}</p>
    <a href="#" class="btn btn-primary" id="btn${name}">Expel</a>
  </div>
</div>`
addRenderToDom('#students-div', domString)
const btn = document.querySelector(`#btn${name}`)
btn.addEventListener('click', () => {

})
}
 





/*const createNewStudent = () => {
  e.preventDefault();
  const newStudentCard = {
    name: document.querySelector("#name").value,
    house: Math.floor(Math.random() * 4),
    expel: document.querySelector("#expelId"),
  };
  students.push(newStudentCard);
};*/

/*const roster = (array) => {
  let domString = `<div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">${students.name}</h5>
    <p class="card-text">${students.house}</p>
    <a href="#" class="btn btn-primary" id="expelId">Expel</a>
  </div>
</div>`;
};
*/
