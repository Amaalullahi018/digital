// const $ = (selector) =>{
//     return document.querySelector(selector);
// }
//  const hour = $ ('.hour');
//  const dot = $ ('.dot');
//  const min = $ ('.week');
//  let showDot = true;

//  function update () {
//     showDot = !showDot
//     const now = new Date();

//      if(showDot) {
//         dot.classList.add('invsible');
//      } else{
//         dot.classList.remove('invsible');
//      }
//      hour.textContent = String(now.getHours())
//        .padStart(2, '0');
//     min.textContent = String(now.getMinutes())
//     .padStart(2, '0');

//     Array
//       .from(week.children)
//       .forEach(
//         (ele) => {
//             ele.classList.remove('active');
//         }
//       );
//     week
//       .children[now.getDay()]
//       .classList
//       .add('active');
//  };

//  setInterval(update, 500);


const $ = (selector) => {
    return document.querySelector(selector);
};

const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = $('.week');
let showDot = true;

function update() {
    showDot = !showDot;

    const now = new Date();

    // Toggle visibility of the dot
    if (showDot) {
        dot.classList.add('invisible');
    } else {
        dot.classList.remove('invisible');
    }

    // Update hours and minutes
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');

    // Update active day in the week
    Array.from(week.children).forEach((ele) => {
        ele.classList.remove('active');
    });
    week.children[now.getDay()].classList.add('active');
}

// Start updating the clock every 500ms
setInterval(update, 500);

// Initialize the clock immediately
update();