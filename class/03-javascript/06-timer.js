let isStarted = false;

let math= () => {
    if(isStarted === false){
        //타이머가 작동중이 아닐 때
        isStarted = true
        document.getElementById("finish").disabled = false
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token
    
        let time = 180
        let timer
    
        timer = setInterval(function(){
            if(time >= 0){
                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            }
            else {
                document.getElementById("finish").disabled = True
                isStarted = false
                console.log("타이머 작동중")
                clearInterval(timer)
            }
        },1000)
    } else {
        // 작동중일 때
    }

}