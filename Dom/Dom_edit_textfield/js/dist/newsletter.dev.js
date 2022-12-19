"use strict";

var txtEmail = document.getElementById("txtEmail");

function editarEmail() {
  txtEmail.disabled = false;
  txtEmail.focus();
}

function disabledEmail() {
  txtEmail.disabled = true;
}