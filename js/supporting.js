"use strict"

export function setCssAttr (elem, attr, value) {
    elem.setAttribute(attr, value);
}

export function setText (elem, value) {
    elem.textContent = value;
}

export function addElem(parent, child) {
    parent.append(child);
}

export function dropContent() {
    let ifHide = false;

    $(".bucket-down").hide();
    $(".bucket-block").mouseenter(function () {
        $(".bucket-down").slideDown(200);
    })
    $(".bucket-block").mouseleave(function () {
        $(".bucket-down").hide();
    })

    $(".slide-left").click(function() {
        if (!ifHide) {
            // $(".left-content").css("position", "absolute");
            $(".left-content").css("background", "white");
            $(".left-content").css("z-index", "3");
            $(".left-content").show();
            $(".slide-left").css("left", "250px");
            ifHide = true;
        }
        else {
            // $(".left-content").css("position", "reletive");
            $(".left-content").css("background", "white");
            $(".left-content").css("z-index", "3");
            $(".left-content").hide();
            $(".slide-left").css("left", "0");
            ifHide = false;
        }
    })

    $(window).resize(function() {
        if (($(window).width()) > 607) {
            $(".left-content").show();
            $(".slide-left").css("display", "none");
        }
        else {
            $(".left-content").hide();
            $(".slide-left").css("display", "flex");
            $(".slide-left").css("left", "0");
        }
    });
}

export function createBucketCard () {
    let goodBucketDiv = document.createElement("div");
    let goodBucketImg = document.createElement("img");
    let goodBucketName = document.createElement("span");
    let goodBucketPrice = document.createElement("span");
    let goodBucketBtn = document.createElement("input");

    setCssAttr(goodBucketDiv, "class", "good-bucket");
    setCssAttr(goodBucketName, "class", "bucket-name");   
    setCssAttr(goodBucketPrice, "class", "bucket-price");
    setCssAttr(goodBucketBtn, "class", "minus");
    setCssAttr(goodBucketBtn, "value", "-");
    setCssAttr(goodBucketBtn, "type", "button");
    addElem(goodBucketDiv, goodBucketImg);
    addElem(goodBucketDiv, goodBucketName);
    addElem(goodBucketDiv, goodBucketPrice);
    addElem(goodBucketDiv, goodBucketBtn);
    return goodBucketDiv;
}
