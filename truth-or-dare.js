function truth(){
    let challenge = document.getElementById("op")

    let truths = ["Have you ever lied to your parents because of friends?" , "have you selected Truth because Dare said so?" , "Are you subscribed to Gaming Generator.369?" , "How you found this website?"]
    let t = Math.floor(Math.random() * truths.length)

    challenge.innerText = truths[t]
}

function dare(){
    let challenge = document.getElementById("op")

    let dares = ["do a push-up!" , "talk to a wall for 120 seconds" , "leave your balcony's door open so a bird can enter your house" , "go and do something productive instead of wasting your time" , "Dare: Select Truth" , "Subscribe Gaming Generator.369 on YouTube if you already don't"]
    let d = Math.floor(Math.random() * dares.length)

    challenge.innerText = dares[d]
}
