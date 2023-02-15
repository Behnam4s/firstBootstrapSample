let darkModeOn = false;
function changing() {
  console.log(darkModeOn);
  if (darkModeOn) {
    darkModeOn = false;
    document.querySelector("link[href='dark-mode.css']").href =
      "light-mode.css";
    document.getElementById("lightMode").style.display = "none";
    document.getElementById("darkMode").style.display = "inline";
    document.getElementById("NFTPicLight").style.display = "block";
    document.getElementById("NFTPicDark").style.display = "none";
  } else {
    darkModeOn = true;
    document.querySelector("link[href='light-mode.css']").href =
      "dark-mode.css";
    document.getElementById("lightMode").style.display = "inline";
    document.getElementById("darkMode").style.display = "none";
    document.getElementById("NFTPicDark").style.display = "block";
    document.getElementById("NFTPicLight").style.display = "none";
  }
}
