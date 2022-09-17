// const block = document.querySelector(".block");

// let positionTop = 0;
// let position = 0;


// const move = () => {
//     if (position <= 440) {
//         position += 16;
//         block.style.right = `${position}px`;
//         setTimeout(move,75);
//     }
//     else if(positionTop <= 440 && position >= 440) {
//         positionTop += 16;
//         block.style.top = `${positionTop}px`;
//         setTimeout(move,75);
//     }
//     else if (positionTop = 440 ) {
//         position += 16;
//         block.style.left = `${position}px`;
//         setTimeout(move,75);
    // }
    // else (position = 440 ) ;{
    //     positionTop += 16;
    //     block.style.bottom = `${position}px`;
    //     setTimeout(move,50);
    // }
    
// }
// move()




// let position = 0;

// function recursionAnimation(){
//     position = position + 5;
//     if (position>200)return;
//     document.querySelector('.block').style.left = position + 'px';
//     document.querySelector('.block').style.top = position + 'px';
//     document.querySelector('.block').style.right = position + 'px';
//     document.querySelector('.block').style.bottom = position + 'px';
//     Animation();
// }

// function Animation(){
//     setTimeout(recursionAnimation,100)
// }
// Animation()


const block = document.querySelector(".block");

let position = 0;
let topPosition = 0;

const move = () => {
  if (position <= 360 && topPosition == 0) {
    position += 16;
    block.style.left = `${position}px`;
    console.log(setTimeout(move, 75));
  } else if (position >= 360 && topPosition <= 360) {
    topPosition += 16;
    block.style.top = `${topPosition}px`;
    console.log(setTimeout(move, 75));
  } else if (topPosition >= 360 && position != 0) {
    position -= 16;
    block.style.left = `${position}px`;
    console.log(setTimeout(move, 75));
  } else if (position == 0 && topPosition != 0) {
    topPosition -= 16;
    block.style.top = `${topPosition}px`;
    console.log(setTimeout(move, 75));
  }
};

move();