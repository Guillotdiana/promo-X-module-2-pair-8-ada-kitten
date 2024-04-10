"use strict";

const sectionList = document.querySelector (".js-list");
const ulList = document.querySelector (".list");

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';

const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc =
  ` Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenTwoRace = 'Sphynx';

const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeDesc =
  ` Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenThreeRace = 'Maine Coon';

function renderKitten(url, desc, name, race) {
  const ulList = document.querySelector (".list"); 
  ulList.innerHTML += `<li class="card">
  <article>
    <img
      class="card_img"
      src= ${url}
      alt="gatito"
    />
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race_one">${race}</h4>
    <p class="card_description_one">
    ${desc}
     </p>
  </article>
  </li>`;
}
renderKitten(kittenOneImage,kittenOneDesc,kittenOneName,kittenOneRace);
renderKitten(kittenTwoImage,kittenTwoDesc,kittenTwoName,kittenTwoRace);
renderKitten(kittenThreeImage,kittenThreeDesc,kittenThreeName,kittenThreeRace);

// const kittenOne = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src=${kittenOneImage}
//     alt="gatito"
//   />
//   <h3 class="card_title">${kittenOneName.toUpperCase()}</h3>
//   <h4 class="card_race_one">${kittenOneRace}</h4>
//   <p class="card_description_one">
//   ${kittenOneDesc}
//    </p>
// </article>
// </li>`;
// const kittenTwo = `<li class="card">
// <img
//   class="card_img"
//   src=${kittenTwoImage}
//   alt="sphynx-cat"
// />
// <h3 class="card_title">${kittenTwoName.toUpperCase()}</h3>
// <h4 class="card_race_two">${kittenTwoRace}</h4>
// <p class="card_description_two">
// ${kittenTwoDesc}
// </p>
// </li>` ;

// const kittenThree = `<li class="card">
// <img
//   class="card_img"
//   src=${kittenThreeImage}
//   alt="maine-coon-cat"
// />
// <h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
// <h4 class="card_race_three">${kittenThreeRace}</h4>
// <p class="card_description_three">
// ${kittenThreeDesc}
// </p>
// </li` ;


// ulList.innerHTML = kittenOne + kittenTwo + kittenThree;

// botón del +
const buttonAdd = document.querySelector(".js-btn-add");
const formSection = document.querySelector('.collapsed');
const newFormElement = document.querySelector('.js-section-menu');
formSection.classList.remove('collapsed');

function showNewCatForm() {
  formSection.classList.remove('collapsed');
}
function hideNewCatForm() {
  formSection.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm() ;
  }
}
buttonAdd.addEventListener('click', handleClickNewCatForm);

//botón añadir

const btnAddForm = document.querySelector('.js_btn_add_form');
const imageFormInput = document.querySelector('.js_form_image');
const nameFormInput = document.querySelector('.js_form_name');
const raceFormInput = document.querySelector('.js_form_race');
const descriptionFormInput = document.querySelector('.js_form_description');

function addNewKitten(event) {
  event.preventDefault();
  const imageFormValue = imageFormInput.value;
  const nameFormValue = nameFormInput.value;
  const raceFormValue = raceFormInput.value;
  const descriptionFormValue = descriptionFormInput.value;

  ulList.innerHTML += 
  `<li class="card">
<article>
  <img
    class="card_img"
    src=${imageFormValue}
    alt="gatito"
  />
  <h3 class="card_title">${nameFormValue.toUpperCase()}</h3>
  <h4 class="card_race_one">${raceFormValue}</h4>
  <p class="card_description_one">
  ${descriptionFormValue}
   </p>
</article>
</li>`;
}

btnAddForm.addEventListener('click', addNewKitten);

// botón cancelar
const buttonCancel = document.querySelector(".js_btn_cancel");
const formMenu = document.querySelector('.js_formMenu');
buttonCancel.addEventListener("click", (event)=>{
  // ocultar sección
  formSection.classList.add('collapsed');
  // resetar inputs del formulario
  formMenu.reset();
})

 //búsqueda por descripción y raza
const input_search_desc = document.querySelector('.js_in_search_desc');
const btnSearch = document.querySelector('.btn-search');
const input_search_select = document.querySelector('.js_select');

const descKittenOne = document.querySelector('.card_description_one');
const descKittenTwo = document.querySelector('.card_description_two');
const descKittenThree = document.querySelector('.card_description_three');
const raceKittenOne = document.querySelector('.card_race_one');
const raceKittenTwo = document.querySelector('.card_race_two');
const raceKittenThree = document.querySelector('.card_race_three');

btnSearch.addEventListener("click", (event)=>{
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const selectSearchText = input_search_select.value;

  ulList.innerHTML = "";
  if (descrSearchText != ""){
    if (descKittenOne.textContent.includes(descrSearchText)){
      console.log('Se ha encontrado la descripción del gato 1');
      ulList.innerHTML = kittenOne;
    }
    if (descKittenTwo.textContent.includes(descrSearchText)){
      ulList.innerHTML += kittenTwo;
    }
    if (descKittenThree.textContent.includes(descrSearchText)){
      ulList.innerHTML += kittenThree;
    }
  }

  if (selectSearchText != ""){
    if (raceKittenOne.textContent === selectSearchText){
      console.log('Se ha encontrado la descripción del gato 1');
      if (!ulList.innerHTML.includes(kittenOne)){
        ulList.innerHTML += kittenOne;
      }
    }
    if (raceKittenTwo.textContent === selectSearchText){
      if (!ulList.innerHTML.includes(kittenTwo)){
        ulList.innerHTML += kittenTwo;
      }
    }
    if (raceKittenThree.textContent === selectSearchText){
      if (!ulList.innerHTML.includes(kittenThree)){
        ulList.innerHTML += kittenThree;
        ;
      }
    }
  }
})
