"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//prototype
function Animal(tipo) {
  if (this instanceof Animal) {
    if (tipo) this.tipo = tipo;
  } else {
    throw new Error("Animal precisa ser criado com operador new");
  }
}

function Cachorro(nome) {
  this.nome = nome;
  Animal.call(this, "Mamifero");
  this.constructor = Cachorro;
}

Cachorro.prototype = new Animal("Mamifero");
Cachorro.prototype.constructor = Cachorro;
var dog = new Cachorro("Dog");
var arr = [1, 2, 3];

Animal.prototype.obterTitulo = function () {
  this.tipo;
};

Animal.prototype.tipo = "desconhecido"; //ES6

var AnimalC =
/*#__PURE__*/
function () {
  function AnimalC(tipo) {
    _classCallCheck(this, AnimalC);

    if (tipo) {
      this.tipo = tipo;
    }
  }

  _createClass(AnimalC, [{
    key: "obterTipo",
    value: function obterTipo() {
      return this.tipo;
    }
  }]);

  return AnimalC;
}();

var GatoC =
/*#__PURE__*/
function (_AnimalC) {
  _inherits(GatoC, _AnimalC);

  function GatoC(nome) {
    var _this;

    _classCallCheck(this, GatoC);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GatoC).call(this, "mamifero"));
    _this.nome = nome;
    return _this;
  }

  return GatoC;
}(AnimalC);

AnimalC.prototype.tipo = "Desconhecido";
var animal = new AnimalC("anfibio");
var sapo = new AnimalC();
var mingau = new GatoC("Mingau"); //console.log(animal)
//console.log(cat)
//console.log(typeof animal)
//console.log(typeof cat)
//console.log(Animal)
//console.log(AnimalC)
//console.log(Animal.prototype)
//console.log(AnimalC.prototype)

console.log(mingau.constructor);
console.log(dog.constructor);