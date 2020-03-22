const usersCtrl = {};


usersCtrl.getUsers =(req,res) => res.json({message:[]});

usersCtrl.createUser = (req,res) => res.json({message:'Usuario Guardado!'});

usersCtrl.deleteUser = (req,res) => res.json({message:'Usuario Eliminado!'});

module.exports = usersCtrl;