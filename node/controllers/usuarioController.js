const UsuarioModel = require("../models/UsuarioModel");

const usuarioController = {
    getById: async(req, resp) => {
        try{
            if(!req.params.id)
                return resp.status(404).json({ "status" : "error", "message" : "Informe o id do usuario"});

            const user = await UsuarioModel.getById(req.params.id);

            if(user.length == 0)
                return resp.status(404).json({
                    "status" : "error", 
                    "message" : "Usuario nao localizado"
                });

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
    },

    updateUser: async(req, resp) => {
        try {
            if(isNaN(req.params.id))
                return resp.status(404).json({ "status" : "error", "message" : "Id do usuario invalido"});

            const updateUser = await UsuarioModel.updateUser(req.body, req.params.id)

            if(updateUser.affectedRows == 0)
                return resp.status(404).json({ "message" : "Impossivel atualizar, verifique se o usuario existe ou os parametros estão corretos"});

            return resp.status(200).json({
                "status" : "success",
                "data" : updateUser
            });
        } catch (error) {
            resp.status(500).json({"error" : "Erro ao atualizar usuario" + error});
        }
    }
}

module.exports = usuarioController;