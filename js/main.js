// For managing the themes...
{
	// We start out in the innovative theme.
	var inCreative  = false;

	// The toggle switch.
	let toggle = document.querySelector(".inno-switch");

	// All elements that are themed on the site.
	var themed = document.querySelectorAll(".inno");

	toggle.addEventListener('mousedown', function (ev) {
		let buttonIcon = document.querySelector(".inno-switch-guard-button");
		let logo = document.querySelector(".monochrome-logo");
		let footerLogo = document.querySelector(".footer-monochrome-logo");
		let heroTitle = document.querySelector(".home-hero-title");
		let heroSubtitle = document.querySelector(".home-hero-subtitle");
		let drawerButton = document.querySelector(".menuButton");

		toggle.classList.toggle("enabled");

		// Toggle whether or not we are in creative mode.
		inCreative = !inCreative;

		themed.forEach(function(element) {
			element.classList.toggle("inno");
			element.classList.toggle("creative");
		});

		// Toggle the drawer button theme.
		drawerButton.classList.toggle("inno");
		drawerButton.classList.toggle("creative");

		// If we just entered creative mode
		if(inCreative) {
			buttonIcon.classList.remove("fa-lightbulb");
			buttonIcon.classList.add("fa-brain");
			heroTitle.innerHTML = "WE ARE THE";
			heroSubtitle.innerHTML = "CREATIVE";
			logo.src = "../res/logo-dark.png";
			footerLogo.src = "../res/logo-light.png";
		}

		else {
			buttonIcon.classList.add("fa-lightbulb");
			buttonIcon.classList.remove("fa-brain");
			logo.src = "../res/logo-light.png";
			footerLogo.src = "../res/logo-dark.png";
			heroTitle.innerHTML = "YOU ARE THE";
			heroSubtitle.innerHTML = "INNOVATIVE";
		}
	});
};


{
	// Now for toggling the navigation.
	let toggleDrawer = document.querySelector(".toggle-drawer");
	let links = document.querySelector(".mobile-nav-links");

	// What we CAN do.
	let active = false;

	toggleDrawer.addEventListener("mousedown", function(ev) {
		active = !active;

		if(active) {
			links.style.display = 'flex';
		}

		else {
			links.style.display = 'none';
		}
	});
};