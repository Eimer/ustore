"use strict"

import {dropContent} from "./supporting.js";
import {goodsInterface} from "./interfaces.js";
import {getJson} from "./interfaces.js";
import {firstCreateGoodsArr} from "./interfaces.js";
import {firstFillBucket} from "./interfaces.js";


firstFillBucket();
async function AllGoods() {
    let allGoods = await getJson();
    return allGoods;
}
dropContent();
AllGoods()
.then((jsonObj)=>{
    let goodsArr = firstCreateGoodsArr(jsonObj);
    
    goodsInterface.renderCards(goodsArr);
    goodsInterface.chooseCategory(jsonObj);
    goodsInterface.chooseFilter(jsonObj);
    goodsInterface.findFilter(jsonObj);
    goodsInterface.resetAllPage();
})
.catch((e)=>console.log(e));

let createGoodCard = () => {

}
