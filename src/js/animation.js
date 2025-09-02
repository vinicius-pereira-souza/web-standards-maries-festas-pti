class Animation {
  constructor(select) {
    this.animationContainers = Array.from(document.querySelectorAll(select));

    this.containerRect = this.animationContainers[0].getBoundingClientRect();
    this.middleElement = this.containerRect.height / 2;
  }

  animationScrollElement(e) {
    const scrollPostionY = document.documentElement.scrollTop;

    this.startAnimationElement(scrollPostionY);
  }

  startAnimationElement(scrollY) {
    this.animationContainers.forEach((container) => {
      const { top, bottom } = container.getBoundingClientRect();
      const option = this.animationOption(container.dataset.animation);

      if (
        top - scrollY < this.middleElement &&
        bottom - scrollY > this.middleElement
      ) {
        container.style.cssText = `animation: ${option} 1s forwards;`;
        return;
      }
    });
  }

  animationOption(option) {
    switch (option) {
      case "top":
        return "slideToTop";
      case "right":
        return "slideToRight";
      case "left":
        return "slideToLeft";
      case "bottom":
        return "slideToBottom";
      default:
        break;
    }
  }

  bindingEvents() {
    this.animationScrollElement = this.animationScrollElement.bind(this);
  }

  handleAnimation(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const option = this.animationOption(container.dataset.animation);

        container.style.cssText = `animation: ${option} 1s forwards;`;
        observer.unobserve(container);
      }
    });
  }

  addEvent() {
    document.addEventListener("scroll", this.animationScrollElement);
  }

  init() {
    this.bindingEvents();
    this.addEvent();
  }
}

export default Animation;
