const shareButton = document.querySelector('.component__btn-share');
const shareMenus = document.querySelectorAll('.component__social');

shareButton.addEventListener('click', openShareMenuListener);

function openShareMenuListener() {
	shareMenus.forEach(menu => {
		if (menu.classList.contains('hidden')) {
			menu.classList.remove('hidden');
			setTimeout(() => {
				menu.classList.add('fade-in');
			}, 10); // Pequeño delay para que la transición se dispare
		} else {
			menu.classList.remove('fade-in');
			setTimeout(() => {
				menu.classList.add('hidden');
			}, 300); // Tiempo para que la animación termine
		}
	});
	shareButton.classList.toggle('clicked');
}


