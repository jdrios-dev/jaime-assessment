// JavaScript for any interactive functionality
function showMessage(message) {
	alert(message);
}

function subscribeNewsletter() {
	const email = document.querySelector("#newsletter-email").value;
	if (email) {
		showMessage(`Thank you for subscribing with: ${email}`);
	}
}

// JavaScript for automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
	let slides = document.getElementsByClassName("slides");
	let dots = document.getElementsByClassName("dot");

	// Hide all slides
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	// Remove active class from all dots
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active-dot");
	}

	slideIndex++;

	// If slideIndex is greater than the number of slides, reset to 1
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	// Show the current slide and activate the corresponding dot
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("active-dot");

	// Change slide every 3 seconds (3000 milliseconds)
	setTimeout(showSlides, 3000);
}

// Function to go to a specific slide
function currentSlide(n) {
	slideIndex = n;
	showSlides();
}
