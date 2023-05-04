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

const sort = () => { // the array parameter can be taco 
  let domString = `<form class="row gy-2 gx-3 align-items-center">
    <div class="col-auto">
      <label class="visually-hidden" for="autoSizingInput">Name</label>
      <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
    </div>
      <button type="submit" class="btn btn-primary">Sort!</button>
    </div>
  </form>`//and adds the html to render to variable for each pet (or the element of the array 'taco')
  
  renderToDom("#form-div", domString); // renderToDom is called with the arguments of #app (divId) and domString (htmlToRender)
}

sort()
