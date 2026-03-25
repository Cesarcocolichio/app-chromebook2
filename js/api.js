const BASE_URL = "https://script.google.com/macros/s/AKfycbwy2JvVfE1vZ_Tp2LAEfsSoOlgzgCCCKotsVTUOWY6CFPloFrgvt_mpQ8VVQoeqN0QF/exec";

export function reservarChrome(idChrome, idPedido) {
  const url = `${BASE_URL}?id=${idChrome}&idPedido=${idPedido}&acao=reservar`;
  return fetch(url).then(res => res.text());
}

export function devolverChrome(idChrome) {
  const url = `${BASE_URL}?id=${idChrome}&acao=devolver`;
  return fetch(url).then(res => res.text());
}