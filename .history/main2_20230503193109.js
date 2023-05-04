const main = document.getElementById("main");
const hogwarts = document.getElementById('hogwarts')
const voldemorts = document.getElementById('voldemorts')

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
  const newCard = createCard(inName.value, 'Hola')
  hogwarts.appendChild(newCard)
 })
}

const createCard = (name, house) => {
  //elements
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardName = document.createElement("h5");
  const cardHouse = document.createElement("h6");
  const btnExpel = document.createElement('button')

  //style, ids
  card.className = "card";
  cardBody.className = "card-body";
  cardName.className = "card-title";
  btnExpel.className = "btn btn-primary mb-3"

  //content
  cardName.innerHTML = name
  cardHouse.innerHTML = house
  btnExpel.innerText = 'Expel'

  //structure
  cardBody.appendChild(cardName)
  cardBody.appendChild(cardHouse)
  cardBody.appendChild(btnExpel)
  card.appendChild(cardBody)

  //events
  btnExpel.addEventListener('click', () => {
    cardBody.removeChild(btnExpel)
    voldemorts.appendChild(card)
    hogwarts.removeChild(card)
  })

  return card
};

createForm()
