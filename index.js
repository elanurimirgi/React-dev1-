import axios from "axios";

 function getData(user_id){
    return new Promise (async(resolve, reject) =>{
            const users = await (axios(`https://jsonplaceholder.typicode.com/users/${user_id}`));
            const posts = await(axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`));
            const user = { ...users.data, posts: posts.data };
            resolve (user) ;
        
            reject("sorun var");
        
})
 }
export default getData;


  
