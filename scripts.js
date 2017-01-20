function randomWord() {
  const url = 'http://randomword.setgetgo.com/get.php';

  $.ajax({
    type: 'GET',
    url,
    dataType: 'jsonp',
    jsonpCallback: 'randomWordComplete'
  });
}

function randomWordComplete(data) {
  const letters = data.Word.toUpperCase().split('');
  const randy = document.querySelector('.random-word');
  const html = letters.map(letter => `<svg><use href="#letter-${letter}"></use></svg>`);

  randy.innerHTML = html;
  setDelay();
}

function setDelay() {
  const svgs = document.querySelectorAll('.random-word svg');

  svgs.forEach(svg => {
    const delay = Math.random();
    svg.style.animationDelay = `${delay}s`;

    svg.addEventListener('click', (e) => {
      if (!e.target.matches('svg')) return;
      e.target.style.stroke = 'red';
    });
  });
}

randomWord();
