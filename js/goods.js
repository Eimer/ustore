"use strict"

import {setCssAttr} from "./supporting.js";
import {setText} from "./supporting.js";
import {addElem} from "./supporting.js";

export let goodCard = {
    createCard: function() {
        this.goodDiv = document.createElement("div");
        this.goodImgDiv = document.createElement("div");
        this.goodImg = document.createElement("img");
        this.goodFlameImg = document.createElement("img");
        this.goodDescrDiv = document.createElement("div");
        this.goodDescrSpan = document.createElement("span");
        this.goodFooterDiv = document.createElement("div");
        this.goodFooterPrice = document.createElement("span");
        this.goodAddDiv = document.createElement("div");
    },
    setCssClasses: function(Good) {
        setCssAttr(this.goodDiv, "class", "good");
        setCssAttr(this.goodImgDiv, "class", "good-img");
        setCssAttr(this.goodImg, "src", Good.src);
        setCssAttr(this.goodImg, "alt", "error-img");
        setCssAttr(this.goodFlameImg, "src", "assets/images/fire.png");
        setCssAttr(this.goodFlameImg, "class", "flame");
        setCssAttr(this.goodFlameImg, "alt", "error-img");
        setCssAttr(this.goodDescrDiv, "class", "good-descr");
        setCssAttr(this.goodFooterDiv, "class", "good-footer");
        setCssAttr(this.goodAddDiv, "class", "plus");
    },
    renderCard: function(Good) {
        this.createCard();
        this.setCssClasses(Good);
        this.goodParentSection = document.getElementsByClassName("mid-r-content")[0];
        // this.goodParentSection.innerHTML = "";
        addElem(this.goodParentSection, this.goodDiv);
        addElem(this.goodDiv, this.goodImgDiv);
        if (Good.isHot == "true")
            addElem(this.goodDiv, this.goodFlameImg);
        addElem(this.goodDiv, this.goodDescrDiv);
        addElem(this.goodDiv, this.goodFooterDiv);
        addElem(this.goodFooterDiv, this.goodFooterPrice);
        addElem(this.goodFooterDiv, this.goodAddDiv);
        addElem(this.goodDescrDiv, this.goodDescrSpan);
        addElem(this.goodImgDiv, this.goodImg);
        setText(this.goodFooterPrice, Good.price + '$');
        setText(this.goodDescrSpan, Good.name);
    },
}

export class Good {
    constructor(jsonObj) {
        this.category = jsonObj.category;
        this.name = jsonObj.name;
        this.src = jsonObj.src;
        this.isHot = jsonObj.isHot;
        this.price = jsonObj.price;
    }
}
