import getData from "./index.js";
getData(2) 
.then((user) => console.log(user))
.catch((e) => console.log(e))

