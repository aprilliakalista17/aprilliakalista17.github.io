const TimelineCore = {
	createNavbar(logo, menuItems) {
		const nav = document.createElement('nav');
		nav.className = 'navbar';
		
		const container = document.createElement('div');
		container.className = 'nav-container';
		
		const logoDiv = document.createElement('div');
		logoDiv.className = 'logo';
		logoDiv.textContent = logo;
		
		const menu = document.createElement('ul');
		menu.className = 'nav-menu';
		
		menuItems.forEach((item, index) => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = item.href;
			a.className = index === 0 ? 'nav-link active' : 'nav-link';
			a.textContent = item.text;
			li.appendChild(a);
			menu.appendChild(li);
		});
		
		const hamburger = document.createElement('div');
		hamburger.className = 'hamburger';
		hamburger.innerHTML = '<span></span><span></span><span></span>';
		
		container.appendChild(logoDiv);
		container.appendChild(menu);
		container.appendChild(hamburger);
		nav.appendChild(container);
		
		return nav;
	},

	createFloatingHearts() {
		const hearts = ['❤️', '💕', '💖', '💗', '💝'];
		const container = document.createElement('div');
		container.className = 'floating-hearts';
		
		hearts.forEach(heart => {
			const heartEl = document.createElement('div');
			heartEl.className = 'floating-heart';
			heartEl.textContent = heart;
			container.appendChild(heartEl);
		});
		
		return container;
	},

	createHomeSection(title, subtitle) {
		const section = document.createElement('section');
		section.id = 'home';
		section.className = 'section';
		
		section.innerHTML = `
			<div class="header">
				<h1>${title}</h1>
				<p>${subtitle}</p>
			</div>
		`;
		
		return section;
	},

	createTimelineItem(date, title, description) {
		const item = document.createElement('div');
		item.className = 'timeline-item';
		
		item.innerHTML = `
			<div class="timeline-content">
				<div class="date">${date}</div>
				<div class="title">${title}</div>
				<div class="description">${description}</div>
			</div>
		`;
		
		return item;
	},

	createTimelineSection(headerTitle, headerSubtitle, timelineItems) {
		const section = document.createElement('section');
		section.id = 'timeline';
		section.className = 'section';
		
		const header = document.createElement('div');
		header.className = 'section-header';
		header.innerHTML = `
			<h2>${headerTitle}</h2>
			<p>${headerSubtitle}</p>
		`;
		
		const timeline = document.createElement('div');
		timeline.className = 'timeline';
		
		timelineItems.forEach(item => {
			const timelineItem = this.createTimelineItem(item.date, item.title, item.description);
			timeline.appendChild(timelineItem);
		});
		
		section.appendChild(header);
		section.appendChild(timeline);
		
		return section;
	},

	createFooter(footerTitle, message, signature) {
		const footer = document.createElement('footer');
		footer.className = 'footer';
		
		footer.innerHTML = `
			<div class="heart">❤️</div>
			<h2>${footerTitle}</h2>
			<div class="message-box">
				<p class="message-text">${message}</p>
				<p class="signature">${signature}</p>
			</div>
		`;
		
		return footer;
	},

	initNavbar() {
		const hamburger = document.querySelector('.hamburger');
		const navMenu = document.querySelector('.nav-menu');

		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			navMenu.classList.toggle('active');
		});

		document.querySelectorAll('.nav-link').forEach(link => {
			link.addEventListener('click', () => {
				hamburger.classList.remove('active');
				navMenu.classList.remove('active');
			});
		});

		document.querySelectorAll('.nav-link').forEach(link => {
			link.addEventListener('click', function(e) {
				e.preventDefault();
				const targetId = this.getAttribute('href');
				const targetSection = document.querySelector(targetId);
				
				targetSection.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});

				document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
				this.classList.add('active');
			});
		});

		window.addEventListener('scroll', () => {
			const navbar = document.querySelector('.navbar');
			if (window.scrollY > 50) {
				navbar.classList.add('scrolled');
			} else {
				navbar.classList.remove('scrolled');
			}
		});

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
	},

	render(container, config) {
		const navbar = this.createNavbar(config.navbar.logo, config.navbar.menuItems);
		document.body.insertBefore(navbar, container);
		
		document.body.insertBefore(this.createFloatingHearts(), container);
		
		const homeSection = this.createHomeSection(config.home.title, config.home.subtitle);
		container.appendChild(homeSection);
		
		const timelineSection = this.createTimelineSection(
			config.timeline.headerTitle,
			config.timeline.headerSubtitle,
			config.timeline.items
		);
		container.appendChild(timelineSection);
		
		const footer = this.createFooter(
			config.footer.title,
			config.footer.message,
			config.footer.signature
		);
		container.appendChild(footer);
		
		this.initNavbar();
	}
};