const timelineConfig = {
	navbar: {
		logo: '💕 Aprilkalista',
		menuItems: [
			{ href: '#home', text: 'Home' },
			{ href: '#timeline', text: 'Timeline' }
		]
	},
	
	home: {
		title: 'Timeline Kenangan',
		subtitle: 'Setiap momen adalah cerita yang indah'
	},
	
	timeline: {
		headerTitle: 'Perjalanan Waktu',
		headerSubtitle: 'Momen kenangan',
		items: [
			{
				date: '10 November 2025',
				title: 'Pertama Kali Ketemu',
				description: 'Hari dimana pertama kali bertemu, waktu itu kamu cantik banget',
			},
		]
	},
	
	footer: {
		title: 'Untuk Kita Berdua',
		message: '"Setiap momen adalah kenangan yang akan selalu kuingat. Terima kasih telah menjadi bagian dari cerita. Semoga kamu selalu bahagia."',
		signature: 'Teruslah Bahagia'
	}
};

document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.container');
	TimelineCore.render(container, timelineConfig);
});