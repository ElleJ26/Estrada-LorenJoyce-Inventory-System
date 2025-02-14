import { createConnection } from 'mysql';

// Create connection to MySql
const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory_system'
});

export const checkConnection = () => {
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySql database: ' + err.stack);
            return;
        }    
        console.log('Connected to MySql database as id ' + connection.threadId);
    });

    return connection;
}

// Close MySql connection when Node.js app exits
process.on('exit', () => {
    connection.end();
});