

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




