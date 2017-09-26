console.log('Hello World');

const name = process.argv[2];
console.log(`Hi ${name}!`);


for (let i = 0; i < process.argv.length- 2; i ++)
{
    console.log("Buffer: " + process.argv[i+2]);
}