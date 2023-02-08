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

// Factories
var CachorroProto = {
  latir: function latir() {
    console.log(this.name, "esta latindo");
  },
  andar: function andar(distancia) {
    this.posicao = distancia;
    console.log(this.name, " andou ", distancia, " metro");
  }
};

function criarCachorro(name) {
  var posicao = 0;
  var obj = {
    name: name,

    get posicao() {
      console.log("A posi\xE7\xE3o atual de ".concat(this.name, " \xE9 ").concat(posicao));
      return posicao;
    },

    set posicao(newPosition) {
      console.log("A nova posi\xE7\xE3o de ".concat(this.name, " \xE9 ").concat(this.posicao, " "));
      posicao = newPosition;
    }

  };
  Object.setPrototypeOf(obj, CachorroProto); //Toda vez que eu chamar a funçao criar cachorro cria um outro objeto o prototype de dog1 não é o mesmo de dog2

  return obj;
}

var dog1 = criarCachorro("dog1");
var dog2 = criarCachorro("dog2"); //prototype

function Animal(tipo) {
  if (this instanceof Animal) {
    if (tipo) this.tipo = tipo;
  } else {
    throw new Error("Animal precisa ser criado com operador new");
  }
}

function Cachorro(name) {
  this.name = name;
  Animal.call(this, "Mamifero");
  this.constructor = Cachorro;

  this.comer = function () {
    console.log("".concat(this.name, " esta comendo."));
  };
}

Cachorro.prototype = new Animal("Mamifero");
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function () {
  console.log("".concat(this.name, " esta latindo."));
};

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

  function GatoC(name) {
    var _this;

    _classCallCheck(this, GatoC);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GatoC).call(this, "mamifero"));
    _this.name = name;

    _this.comer = function () {
      console.log("".concat(this.name, " esta comendo"));
    };

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
//console.log(mingau.constructor)
//console.log(dog)