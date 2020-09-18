"use strict"

let parseJson = {
    getName: function(DATA) {

    }
}
//

function ttt(elem) {
    console.log(elem);
}
class good {
    constructor(jsonStr) {

    }
}
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

async function getAllGoods() {
    let allGoods = await getJson();
    return allGoods;
}

getAllGoods()
.then((e)=>{
    // console.log(e[0].category);
    ttt(e[0].category);
})
.catch((e)=>console.log(e))
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
