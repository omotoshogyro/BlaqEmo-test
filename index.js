const images = [
  {
    image: "hero-man.png",
    quote:
      "Many of life's failures are people who did not realize how close they were to sucess when they gave up.",
  },
  {
    image: "hero3ed.png",
    quote: "Not how long but how well you have lived in the main thing",
  },
  {
    image: "hero-man.png",
    quote:
      " life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
  },
];

var i = 0;
const imageChange = () => {
  const imageTags = document.querySelectorAll("#hero__image");
  const quoteText = document.getElementById("quote__text");
  // console.log(imageTag[i]);
  const currentImage = Array.from(imageTags);

  // console.log(currentImage[i]);
  currentImage[i].classList.add("animated");
  currentImage.map((imageTag) => {
    if (
      imageTag.classList.contains("animated") &&
      imageTag != currentImage[i]
    ) {
      imageTag.classList.remove("animated");
    }
  });

  const quoteWord = (quoteText.textContent = images[i]["quote"]);

  // console.log(imageSrc, quoteWord);

  // ./assets/images/hero-man.png
};

setInterval(() => {
  imageChange();
  if (i < images.length) {
    i++;
  }
  if (i >= images.length) {
    i = 0;
    console.log("checking");
  }
}, 3000);
