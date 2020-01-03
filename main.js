const spanText = document.querySelector(".text");
const txt =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem omnis, laboriosam quod sapiente soluta ad repudiandae voluptas nulla veniam maxime magni voluptatem excepturi non exercitationem distinctio delectus facilis eligendi ipsam.";

let index = 0;
const time = 40;

const addLetter = () => {
  spanText.textContent += txt[index];
  index++;
  if (index == txt.length) clearInterval(indexTyping);
};

const indexTyping = setInterval(addLetter, 40);

const cursorFlashing = () => {
  document.querySelector(".cursor").classList.toggle("active");
};

setInterval(cursorFlashing, 500);
