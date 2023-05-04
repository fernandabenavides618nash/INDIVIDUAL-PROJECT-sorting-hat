const main = document.getElementById("main");

const createForm = () => {
 const form = document.createElement('div')
 const inName = document.createElement('input')
 const btnSubmit = document.createElement('button')

 inName.type = 'text'
 btnSubmit.innerText = 'Sort'

 form.appendChild(inName)
 form.appendChild(btnSubmit)

 main.appendChild(form)


 btnSubmit.addEventListener('click', ()=> {
  

 })
}

const createCard = (name, house) => {
  //elements
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardName = document.createElement("h5");
  const cardHouse = document.createElement("h6");

  //style, ids
  card.className = "card";
  cardBody.className = "card-body";
  cardName.className = "card-title";

  //content
  cardName.innerHTML = name
  cardHouse.innerHTML = house

  //structure
  cardBody.appendChild(cardName)
  cardBody.appendChild(cardHouse)
  card.appendChild(cardBody)

  return card
};

createForm()
