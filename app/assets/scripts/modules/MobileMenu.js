import $ from 'jquery';


class MobileMenu {
	
	/* Sélection dans le DOM */
	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content"); 
		this.events();
	}	
	
	/* Gestion des événements */
	events() {

		this.menuIcon.click(this.toggleTheMenu.bind(this));
		/* 
		- l'argument/callback de click() est appelé au clic
		- ici this = class MobileMenu (pas d'argument dans events)
		- bind = attribue l'argument au this de la fonction suivante 
		*/
	}
	
	/* Fonctionnalités */
	toggleTheMenu() {
		
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
		/* 
		- par défaut this = parent = menuIcon 
		- le paramètre récupéré devient this donc ici this = class MobileMenu
		*/
	}
	
}

export default MobileMenu;