var countDownDate = new Date("May 21, 2023 14:31:59").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if (distance <= 0) {
    clearInterval(x);
    var finish = document.querySelector(".content__countdown")
    finish.innerHTML = "chương trình sale đã kết thúc";
    finish.style.color = "red"
    finish.style.padding = "50px"
  }

}, 1000);