const bcrypt = require('bcrypt');

const getPassword = async () => {
const password = 'IloveYvoney';
const SALT = 4;

const hash = await bcrypt.hash(password, SALT);

console.log(hash);


}