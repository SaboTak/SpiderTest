const usersCtrl = {};

//modelo
const User = require('../models/User')

//peticiones

usersCtrl.getUsers = async (req,res) => {
    const users = await User.find()
    res.json(users)
};

usersCtrl.createUser = async (req,res) => {
    const {usuario,contraseña} = req.body;
    const newUser = new User({usuario,contraseña});
    await newUser.save();
    res.json('Usuario Guardado!')
};

usersCtrl.deleteUser = async (req,res) => {
    await User.findOneAndDelete({_id: req.params.id})
    res.json('Usuario Eliminado!')
};

module.exports = usersCtrl;