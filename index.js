const bcrypt = require('bcrypt');

const getPassword = async () => {
const password = 'IloveYvoney';
const password2 = 'Aliteachesme';
const SALT = 4;

const hash = await bcrypt.hash(password, SALT);
const hash2 = await bcrypt.hash(password2, SALT);


console.log({hash, password});
console.log({hash2, password2});


const match = await bcrypt.compare(password, hash);
const notMatch = await bcrypt.compare("randomWrongOneGG", hash2);


console.log({
    match,
    notMatch
})

}

getPassword();