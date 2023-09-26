export const validarCPF = (cpf?: string) => {
  if (!cpf) return false;
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
  const numeros = cpf.split('').map((el) => parseInt(el));
  const soma = (count: number) =>
    numeros.slice(0, count - 12).reduce((soma, el, index) => soma + el * (count - index), 0) * 10;
  const resto = (count: number) => (soma(count) % 11) % 10;
  return resto(10) === numeros[9] && resto(11) === numeros[10];
};
