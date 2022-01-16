const mysql = require('mysql');

let connectionDb = () => {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'def75315901',
        database : 'projeto_portal_noticias'
    });
}

module.exports = () => {
    console.log('A conexão com o Banco de dados foi estbalecida');
    return connectionDb;
}