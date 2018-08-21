let btn = document.getElementById('btn');

function animate(draw, duration) {
  let box = document.getElementById('box'),
      pos = 50,
      id = setInterval(frame, 5);

  function frame() {
    if ( pos == 500 ) {
      clearInterval(id);
    } else {
      pos++
      box.style.width = pos + "px";
      box.style.height = pos + "px";
    }
  }
}

btn.addEventListener('click', animate);