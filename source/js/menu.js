let header = document.querySelector('.page-header');
let headerToggle = document.querySelector('.page-header__toggle');

header.classList.remove('page-header--no-js');

headerToggle.addEventListener('click', function () {
  if (header.classList.contains('page-header--closed')) {
    header.classList.remove('page-header--closed');
    headerToggle.classList.add('page-header__toggle--close');
  } else {
    header.classList.add('page-header--closed');
    headerToggle.classList.remove('page-header__toggle--close');
  }
});
