"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(function () {
  var dateEventDOM = document.querySelector(".hero-content h1 span").innerText;
  console.log(dateEventDOM);
  var dateEvent = getDate(dateEventDOM);
  console.log(dateEvent);
  var ONE_MINUTE = 60 * 1000;
  var ONE_HOUR = 60 * ONE_MINUTE;
  var ONE_DAY = 24 * ONE_HOUR;
  var p = document.createElement("p");

  function upDate() {
    var today = new Date();
    var left = dateEvent.getTime() - today.getTime();
    var daysLeft = parseInt(left / ONE_DAY);
    left = left - daysLeft * ONE_DAY;
    var hoursLeft = parseInt(left / ONE_HOUR);
    left = left - hoursLeft * ONE_HOUR;
    var minutesLeft = parseInt(left / ONE_MINUTE);
    left = left - minutesLeft * ONE_MINUTE;
    var secondsLeft = parseInt(left / 1000);
    addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft);
  }

  upDate();

  function addLeftTime(d, h, m, s) {
    p.textContent = "Contagem regressiva: ".concat(d, " dias, ").concat(h, " horas, ").concat(m, " minutos, ").concat(s, " segundos ");
    document.querySelector(".hero-content").appendChild(p);
  }

  setInterval(upDate, 1000);

  function getDate(str) {
    var _str$split = str.split(" "),
        _str$split2 = _slicedToArray(_str$split, 2),
        date = _str$split2[0],
        hour = _str$split2[1];

    var _date$split = date.split("/"),
        _date$split2 = _slicedToArray(_date$split, 3),
        day = _date$split2[0],
        month = _date$split2[1],
        year = _date$split2[2];

    var _hour$split = hour.split("H"),
        _hour$split2 = _slicedToArray(_hour$split, 2),
        h = _hour$split2[0],
        m = _hour$split2[1];

    return new Date(year, month - 1, day, h, m);
  }
})();