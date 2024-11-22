const header = document.querySelectorAll('.head')
const content = document.querySelectorAll('.content')

header.forEach((header, i) => {
    header.addEventListener('click', () => {
      content[i].classList.toggle('content-hidden');
    });
  });
