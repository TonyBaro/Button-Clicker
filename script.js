function disapear(x){
    console.log ("poof")
    x.remove()
}
var login = 0
function logout(x){
    
    if (login == 0){
        console.log ("your mine")
        x.innerText = "Logout"
        login++
    }
    else{
        console.log ("slip thorugh my fingers")
        x.innerText = "Login"
        login--
    }
}
