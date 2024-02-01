const express = require('express');
const usuarioController = require('./controllers/usuarioController');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/usuarios', usuarioController.getAllUsuarios);
app.get('/api/usuario/:id', usuarioController.getById);
app.post('/api/usuario/new', usuarioController.newUser);
app.put('/api/usuario/:id', usuarioController.updateUser);

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`);
}); 