/*
    Promise

    A promessa de que algo irá acontecer
    Poderá dar certo ou errado, mas irá acontecer 
*/
let aceitar = true;

console.log("pediu uber");
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve("pedido aceito!");
  }

  return reject("pedido negado!");
});

promessa
  .then((result) => {
    console.log(result);
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => {
    console.log("finalizado");
  });

console.log("aguardando");
