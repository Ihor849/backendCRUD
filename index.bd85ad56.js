!function(){function n(n){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch("".concat("http://localhost:3000","/books"),t).then((function(n){return n.json()}))}function t(n){console.log("Пришел ответ от бекенда можно рисовать"),console.log(n)}n({title:"Тестовая книга по HTML",author:"Я",genres:["HTML"],rating:57}).then(t).catch((function(n){return console.log(n)})),n({title:"КНИГА HTML",author:"КНИГА",genres:25,rating:53}).then(t).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.bd85ad56.js.map
