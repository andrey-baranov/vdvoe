

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
const items = document.querySelectorAll(".item");

items.forEach(item => {
  const btn = item.querySelector(".trigger");
  const body = item.querySelector(".body");
  const inner = item.querySelector(".inner");

  btn.addEventListener("click", () => {

    items.forEach(el => {
      if (el !== item) {
        el.classList.remove("active");
        el.querySelector(".body").style.height = 0;
      }
    });

    if (!item.classList.contains("active")) {
      item.classList.add("active");
      body.style.height = inner.scrollHeight + "px";
    } else {
      item.classList.remove("active");
      body.style.height = 0;
    }
  });
});