"use strict";

const verMaisExames = document.querySelector(".verMais .ver");

verMaisExames.addEventListener("click", function () {
  document.querySelector(".quatro").classList.toggle("verExames");
});

window.onload = function () {
  scrollSection();

  if (scrollQuatro.scrollLeft === 0) {
    esquerda.classList.add("none");
  }
};

window.onscroll = function () {
  scrollSection();
};

function scrollSection() {
  const sections = document.querySelectorAll("section, header, footer");
  const astronaut = document.querySelector(".three .astronaut");
  const quotes = document.querySelectorAll(".four .testimonial");

  for (const section of sections) {
    if (
      ((section.offsetTop - window.pageYOffset) * 100) / window.innerHeight >
      70
    ) {
      section.classList.remove("active");
    } else {
      section.classList.add("active");
    }
  }

  const equipe = document.querySelector(".equipe");

  if (
    ((equipe.offsetTop - window.pageYOffset) * 100) / window.innerHeight >
    60
  ) {
    equipe.classList.remove("active");
  } else {
    equipe.classList.add("active");
  }

  const pessoas = document.querySelectorAll(".pessoa");

  for (const pessoa of pessoas) {
    if (
      ((pessoa.offsetTop - window.pageYOffset) * 100) / window.innerHeight >
      80
    ) {
      pessoa.classList.remove("active");
    } else {
      pessoa.classList.add("active");
    }
  }

  let exames = document.querySelectorAll(".exame");

  for (const exame of exames) {
    if (
      ((sections.item(4).offsetTop + exame.offsetTop - window.pageYOffset) *
        100) /
        window.innerHeight >
      80
    ) {
      exame.classList.remove("active");
    } else {
      exame.classList.add("active");
    }
  }
}

const preparos = document.querySelectorAll(".saberPreparo");
const voltars = document.querySelectorAll(".voltar");

for (let preparo of preparos) {
  const exameFlip = preparo.parentNode.parentNode;
  preparo.addEventListener("click", function () {
    exameFlip.classList.add("flip");
  });
}

for (let voltar of voltars) {
  const exameFlip = voltar.parentNode.parentNode;

  voltar.addEventListener("click", function () {
    exameFlip.classList.remove("flip");
  });
}

const exames = document.querySelectorAll(".exame");
const tamanhoExame = exames[0].offsetWidth + 26;
const scrollQuatro = document.querySelector(".quatro .scroll");
const esquerda = document.querySelector(".esquerda");
const direita = document.querySelector(".direita");


esquerda.addEventListener("click", function () {
  scrollQuatro.scrollBy({
    left: -1 * tamanhoExame,
    behavior: "smooth",
  });

  direita.classList.remove("none");

  if (scrollQuatro.scrollLeft <= tamanhoExame) {
    esquerda.classList.add("none");
  }
});

direita.addEventListener("click", function () {
  let pScroll = scrollQuatro.scrollLeft + scrollQuatro.offsetWidth;
  let fimScroll = scrollQuatro.scrollWidth - tamanhoExame;

  scrollQuatro.scrollBy({
    left: tamanhoExame,
    behavior: "smooth",
  });

  esquerda.classList.remove("none");

  if (pScroll >= fimScroll) {
    direita.classList.add("none");
  }
});

exames.forEach((exame, index) => {

  let qUltimos = exames.length - (Math.round( scrollQuatro.offsetWidth / tamanhoExame) - 1)

  exame.onclick = function () {
    console.log(index, exame)

    scrollQuatro.scrollTo({
      top: 0,
      left: index * tamanhoExame - 144,
      behavior: "smooth",
    });

    if (index == 0) {
      esquerda.classList.add("none");
    } else {
      esquerda.classList.remove("none");
    }

    if (index >= qUltimos) {
      direita.classList.add("none");
    } else {
      direita.classList.remove("none");
    }

  }
});


// for (let exame of exames) {
//   let qUltimos = exames.length - (Math.round( scrollQuatro.offsetWidth / tamanhoExame) - 1)

//   exame.onclick = function () {

//     scrollQuatro.scrollTo({
//       top: 0,
//       left: idx * tamanhoExame - 144,
//       behavior: "smooth",
//     });

//     if (idx == 0) {
//       esquerda.classList.add("none");
//     } else {
//       esquerda.classList.remove("none");
//     }

//     if (idx >= qUltimos) {
//       direita.classList.add("none");
//     } else {
//       direita.classList.remove("none");
//     }
//   };
// }

const ano = new Date().getFullYear();
document.querySelector('.anoRodape').innerHTML = ano;
