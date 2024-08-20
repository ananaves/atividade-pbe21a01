import { Banco } from "../MODEL/Banco";

const novoBanco: Banco = new Banco ( 45, "madeira", "redondo"); 
 /*
console.log(`Primeiro objeto completo`);
console.log(novoBanco);

console.log(`Somente material`);
console.log(novoBanco.getMaterial);

novoBanco.setMaterial("aluminio"); 
console.log(novoBanco.getMaterial);
*/

novoBanco.Sentar();
novoBanco.Subir();