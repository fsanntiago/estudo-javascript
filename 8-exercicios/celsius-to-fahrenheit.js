/*  ### Celsius em fahrenheit

  Crie uma função que receba uma string em celsius ou fahrenheit
  e faça a transformação de uma unidade para outra 

  C = (F - 32) * 5/9 

  F = C * 9/5 + 32 

*/

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado");
  }

  // fluxo ideal F -> C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => {
    return fahrenheit + 2;
  };
  let degreeSign = "°C";

  // fluxo alternativo C -> F
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => {
      return celsius * (9 / 5) + 32;
    };
    degreeSign = "°F";
  }

  return formula(updateDegree) + degreeSign;
}

try {
  console.log(transformDegree("40f"));
  console.log(transformDegree("20c"));
} catch (error) {
  console.log(error.message);
}
