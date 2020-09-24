"use strict"
import {goodCard} from "./goods.js";
import {Good} from "./goods.js";

let filterOne = {
    ativeFirstFilter: true,
    category: undefined,
    priceStart: 0,
    priceEnd: 99999,
    sorted: document.getElementById("sorting").value,
    isHot: "true",
}

export async function getJson() {
    let resJson;
    let jsonStr = await fetch("js/goods.json")
        .then((response) => response.json())
        .then((data) => resJson = data.goods)
        .catch((e)=>console.log(e))
    return Promise.resolve(jsonStr).then(() => {
        return resJson;
    });
}

export function createGoodsArr(jsonObj) {
    let goodsArr = [];
    
    for (let i = 0; jsonObj[i]; i++) {
        if ((filterOne.category == undefined || filterOne.category == jsonObj[i].category)) {
            goodsArr.push(new Good(jsonObj[i]));
        }
    }
    return goodsArr;
}

export function firstCreateGoodsArr(jsonObj) {
    let goodsArr = [];
    
    for (let i = 0; jsonObj[i]; i++) {
        if (filterOne.isHot == jsonObj[i].isHot) {
            goodsArr.push(new Good(jsonObj[i]));
        }
    }
    return goodsArr;
}

export let goodsInterface = {
    currentPage: 0,
    startIndex: 0,
    renderCards: function(goodsArr) {
        document.getElementsByClassName("mid-r-content")[0].innerHTML="";
        let maxGoodsOnePage = 12;

        this.startIndex = this.currentPage * maxGoodsOnePage;
        for (let i = this.startIndex; i < this.startIndex + maxGoodsOnePage; i++) {
            if (goodsArr[i])
                goodCard.renderCard(goodsArr[i]);
        }
    },
    changePage: function (value) {
        this.currentPage = value;
    },
    chooseCategory: function (jsonObj) {
        let getCatalogElem = document.getElementsByClassName("catalog-list")[0];
        let getHeadCategory = document.getElementsByClassName("head-r-content")[0].children[0];

        getCatalogElem.addEventListener("mouseup", function (event) {
            let getTextValue = event.target.textContent.toLowerCase().trim();
            filterOne.ativeFirstFilter = true;
            filterOne.isHot = "false";
            filterOne.category = getTextValue;
            
            let goodsArr = createGoodsArr(jsonObj);
            goodsInterface.renderCards(goodsArr);
            getHeadCategory.innerHTML = event.target.textContent;
        });    
    },
    chooseFilter: function (jsonObj) {
        let getApplyBtn = document.getElementsByClassName("apply-filter")[0];

        getApplyBtn.addEventListener("click", function () {
            let firstPrice = document.getElementById("first-price");
            let secondPrice = document.getElementById("second-price");
            let boxes = $('input[type="checkbox"]:checked');

            console.log(boxes[1]);
            
                        

        })
        
    }
}
