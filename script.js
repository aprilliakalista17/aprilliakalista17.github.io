// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

// Close menu when link clicked
document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	});
});

// Smooth scroll and active link
document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		const targetId = this.getAttribute('href');
		const targetSection = document.querySelector(targetId);
		
		targetSection.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});

		// Update active link
		document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
		this.classList.add('active');
	});
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
	const navbar = document.querySelector('.navbar');
	if (window.scrollY > 50) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});

// Update active link on scroll
window.addEventListener('scroll', () => {
	let current = '';
	const sections = document.querySelectorAll('.section');
	
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (window.pageYOffset >= sectionTop - 200) {
			current = section.getAttribute('id');
		}
	});

	document.querySelectorAll('.nav-link').forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('href') === `#${current}`) {
			link.classList.add('active');
		}
	});
});