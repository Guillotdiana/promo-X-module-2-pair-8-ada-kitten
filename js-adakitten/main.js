"use strict";

const sectionList = document.querySelector (".js-list");

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;
const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>` ;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li` ;

const ulList = document.querySelector (".list");
ulList.innerHTML = kittenOne + kittenTwo + kittenThree;

const buttonAdd = document.querySelector(".js-btn-add");
const formSection = document.querySelector('.collapsed');
formSection.classList.remove('collapsed');
buttonAdd.addEventListener("click", (event)=>{
  event.preventDefault();
  console.log('Holiiii');
  formSection.classList.toggle('collapsed');
});

const sectionMenu = document.querySelector(".js-section-menu");
const buttonCancel = document.querySelector(".js_btn_cancel");
const formMenu = document.querySelector('.js_formMenu');
buttonCancel.addEventListener("click", (event)=>{
  event.preventDefault();
  console.log('Cancelar');
  formSection.classList.add('collapsed');
  formMenu.reset();
})

const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_select = document.querySelector('.js_select');
const btnSearch = document.querySelector('.btn-search');
btnSearch.addEventListener("click", (event)=>{
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const selectSearchText = input_search_select.value;
  if( kittenOne.includes(descrSearchText) ) {
    console.log('Se ha encontrado la descripción del gato 1');
    }
    if( kittenTwo.includes(descrSearchText) ) {
      console.log('Se ha encontrado la descripción del gato 2');
    }
    if( kittenThree.includes(descrSearchText) ) {
      console.log('Se ha encontrado la descripción del gato 3');
    }
  
})


