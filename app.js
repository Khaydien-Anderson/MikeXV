




//FUNCTION for mobile burger menu
function myFunction() {
    var x = document.getElementById("navlist");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

  };




  //function for submenu under video projects

  const vidProject = document.getElementById('videos');
const list = document.querySelector('#navlist');
const socialmedia = document.getElementById('socialmedia');


//Media queries
// document.addEventListener('DOMContentLoaded', () => {
//   x = window.matchMedia('(min-width: 768px)');



// if (x.matches) {

//   // let li = document.createElement('li');
//   //      let li2 = document.createElement('li');
//   //      list.appendChild(li);
//   //      list.appendChild(li2);
//   //      li.innerHTML = '<a href="producer.html">Producer</a>';
//   //      li2.innerHTML = '<a href="production_manager.html">Production Manager</a>';
// }},{once: true}) 

//CREATE NEW LIST ELEMENTS IN SUBMENU
vidProject.addEventListener('click', subfunction => {
  let i = 0;
  const x = window.matchMedia('(min-width: 768px)');
  
      do {
        
       i++;
       let li = document.createElement('li');
       let li2 = document.createElement('li');
       list.appendChild(li);
       list.appendChild(li2);
       li.innerHTML = '<a href="producer.html"> Producer</a>';
       li2.innerHTML = '<a href="production_manager.html"> Production Manager</a>';
       li.querySelector('a').style.opacity = '0.5';
       li2.querySelector('a').style.opacity = '0.5';
       li.style.borderBottom = '1px solid red'
       li2.style.borderBottom = '1px solid red'
       if (!x.matches) {
      li.style.width = '40%';
      li2.style.width = '40%';
      
       } 
       vidProject.setAttribute("onclick", "closeSubMenu()")
      
       list.insertBefore(li, socialmedia);
       list.insertBefore(li2, socialmedia);
      } 
      while (i >4);
    }, {once: true} ) ;
   
///CLOSE SUBMENU

    function closeSubMenu() {
      let li = document.querySelector('li:nth-child(3)');
      let li2 = document.querySelector('li:nth-child(2)');
      
      li2.style.display = 'none';
      li.style.display = 'none'; 
      vidProject.setAttribute("onclick", "openSubMenu()")
};

//Open submenu
function openSubMenu() {
  const x = window.matchMedia('(min-width: 768px)');
  let li = document.querySelector('li:nth-child(3)');
  let li2 = document.querySelector('li:nth-child(2)');
  
  li2.style.display = '';
  li.style.display = ''; 
  
  vidProject.setAttribute("onclick", "closeSubMenu()")
};




    //TOGGLE BUTTONS ON CONTACT FORM

   // Collect Data from Contact Form

   const form = document.querySelectorAll('.my-form');
   const submit = document.getElementById('submit');
   const textarea = document.getElementById('message');

  const formData = Array.from(document.querySelectorAll('input')).reduce((acc, input) => ({...acc,
  [input.id]: input.value}), {});
  
  // MOVIE play button (PRODUCER PAGE)

const play = document.querySelectorAll('.play-button');



//photo animation on (PRODUCER PAGE)

const photo_still = document.querySelectorAll('.photo_still');
const photo_play = document.querySelectorAll('.photo_play')
const play_button = document.querySelectorAll('.play-button')
const video = document.querySelectorAll('.production_video')

for (let i=0; i<photo_still.length; i++) {
  
  photo_still[i].addEventListener('mouseover', () => {
  photo_still[i].style.display = 'none'
  photo_play[i].style.display = ''
  photo_play[i].style.opacity = '1';
  }); // WHEN MOUSE HOVERS OVER PICTURE. GIF OF VIDEO PLAYS

  photo_play[i].addEventListener('mouseout', () => {
    photo_still[i].style.display = ''
    photo_play[i].style.display = 'none'
    
  }); // WHEN MOUSE HOVERS OVER GIF. PHOTO RETURNS


  for (let i = 0; i<play.length; i++) {
    play[i].addEventListener('click', () => {
      play[i].style.display ='none'
      photo_play[i].style.display ='none'
      photo_still[i].style.display = 'none'
      video[i].style.display = 'block';
      video[i].style.width = '90%'
      video[i].style.margin= '0 auto'
      video[i].play();
    })
    }
  
  // play_button[i].addEventListener('click', () => {
    
  //   photo_still[i].style.display = 'none'
  //   photo_play[i].style.display = 'none'

  // })

};

// HOME PAGE MOVIE SELECTION

const movie1 = document.querySelector('pic1')

movie1.addEventListener('click', () => {

  document.querySelector('html').style.backgroundColor = 'red'
})