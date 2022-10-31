const {response, request} =require('express');

const usersGet = (req = request, res = response)=>{
    const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;
    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
})};

const userPut = (req, res)=>{
    const {id} = req.params;
    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const userPost = (req, res)=>{
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post API - Controlador',
        nombre, 
        edad
    });
}

const userDelete = (req, res)=>{
    res.json({
        msg: 'delete API - Controlador'
    });
}

const userPatch = (req, res)=>{
    res.json({
        msg: 'patch API- Controlador'
    });
}

module.exports = {
    usersGet,
    userPut,
    userPost,
    userDelete,
    userPatch   
}