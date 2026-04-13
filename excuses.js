function life_excuse(){
    let excuse = document.getElementById("excuse_output")
    
    let life = ["My pet teared it" , "It accidently fell into water because an animal scared me" , "I had a call"]
    let excuses1 = Math.floor(Math.random() * life.length)

    excuse.innerText = life[excuses1]
}

function work_excuse(){
    let excuse = document.getElementById("excuse_output")

    let work = ["I'm out of station" , "I'm in a meeting" , "I have a call, it's urgent"]
    let excuses4 = Math.floor(Math.random() * work.length)

    excuse.innerText = work[excuses4]
}

function internet_excuse(){
    let excuse = document.getElementById("excuse_output")

    let internet = ["My internet finished" , "I was on Desktop and Powercut Out striked" , "My mobile's battery died" , "It crashed" , "I had a call"]
    let excuses2 = Math.floor(Math.random() * internet.length)

    excuse.innerText = internet[excuses2]
}

function school_excuse(){
    let excuse = document.getElementById("excuse_output")

    let school = ["My pet teared my it" , "it accidently fell into water because an animal scared me" , "Alarm's batteries died"]
    let excuses3 = Math.floor(Math.random() * school.length)

    excuse.innerText = school[excuses3]
}

