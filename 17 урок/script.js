$(document).ready(function(){
  $('.slider').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
    dots: true,
	infinite: true,
	speed: 600,
	autoplay: true,
    autoplaySpeed: 2000
  });
});

$(".calculator").addClass("pre-enter");
setTimeout(function(){
	$(".calculator").addClass("on-enter");
}, 500);
setTimeout(function(){
	$(".calculator").removeClass("pre-enter on-enter");
}, 2000);

var $keys = $('button');
var $total = $('.total');
var $summary = $('.summary');
var decimal = false;
var operators = ['+', '-', '×', '÷'];

$keys.click(function() {
	var keyVal = $(this).data('val');
	output = $summary.html();
	var lastChar = output[output.length - 1];

	// clear
	if (keyVal == 'clear') {
		$total.html('0');
		$summary.html('');
		decimal = false;
	}

	// equal
	else if (keyVal == '=') {
		output = output.replace(/×/g, '*').replace(/÷/g, '/');
		if (operators.indexOf(lastChar) > -1 || lastChar == '.')
			output = output.replace(/.$/, '');
		if (output) {
			$total.html(Math.round(eval(output)*10000000)/10000000);
		}
		$summary.addClass("complete");
		decimal = false;
	}

	// operators
	else if ($(this).parent().parent().parent().is('.operators')) {
		if ($summary.is(".complete")) {
			$summary.removeClass("complete");
		}
		if (output != '' && operators.indexOf(lastChar) == -1) {
			$summary.html($summary.html() + keyVal);
		} else if (output == '' && keyVal == '-') {
			$summary.html($summary.html() + keyVal);
		}
		if (operators.indexOf(lastChar) > -1 && output.length > 1) {
			$summary.html($summary.html().replace(/.$/, keyVal));
		}
		decimal = false;
	}

	// decimal
	else if (keyVal == '.') {
		if ($summary.is(".complete")) {
			$summary.html('0' + keyVal);
			$summary.removeClass("complete");
		} else if (output == '') {
			$summary.html('0' + keyVal);
		} else if (operators.indexOf(lastChar) > -1) {
			$summary.html($summary.html() + '0' + keyVal);
		} else {
			if (!decimal) {
				$summary.html($summary.html() + keyVal);
				decimal = true;
			}
		}
	}

	// numerals
	else {
		if ($summary.is(".complete")) {
			$summary.html(keyVal);
			$summary.removeClass("complete");
		} else {
			$summary.html($summary.html() + keyVal);
		}
	}
})

$(window).keydown(function(e) {
	console.log(e.which);
	switch (e.which) {
		case 48:
			key = 0;
			break;
		case 49:
			key = 1;
			break;
		case 50:
			key = 2;
			break;
		case 51:
			key = 3;
			break;
		case 52:
			key = 4;
			break;
		case 53:
			key = 5;
			break;
		case 54:
			key = 6;
			break;
		case 55:
			key = 7;
			break;
		case 56:
			key = 8;
			break;
		case 57:
			key = 9;
			break;
		
		case 191:
			key = '÷';
			break;
		case 190:
			key = '.';
			break;
		case 88:
			key = '×';
			break;
		case 189:
			key = '-';
			break;
		case 187:
			key = '+';
			break;
		case 67:
			key = 'clear';
			break;
		
		case 96:
			key = 0;
			break;
		case 97:
			key = 1;
			break;
		case 98:
			key = 2;
			break;
		case 99:
			key = 3;
			break;
		case 100:
			key = 4;
			break;
		case 101:
			key = 5;
			break;
		case 102:
			key = 6;
			break;
		case 103:
			key = 7;
			break;
		case 104:
			key = 8;
			break;
		case 105:
			key = 9;
			break;
		
		case 111:
			key = '÷';
			break;
		case 109:
			key = '-';
			break;
		case 106:
			key = '×';
			break;
		case 107:
			key = '+';
			break;
		case 13:
			key = '=';
			break;
		case 110:
			key = '.';
			break;
		case 27:
			key = 'clear';
			break;
		default:
			return false;
						}
	$('[data-val="' + key + '"]').addClass('active').click();
}).keyup(function(){
	$('.active').removeClass('active');
});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ButtonsList=["7;8;9;/[;C[","4;5;6;*[;<[","1;2;3;+[;=|[","0;00;.;-["];
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create(tagName, clasName, childs = []) {
    let elem = document.createElement(tagName);
    elem.className = clasName;
    return elem;
}
exports.create = create;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buttons_1 = require("./lib/buttons");
const element_1 = require("./lib/element");
class Calc {
    static get variable() {
        let i = parseInt(this._v);
        if (!isNaN(i) && i === 0)
            this._v = '';
        return this._v;
    }
    static set variable(v) {
        if (!v.length)
            v = '0';
        this._v = v;
        this.view.innerHTML = v;
    }
    static init() {
        let keyboard = element_1.create('table', 'keyboard');
        let keyOn = (v) => {
            return () => {
                let vs = this.variable;
                if (/[0-9]/.test(v))
                    this.variable += v;
                if (/[\.\-\/\*\+]/.test(v) && !/[\.\-\/\*\+]/.test(vs[vs.length - 1]))
                    this.variable += v;
                if (v === '=')
                    this.variable = eval(this.variable).toString();
                if (v === 'C') {
                    this.hystory = [];
                    this.variable = '';
                }
                if (v === '<') {
                    try {
                        this.variable = this.hystory.pop();
                    }
                    catch (e) {
                        this.variable = '';
                    }
                }
                else if (vs !== this.variable)
                    this.hystory.push(vs);
            };
        };
        window.addEventListener('keydown', (e) => {
            let v = e.key;
            if (v === 'Enter')
                v = '=';
            if (v === 'Backspace')
                v = '<';
            if (v === 'Escape')
                v = 'C';
            keyOn(v)();
        });
        for (let keyString of buttons_1.ButtonsList) {
            let tr = element_1.create('tr', 'keyboard-row');
            let buttons = keyString.split(';');
            for (let button of buttons) {
                let td = element_1.create('td', 'keyboard-key');
                let v = td.innerText = button.replace(/[\[\|]/g, '');
                td.onclick = keyOn(v);
                if (button.indexOf('|') !== -1)
                    td.setAttribute('rowspan', '2');
                if (button.indexOf('[') !== -1)
                    td.classList.add('soft');
                tr.appendChild(td);
            }
            keyboard.appendChild(tr);
        }
        document.querySelector('.container').appendChild(keyboard);
    }
}
Calc.view = document.querySelector('.view');
Calc._v = '0';
Calc.hystory = [];
Calc.init();
},{"./lib/buttons":1,"./lib/element":2}]},{},[3])

