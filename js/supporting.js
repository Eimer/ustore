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