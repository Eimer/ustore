"use strict"

import {Good} from "./goods.js";
import {goodCard} from "./goods.js";

let parseJson = {
    getName: function(DATA) {

    }
}
//

async function getJson() {
    let resJson;
    let jsonStr = await fetch("js/goods.json")
        .then((response) => response.json())
        .then((data) => resJson = data.goods)
        .catch((e)=>console.log(e))
    return Promise.resolve(jsonStr).then(() => {
        return resJson;
    });
}

async function AllGoods() {
    let allGoods = await getJson();
    return allGoods;
}

AllGoods()
.then((jsonObj)=>{
    let good = new Good(jsonObj[0]);
    let good1 = new Good(jsonObj[1]);

    goodCard.renderCard(good);
    goodCard.renderCard(good);
    goodCard.renderCard(good);
    goodCard.renderCard(good);
    




})
.catch((e)=>console.log(e));

let createGoodCard = () => {

}

// console.log(test);

// create good

// let goodElem = () => {
//     let goodDiv = document.createElement("div");
//     let goodImgDiv = document.createElement("div");
//     let goodImg = document.createElement("img");

//     goodImg.setAttribute("src", "assets/images/devices_icons/watch.png")
//     goodImgDiv.setAttribute("class", 'food-img');
//     goodDiv.setAttribute("class", "good");
//     goodImgDiv.append(goodImg);
//     goodDiv.append(goodImgDiv);
//     return goodDiv;
// }

// let renderGoodElem = (goodElem) => {
//     let test = document.getElementsByClassName("mid-r-content")[0];
//     test.append(goodElem);
// }

// let goodDiv = goodElem();

// renderGoodElem(goodDiv);
