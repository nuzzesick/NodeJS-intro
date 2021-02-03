/* This program will automatically generate a .txt file with the multiplication table of the number that you want.
Current list of flags:
  --limit: sets a limit for the multiplication table, default is 10
*/

const fs = require('fs');
const { table } = require('console')
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
    let limit = process.argv[2];
    limit = limit ? limit.split('=') : 10;
    limit = parseInt(limit[1]) || 10;

    for (let i = 0; i <= limit; i++ ) {
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