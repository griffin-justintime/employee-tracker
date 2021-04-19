const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost', 

    port: 3306, 
    user: 'root', 
    password: '',
    database: 'employee'
});

const start = () => {
    inquirer.prompt({
        name: 'readInfo', 
        type: 'message',
        message: 'Type READ to see what the employee database looks like, type WRITE to add data to the database.'
    }).then((answer) => {
        console.log(answer);
        console.log(answer.readInfo);
      
        if(answer.readInfo === "READ") {
            connection.query('SELECT * FROM ______', (err, results) => {
                if(err) throw err;
                console.log(results);
            })
            connection.end();
        } else if(answer.readInfo === "WRITE") {
            connection.query('INSERT INTO products SET ?', 
            {
                // product_name: "",
                // product_price: "",
            }, (err) => {
                if(err) throw err;
               
                start();
            })
        }
        else {
            console.log('PLEASE TYPE IN READ!');
            start();
        }
    })
}

connection.connect((err) => {
    
    if(err) throw err;

    console.log('Did I connect to the database?', connection.threadId);
    start();
})