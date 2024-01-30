const mysql = require('mysql2');

const config = mysql.createPool({
    connectionLimit: 10,    
    password: "root",
    user: "root",
    database: "nodedb",
    host: "db",
    port: "3306"
});

const Usuario = {
    getById: async(id) => {
        const sql = "SELECT * FROM usuarios WHERE id = " + id;
        
        return new Promise((resolve, reject) =>{
            config.query(sql,  (error, elements)=>{
                if(error){
                    return reject(error);
                }

                return resolve(elements);
            });
        });
    },
    
    getAllUsuarios: async() => {
        const sql = "SELECT * FROM usuarios;"
        
        return new Promise((resolve, reject) =>{
            config.query(sql,  (error, elements) =>{
                if(error){
                    return reject(error);
                }

                return resolve(elements);
            });
        });
    },

    newUser: async(request) => {
        const sql = "INSERT INTO usuarios (nome, sobrenome) VALUES ( ' " + request.nome + " ' , ' " + request.sobrenome +  " ')";

        return new Promise((resolve, reject) =>{
            config.query(sql,  (error, elements) =>{
                if(error){
                    return reject(error);
                }

                return resolve(elements);
            });
        });
    },

    updateUser: async(request) => {
        const sql = "UPDATE usuarios SET nome=' " + request.nome + " ' sobrenome = ' " + request.sobrenome + " ' WHERE id = " + request.id;

        return new Promise((resolve, reject) =>{
            config.query(sql,  (error, elements) =>{
                if(error){
                    reject(error);
                }

                resolve(elements);
            });
        });
    }
}

module.exports = Usuario;