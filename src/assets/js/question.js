/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/question.js":
/*!***********************************!*\
  !*** ./src/client/js/question.js ***!
  \***********************************/
/***/ (() => {

eval("var firstAnswerBool = false;\nvar next = false;\nvar lineIdx = 1;\nvar typingIdx = 0;\nvar typingTxt = $(\"#a\" + lineIdx).text();\ntypingTxt = typingTxt.split(\"\");\nvar messageToClient = \"\";\nvar tyInt = setInterval(firstTyping, 100);\n\nfunction firstTyping() {\n  if (lineIdx >= 2) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    $(\".typing\").append(typingTxt[typingIdx]);\n    typingIdx++;\n  } else {\n    lineIdx++;\n    clearInterval(tyInt);\n    setTimeout(function () {\n      createNameAnswer();\n    }, 1000);\n  }\n}\n\nvar nameAnswerBool = false;\n\nfunction createNameAnswer() {\n  if (nameAnswerBool === false) {\n    var name = document.querySelector(\"#name\");\n    name.style.display = \"inline-block\";\n    nameAnswerBool = true;\n  }\n}\n\nvar nameResult = \"\";\nvar nameAnswer = document.querySelector(\"#name\");\nnameAnswer.addEventListener('keypress', function (key) {\n  if (key.key == 'Enter') {\n    nameResult = nameAnswer.value;\n    nameAnswer.remove();\n    var character = document.querySelector(\".question_pixelart\");\n    character.classList.add(\"face-right\");\n    var detail = document.createElement(\"li\");\n    detail.innerText = nameResult + \"? 좋아. 난 편하게  \" + $(\"#a\" + lineIdx).text() + \"라고 불러줘.\" + \"n오늘 어떻게 왔어?\";\n    typingTxt = detail.innerText;\n    typingIdx = 0;\n    $(\".typing\").html('');\n    var tysecond = setInterval(secondTyping, 100);\n  }\n});\nvar typingBox = document.querySelector(\".typing\");\n\nfunction secondTyping() {\n  if (lineIdx >= 3) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    typingBox.innerHTML += typingTxt[typingIdx] === \"n\" ? \"<br/>\" : typingTxt[typingIdx];\n    typingIdx++;\n  } else {\n    lineIdx++;\n    typingIdx = 0;\n    setTimeout(function () {\n      createTrafficAnswer();\n    }, 1000);\n  }\n}\n\nvar trafficAnswerBool = false;\n\nfunction createTrafficAnswer() {\n  if (trafficAnswerBool === false) {\n    var traffic = document.querySelector(\"#traffic\");\n    traffic.style.display = \"inline-block\";\n    trafficAnswerBool = true;\n  }\n}\n\nvar trafficAnswer = document.querySelector(\"#traffic\");\ntrafficAnswer.addEventListener('keypress', function (key) {\n  if (key.key == 'Enter') {\n    trafficAnswer.remove();\n    var detail2 = document.createElement(\"li\");\n    detail2.innerText = \"와줘서 정말 고마워. \" + nameResult + \"! 넌 멘탈이 강한 편이야?\";\n    typingTxt = detail2.innerText;\n    typingIdx = 0;\n    $(\".typing\").html('');\n    tythird = setInterval(thirdTyping, 100);\n  }\n});\n\nfunction thirdTyping() {\n  if (lineIdx >= 4) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    $(\".typing\").append(typingTxt[typingIdx]);\n    typingIdx++;\n  } else {\n    lineIdx++;\n    typingTxt = \"아무래도 평온한 상태를 언제나 유지한다는건 n\" + \"어려운 일인 것 같아....n\" + \"어떤게 가장 널 힘들게 만드는 것 같아?\";\n    typingIdx = 0;\n    setTimeout(function () {\n      $(\".typing\").html('');\n      createThirdAnswer();\n    }, 1000);\n  }\n}\n\nvar thirdAnswerBool = false;\n\nfunction createThirdAnswer() {\n  if (thirdAnswerBool === false) {\n    var first = document.createElement(\"p\");\n    var second = document.createElement(\"p\");\n    var third = document.createElement(\"p\");\n    first.setAttribute(\"class\", \"answer1\");\n    second.setAttribute(\"class\", \"answer1\");\n    third.setAttribute(\"class\", \"answer1\");\n    first.textContent = \"그래도 대체로 강한 편인거 같아\";\n    second.textContent = \"사실 좀 유리멘탈인 것 같아...\";\n    third.textContent = \"상황에 따라 되게 달라지는 것 같아\";\n    var controls = document.querySelector(\".color-controls\");\n    controls.appendChild(first);\n    controls.appendChild(second);\n    controls.appendChild(third);\n    first.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(second);\n      controls.removeChild(third);\n      message = \"누구보다 강인한 멘탈을 가진 \" + nameResult + \"아! \";\n      tyfour = setInterval(fourTyping, 100);\n    });\n    second.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(second);\n      controls.removeChild(third);\n      message = \"스스로 약한 멘탈을 갖고 있다고 말했지만, 그 속에 강인함을 감추고 있는 \" + nameResult + \"아!\";\n      tyfour = setInterval(fourTyping, 100);\n    });\n    third.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(second);\n      controls.removeChild(third);\n      message = \"누구보다 상황을 유연하게 맞이하려고 하는 \" + nameResult + \"아!\";\n      tyfour = setInterval(fourTyping, 100);\n    });\n    thirdAnswerBool = true;\n  }\n}\n\nfunction fourTyping() {\n  if (lineIdx >= 5) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    typingBox.innerHTML += typingTxt[typingIdx] === \"n\" ? \"<br/>\" : typingTxt[typingIdx];\n    typingIdx++;\n  } else {\n    lineIdx++;\n    typingTxt = \"그렇지... 그러면서도 복합적인 이유가 있는 것 같아.n\" + \"최근에도 힘들거나 우울했던 일들이 있었어? \";\n    typingIdx = 0;\n    setTimeout(function () {\n      $(\".typing\").html('');\n      createFourAnswer();\n    }, 1000);\n  }\n}\n\nvar fourAnswerBool = false;\n\nfunction createFourAnswer() {\n  if (fourAnswerBool === false) {\n    var first = document.createElement(\"p\");\n    var second = document.createElement(\"p\");\n    var third = document.createElement(\"p\");\n    first.setAttribute(\"class\", \"answer2\");\n    second.setAttribute(\"class\", \"answer2\");\n    third.setAttribute(\"class\", \"answer2\");\n    first.textContent = \"항상 사람들이 날 힘들게 하는 것 같아\";\n    second.textContent = \"어떤 상황이 날 힘들게 하는 경우가 많았어\";\n    third.textContent = \"복합적인 이유가 있는 것 같아\";\n    var controls = document.querySelector(\".color-controls\");\n    controls.appendChild(first);\n    controls.appendChild(second);\n    controls.appendChild(third);\n    first.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(second);\n      controls.removeChild(third);\n      first.textContent += \"사람 때문에 울고 웃기도 하고,\";\n      tyfive = setInterval(fiveTyping, 100);\n    });\n    second.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(second);\n      controls.removeChild(third);\n      first.textContent += \"상황이 마음만큼 따라주지 않을때가 많고,\";\n      tyfive = setInterval(fiveTyping, 100);\n    });\n    third.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(second);\n      controls.removeChild(third);\n      first.textContent += \"사람도 상황도 내맘같지 않을때가 많고,\";\n      tyfive = setInterval(fiveTyping, 100);\n    });\n    fourAnswerBool = true;\n  }\n}\n\nfunction fiveTyping() {\n  if (lineIdx >= 6) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    typingBox.innerHTML += typingTxt[typingIdx] === \"n\" ? \"<br/>\" : typingTxt[typingIdx];\n    typingIdx++;\n  } else {\n    lineIdx++;\n    typingTxt = \"그랬구나... 난 요즘 사람들이 무심코n\" + \"한 말로 괜히 상처를 받기도 하는 것 같아.n\" + \"혹시 너도 상처가 됐던 말이 있어?n\";\n    typingIdx = 0;\n    setTimeout(function () {\n      $(\".typing\").html('');\n      createFiveAnswer();\n    }, 1000);\n  }\n}\n\nvar fiveAnswerBool = false;\n\nfunction createFiveAnswer() {\n  if (fiveAnswerBool === false) {\n    var first = document.createElement(\"p\");\n    var second = document.createElement(\"p\");\n    first.setAttribute(\"class\", \"answer3\");\n    second.setAttribute(\"class\", \"answer3\");\n    first.textContent = \"음... 있었어 아직도 생생하게 기억나\";\n    second.textContent = \"힘들었던건 금방 털어버리는 편이라, 잘 생각은 안나\";\n    var controls = document.querySelector(\".color-controls\");\n    controls.appendChild(first);\n    controls.appendChild(second);\n    var answerDivs = document.querySelectorAll('.answer3');\n    answerDivs.forEach(function (answerDiv) {\n      answerDiv.addEventListener(\"click\", function () {\n        controls.removeChild(first);\n        controls.removeChild(second);\n        tysix = setInterval(sixTyping, 100);\n      });\n    });\n    thirdAnswerBool = true;\n  }\n}\n\nfunction sixTyping() {\n  if (lineIdx >= 7) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    typingBox.innerHTML += typingTxt[typingIdx] === \"n\" ? \"<br/>\" : typingTxt[typingIdx];\n    typingIdx++;\n  } else {\n    lineIdx++;\n    typingTxt = nameResult + \"아 너는 힘든 일이나 무거운 감정들이 n찾아올때 주변에 이야기를 잘 하는 편이야?\";\n    typingIdx = 0;\n    setTimeout(function () {\n      createWorryAnswer();\n    }, 1000);\n  }\n}\n\nvar worryAnswerBool = false;\n\nfunction createWorryAnswer() {\n  if (worryAnswerBool === false) {\n    var worry = document.querySelector(\"#worry\");\n    worry.style.display = \"inline-block\";\n    worryAnswerBool = true;\n  }\n}\n\nvar worryAnswer = document.querySelector(\"#worry\");\nworryAnswer.addEventListener('keypress', function (key) {\n  if (key.key == 'Enter') {\n    worryAnswer.remove();\n    $(\".typing\").html('');\n    tyseven = setInterval(sevenTyping, 100);\n  }\n});\n\nfunction sevenTyping() {\n  if (lineIdx >= 8) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    typingBox.innerHTML += typingTxt[typingIdx] === \"n\" ? \"<br/>\" : typingTxt[typingIdx];\n    typingIdx++;\n  } else {\n    lineIdx++;\n    typingTxt = $(\"#a\" + lineIdx).text();\n    typingIdx = 0;\n    setTimeout(function () {\n      $(\".typing\").html('');\n      createSevenAnswer();\n    }, 1000);\n  }\n}\n\nvar sevenAnswerBool = false;\n\nfunction createSevenAnswer() {\n  if (sevenAnswerBool === false) {\n    var first = document.createElement(\"p\");\n    var second = document.createElement(\"p\");\n    first.setAttribute(\"class\", \"answer4\");\n    second.setAttribute(\"class\", \"answer4\");\n    first.textContent = \"아니. 스스로 해결하는 편이 더 낫다고 생각해\";\n    second.textContent = \"응. 이야기를 하다보면 마음의 짐이 좀 덜어지는 것\";\n    var controls = document.querySelector(\".color-controls\");\n    controls.appendChild(first);\n    controls.appendChild(second);\n    first.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(second);\n      var detail4 = document.createElement(\"li\");\n      detail4.innerHtml = \"스스로 해결하려는 강인함을 가진 아이구나. n그래도 오늘은 한번 작은 고민거리라도 알려줘볼래? n나누는 것만으로도 큰 위로가 될때가 있으니까.\";\n      message += \"스스로 뭐든 잘 해결하려는 너지만, 가끔은 주변에 이야기도 하고 짐을 좀 나눠졌으면 좋겠다!\";\n      typingTxt = detail4.innerHtml;\n      typingIdx = 0;\n      tyeight = setInterval(eightTyping, 100);\n    });\n    second.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(second);\n      var detail4 = document.createElement(\"li\");\n      detail4.innerHtml = \"맞아. 가끔은 누군가에게 털어놓는 것 n만으로도 많은 위로가 되기도 하지. n최근에 답답한 일이나 고민이 있었으면 n오늘 조금 털어두고가.\";\n      message += \"가끔 마음이 어려운 순간이 오더라도 지금처럼, 주변에 이야기도 나누면서 마음의 짐도 나눴으면 좋겠다!\";\n      typingTxt = detail4.innerHtml;\n      typingIdx = 0;\n      tyeight = setInterval(eightTyping, 100);\n    });\n    sevenAnswerBool = true;\n  }\n}\n\nfunction eightTyping() {\n  if (lineIdx >= 9) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    typingBox.innerHTML += typingTxt[typingIdx] === \"n\" ? \"<br/>\" : typingTxt[typingIdx];\n    typingIdx++;\n  } else {\n    lineIdx++;\n    typingTxt = $(\"#a\" + lineIdx).text();\n    typingIdx = 0;\n    setTimeout(function () {\n      createLastAnswer();\n    }, 1000);\n  }\n}\n\nvar lastAnswerBool = false;\n\nfunction createLastAnswer() {\n  if (lastAnswerBool === false) {\n    var last = document.querySelector(\"#last\");\n    last.style.display = \"inline-block\";\n    lastAnswerBool = true;\n  }\n}\n\nvar lastAnswer = document.querySelector(\"#last\");\nlastAnswer.addEventListener('keypress', function (key) {\n  if (key.key == 'Enter') {\n    lastAnswer.remove();\n    var detail3 = document.createElement(\"li\");\n    detail3.innerHtml = \"좋아! \" + nameResult + \"아. 짧게 이야기나눌 수  있어서 좋았어.\";\n    typingTxt = detail3.innerHtml;\n    typingIdx = 0;\n    $(\".typing\").html('');\n    tyseven = setInterval(nineTyping, 100);\n  }\n});\n\nfunction nineTyping() {\n  if (lineIdx >= 10) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    typingBox.innerHTML += typingTxt[typingIdx] === \"n\" ? \"<br/>\" : typingTxt[typingIdx];\n    typingIdx++;\n  } else {\n    lineIdx++;\n    setTimeout(function () {\n      $(\".typing\").html('');\n    }, 1000);\n  }\n}\n\n//# sourceURL=webpack://project/./src/client/js/question.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/question.js"]();
/******/ 	
/******/ })()
;