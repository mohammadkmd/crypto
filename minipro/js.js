function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "نمایش بیشتر";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "نمایش کمتر";
        moreText.style.display = "inline";
    }
}
function data() {

    $(document).ready(function () {
        var crypto = document.getElementById('crypto').value;
        var fiat = document.getElementById('fiat').value;
        if (crypto == "" || fiat == "") {

            alert("ارز/واحد را انتخاب کنید");

        }
        else {
            var display = $("#output")
            $.getJSON("https://min-api.cryptocompare.com/data/price?fsym=" + crypto + "&tsyms=" + fiat + " ", function (result) {
                display.empty();
                display.append("<h6 style='text-align:center'> " + crypto + "= <b>" + result[fiat] + "</b> " + fiat + "</h6>");

            });

        }
    });



}
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}