// we have a delete button in the html frontend and the following is the function onClick <button>....$
// as logged in user the localstorage got the __id data....

const deleteFromFrontend =()=>{

    //gather __id from localstorage first

    const userId = localStorage.getItem("user")
    
    fetch(`http://localhost:3000/api/user/delete?id=${userId}`)




}