// Validación básica
function esClaveBasica(clave) {
  if (typeof clave !== "string") return NaN;

  return clave.length >= 8;
}

// Validación avanzada
function esClaveSegura(clave) {
  if (typeof clave !== "string") return NaN;

  const esLarga = clave.length >= 8;
  const incluyeMayus = /[A-Z]/.test(clave);
  const incluyeMinus = /[a-z]/.test(clave);
  const incluyeDigito = /\d/.test(clave);
  const incluyeSimbolo = /[!@#$%^&*()]/.test(clave);
  const noTieneEspacios = /^\S+$/.test(clave);

  const criteriosExtra = ["Praxedis", "2025"];
  const tieneCriterioExtra = criteriosExtra.some(texto =>
    clave.includes(texto)
  );

  return (
    esLarga &&
    incluyeMayus &&
    incluyeMinus &&
    incluyeDigito &&
    incluyeSimbolo &&
    noTieneEspacios &&
    tieneCriterioExtra
  );
}

module.exports = {
  esClaveBasica,
  esClaveSegura
};
