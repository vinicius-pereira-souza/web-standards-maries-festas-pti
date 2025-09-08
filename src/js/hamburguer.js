class NavHamburguer {
  constructor(dataProperty, tag) {
    this.button = document.querySelector(`button${dataProperty}`);
    this.nav = document.querySelector(`div${dataProperty}`);
    this.links = document.querySelectorAll(tag);
  }

  handlerNavClick(e) {
    this.button.dataset.hamburguer == "open"
      ? this.navHamburguerDisable()
      : this.navHamburguerActive();
  }

  navHamburguerActive() {
    this.button.dataset.hamburguer = "open";
    this.nav.dataset.hamburguer = "open";
  }

  navHamburguerDisable() {
    this.button.dataset.hamburguer = "close";
    this.nav.dataset.hamburguer = "close";
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

    this.navHamburguerDisable();

    window.scrollBy({
      top,
      behavior: "smooth",
    });
  }

  handleViewportDesktop(e) {
    if (
      !window.matchMedia("(max-width: 768px)").matches &&
      this.button.dataset.hamburguer === "open"
    ) {
      this.navHamburguerDisable();
    }
  }

  addEvent() {
    this.button.addEventListener("click", this.handlerNavClick);
    this.links.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
    window
      .matchMedia("(max-width: 770px)")
      .addEventListener("change", this.handleViewportDesktop);
  }

  binding() {
    this.handlerNavClick = this.handlerNavClick.bind(this);
    this.scrollToSection = this.scrollToSection.bind(this);
    this.handleViewportDesktop = this.handleViewportDesktop.bind(this);
  }

  init() {
    this.binding();
    this.addEvent();
  }
}

export default NavHamburguer;
