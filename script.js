
    var guessnumber = document.getElementById("guessnumber")
    var result = document.getElementById("result")
    var score = document.getElementById("score")
    var totalscore = 10
    var randomNumber = Math.floor(Math.random()*10)+1

    function check() {
        var enterednumber = guessnumber.value
        if(randomNumber == enterednumber) {
            result.textContent = "Right ✔️"
            alert("You WON...!")
        }
        else {
            result.textContent = "Wrong ❌"
            totalscore = totalscore - 1
            score.textContent = "Score:" + totalscore
        }
    }