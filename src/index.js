const app = require('./app');
const PORT = process.env.PORT || 3000;
async function main(){
    await app.listen(PORT);
    console.log(`server is runing on ${PORT}`)
}

main();
//app.listen(3000, () => console.log(' server on port 3000') )
