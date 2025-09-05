import Animation from "./animation.js";
import NavHamburguer from "./hamburguer.js";

const animation = new Animation("[data-animation]");
animation.init();

const navHamburguer = new NavHamburguer("[data-hamburguer]", "a");
navHamburguer.init();
