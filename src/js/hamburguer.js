class NavHamburguer {
  constructor(buttonClass, navElement) {
    this.button = document.querySelector(buttonClass);
    this.nav = document.querySelector(navElement);
  }

  handlerNavClick(e) {
    const button = e.currentTarget;

    button.dataset.hamburguer =
      button.dataset.hamburguer == "close" ? "open" : "close";

    if (button.dataset.hamburguer == "open") {
      this.nav.parentNode.style.cssText = `
        width: 100vw;
        height: 100vh;
        position: fixed; 
        top: 0;
        left: 0;
        background-color: red;
      `;
      this.nav.style.cssText = `
        display: block;
        position: absolute;
        top: 0;
        right: 0;
      `;
    }
  }

  addEvent() {
    this.button.addEventListener("click", this.handlerNavClick);
  }

  init() {
    this.binding();
    this.addEvent();
  }

  binding() {
    this.handlerNavClick = this.handlerNavClick.bind(this);
  }
}

export default NavHamburguer;
