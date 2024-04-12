"use strict";

const sectionList = document.querySelector (".js-list");
const ulList = document.querySelector (".list");

// const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
// const kittenOneName = 'Anastacio';
// const kittenOneDesc =
//   ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
// const kittenOneRace = 'Siamés';

// const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
// const kittenTwoName = 'Fiona';
// const kittenTwoDesc =
//   ` Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
//   hasta con pinta de alienígena han llegado a definir a esta raza
//   gatuna que se caracteriza por la «ausencia» de pelo.`;
// const kittenTwoRace = 'Sphynx';

// const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
// const kittenThreeName = 'Cielo';
// const kittenThreeDesc =
//   ` Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
//   bella mirada se ha convertido en una de sus señas de identidad.
//   Sus ojos son grandes y las orejas resultan largas y en punta.`;
// const kittenThreeRace = 'Maine Coon';

const kittenData1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

const kittenData2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc:` Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`,
  race: 'Sphynx',
};

const kittenData3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc:` Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`,
  race: 'Maine Coon',
};

function renderKitten(kittenData) {

  ulList.innerHTML += `<li class="card">
  <article>
    <img
      class="card_img"
      src= ${kittenData.image}
      alt="gatito"
    />
    <h3 class="card_title">${kittenData.name}</h3>
    <h4 class="card_race_one">${kittenData.image}</h4>
    <p class="card_description_one">
    ${kittenData.desc}
     </p>
  </article>
  </li>`;
}
renderKitten(kittenData1);
renderKitten(kittenData2);
renderKitten(kittenData3);

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


const filterKitten = (event)=>{
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const selectSearchText = input_search_select.value;

  ulList.innerHTML = "";
  if (descrSearchText != ""){
    if (kittenData1.desc.includes(descrSearchText)){
      renderKitten(kittenData1);
    }
    if (kittenData2.desc.includes(descrSearchText)){
      renderKitten(kittenData2);
    }
    if (kittenData3.desc.includes(descrSearchText)){
      renderKitten(kittenData3);
    }
  }else{
    renderKitten(kittenOneImage,kittenOneDesc,kittenOneName,kittenOneRace);
    renderKitten(kittenTwoImage,kittenTwoDesc,kittenTwoName,kittenTwoRace);
    renderKitten(kittenThreeImage,kittenThreeDesc,kittenThreeName,kittenThreeRace);
    const message = document.querySelector('.js-message');
    message.innerHTML=`<p> Por favor, rellene todos los campos antes de realizar su búsqueda. </p>`;
  }
  
  if (selectSearchText != ""){
    if (kittenData1.race === selectSearchText){
       renderKitten(kittenData1); 
    }
    if (kittenData2.race === selectSearchText){
        renderKitten(kittenData2);
    }
    if (kittenData3.desc === selectSearchText){
        renderKitten(kittenData3); 
    }
  }
}
  

btnSearch.addEventListener('click', filterKitten);
