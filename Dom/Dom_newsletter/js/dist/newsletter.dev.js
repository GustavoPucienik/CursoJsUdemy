"use strict";

var txtEmail = document.getElementById("txtEmail");
var msgFeedback = document.getElementById("newsletterFeedback");

function cadastrarEmail() {
  var email = txtEmail.value;
  msgFeedback.innerHTML = "O email ".concat(email, " foi cadastrado com sucesso");
}