export async function findPokemon(id){
    const API=`https://pokeapi.co/api/v2/pokemon/${id}`;

    try{
        if(id == null || id == undefined){
            throw new Error('id is required');
        }

        if(typeof id !== 'number' || !Number.isInteger(id)){
            throw new Error('id parameter must be a number and an integer');
        }

        if(id<1){
            throw new Error('id parameter must be greater than 0');
        }
        
        if(id>1302){
            throw new Error('id parameter must be lower than 1303')
        }
        const response=await fetch(API);
        const pokemon=response.json();
        return pokemon;
    }catch(error){
        throw new Error(`${error.message}`)
    }
}