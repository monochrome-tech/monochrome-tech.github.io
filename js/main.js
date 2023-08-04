// For managing the themes...
{
	// We start out in the innovative theme.
	var inCreative  = false;

	// The toggle switch.
	let toggle = document.querySelector(".inno-switch");

	// All elements that are themed on the site.
	var themed = document.querySelectorAll(".inno");

	// The menu button
	let drawerButton = document.querySelector(".menuButton");

	toggle.addEventListener('mousedown', function (ev) {
		let buttonIcon = document.querySelector(".inno-switch-guard-button");
		let logo = document.querySelector(".monochrome-logo");
		let footerLogo = document.querySelector(".footer-monochrome-logo");
		let heroTitle = document.querySelector(".home-hero-title");
		let heroSubtitle = document.querySelector(".home-hero-subtitle");

		toggle.classList.toggle("enabled");

		// Toggle whether or not we are in creative mode.
		inCreative = !inCreative;

		themed.forEach(function(element) {
			element.classList.toggle("inno");
			element.classList.toggle("creative");
		});

		// If we just entered creative mode
		if(inCreative) {
			buttonIcon.classList.remove("fa-lightbulb");
			buttonIcon.classList.add("fa-brain");
			heroTitle.innerHTML = "WE ARE THE";
			heroSubtitle.innerHTML = "CREATIVE";
			logo.src = "../res/logo-dark.png";
			footerLogo.src = "../res/logo-light.png";

			drawerButton.classList.remove("inno");
			drawerButton.classList.add("creative");
		}

		else {
			buttonIcon.classList.add("fa-lightbulb");
			buttonIcon.classList.remove("fa-brain");
			logo.src = "../res/logo-light.png";
			footerLogo.src = "../res/logo-dark.png";
			heroTitle.innerHTML = "YOU ARE THE";
			heroSubtitle.innerHTML = "INNOVATIVE";

			drawerButton.classList.add("inno");
			drawerButton.classList.remove("creative");
		}
	});
};


{
	// Now for toggling the navigation.
	let toggleDrawer = document.querySelector(".menuButton");
	let links = document.querySelector(".mobile-nav-links");

	// What we CAN do.
	let active = false;

	toggleDrawer.addEventListener("mousedown", function(ev) {
		active = !active;

		if(active) {
			links.style.display = 'flex';
			toggleDrawer.classList.add("fa-xmark");
			toggleDrawer.classList.remove("fa-bars-staggered");
		}

		else {
			links.style.display = 'none';
			toggleDrawer.classList.remove("fa-xmark");
			toggleDrawer.classList.add("fa-bars-staggered");
		}
	});
};