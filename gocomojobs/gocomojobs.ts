// ==UserScript==
// @name     gocomojobs
// @version  1
// @grant    none
// @match https://www.gocomojobs.com/*
// ==/UserScript==
console.log("LOADED USERSCRIPT: gocomojobs");

initializeListeners();
updateStyles();

async function initializeListeners() {
    // document.getElementById('change-status').addEventListener('click', changeStatus, { passive: true });
}

async function updateStyles() {
    (document.querySelector(":root") as HTMLElement).style.fontSize = "60%";
    document.getElementById('wrapperDiv')!.style.width = "75%";
    document.getElementById('header')!.style.textAlign = "center";
}

//USAGE: waitForElm('<SELECTOR>').then((elm) => {<FUNCTION>});
async function waitForElm(selector: string) {
    return new Promise<Element | null>(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
