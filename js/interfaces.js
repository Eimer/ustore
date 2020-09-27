"use strict"
import {goodCard} from "./goods.js";
import {Good} from "./goods.js";
import {createBucketCard, setCssAttr, addElem} from "./supporting.js";

let count_items = 0;

let filterOne = {
    ativeFirstFilter: false,
    ativeSecondFilter: false,
    ativeFindFilter: false,
    category: undefined,
    priceStart: 0,
    priceEnd: 99999,
    sorted: document.getElementById("sorting").value,
    isHot: "true",
    findValue: "",
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

function createGoodsArr(jsonObj) {
    let goodsArr = [];

    if (filterOne.ativeFirstFilter) {
        for (let i = 0; jsonObj[i]; i++) {
            if ((filterOne.category == undefined || filterOne.category == jsonObj[i].category)) {
                goodsArr.push(new Good(jsonObj[i]));
            }
        }
    }
    else if (filterOne.ativeSecondFilter) {
        let boxes = $('input[type="checkbox"]:checked');
        
        for (let i = 0; jsonObj[i]; i++) {
            for (let j = 0; j < 8; j++) {
                if (boxes[j] != undefined) {
                    if (jsonObj[i].category == boxes[j].getAttribute("id").toLowerCase() && 
                        +jsonObj[i].price >= +filterOne.priceStart 
                        && +jsonObj[i].price <= +filterOne.priceEnd) {
                        goodsArr.push(new Good(jsonObj[i]));
                    }
                }
            }
        }
    }
    else if (filterOne.findValue != "") {
        for (let i = 0; jsonObj[i]; i++) {
            if (jsonObj[i].name.toLowerCase().includes(filterOne.findValue))
                goodsArr.push(new Good(jsonObj[i]));
        }
    }
    return goodsArr;
}

export function firstFillBucket () {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let bucketCard = createBucketCard();
        let getJson = JSON.parse(localStorage.getItem(key));
        setCssAttr(bucketCard.children[0], "src", getJson.src);
        bucketCard.children[1].innerHTML = getJson.name;
        bucketCard.children[2].innerHTML = getJson.price;
        addElem($(".bucket-items"), bucketCard);
    }
    goodsInterface.removeCard();
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
        if (goodsArr[0]) {
            document.getElementsByClassName("mid-r-content")[0].innerHTML="";
            let maxGoodsOnePage = 12;

            this.startIndex = this.currentPage * maxGoodsOnePage;
            for (let i = this.startIndex; i < this.startIndex + maxGoodsOnePage; i++) {
                if (goodsArr[i]) {
                    goodCard.renderCard(goodsArr[i]);
                }
            }
        }
        goodsInterface.addCard();
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
            filterOne.ativeSecondFilter = false;
            filterOne.ativeFindFilter = false;
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
            let priceStart = document.getElementById("first-price");
            let secondPrice = document.getElementById("second-price");
            let getHeadCategory = document.getElementsByClassName("head-r-content")[0].children[0];

            getHeadCategory.innerHTML = "Custom";
            filterOne.ativeSecondFilter = true;
            filterOne.ativeFirstFilter = false;
            filterOne.ativeFindFilter = false;
            filterOne.priceStart = priceStart.value;
            filterOne.priceEnd = secondPrice.value;

            let goodsArr = createGoodsArr(jsonObj);
            goodsInterface.renderCards(goodsArr);
        });
    },
    findFilter: function (jsonObj) {
        let getFindBtn = document.querySelector(".search-btn");
        
        getFindBtn.addEventListener("click", function() {

            filterOne.ativeFirstFilter = false;
            filterOne.ativeSecondFilter = false;
            filterOne.ativeFindFilter = true;
            filterOne.findValue = document.querySelector(".search").value.trim().toLowerCase();

            let goodsArr = createGoodsArr(jsonObj);
            goodsInterface.renderCards(goodsArr);
        })
    },
    resetAllPage: function () {
        $(".logo").click(function () {
            location.reload();
        });
    },
    addCard: function () {
        $(".plus").click(function () {
            let toLocalStorage = {
                name: "",
                price: "",
                src: "",
            }
            let getGoodParent = $(this).parents()[1];
            let getGoodImgSrc = getGoodParent.children[0].children[0].getAttribute("src");
            let getGoodPrice
            if (getGoodParent.children[3] == undefined) {
                getGoodPrice = getGoodParent.children[2].children[0].innerHTML;
                }
            else {
                getGoodPrice = getGoodParent.children[3].children[0].innerHTML;
            }
            let getGoodName = getGoodParent.children[2].children[0].innerHTML;
            let insertDiv = createBucketCard();

            toLocalStorage.name = getGoodName;
            toLocalStorage.price = getGoodPrice;
            toLocalStorage.src = getGoodImgSrc;

            localStorage.setItem("object" + count_items, JSON.stringify(toLocalStorage));
            count_items++;
            insertDiv.children[1].innerHTML = getGoodName;
            insertDiv.children[2].innerHTML = getGoodPrice;
            setCssAttr(insertDiv.children[0],"src", getGoodImgSrc);
            addElem($(".bucket-items"), insertDiv);
            goodsInterface.removeCard();
        });
    },
    
    removeCard: function () {
        $(".minus").click(function() {
            $(this).parent()[0].remove();
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (JSON.parse(localStorage.getItem(key)).name == $(this).parent()[0].children[1].innerHTML) {
                    localStorage.removeItem(key);
                    break;
                }
            }
        });
    }
}
