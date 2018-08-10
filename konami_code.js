const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let i = 0;

function init() {
  
  document.body.addEventListener('keydown', (e) => {
    
    const key = e.key;
    
    if (key === codes[i]) {
      i++;
      
      if (i === codes.length) {
        alert('Konami congrats!');
        
        i = 0;
      }
    } else {
      i = 0;
    }
  });
}
