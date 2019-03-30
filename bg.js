function mudancaBg() {
	if (window.scrollY > window.innerHeight / 2) {
		document.body.classList.add('mudancabg');
	} else {
		document.body.classList.remove('mudancabg');
	}
}

window.addEventListener('scroll', mudancaBg);
