"use strict"
import {goodCard} from "./goods.js";

export let goodsInterface = {
    currentPage: 0,
    startIndex: 0,
    renderCards: function(goodsArr) {
        let maxGoodsOnePage = 12;
        // let numbersOfPages = Math.ceil(goodsArr.length / 12);

        this.startIndex = this.currentPage * maxGoodsOnePage;
        for (let i = this.startIndex; i < this.startIndex + maxGoodsOnePage; i++) {
            goodCard.renderCard(goodsArr[i]);
        }
    },
    changePage: function (value) {
        this.currentPage = value;
    }
}