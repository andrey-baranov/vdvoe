const header = document.querySelector('.header');
const burger = header.querySelector('.burger');
const nav = header.querySelector('.nav');

burger.addEventListener('click', () => {
  const isOpen = burger.classList.toggle('burger--open');
  nav.classList.toggle('nav--open', isOpen);
  header.classList.toggle('header--menu-open', isOpen);
});

const lineObserver = new IntersectionObserver(entries => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      target.classList.add('line--visible');
      lineObserver.unobserve(target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.line').forEach(line => lineObserver.observe(line));

const accordionItems = document.querySelectorAll('.accordion__item');
let openItem = null;

function setAccordionItemOpen(item, isOpen) {
  const content = item.querySelector('.accordion__content');
  item.classList.toggle('accordion__item--open', isOpen);
  item.querySelector('.accordion__trigger').setAttribute('aria-expanded', String(isOpen));
  content.style.height = isOpen ? content.scrollHeight + 'px' : '0px';
}

accordionItems.forEach(item => {
  item.querySelector('.accordion__trigger').addEventListener('click', () => {
    const nextItem = openItem === item ? null : item;
    if (openItem) setAccordionItemOpen(openItem, false);
    if (nextItem) setAccordionItemOpen(nextItem, true);
    openItem = nextItem;
  });
});
