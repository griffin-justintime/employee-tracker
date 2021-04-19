const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,
    user: 'root',
    password:
    database: 
});

const start = () => {
    inquirer.prompt({
        name: 'readInfo',
        type:
        message: ''
    }).then((answer) => {
        console.log(answer.readInfo);

        if(answer.readInfo === "READ") {
            connection.query('SELECT * FROM products', (err, results) => {
            if(err) throw err;
            console.log(results);
        } else {
            console.log('');
        }
        
        })
    })
}

connection.connect((err) => {
    if(err) throw err;

    console.log()
start();
    connection.end();
})