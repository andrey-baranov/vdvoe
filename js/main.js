

// Burger Script
document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('.header').classList.toggle('menu-open');
});

// Line Animation
document.addEventListener("DOMContentLoaded", function () {

	const lines = document.querySelectorAll(".line, .line-white");

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate");
				observer.unobserve(entry.target); // анимация только 1 раз
			}
		});
	}, {
		threshold: 0.3
	});

	lines.forEach(line => observer.observe(line));

});


// Accordion
const items = document.querySelectorAll('.item');

items.forEach(item => {
  const trigger = item.querySelector('.trigger');
  const content = item.querySelector('.content');

  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    // закрыть все
    items.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.content').style.height = 0;
    });

    if (!isOpen) {
      item.classList.add('active');
      content.style.height = content.scrollHeight + 'px';
    }
  });
});