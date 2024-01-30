const UsuarioModel = require("../models/UsuarioModel");

const usuarioController = {
    getById: async(req, resp) => {
        try{
            const user = await UsuarioModel.getById(req.params.id);

            return resp.status(200).json({
                "status" : "success",
                "data" : user
            });
        }
        catch(error){
            resp.status(500).json({"error" : "Erro ao buscar usuario" + error});
        }
    },

    getAllUsuarios: async(req, resp) => {
        try{
            const users = await UsuarioModel.getAllUsuarios();

            return resp.status(200).json({
                "status" : "success",
                "data" : users
            });
        }
        catch(error){
            resp.status(500).json({"error" : "Erro ao buscar usuarios" + error});
        }
    },

    newUser: async(req, resp) => {
        try{
            const newUser = await UsuarioModel.newUser(req.body)

            return resp.status(200).json({
                "status" : "success",
                "data" : newUser
            })
        }
        catch(error){
            resp.status(500).json({"error" : "Erro ao cadastrar usuario" + error});
        }
    }
}

module.exports = usuarioController;