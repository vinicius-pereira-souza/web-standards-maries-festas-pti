class NavHamburguer {
  constructor(dataProperty, tag) {
    this.button = document.querySelector(`button${dataProperty}`);
    this.nav = document.querySelector(`div${dataProperty}`);
    this.links = document.querySelectorAll(tag);
  }

  handlerNavClick(e) {
    this.toggleNavCotainer();
  }

  toggleNavCotainer() {
    const button = this.button;

    button.dataset.hamburguer =
      button.dataset.hamburguer == "close" ? "open" : "close";

    if (button.dataset.hamburguer == "open") {
      this.nav.dataset.hamburguer = "open";
    } else if (button.dataset.hamburguer == "close") {
      this.nav.dataset.hamburguer = "close";
    }
  }

  scrollToSection(e) {
    e.preventDefault();

    const target = e.currentTarget;
    const idSection = target.href.split("#")[1];

    const currentIdSection = document.querySelector(`#${idSection}`);
    const { top } = currentIdSection.getBoundingClientRect();

    if (target.getAttribute("type")) {
      window.scrollBy({
        top,
        behavior: "smooth",
      });
      return;
    }

    this.toggleNavCotainer();
    window.scrollBy({
      top,
      behavior: "smooth",
    });
  }

  addEvent() {
    this.button.addEventListener("click", this.handlerNavClick);
    this.links.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  binding() {
    this.handlerNavClick = this.handlerNavClick.bind(this);
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  init() {
    this.binding();
    this.addEvent();
  }
}

export default NavHamburguer;
