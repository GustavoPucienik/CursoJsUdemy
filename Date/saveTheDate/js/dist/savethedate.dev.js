"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(function () {
  var dataEventDom = document.querySelector(".hero-content h1 span").innerText;
  var dateEvent = getDate(dataEventDom); //variavel = função e parametro

  var today = new Date();
  var left = dateEvent.getTime() - today.getTime();
  var one_minute = 60 * 1000;
  var one_hour = 60 * one_minute; //Uma hora

  var one_day = 24 * one_hour; //Um dia

  var days_left = parseInt(left / one_day);
  left = left - days_left * one_day;
  var hoursLeft = parseInt(left / one_hour);
  left = left - hoursLeft * one_hour;
  var minutesLeft = parseInt(left / one_minute);
  left = left - minutesLeft * one_minute;
  var secondsLeft = parseInt(left / 1000);
  addLeftTime(days_left, hoursLeft, minutesLeft, secondsLeft);

  function addLeftTime(d, h, m, s) {
    var p = document.createElement("p");
    p.textContent = "Contagem regresiva: ".concat(d, " dias, ").concat(h, " horas, ").concat(m, " minutos, ").concat(s, " segundos ");
    document.querySelector(".hero-content").appendChild(p);
  }

  function getDate(str) {
    var _str$split = str.split(" "),
        _str$split2 = _slicedToArray(_str$split, 2),
        data = _str$split2[0],
        hora = _str$split2[1];

    var _data$split = data.split("/"),
        _data$split2 = _slicedToArray(_data$split, 3),
        day = _data$split2[0],
        month = _data$split2[1],
        year = _data$split2[2];

    var _hora$split = hora.split("H"),
        _hora$split2 = _slicedToArray(_hora$split, 2),
        h = _hora$split2[0],
        m = _hora$split2[1];

    return new Date(year, month - 1, day, h, m);
  }
})();