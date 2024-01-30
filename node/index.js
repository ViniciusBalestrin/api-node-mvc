const express = require('express');
const usuarioController = require('./controllers/usuarioController');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/usuarios/all', usuarioController.getAllUsuarios);
app.get('/api/usuarios/:id', usuarioController.getById);
app.post('/api/usuarios/new', usuarioController.newUser);
app.put('/api/usuarios/:id', usuarioController.updateUser);

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`);
}); 