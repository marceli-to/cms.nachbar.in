
import { Fancybox } from "../vendor/fancybox.js";

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Image: {
    zoom: false,
    click: false,
    wheel: "slide",
  },
});