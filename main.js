function Redirectfunction() {
    var P_1 = document.getElementById("I1").value;
    var P_2 = document.getElementById("I2").value;
    localStorage.setItem("Player_1", P_1);
    localStorage.setItem("Player_2", P_2);
    window.location.replace("Math.html");
}