import axios from"axios";

/*    
//json-server --watch -d 180 --host 192.168.1.4 db.json - caso pare meu projeto, utilizo este comando para voltar a rodar a api.js de comida. 
*/

const api= axios.create({
baseURL: 'http://192.168.1.7:3000'

})
export default api; 
