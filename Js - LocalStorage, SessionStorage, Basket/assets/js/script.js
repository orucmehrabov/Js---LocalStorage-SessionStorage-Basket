"use strict";

// sessionStorage.setItem("name", "Oruj");
// sessionStorage.setItem("surname", "Mehrabov");

// console.log(sessionStorage.getItem("name"));
// console.log(sessionStorage.getItem("surname"));

// sessionStorage.clear();
// sessionStorage.removeItem();

// localStorage.setItem("name", "Oruj");

// let inputKey = document.querySelector(".input-key");
// let inputValue = document.querySelector(".input-value");

// let addBtn = document.querySelector("button");

// addBtn.addEventListener("click", function () {
//   let key = inputKey.value;
//   let value = inputValue.value;

//   localStorage.setItem(key, value);

//   inputKey.value = "";
//   inputValue.value = "";
// });

// let datas = ["Oruj", "Metanet", "Tunzale", "Semed"];

// localStorage.setItem("datas",datas);

// let jsonData = {
//   name: "Oruj",
//   surname: "Mehrabov",
//   phones: [+994704221997, +994504221997],
//   group: [
//     {
//       name: "P418",
//       capacity: 18,
//       teachers: ["Cavid", "Hemid"],
//     },
//   ],
// };

// console.log(jsonData.group[0].capacity);

// for (const iterator of jsonData.group[0].teachers) {
//   console.log(iterator);
// }

// console.log(jsonData)

let datas = ["Oruj", "Metanet", "Tunzale", "Semed"];

// localStorage.setItem("datas", datas);

localStorage.setItem("datas", JSON.stringify(datas));
console.log(localStorage.getItem("datas"));

// console.log(JSON.parse(localStorage.getItem("datas")));

