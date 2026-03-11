
const username = 'user0001';
const userpassword = '1234';
const savedpasssword = '1234';
const useranswer = 'calabaza';
const savedanswer = 'pistacho';

if (username !== 'user0001') {
    // 1. si el username no es user0001 
    console.log("su username no existe");

    
}
 
else if (userpassword === savedpasssword) {
    // 2. si el username coincide y el password hace matc
    console.log("puede iniciar sesion");
    
}

else if (useranswer === savedanswer) {
    // 3. si los password no coinciden (implicito por el else iniciar),
    // pero los answers si hacen match 
    console.log ("puede iniciar sesion");
    
}

else{ 
    // 4. si nada hace match (ni password ni answer)
    console.log("no puede iniciar sesion");
    


}