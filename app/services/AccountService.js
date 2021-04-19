//importando el repositorios
const AccountService = module.exports 

const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountRepository')

AccountService.listAccoutsByCustomer = async (customerId) =>{
    //Buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(customerId)

    //si el tamño de la lista de resultados es cero
    //es porque no existe un cliente con esa cedula
    if(customerFound.length === 0) {
        throw new Error('El cliente no exite')
    }
    //cuando se retorna directamente el resultado de una funcion que 
    //haya que esperar el resultado, no es necesario usa await..
    return AccountRepository.listAccoutsByCustomer(customerId)
}

AccountService.create = async(account) => {
//Buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(account.customerid)
    
    //si el tamaño es cero de la lista de resultados 
    //Es que no existe un cliente con esa cedula
    if(customerFound.length === 0){
        throw new Error('No existe el cliente')
    }
    //consultamos la cuenta del cliente..., el id del cliente viene en el objeto
    const accountsByCustomer = await AccountRepository.listAccoutsByCustomer(account.customerid)

    //verificando que solo tenga hasta 3 cuentas
    if(accountsByCustomer.length >= 3){
        throw new Error('no pueden haber mas de tres cuentas...')
    }

    account.opennedat = new Date();//colocamos la fecha de apertura
    account.amount = 0;//Colocamos el saldo inicial
    await AccountRepository.create(account)
}

AccountService.delete = async (accountId) =>{

    const accountFound = await AccountRepository.findById(accountId)
    
    if(accountFound[0].amount >= 0){
        throw new Error('la cuenta tiene saldo')

    }
    await AccountRepository.delete(accountId)

}


 AccountService.retirar = async (transaccion) =>{
    const accountFound = await AccountRepository.findById(transaccion.id)
    

    if (accountFound.length ==0 ) {
        throw new Error('Account does not exist')
    }

    if (transaccion.amount>accountFound[0].amount){

        throw new Error('the transaction amount exceeds the account amount')
    }

     transaccion.amount = accountFound[0].amount - transaccion.amount
     const account=transaccion;
     const accountId=transaccion.id

    await AccountRepository.edit(accountId, account)
}

AccountService.consignar = async (transaccion) =>{
    const accountFound = await AccountRepository.findById(transaccion.id)
    

    if (accountFound.length ==0 ) {
        throw new Error('Account does not exist')
    }
    
    transaccion.amount =  Number(accountFound[0].amount) + Number(transaccion.amount);

    const account=transaccion;
    const accountId=transaccion.id

    await AccountRepository.edit(accountId, account)
}

AccountService.transferir = async (transaccion) =>{
    //Buscamos la cuenta del cleinte
    
    const accountFound = await AccountRepository.findById(transaccion.id)
    const accountFound2 = await AccountRepository.findById(transaccion.id2)
    
    //si el tamaño es cero de la lista de resultados 
    //Es que no existe un cliente con esa cedula

    if (accountFound.length == 0 ) {
        throw new Error('La cuenta de origen no existe')
    }
    if (accountFound2.length == 0 ) {
        throw new Error('La cuenta de Destino no existe')
    }
    var accountFoundM = accountFound[0].amount
    console.log("el monto de la base de datos es " + accountFoundM)//20000
    var TotalTrasaccion = accountFoundM - transaccion.amount
    console.log("el monto despues del retiro es " + TotalTrasaccion)
    if(TotalTrasaccion < 0)
    {
        throw new Error('saldo insuficiente')
    }else{
        accountFound[0].amount = TotalTrasaccion
        console.log("el nuevo monto en la BD sera " + accountFound[0].amount)
    await AccountRepository.edit(transaccion.id, accountFound[0])

        var cuentaDestinoM = accountFound2[0].amount
        console.log("cuentaDestino : " + cuentaDestinoM)
        var TotalTrasaccionD = cuentaDestinoM+transaccion.amount
        console.log(" TotalTrasaccionD" + TotalTrasaccionD)
        accountFound2[0].amount = TotalTrasaccionD
        console.log("accountFound2[0].amount " + accountFound2[0].amount)
        await AccountRepository.edit(transaccion.id2, accountFound2[0])


    }


}





   