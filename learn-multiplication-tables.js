// This program will automatically generate a .txt file with the multiplication table of the number that you want

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the multiplication table you want to learn? ', (base) => {
  const isANumber = parseInt(base);
  if (!isANumber) {
    console.log(`'${base}' is not a number`);
    rl.close();
  } else {
    const file = `multiplication-table-of-${base}.txt`;
    let table = ``;

    for (let i = 0; i <= 10; i++ ) {
      table += `${base} x ${i} = ${base*i}\n`;
    }

    console.log(table);

    fs.writeFile(file, table, (err) => {
      if (err) throw err;
      console.log(`'${file}' created!\n- Made by Nuzze`);
    });

    rl.close();
  };
});