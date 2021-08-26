"use strict";
// Verify navbar blur on scroll
navbarBlurOnScroll('navbarBlur');


// initialization of Tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});


// Tabs navigation

const total = document.querySelectorAll('.nav-pills');

total.forEach(function(item) {
  const moving_div = document.createElement('div');
  const first_li = item.querySelector('li:first-child .nav-link');
  const tab = first_li.cloneNode();
  tab.innerHTML = "-";

  moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
  moving_div.appendChild(tab);
  item.appendChild(moving_div);

  moving_div.style.padding = '0px';
  moving_div.style.width = `${item.querySelector('li:nth-child(1)').offsetWidth} px`;
  moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
  moving_div.style.transition = '.5s ease';

  item.onmouseover = function(event) {
    const target = getEventTarget(event);
    let li = target.closest('li'); // get reference
    if (li) {
      const nodes = Array.from(li.closest('ul').children); // get array
      const index = nodes.indexOf(li) + 1;
      item.querySelector(`li:nth-child(${index}) .nav-link`).onclick = function() {
        moving_div = item.querySelector('.moving-tab');
        let sum = 0;
        if (item.classList.contains('flex-column')) {
          for (let j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector(`li:nth-child(${j})`).offsetHeight;
          }
          moving_div.style.transform = `translate3d(0px, ${sum}px, 0px)`;
          moving_div.style.height = item.querySelector(`li:nth-child(${j})`).offsetHeight;
        } else {
          for (let j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector(`li:nth-child(${j})`).offsetWidth;
          }
          moving_div.style.transform = `translate3d(${sum}px, 0px, 0px)`;
          moving_div.style.width = `${item.querySelector(`li:nth-child(${index})`).offsetWidth}px`;
        }
      };
    }
  };
});


// Tabs navigation resize

window.addEventListener('resize', function() {
  total.forEach(function(item) {
    item.querySelector('.moving-tab').remove();
    const moving_div = document.createElement('div');
    const tab = item.querySelector(".nav-link.active").cloneNode();
    tab.innerHTML = "-";

    moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
    moving_div.appendChild(tab);

    item.appendChild(moving_div);

    moving_div.style.padding = '0px';
    moving_div.style.transition = '.5s ease';

    let li = item.querySelector(".nav-link.active").parentElement;

    if (li) {
      let nodes = Array.from(li.closest('ul').children); // get array
      let index = nodes.indexOf(li) + 1;

      let sum = 0;
      if (item.classList.contains('flex-column')) {
        for (let j = 1; j <= nodes.indexOf(li); j++) {
          sum += item.querySelector(`li:nth-child(${j})`).offsetHeight;
        }
        moving_div.style.transform = `translate3d(0px,${sum}px, 0px)`;
        moving_div.style.width = `${item.querySelector(`li:nth-child(${index})`).offsetWidth}px`;
        moving_div.style.height = item.querySelector(`li:nth-child(${j})`).offsetHeight;
      } else {
        for (let j = 1; j <= nodes.indexOf(li); j++) {
          sum += item.querySelector(`li:nth-child(${j})`).offsetWidth;
        }
        moving_div.style.transform = `translate3d(${sum}px, 0px, 0px)`;
        moving_div.style.width = `${item.querySelector(`li:nth-child(${index})`).offsetWidth}px`;

      }
    }
  });

  if (window.innerWidth < 991) {
    total.forEach(function(item) {
      if (!item.classList.contains('flex-column')) {
        item.classList.add('flex-column', 'on-resize');
      }
    });
  } else {
    total.forEach(function(item) {
      if (item.classList.contains('on-resize')) {
        item.classList.remove('flex-column', 'on-resize');
      }
    });
  }
});


function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

// End tabs navigation


// Navbar blur on scroll
function navbarBlurOnScroll(id) {
  const navbar = document.getElementById(id);
  const navbarScrollActive = navbar ? navbar.getAttribute("navbar-scroll") : false;
  const scrollDistance = 5;
  const classes = ['position-sticky', 'blur', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky'];
  const toggleClasses = ['shadow-none'];

  if (navbarScrollActive == 'true') {
    window.onscroll = debounce(function() {
      if (window.scrollY > scrollDistance) {
        blurNavbar();
      } else {
        transparentNavbar();
      }
    }, 10);
  } else {
    window.onscroll = debounce(function() {
      transparentNavbar();
    }, 10);
  }

  function blurNavbar() {
    navbar.classList.add(...classes);
    navbar.classList.remove(...toggleClasses);

    toggleNavLinksColor('blur');
  }

  function transparentNavbar() {
    if (navbar) {
    navbar.classList.remove(...classes);
    navbar.classList.add(...toggleClasses);
    }
    toggleNavLinksColor('transparent');
  }

  function toggleNavLinksColor(type) {
    const navLinks = document.querySelectorAll('.navbar-main .nav-link');
    const navLinksToggler = document.querySelectorAll('.navbar-main .sidenav-toggler-line');

    if (type === "blur") {
      navLinks.forEach(element => {
        element.classList.remove('text-body');
      });

      navLinksToggler.forEach(element => {
        element.classList.add('bg-dark');
      });
    } else if (type === "transparent") {
      navLinks.forEach(element => {
        element.classList.add('text-body');
      });

      navLinksToggler.forEach(element => {
        element.classList.remove('bg-dark');
      });
    }
  }
}

// Debounce Function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = "this", args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Toggle Sidenav
const iconNavbarSidenav = document.getElementById('iconNavbarSidenav');
const iconSidenav = document.getElementById('iconSidenav');
const sidenav = document.getElementById('sidenav-main');
const body = document.getElementsByTagName('body')[0];
const className = 'g-sidenav-pinned';

if (iconNavbarSidenav) {
  iconNavbarSidenav.addEventListener("click", toggleSidenav);
}

if (iconSidenav) {
  iconSidenav.addEventListener("click", toggleSidenav);
}

function toggleSidenav() {
  if (body.classList.contains(className)) {
    body.classList.remove(className);
    setTimeout(function() {
      sidenav.classList.remove('bg-white');
    }, 100);
    sidenav.classList.remove('bg-transparent');

  } else {
    body.classList.add(className);
    sidenav.classList.add('bg-white');
    sidenav.classList.remove('bg-transparent');
    iconSidenav.classList.remove('d-none');
  }
}

// Resize navbar color depends on configurator active type of sidenav

const referenceButtons = document.querySelector('[data-class]');

window.addEventListener("resize", navbarColorOnResize);

function navbarColorOnResize() {
     if (referenceButtons) {
  if (window.innerWidth > 1200) {
    if (referenceButtons.classList.contains('active') && referenceButtons.getAttribute('data-class') === 'bg-transparent') {
      sidenav.classList.remove('bg-white');
    } else {
      sidenav.classList.add('bg-white');
    }
  } else {
    sidenav.classList.add('bg-white');
    sidenav.classList.remove('bg-transparent');
  }
}
}

// Deactivate sidenav type buttons on resize and small screens
window.addEventListener("resize", sidenavTypeOnResize);
window.addEventListener("load", sidenavTypeOnResize);

function sidenavTypeOnResize() {
  const elements = document.querySelectorAll('[onclick="sidebarType(this)"]');
  if (window.innerWidth < 1200) {
    elements.forEach(function(el) {
      el.classList.add('disabled');
    });
  } else {
    elements.forEach(function(el) {
      el.classList.remove('disabled');
    });
  }
}
