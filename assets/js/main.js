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


		if (top >= offset && top < offset + height) {
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


var copybtn = document.getElementById("copy-btn");
var email = document.getElementById("email");

copybtn.onclick = () => {
	navigator.clipboard.writeText(email.innerHTML);
	copybtn.innerHTML = "<i id='check' class='bx bxs-check-square' ></i>"
	setTimeout(function () {
		copybtn.innerHTML = "<i class='bx bxs-copy'></i>"
	}, 2000)

}

var sendMessageBtn = document.getElementById("btn-send-message");
var btn = document.getElementById("btn");
var iText = document.getElementById("i-text");

function fun() {
	let name = document.forms["contact-form"]["name"].value;
	let email = document.forms["contact-form"]["email"].value;
	let message = document.forms["contact-form"]["message"].value;
	if (!name == "" && !message == "" && String(email).match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	)) {

		btn.classList.add("animate")
		iText.classList.add("animate")

		setTimeout(function () {
			btn.classList.remove('animate');
			iText.classList.remove('animate');

			document.forms["contact-form"]["name"].value = ""
			document.forms["contact-form"]["email"].value = "";
			document.forms["contact-form"]["message"].value = "";
			document.forms["contact-form"]["phone"].value = "";
			document.forms["contact-form"]["subject"].value = "";

		}, 4000);
	}
}

sendMessageBtn.onclick = () => {
	let name = document.forms["contact-form"]["name"].value;
	let email = document.forms["contact-form"]["email"].value;
	let message = document.forms["contact-form"]["message"].value;
	if (!name == "" && !email == "" && String(message).match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	)) {

		btn.classList.add("animate")
		iText.classList.add("animate")

		setTimeout(function () {
			btn.classList.remove('animate');
			iText.classList.remove('animate');
		}, 4000);
	}
}

/* 
function sendMail() {
	var params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};

	const serviceID = "service_b0pxal3";
	const templateID = "template_qofemv2";

	emailjs.send(serviceID, templateID, params)
		.then(res => {
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("message").value = "";
			console.log(res);
			alert("Your message sent successfully!!")

		})
		.catch(err => console.log(err));

} */