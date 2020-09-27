"use strict"

import {dropContent} from "./supporting.js";
import {goodsInterface} from "./interfaces.js";
import {getJson} from "./interfaces.js";
import {firstCreateGoodsArr} from "./interfaces.js";
import {firstFillBucket} from "./interfaces.js";

// let parseJson = {
//     getName: function(DATA) {

//     }
    // }
//

// async function getJson() {
//     let resJson;
//     let jsonStr = await fetch("js/goods.json")
//         .then((response) => response.json())
//         .then((data) => resJson = data.goods)
//         .catch((e)=>console.log(e))
//     return Promise.resolve(jsonStr).then(() => {
//         return resJson;
//     });
// }

firstFillBucket();



async function AllGoods() {
    let allGoods = await getJson();
    return allGoods;
}

// starting main script
// localStorage.clear();
firstFillBucket
dropContent();
AllGoods()
.then((jsonObj)=>{
    let goodsArr = firstCreateGoodsArr(jsonObj);
    
    goodsInterface.renderCards(goodsArr);
    goodsInterface.chooseCategory(jsonObj);
    goodsInterface.chooseFilter(jsonObj);
    goodsInterface.findFilter(jsonObj);
    goodsInterface.resetAllPage();
    // let good1 = new Good(jsonObj[0]);

    // goodCard.renderCard(good1);
    // goodCard.renderCard(good1);
    // goodCard.renderCard(good1);
    // goodCard.renderCard(good1);
    // goodCard.renderCard(good1);
    // goodCard.renderCard(good1);
    // goodCard.renderCard(good1);

})
.catch((e)=>console.log(e));

let createGoodCard = () => {

}



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
