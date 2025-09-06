class Animation {
  constructor(select) {
    this.animationContainers = Array.from(document.querySelectorAll(select));

    this.intersectionObserver = this.startAnimate();
  }

  startAnimate() {
    return new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const option = element.dataset.animation;

            element.style.animation = `${this.getAnimation(
              option,
            )} 1s forwards`;

            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );
  }

  getAnimation(option) {
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
        return "";
    }
  }

  init() {
    this.animationContainers.forEach((element) =>
      this.intersectionObserver.observe(element),
    );
  }
}

export default Animation;
