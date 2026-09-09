/*==================== MENU SHOW & HIDDEN ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDE =====*/
/* Validate if constant exists */

/*==================== SCROLL HEADER ====================*/
const scrollHeader = () => {
  const header = document.getElementById('header');

  this.scrollY >= 50 
  ? header.classList.add('bg-header') 
  : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);

/*==================== NAVBAR SEARCH ====================*/
const navSearch = document.getElementById('nav-search'),
    search = document.getElementById('search');

    navSearch.addEventListener('click', () => {
        search.classList.toggle('show-search');

        if (navSearch.classList.contains('ri-search-line')) {
          navSearch.classList.replace('ri-search-line', 'ri-close-line');
        } else {
          navSearch.classList.replace('ri-close-line', 'ri-search-line');  
        }
    });

