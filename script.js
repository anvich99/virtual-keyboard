const body = document.body;
const container = document.createElement("div");
container.classList.add("container");
const keyboardWrapper = document.createElement("div");
keyboardWrapper.classList.add("keyboard-wrapper");
const keyboardKeys = document.createElement("div");
keyboardKeys.classList.add("keyboard-keys");
const keyboardRow = document.createElement("ul");
keyboardRow.classList.add("keyboard-row");

body.append(container);
container.append(keyboardWrapper);
keyboardWrapper.append(keyboardKeys); 




const createKeys =()=>{
  const fragment = document.createDocumentFragment();
  const keyLayoutLineOne = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace"];
  const keyLayoutLineTwo = ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "`\`"];
  const keyLayoutLineThree = ["caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",];
  const keyLayoutLineFour = ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "up", "shift",];
  const keyLayoutLineFive = ["ctrl", "win", "alt", "space", "alt", "ctrl", "left", "down", "right" ];
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
    })
  }
  
  createLineOne();
  createLineTwo();
  createLineThree();
  createLineFour();
  createLineFive();
}
createKeys()