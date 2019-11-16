// Complete the encryption function below.

function buildMatrix(rows, columns, str) {
  let matrix = [];

  for (let row = 0; row < rows; row++) {
    matrix.push([]);
    for (let column = 0; column < columns; column++) {
      if (str === "") break;
      matrix[row].push(str[0]);
      str = str.slice(1);
    }
  }

  return matrix;
}

function buildOutputString(columns, matrix) {
  let output = "";

  for (let col = 0; col < columns; col++) {
    matrix.forEach(row => {
      if (col <= row.length - 1) output += row[col];
    });
    if (col < columns - 1) output += " ";
  }

  return output;
}

function encryption(s) {
  //remove spaces
  let str = s.replace(/\s/g, "");

  let l = Math.sqrt(str.length);

  let rows = Math.floor(l);
  let columns = Math.ceil(l);

  if (rows * columns < str.length) rows++;

  let matrix = buildMatrix(rows, columns, str);

  return buildOutputString(columns, matrix);
}

function main() {
  const s = "chillout";

  let result = encryption(s);

  console.log(result);
}

main();
