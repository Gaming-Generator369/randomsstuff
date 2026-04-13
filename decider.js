function decide(){
    let y = document.getElementById("ans") 
    let x = ["Yes" , "No" , "Probably yes" , "Probably no"]
    let decision = Math.floor(Math.random() * x.length)

    y.innerText = x[decision]
}