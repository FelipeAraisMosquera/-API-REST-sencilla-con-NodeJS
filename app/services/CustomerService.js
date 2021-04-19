//importando el repositorios
const CustomerService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountRepository')


CustomerService.create = async (customer) =>{
    //Buscamos el cliente por id para verificar si existe
    const customerFond = await CustomerRepository.findById(customer.id)

    //si el tamaño de la nolista de resultados es mayor que cero
    //es porque existe un cliente con una cedula
    if(customerFond.length > 0) {
        throw new Error('El cliente ya existe')
     }

     //se crea el cliente
     await CustomerRepository.create(customer)
     
}
///////////
CustomerService.edit = async (id, customer) => {
    //buscamos el cliente por id para verifivar si existe
    const customerFond = await CustomerRepository.findById(id)

    //si el tamaño es cero de la lista de resultados
    //es porque no existe un cliente con esa cedula 

    if(customerFond.length === 0){
        throw new Error('El Cliente no existe')
    }

    //Se actualiza el clinte
    await CustomerRepository.edit(id, customer)
}
///////////
CustomerService.delete = async (idCustomer) => {
//Se consulta las cuantas del cliente, se usa await porque debemos 
//Esperar ese resultado para poder seguir...
const CustomerAccounts = await AccountRepository.listAccoutsByCustomer(idCustomer)

//Si el tamaño de la lista es mayor a cero es porque tiene cuentas
// y se lanza la excepcion
    if(CustomerAccounts.length > 0){
        throw new Error('El cliente tiene Cuentas, no se puede eliminar')
    }
    //se elimina el cliente 
    await CustomerRepository.delete(idCustomer)
}

//////////
CustomerService.findCustomer = async (idCustomer) => {
    const customers = await CustomerRepository.findById(idCustomer)
    if(customers.length === 0) return undefined;

    return customers[0];
}

CustomerService.findAllCustomers = async () => {
    const customers = await CustomerRepository.findAll()

    return customers
}