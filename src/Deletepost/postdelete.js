export const postdelete = (id) =>{
    return{
        type:"Delete_post", 
        id:id
    }
}
// you can replace this funtion inside the deletepost( postdelete(id)) in the Routerpart.js
// so that you code can handle complexcity.....