const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/usuarios',(req,res) =>{
    res.send(usuarios)
})

app.get('/usuarios/:nombre',(req,res) =>{
    console.log(req.params.nombre);
    const nameRequested = req.params.nombre
    const filterArray = usuarios.filter(user => user.nombre === nameRequested)[0]
    
    res.send(filterArray)
})

app.post('/usuarios',(req,res) =>{
    
    const newUser = {
        id: usuarios.length + 1,
        name : req.query.nombre
    }
    
    usuarios.push(newUser)

    res.status(200).send('OK')
})

app.put('/usuarios/:nombre',(req,res) =>{
    
    
    const oldName = req.params.nombre
    const newName = req.body.nombre || ''
    const newAge = req.body.edad || ''
    const newCountry = req.body.country || ''
    const user = usuarios.find(user => user.nombre === oldName)

    newName ? user.nombre = newName : null
    newAge ? user.edad = newAge : null
    newCountry ? user.lugarProcedencia = newName : null
    
    res.send(usuarios)
})




app.delete('/usuarios/:nombre',(req,res)=>{
    const userToDelete = req.params.nombre
    console.log(userToDelete);
    
    const arrayFiltered = usuarios.filter(usuario => usuario.nombre !== userToDelete)
    
    usuarios = arrayFiltered
    
    res.status(200).send('OK')
})

app.listen(PORT,()=>{
    console.log(`Server listening on port http://localhost:${PORT}`);
    
})


let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];


// app.put('/usuarios/:nombre',(req,res) =>{
//     console.log(req.params.nombre);
//     console.log(req.query);
//     const oldName = req.params.nombre
//     const newName = req.query.name || ''
//     const newAge = req.query.edad || ''
//     const newCountry = req.query.country || ''
    
//     const userFound = usuarios.find(user =>  user.nombre === oldName)
       
//             // newName ? user.name = newAge : user.name
//             // newAge ? user.edad = newAge : user.edad
//             // newCountry ? user.lugarProcedencia = newAge : user.lugarProcedencia
        
    
//     console.log(userFound);
    
//     // const nameRequested = req.params.nombre
//     // const filterArray = usuarios.filter(user => user.nombre === nameRequested)
//     // console.log(filterArray);
    
    
//     res.send(usuarios)
// })