function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "read less";
    moreText.style.display = "inline";
  }
}

function myFunction1() {
  var dots1 = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText.innerHTML = "More Casinoo";
    moreText.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText.innerHTML = "Свернуть";
    moreText.style.display = "inline";
  }

}


