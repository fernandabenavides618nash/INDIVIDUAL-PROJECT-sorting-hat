console.log("here");

// Data

const army = [];

const houses = [
  {
    number: 1,
    name: "Gryffindor",
    color: "Red",
  },
  {
    number: 2,
    name: "Hufflepuff",
    color: "Yellow",
  },
  {
    number: 3,
    name: "Ravenclaw",
    color: "Blue",
  },
  {
    number: 4,
    name: "Slytherin",
    color: "Green",
  },
  {
    number: 5,
    name: "Voldemot's",
    color: "Black",
  },
];

const formHtml = `<div  class="row gy-2 gx-3 align-items-center" id="forma">
    <div class="col-auto">
      <label class="visually-hidden" for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Jane Doe">
    </div>
      <button id="sort" class="btn btn-primary" >Sort!</button>
    </div>
  </div>`;

const btnFilter = `<div id="filterDiv" class="buttons">
  <button type="button" class="btn btn-primary" id="btncolorYellow">Hufflepuff</button>
  <button type="button" class="btn btn-primary" id="btncolorBlue">Ravenclaw</button>
  <button type="button" class="btn btn-primary" id="btncolorGreen">Slytherin</button>
  <button type="button" class="btn btn-primary" id="btncolorRed">Gryffindor</button>
  <button type="button" class="btn btn-primary" 
  id="btnAll">All</button>
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
    <div class="expelled" id="expelled-div"><h3>Voldemorts</h3></div>`;

    renderToDom("#school-div", schoolString);
    renderToDom("#form-div", formHtml);

    const schoolDiv = document.querySelector("#students-div");

    schoolDiv.addEventListener("click", (e) => {
      moveStudent(e);
    });

    addRenderToDom("#app", btnFilter);

    filter();

    const btnSort = document.querySelector("#sort");

    btnSort.addEventListener("click", () => {
      const name = document.querySelector("#name").value;
      createNewStudent(name);
    });
  });
};
start();

const filter = () => {
  const filterDiv = document.getElementById("filterDiv");
  filterDiv.addEventListener('click', (e) => {
    const allCards = document.getElementsByClassName('card-school')
    const btnId = ('' + e.target.id).split('btn')[1]
    for(let i = 0; i < allCards.length; i++){
      allCards[i].removeAttribute("hidden");
      if(!allCards[i].classList.contains(btnId)){
        allCards[i].setAttribute("hidden", "");
      }
    }

  })

    /*for (let i = 0; i < allCards.length; i++) {
      allCards[i].removeAttribute("hidden");
      if (!allCards[i].classList.contains("colorYellow")) {
        allCards[i].setAttribute("hidden", "");
      }
    }*/


};

const moveStudent = (e) => {
  if (e.target.id.includes("btn")) {
    const idStudent = e.target.id.split("btn")[1];
    const card = document.querySelector(`#card${idStudent}`);
    const voldemortCard = `<div class="card w-75 colorBlack">
    <div class="card-body">
      <h5 class="card-title">${idStudent}</h5>
      <p class="card-text">Voldemort's Army</p>
    </div>
  </div>`;
    card.remove();
    addRenderToDom("#expelled-div", voldemortCard);
  }
};

const createNewStudent = (name) => {
  const houseNumber = Math.floor(Math.random() * 4);
  console.log(houseNumber);
  let houseName = "";
  let houseColor = "";
  houses.forEach((house) => {
    if (house.number === houseNumber + 1) {
      houseName += house.name;
      houseColor += house.color;
    }
  });
  createStudentCard(name, houseName, houseColor);
};

const createStudentCard = (name, house, houseColor) => {
  const domString = `<div class="card card-school w-75 color${houseColor}" id="card${name}">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${house}</p>
    <a href="#" class="btn btn-primary " id="btn${name}">Expel</a>
  </div>
</div>`;
  addRenderToDom("#students-div", domString);
};
