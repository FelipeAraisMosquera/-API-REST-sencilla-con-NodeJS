const AccountController = module.exports
//importando el modulo de la logica..
const AccountService = require('../services/AccountService');

AccountController.listAccoutsByCustomer =  async (req, res, next) =>{
    const params = req.params;

    try{
        const response = await AccountService.listAccoutsByCustomer(params.id)
    //Enviando al cliente respuestas que retorar la logica existe
    res.send(response)
    //-------------------------------------------------
    } catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.createAccount = async(req, res, next)=>{
    const body =req.body;

    try{
        await AccountService.create(body)
        res.send({message: 'cuenta creada'})
        //---------------------------------------
    } catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.delete = async (req, res, next) => {
    //extrayendo los parametros de la peticion 
    const params = req.params;

    try{

        //se supone que ell id llega asi/ customer/:id (aca no es con {} si no con: )
        //await (ya que el metodo es async) para esperar que termine.
        await AccountService.delete(params.id)

        // Enviando respuestas al cliente (postman por ejemplo) el error..
        res.send({message: 'customer delete'})
        //-----------------------------------------------------
       }   catch(error) {//manejando las excecioners...
            console.log({error});
            //retornando a el cliente (postman por ejemplo el) el error
            res.status(500).send({error: error.message}).end();
            next(error);

        }      
    }

    AccountController.retirar = async (req, res, next) =>{
    
        const params = req.params;
        //extrayendo el body de la peticion
        const body = req.body;
    
        try {
            await AccountService.retirar(body)
    
            res.send({message: 'successful withdrawal'})
        } catch (error) {
            
            console.log({error});
            res.status(500).send({error: error.message}).end();
            next(error);
        }
    }

    AccountController.consignar = async (req, res, next) =>{
    
        const params = req.params;
        //extrayendo el body de la peticion
        const body = req.body;
    
        try {
            
            await AccountService.consignar(body)
    
            res.send({message: 'successful consignment'})
        } catch (error) {
            
            console.log({error});
            res.status(500).send({error: error.message}).end();
            next(error);
        }
    }

    AccountController.transferir = async (req, res, next) =>{
    
        
        //extrayendo el body de la peticion
        const body = req.body;
    
        try {
            
            await AccountService.transferir(body)
    
            res.send({message: 'successful transfer'})
        } catch (error) {
            
            console.log({error});
            res.status(500).send({error: error.message}).end();
            next(error);
        }
    }