// zero à esquerda
const leadingZero = (num) => (num >= 10 ? num : `0${num}`);

// primeira letra maiúscula
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// gerador de números pseudoaleatórios
const randint = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// conversor de minutos para horas no formato HH:MM
const minutesToHours = (min) => {
  const hours = leadingZero(Math.floor(min / 60));
  const minutes = leadingZero(min % 60);

  return `${hours}:${minutes}`;
};

// obter o tempo no formato HH:MM:SS
const getCurrentTime = (date) => {
  let hour = leadingZero(date.getHours());
  let minute = leadingZero(date.getMinutes());
  let second = leadingZero(date.getSeconds());

  return `${hour}:${minute}:${second}`;
};

// obter a data no formato DD/MM/AA
const getCurrentDate = (date) => {
  let day = leadingZero(date.getDate());
  let month = leadingZero(date.getMonth() + 1);
  let year = leadingZero(date.getFullYear().toString());

  return `${day}/${month}/${year.slice(2)}`;
};

// checar se o número de CPF é válido
const isValidCPF = (cpf) => {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
  cpf = cpf.split("");
  const validator = cpf
    .filter((digit, index, array) => index >= array.length - 2 && digit)
    .map((el) => +el);
  const toValidate = (pop) =>
    cpf
      .filter((digit, index, array) => index < array.length - pop && digit)
      .map((el) => +el);
  const rest = (count, pop) =>
    ((toValidate(pop).reduce((soma, el, i) => soma + el * (count - i), 0) *
      10) %
      11) %
    10;
  return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
};
