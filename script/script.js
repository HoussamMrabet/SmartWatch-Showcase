function black() {
    document.getElementById("myimage").src = "https://i.imgur.com/iOeUBV7.png";
}

function red() {
    document.getElementById("myimage").src = "https://i.imgur.com/PTgQlim.png";
}

function blue() {
    document.getElementById("myimage").src = "https://i.imgur.com/Mplj1YR.png";
}

function pink() {
    document.getElementById("myimage").src = "https://i.imgur.com/xSIK4M8.png";
}

function purple() {
    document.getElementById("myimage").src = "https://i.imgur.com/Zygu7I3.png";
}

function timer() {

    document.getElementById('heart').style.visibility = 'hidden';
    document.getElementById('heart-rate').style.visibility = 'hidden';
    document.getElementById('time').style.visibility = 'visible';

    
    setInterval(function(){

        function addZero(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
        }
    
        var d = new Date();
        var x = document.getElementById("demo");
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        document.getElementById('time').innerHTML = h + " : " + m + " : " + s;
    },0);
}

function heartbeat() {

    document.getElementById('time').style.visibility = 'hidden';
    document.getElementById('heart').style.visibility = 'visible';
    document.getElementById('heart-rate').style.visibility = 'visible';

}




