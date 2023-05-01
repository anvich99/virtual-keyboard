const body = document.body;
const container = document.createElement("div");
container.classList.add("container");
const title = document.createElement("h1");
title.classList.add("keyboard__title");
title.innerText = "RSS Virtual Keboard";
const keyboardWrapper = document.createElement("div");
keyboardWrapper.classList.add("keyboard-wrapper");
const keyboardKeys = document.createElement("div");
keyboardKeys.classList.add("keyboard-keys");
const keyboardRow = document.createElement("ul");
keyboardRow.classList.add("keyboard-row");

body.append(container);
container.append(title);
container.append(keyboardWrapper);
keyboardWrapper.append(keyboardKeys); 




const createKeys =()=>{
  const fragment = document.createDocumentFragment();
  const keyLayoutLineOne = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace"];
  const keyLayoutLineTwo = ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", '\\'];
  const keyLayoutLineThree = ["caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",];
  const keyLayoutLineFour = ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",  "up","shift",];
  const keyLayoutLineFive = ["ctrl", "win", "alt", "space", "alt", , "left", "down", "right", "ctrl" ];
  const insertLineBreak = ["backspace","`\`", "enter", "shift", "right"];

  const createLineOne =() =>{
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");
    keyLayoutLineOne.forEach(key => {
      const keys = document.createElement("div");
      keys.classList.add("keys");
      keys.innerText = key[0].toUpperCase() + key.slice(1);
      keyboardRow.append(keys);
      keyboardKeys.append(keyboardRow);
      if (key === "backspace"){
        keys.classList.add("backspace_key");
      }
    });
  }
  const createLineTwo = () =>{
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");
    keyLayoutLineTwo.forEach(key => {
    const keys = document.createElement("div");
    keys.classList.add("keys");
    keys.innerText = key[0].toUpperCase() + key.slice(1);
    keyboardRow.append(keys);
    keyboardKeys.append(keyboardRow);
    if (key === "tab" || key === "\\"){
        keys.classList.add("tab-slesh_key");
      }
  });
  }
  const createLineThree = () => {
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");
    keyLayoutLineThree.forEach(key => {
    const keys = document.createElement("div");
    keys.classList.add("keys");
    keys.innerText = key[0].toUpperCase() + key.slice(1);
    keyboardRow.append(keys);
    keyboardKeys.append(keyboardRow);
    if (key === "caps lock"){
      keys.classList.add("caps-lock_key");
    }
    if (key === "enter"){
      keys.classList.add("enter_key");
    }
  });
  }
  const createLineFour = () =>{
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");
    keyLayoutLineFour.forEach(key => {
      const keys = document.createElement("div");
      keys.classList.add("keys");
      keys.innerText = key[0].toUpperCase() + key.slice(1);
      keyboardRow.append(keys);
      keyboardKeys.append(keyboardRow);
      if (key === "shift"){
      keys.classList.add("shift_key");
    }
    });
  }
  
  const createLineFive = () =>{
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");
    keyLayoutLineFive.forEach(key => {
      const keys = document.createElement("div");
      keys.classList.add("keys");
      keys.innerText = key[0].toUpperCase() + key.slice(1);
      keyboardRow.append(keys);
      keyboardKeys.append(keyboardRow);
      if (key === "space"){
      keys.classList.add("space_key");
    }
    })
  }
  
  createLineOne();
  createLineTwo();
  createLineThree();
  createLineFour();
  createLineFive();
}
createKeys()