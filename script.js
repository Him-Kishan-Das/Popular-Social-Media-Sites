const box = document.querySelectorAll(".box");

let i = 0;
box[i].style.display = 'block';

function nextButton(){
    box.forEach( (box, i) => {
          box.style.display = 'none';
        })
  
        if(i == box.length){
          i = 0;
        }
    box[i].style.display = 'block';
    i++;
  
  }

  function prevButton() {
    box.forEach((box, i) => {
      box.style.display = 'none';
    })
  
  
    if (i == 0) {
      i = box.length;
  
    }
    i--;
    box[i].style.display = 'block';
  
  
  }