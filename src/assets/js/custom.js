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

/***/ "./src/client/js/custom.js":
/*!*********************************!*\
  !*** ./src/client/js/custom.js ***!
  \*********************************/
/***/ (() => {

eval("//This stuff just makes the demo's UI work. ---------------\nvar characterElement = document.querySelector(\".Character\");\nvar spritesheets_base = [\"good_base.png\", \"good_base.png\"];\nvar spritesheets_accessory = [\"\", \"/acc/accessory_1.png\", \"/acc/accessory_2.png\", \"/acc/accessory_3.png\", \"/acc/accessory_4.png\", \"/acc/accessory_5.png\"];\nvar spritesheets_hair = [\"/hair/hair1_1.png\", \"/hair/hair1_2.png\", \"/hair/hair1_3.png\", \"/hair/hair1_4.png\", \"/hair/hair1_5.png\", \"/hair/hair2_1.png\", \"/hair/hair2_2.png\", \"/hair/hair2_3.png\", \"/hair/hair2_4.png\", \"/hair/hair2_5.png\", \"/hair/hair3_1.png\", \"/hair/hair3_2.png\", \"/hair/hair3_3.png\", \"/hair/hair3_4.png\", \"/hair/hair3_5.png\", \"/hair/hair4_1.png\", \"/hair/hair4_2.png\", \"/hair/hair4_3.png\", \"/hair/hair4_4.png\", \"/hair/hair4_5.png\", \"/hair/hair5_1.png\", \"/hair/hair5_2.png\", \"/hair/hair5_3.png\", \"/hair/hair5_4.png\", \"/hair/hair5_5.png\"];\nvar spritesheets_cloth = [\"/cloth/cloth1_1.png\", \"/cloth/cloth1_2.png\", \"/cloth/cloth1_3.png\", \"/cloth/cloth1_4.png\", \"/cloth/cloth1_5.png\", \"/cloth/cloth2_1.png\", \"/cloth/cloth2_2.png\", \"/cloth/cloth2_3.png\", \"/cloth/cloth2_4.png\", \"/cloth/cloth2_5.png\", \"/cloth/cloth3_1.png\", \"/cloth/cloth3_2.png\", \"/cloth/cloth3_3.png\", \"/cloth/cloth3_4.png\", \"/cloth/cloth3_5.png\", \"/cloth/cloth4_1.png\", \"/cloth/cloth4_2.png\", \"/cloth/cloth4_3.png\", \"/cloth/cloth4_4.png\", \"/cloth/cloth4_5.png\", \"/cloth/cloth5_1.png\", \"/cloth/cloth5_2.png\", \"/cloth/cloth5_3.png\", \"/cloth/cloth5_4.png\", \"/cloth/cloth5_5.png\"];\nvar spritesheets_bottom = [\"/bottom/bottom1_1.png\", \"/bottom/bottom1_2.png\", \"/bottom/bottom1_3.png\", \"/bottom/bottom1_4.png\", \"/bottom/bottom1_5.png\", \"/bottom/bottom2_1.png\", \"/bottom/bottom2_2.png\", \"/bottom/bottom2_3.png\", \"/bottom/bottom2_4.png\", \"/bottom/bottom2_5.png\", \"/bottom/bottom3_1.png\", \"/bottom/bottom3_2.png\", \"/bottom/bottom3_3.png\", \"/bottom/bottom3_4.png\", \"/bottom/bottom3_5.png\", \"/bottom/bottom4_1.png\", \"/bottom/bottom4_2.png\", \"/bottom/bottom4_3.png\", \"/bottom/bottom4_4.png\", \"/bottom/bottom4_5.png\", \"/bottom/bottom5_1.png\", \"/bottom/bottom5_2.png\", \"/bottom/bottom5_3.png\", \"/bottom/bottom5_4.png\", \"/bottom/bottom5_5.png\"];\nvar spritesheets_shoes = [\"/shoes/shoes1_1.png\", \"/shoes/shoes1_2.png\", \"/shoes/shoes1_3.png\", \"/shoes/shoes1_4.png\", \"/shoes/shoes1_5.png\", \"/shoes/shoes2_1.png\", \"/shoes/shoes2_2.png\", \"/shoes/shoes2_3.png\", \"/shoes/shoes2_4.png\", \"/shoes/shoes2_5.png\", \"/shoes/shoes3_1.png\", \"/shoes/shoes3_2.png\", \"/shoes/shoes3_3.png\", \"/shoes/shoes3_4.png\", \"/shoes/shoes3_5.png\", \"/shoes/shoes4_1.png\", \"/shoes/shoes4_2.png\", \"/shoes/shoes4_3.png\", \"/shoes/shoes4_4.png\", \"/shoes/shoes4_5.png\", \"/shoes/shoes5_1.png\", \"/shoes/shoes5_2.png\", \"/shoes/shoes5_3.png\", \"/shoes/shoes5_4.png\", \"/shoes/shoes5_5.png\"];\nvar activeIndex_base = 0;\nvar activeIndex_hair = 0;\nvar activeIndex_accessory = 0;\nvar activeIndex_cloth = 0;\nvar activeIndex_bottom = 0;\nvar activeIndex_shoes = 0;\nvar spritesheetElements = \"\";\nvar navigationElements = \"\";\nspritesheets_base.forEach(function (spritesheet, index) {\n  spritesheetElements += \"<img src=\\\"\".concat(spritesheet, \"\\\" class=\\\"PixelArtImage walk Character_sprite-sheet_base base_index-\").concat(index, \"\\\" />\");\n});\nspritesheets_hair.forEach(function (spritesheet, index) {\n  spritesheetElements += \"<img src=\\\"\".concat(spritesheet, \"\\\" class=\\\"PixelArtImage walk Character_sprite-sheet_hair hair_index-\").concat(index, \"\\\" />\"); // navigationElements += `<button class=\"NavigationBubble index-${index}\" onclick='setActive_hair(${index})' />`\n});\nspritesheets_accessory.forEach(function (spritesheet, index) {\n  spritesheetElements += \"<img src=\\\"\".concat(spritesheet, \"\\\" class=\\\"PixelArtImage walk Character_sprite-sheet_accessory accessory_index-\").concat(index, \"\\\" />\"); // navigationElements += `<button class=\"NavigationBubble index-${index}\" onclick='setActive_accessory(${index})' />`\n});\nspritesheets_cloth.forEach(function (spritesheet, index) {\n  spritesheetElements += \"<img src=\\\"\".concat(spritesheet, \"\\\" class=\\\"PixelArtImage walk Character_sprite-sheet_cloth cloth_index-\").concat(index, \"\\\" />\"); // navigationElements += `<button class=\"NavigationBubble index-${index}\" onclick='setActive_cloth(${index})' />`\n});\nspritesheets_bottom.forEach(function (spritesheet, index) {\n  spritesheetElements += \"<img src=\\\"\".concat(spritesheet, \"\\\" class=\\\"PixelArtImage walk Character_sprite-sheet_bottom bottom_index-\").concat(index, \"\\\" />\"); // navigationElements += `<button class=\"NavigationBubble index-${index}\" onclick='setActive_bottom(${index})' />`\n});\nspritesheets_shoes.forEach(function (spritesheet, index) {\n  spritesheetElements += \"<img src=\\\"\".concat(spritesheet, \"\\\" class=\\\"PixelArtImage walk Character_sprite-sheet_shoes shoes_index-\").concat(index, \"\\\" />\"); // navigationElements += `<button class=\"NavigationBubble index-${index}\" onclick='setActive_shoes(${index})' />`\n});\ncharacterElement.insertAdjacentHTML('beforeend', spritesheetElements);\ndocument.querySelector(\".Navigation\").insertAdjacentHTML('beforeend', navigationElements); // 커스터마이징 버튼\n\nfunction setActive_base(index) {\n  activeIndex_base = index;\n  document.querySelectorAll(\".active_base\").forEach(function (node) {\n    node.classList.remove(\"active_base\");\n  });\n  document.querySelectorAll(\".base_index-\".concat(index)).forEach(function (node) {\n    node.classList.add(\"active_base\");\n  });\n}\n\nfunction setActive_accessory(index) {\n  activeIndex_accessory = index;\n  document.querySelectorAll(\".active_accessory\").forEach(function (node) {\n    node.classList.remove(\"active_accessory\");\n  });\n  document.querySelectorAll(\".accessory_index-\".concat(index)).forEach(function (node) {\n    node.classList.add(\"active_accessory\");\n  });\n}\n\nfunction setActive_hair(index) {\n  activeIndex_hair = index;\n  document.querySelectorAll(\".active_hair\").forEach(function (node) {\n    node.classList.remove(\"active_hair\");\n  });\n  document.querySelectorAll(\".hair_index-\".concat(index)).forEach(function (node) {\n    node.classList.add(\"active_hair\");\n  });\n}\n\nfunction setActive_cloth(index) {\n  activeIndex_cloth = index;\n  document.querySelectorAll(\".active_cloth\").forEach(function (node) {\n    node.classList.remove(\"active_cloth\");\n  });\n  document.querySelectorAll(\".cloth_index-\".concat(index)).forEach(function (node) {\n    node.classList.add(\"active_cloth\");\n  });\n}\n\nfunction setActive_bottom(index) {\n  activeIndex_bottom = index;\n  document.querySelectorAll(\".active_bottom\").forEach(function (node) {\n    node.classList.remove(\"active_bottom\");\n  });\n  document.querySelectorAll(\".bottom_index-\".concat(index)).forEach(function (node) {\n    node.classList.add(\"active_bottom\");\n  });\n}\n\nfunction setActive_shoes(index) {\n  activeIndex_shoes = index;\n  document.querySelectorAll(\".active_shoes\").forEach(function (node) {\n    node.classList.remove(\"active_shoes\");\n  });\n  document.querySelectorAll(\".shoes_index-\".concat(index)).forEach(function (node) {\n    node.classList.add(\"active_shoes\");\n  });\n} //캐릭터 방향\n\n\nfunction setDirection(direction) {\n  [\"Character--walk-down\", \"Character--walk-right\", \"Character--walk-up\", \"Character--walk-left\"].forEach(function (className) {\n    characterElement.classList.remove(className);\n  });\n  document.querySelector(\".DirectionArrow--active\").classList.remove(\"DirectionArrow--active\");\n  var directionClass = \"Character--walk-down\";\n\n  if (direction === \"DOWN\") {\n    document.querySelector(\".DirectionArrow-down\").classList.add(\"DirectionArrow--active\");\n  }\n\n  if (direction === \"LEFT\") {\n    directionClass = \"Character--walk-left\";\n    document.querySelector(\".DirectionArrow-left\").classList.add(\"DirectionArrow--active\");\n  }\n\n  if (direction === \"RIGHT\") {\n    directionClass = \"Character--walk-right\";\n    document.querySelector(\".DirectionArrow-right\").classList.add(\"DirectionArrow--active\");\n  }\n\n  if (direction === \"UP\") {\n    directionClass = \"Character--walk-up\";\n    document.querySelector(\".DirectionArrow-up\").classList.add(\"DirectionArrow--active\");\n  }\n\n  characterElement.classList.add(directionClass);\n} //몸통 베이스\n\n\nfunction setPreviousActive_base() {\n  activeIndex_base = activeIndex_base > 0 ? activeIndex_base - 1 : spritesheets_base.length - 1;\n  setActive_base(activeIndex_base);\n}\n\nfunction setNextActive_base() {\n  activeIndex_base = activeIndex_base < spritesheets_base.length - 1 ? activeIndex_base + 1 : 0;\n  setActive_base(activeIndex_base);\n} //악세사리 바꾸기\n\n\nfunction setPreviousActive_accessory() {\n  activeIndex_accessory = activeIndex_accessory > 0 ? activeIndex_accessory - 1 : spritesheets_accessory.length - 1;\n  setActive_accessory(activeIndex_accessory);\n}\n\nfunction setNextActive_accessory() {\n  activeIndex_accessory = activeIndex_accessory < spritesheets_accessory.length - 1 ? activeIndex_accessory + 1 : 0;\n  setActive_accessory(activeIndex_accessory);\n} //머리 바꾸기\n\n\nfunction setPreviousActive_hair() {\n  activeIndex_hair = activeIndex_hair > 0 ? activeIndex_hair - 1 : spritesheets_hair.length - 1;\n  setActive_hair(activeIndex_hair);\n}\n\nfunction setNextActive_hair() {\n  activeIndex_hair = activeIndex_hair < spritesheets_hair.length - 1 ? activeIndex_hair + 1 : 0;\n  setActive_hair(activeIndex_hair);\n} //옷 바꾸기\n\n\nfunction setPreviousActive_cloth() {\n  activeIndex_cloth = activeIndex_cloth > 0 ? activeIndex_cloth - 1 : spritesheets_cloth.length - 1;\n  setActive_cloth(activeIndex_cloth);\n}\n\nfunction setNextActive_cloth() {\n  activeIndex_cloth = activeIndex_cloth < spritesheets_cloth.length - 1 ? activeIndex_cloth + 1 : 0;\n  setActive_cloth(activeIndex_cloth);\n} //바지 바꾸기\n\n\nfunction setPreviousActive_bottom() {\n  activeIndex_bottom = activeIndex_bottom > 0 ? activeIndex_bottom - 1 : spritesheets_bottom.length - 1;\n  setActive_bottom(activeIndex_bottom);\n}\n\nfunction setNextActive_bottom() {\n  activeIndex_bottom = activeIndex_bottom < spritesheets_bottom.length - 1 ? activeIndex_bottom + 1 : 0;\n  setActive_bottom(activeIndex_bottom);\n} //신발 바꾸기\n\n\nfunction setPreviousActive_shoes() {\n  activeIndex_shoes = activeIndex_shoes > 0 ? activeIndex_shoes - 1 : spritesheets_shoes.length - 1;\n  setActive_shoes(activeIndex_shoes);\n}\n\nfunction setNextActive_shoes() {\n  activeIndex_shoes = activeIndex_shoes < spritesheets_shoes.length - 1 ? activeIndex_shoes + 1 : 0;\n  setActive_shoes(activeIndex_shoes);\n} //악세사리 재실행\n\n\nfunction accessory_re() {\n  var element = document.querySelector(\".Character_sprite-sheet_accessory.active_accessory.walk\");\n  element.classList.remove(\"walk\");\n  void element.offsetWidth;\n  element.classList.add(\"walk\");\n} //머리 재실행\n\n\nfunction hair_re() {\n  var element = document.querySelector(\".Character_sprite-sheet_hair.active_hair.walk\");\n  element.classList.remove(\"walk\");\n  void element.offsetWidth;\n  element.classList.add(\"walk\");\n} //옷 재실행\n\n\nfunction cloth_re() {\n  var element = document.querySelector(\".Character_sprite-sheet_cloth.active_cloth.walk\");\n  element.classList.remove(\"walk\");\n  void element.offsetWidth;\n  element.classList.add(\"walk\");\n} //바지 재실행\n\n\nfunction bottom_re() {\n  var element = document.querySelector(\".Character_sprite-sheet_bottom.active_bottom.walk\");\n  element.classList.remove(\"walk\");\n  void element.offsetWidth;\n  element.classList.add(\"walk\");\n} //신발 재실행\n\n\nfunction shoes_re() {\n  var element = document.querySelector(\".Character_sprite-sheet_shoes.active_shoes.walk\");\n  element.classList.remove(\"walk\");\n  void element.offsetWidth;\n  element.classList.add(\"walk\");\n} //기본 세팅\n\n\nsetActive_base(activeIndex_base);\nsetActive_accessory(activeIndex_accessory);\nsetActive_hair(activeIndex_hair);\nsetActive_cloth(activeIndex_cloth);\nsetActive_shoes(activeIndex_shoes);\nsetActive_bottom(activeIndex_bottom);\nvar accessoryPrevButton = document.querySelector(\".NextSpritesheetButton--prev--accessory\");\nvar accessoryNextButton = document.querySelector(\".NextSpritesheetButton--next--accessory\");\naccessoryPrevButton.addEventListener(\"click\", function () {\n  setPreviousActive_accessory();\n  setPreviousActive_base();\n  accessory_re();\n  hair_re();\n  cloth_re();\n  bottom_re();\n  shoes_re();\n});\naccessoryNextButton.addEventListener(\"click\", function () {\n  setNextActive_accessory();\n  setNextActive_base();\n  accessory_re();\n  hair_re();\n  cloth_re();\n  bottom_re();\n  shoes_re();\n});\nvar hairPrevButton = document.querySelector(\".NextSpritesheetButton--prev--hair\");\nvar hairNextButton = document.querySelector(\".NextSpritesheetButton--next--hair\");\nhairPrevButton.addEventListener(\"click\", function () {\n  setPreviousActive_hair();\n  setPreviousActive_base();\n  accessory_re();\n  hair_re();\n  cloth_re();\n  bottom_re();\n  shoes_re();\n});\nhairNextButton.addEventListener(\"click\", function () {\n  setNextActive_hair();\n  setNextActive_base();\n  accessory_re();\n  hair_re();\n  cloth_re();\n  bottom_re();\n  shoes_re();\n});\nvar clothPrevButton = document.querySelector(\".NextSpritesheetButton--prev--cloth\");\nvar clothNextButton = document.querySelector(\".NextSpritesheetButton--next--cloth\");\nclothPrevButton.addEventListener(\"click\", function () {\n  setPreviousActive_cloth();\n  setPreviousActive_base();\n  accessory_re();\n  hair_re();\n  cloth_re();\n  bottom_re();\n  shoes_re();\n});\nclothNextButton.addEventListener(\"click\", function () {\n  setNextActive_cloth();\n  setNextActive_base();\n  accessory_re();\n  hair_re();\n  cloth_re();\n  bottom_re();\n  shoes_re();\n});\nvar bottomPrevButton = document.querySelector(\".NextSpritesheetButton--prev--bottom\");\nvar bottomNextButton = document.querySelector(\".NextSpritesheetButton--next--bottom\");\nbottomPrevButton.addEventListener(\"click\", function () {\n  setPreviousActive_bottom();\n  setPreviousActive_base();\n  accessory_re();\n  hair_re();\n  cloth_re();\n  bottom_re();\n  shoes_re();\n});\nbottomNextButton.addEventListener(\"click\", function () {\n  setNextActive_bottom();\n  setPreviousActive_base();\n  accessory_re();\n  hair_re();\n  cloth_re();\n  bottom_re();\n  shoes_re();\n});\nvar shoesPrevButton = document.querySelector(\".NextSpritesheetButton--prev--shoes\");\nvar shoesNextButton = document.querySelector(\".NextSpritesheetButton--next--shoes\");\nshoesPrevButton.addEventListener(\"click\", function () {\n  setPreviousActive_shoes();\n  setPreviousActive_base();\n  accessory_re();\n  hair_re();\n  cloth_re();\n  bottom_re();\n  shoes_re();\n});\nshoesNextButton.addEventListener(\"click\", function () {\n  setNextActive_shoes();\n  setPreviousActive_base();\n  accessory_re();\n  hair_re();\n  cloth_re();\n  bottom_re();\n  shoes_re();\n});\nvar downButton = document.querySelector(\".DirectionArrow-down\");\nvar rightButton = document.querySelector(\".DirectionArrow-right\");\nvar upButton = document.querySelector(\".DirectionArrow-up\");\nvar leftButton = document.querySelector(\".DirectionArrow-left\");\ndownButton.addEventListener(\"click\", function () {\n  setDirection('DOWN');\n});\nrightButton.addEventListener(\"click\", function () {\n  setDirection('RIGHT');\n});\nupButton.addEventListener(\"click\", function () {\n  setDirection('UP');\n});\nleftButton.addEventListener(\"click\", function () {\n  setDirection('LEFT');\n});\n\n//# sourceURL=webpack://project/./src/client/js/custom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/custom.js"]();
/******/ 	
/******/ })()
;