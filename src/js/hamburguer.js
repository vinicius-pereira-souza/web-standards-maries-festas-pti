class NavHamburguer {
  constructor(dataProperty) {
    this.button = document.querySelector(`button${dataProperty}`);
    this.nav = document.querySelector(`div${dataProperty}`);
  }

  handlerNavClick(e) {
    const button = e.currentTarget;

    button.dataset.hamburguer =
      button.dataset.hamburguer == "close" ? "open" : "close";

    if (button.dataset.hamburguer == "open") {
      this.nav.dataset.hamburguer = "open";
    } else if (button.dataset.hamburguer == "close") {
      this.nav.dataset.hamburguer = "close";
    }
  }

  addEvent() {
    this.button.addEventListener("click", this.handlerNavClick);
  }

  binding() {
    this.handlerNavClick = this.handlerNavClick.bind(this);
  }

  init() {
    this.binding();
    this.addEvent();
  }
}

export default NavHamburguer;
