//importando el repositorio
const ClienteRepository = require('./app/repositories/CustomerRepository')
const AccountRepository = require('./app/repositories/AccountRepository')
const CustomerService = require('./app/services/CustomerService')
const AccountService = require('./app/services/AccountService')
console.log('Probando Test..........')

// ClienteRepository.create({
//     name:'Juan',
//     lastname:'Ferrer',
//     id:'4321',
//     email:'Juan@gmail.com'
// }).then(console.log)//para que el programa espere que la operacion termine

// async function ProbandoElbuscar() {

//     const cliente = await ClienteRepository.findById('4321')
//     console.log(cliente)
// }

// ProbandoElbuscar()
//     .then(console.log('ok')) //para que el programa espere a que la operacion termine

// async function probandoElEditar() {
//  //await es para que nodejs espere que termine la ejecucion
//  //De pasar a la siguiente instruccion

//  await ClienteRepository.edit(4321, {

// name:'Jose',
// lastname:'perez',
//  })

// }
// probandoElEditar()
// .then(console.log('ok'))//para que el programa espere a que la operacion termine...

// async function probandoEliminar(){
//     await ClienteRepository.delete('4321')
// }

// probandoEliminar()
// .then(console.log('ok')) //para que el programa 
///////////////////////////////////////////////// Cuenta
// AccountRepository.create({
//     customerid:'007',
//     opennedat:'2021-04-30',
//     id:'4',
//     amount:'1000000'
// }).then(console.log)//para que el programa espere que la operacion termine

// async function probandoEliminar(){
//     await AccountRepository.delete('4')
// }

// probandoEliminar()
// .then(console.log('ok')) //para que el programa 

// async function probandolistarCuentas(){
//     const list = await AccountRepository.listAccoutsByCustomer('007')
//     console.log(list)
// }
// probandolistarCuentas()
// .then(console.log('ok'))
///////////////////////////////////////////////////////// CustomerService

// async function probarCrearCliente() {
// await CustomerService.create({
//     id: '002',
//     lastname:'Padilla',
//     name:'Maria',
//     email:'Maria@gmail.com'
// })
// }probarCrearCliente().then(console.log('Accion exitosa'))

// async function probarEditar() {
//     await CustomerService.edit('072',{
//         lastname: 'Tulio',
//         name: 'Cristian',
//     })
// }
// probarEditar().then(console.log('Se actualizo el cliente'))

// async function probarEliminar(){
//     await CustomerService.delete('007')
//     }
// probarEliminar().then(console.log('se elimino el cliente'))

// async function probarBuscar(){
//     const customer = await CustomerService.findCustomer('007')
//     console.log(customer)
// }probarBuscar().then(console.log('El cliente es:'))
//////////////////////////////////////////////AccountService
// async function probarBuscar(){
//     const result = await AccountService.listAccoutsByCustomer('007')
//     console.log(result)
// }

// probarBuscar().then(console.log('la cueta es:...'))

// async function probar(){
//     const result = await AccountService.create({
//         id:'11',
//         customerid:'008',
//         amount:0,
//         opennedat:  new Date(),
//     })
//     console.log(result)
// }
//  probar().then(console.log('ok'))

