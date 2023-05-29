function callPascal() {
  let name = prompt("what is your name?");
  alert(
    "Thanks, " +
      name +
      ", Pedro will be in touch with you." +
      " Meanwhile, May the 4th be with you!"
  );
}
let contactButton = document.querySelector("button");
contactButton.addEventListener("click", callPascal);
