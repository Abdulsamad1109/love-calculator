function calculate(){
    document.getElementById("result").style.display = "block"
    document.getElementById("calculator").style.display = "none"
    var input1 = document.getElementById("female").value;
    var input2 = document.getElementById("male").value

    var ram = Math.random()*99
    var rou = Math.round(ram)

    document.getElementById("love-percentage").innerText = "Your" + " love for " + input2 + " is " + rou + "%"


    if (rou = 50){
        rou = "1"
    }

    if(! input1 | input2 ==""  ){
        alert("Please input your name and your partner's name")
        document.getElementById("calculator").style.display = "block"
        document.getElementById("result").style.display = "none"
    }
}