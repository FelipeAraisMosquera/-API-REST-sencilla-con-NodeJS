const CustomerController = module.exports
//importando el modulo de la logica
const CustomerService = require('../services/CustomerService');


//los parametros req, y res y next siempre son requeridos 
//para el correcto funcionamiento del controlador_PID
//aca no va definido el path, se hace en otras partes
CustomerController.delete = async (req, res, next) => {
    //extrayendo los parametros de la peticion 
    const params = req.params;

    try{

        //se supone que ell id llega asi/ customer/:id (aca no es con {} si no con: )
        //await (ya que el metodo es async) para esperar que termine.
        await CustomerService.delete(params.id)

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

    //PUT / customers/:id Body: datos a editar..
    CustomerController.edit = async (req, res, next) =>{
        const params = req.params;
        //Extrayendo el body de la peticion
        const body = req.body;

        try{
            await CustomerService.edit(params.id, body)

            res.send({message: 'Cliente actualizado'})
            //------------------------------------------
        } catch(error){
               console.log({error});
               res.status(500).send({error: error.message}).end();
            next(error);
        }
    }

    CustomerController.create = async(req,res,next) =>{

        const body = req.body;
        try {
            await CustomerService.create(body)
            res.send({message: 'client created'})
        } catch (error) {
            console.log({error});
            res.status(500).send({error: error.message}).end();
            next(error);
        }
    }

    CustomerController.findCustomer = async(req,res,next)=>{

        const params = req.params;
    
        try {
            const response =await CustomerService.findCustomer(params.id)
    
            res.send(response)
    
        } catch (error) {
            console.log({error});
            res.status(500).send({error: error.message}).end();
            next(error);
        }
    }

    CustomerController.findAllCustomers = async(req,res,next)=>{

        try {
            const response =await CustomerService.findAllCustomers()
    
            res.send(response)
            
        } catch (error) {
            console.log({error});
            res.status(500).send({error: error.message}).end();
            next(error);
        }
    }