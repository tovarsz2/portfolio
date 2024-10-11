let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');


		if(top >= offset && top < offset + height){
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ' ]')
				.classList.add('active');
			});
		}
	})
}

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

window.addEventListener('click', function(e){
	if(!document.querySelector('#menu-icon').contains(e.target)){
		menuIcon.classList.toggle('bx-x');
		navbar.classList.toggle('active');
	}
})

var copybtn = document.getElementById("copy-btn");
var email = document.getElementById("email");

copybtn.onclick = () => {
	navigator.clipboard.writeText(email.innerHTML);
	copybtn.innerHTML = "<i id='check' class='bx bxs-check-square' ></i>"
	setTimeout(function(){
		copybtn.innerHTML = "<i class='bx bxs-copy'></i>"
	}, 2000)

}