// const e let são locais e só funcionam no escopo onde foi criada

// console.log("> exite y antes do bloco? ", y);

let y = 1;
const z = 2;

{
  // let y = 0;
  y = 0;
  const z = 4;
  console.log("> exite y? ", y);
  console.log("> exite z? ", z);
}

console.log("> exite z? ", z);

console.log("> exite y depois do bloco? ", y);
