const body = document.body;
const container = document.createElement("div");
container.classList.add("container");
const title = document.createElement("h1");
title.classList.add("keyboard__title");
title.innerText = "RSS Virtual Keboard";
const inputText = document.createElement("textarea");
inputText.classList.add("keyboard__text");
const keyboardWrapper = document.createElement("div");
keyboardWrapper.classList.add("keyboard-wrapper");
const keyboardKeys = document.createElement("div");
keyboardKeys.classList.add("keyboard-keys");
const keyboardRow = document.createElement("ul");
keyboardRow.classList.add("keyboard-row");

body.append(container);
container.append(title);
container.append(inputText);
container.append(keyboardWrapper);
keyboardWrapper.append(keyboardKeys); 

const keyLayoutLine = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace"],
    ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", '\\'],
    ["caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",],
    ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",  "up","shift",],
    ["ctrl", "win", "alt", "space", "alt", , "left", "down", "right", "ctrl" ]
]
const keyLayoutLineRu = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace"],
    ["tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", '\\'],
    ["caps lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",],
    ["shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/",  "up","shift",],
    ["ctrl", "win", "alt", "space", "alt", , "left", "down", "right", "ctrl" ]
]

const createKeys =(arrayLet)=>{
    arrayLet.map((rey)=>{
      const keyboardRow = document.createElement("div");
      keyboardRow.classList.add("keyboard-row");
      rey.forEach(key => {
        const keys = document.createElement("div");
        keys.classList.add("keys");
        keys.innerText = key[0].toUpperCase() + key.slice(1);
        keyboardRow.append(keys);
        keyboardKeys.append(keyboardRow);
        if (key === "backspace"){
          keys.classList.add("backspace_key");
        }
        if (key === "backspace"){
          keys.classList.add("backspace_key");
        }
        if (key === "tab" || key === "\\"){
          keys.classList.add("tab-slesh_key");
        }
        if (key === "caps lock"){
        keys.classList.add("caps-lock_key");
        }
        if (key === "enter"){
          keys.classList.add("enter_key");
        }
        if (key === "shift"){
          keys.classList.add("shift_key");
        }
        if (key === "space"){
          keys.classList.add("space_key");
        }
        if( key === "ctrl"){
          keys.classList.add("ctrl_key");
        }
        if(key == "alt"){
          keys.classList.add("alt_key")
        }
      })
    })
  }


createKeys(keyLayoutLine)

const keys = document.querySelectorAll(".keys");
const spaceKey = document.querySelector(".space_key");
const caps = document.querySelector(".caps-lock_key");
const shiftRight = document.querySelectorAll(".shift_key")[1];
const shiftLeft = document.querySelectorAll(".shift_key")[0];
const enter = document.querySelector(".enter_key");
const attributes = [... keys];
const backspace = document.querySelector(".backspace_key");
const ctrlLeft = document.querySelectorAll(".ctrl_key")[0];
const ctrlRight = document.querySelectorAll(".ctrl_key")[1];
const altLeft = document.querySelectorAll(".alt_key")[0];
const altRight = document.querySelectorAll(".alt_key")[1];

attributes.map((key) => {
  key.setAttribute("keyname", key.innerText);
  key.setAttribute("lowerCase", key.innerText.toLowerCase());
});

const RunOnKeys = (func, ...codes) =>{
  const pressed = new Set ();

  document.addEventListener("keydown", (e)=>{
    pressed.add(e.code);
    for (let code of codes) { 
      if (!pressed.has(code)) {
        return;
      }
    } 
    pressed.clear();

    func();
  })
  document.addEventListener("keyup", (e)=>{
    pressed.delete(e.code);
  })
}


window.addEventListener("keydown", (e)=>{
  attributes.map((key) =>{
    if(e.key == key.getAttribute("lowerCase") || e.key == key.getAttribute("lowerCase")){
      key.classList.add("active");
    };
    console.log(e.code)
    if(e.code === "ControlLeft"){
      ctrlLeft.classList.add("active");
    }
    if(e.code === "ControlRight"){
      ctrlRight.classList.add("active");
    }
    if(e.code === "Backspace"){
      backspace.classList.add("active");
    }
    if(e.code === "Space"){
      spaceKey.classList.add("active");
    };
    if(e.code === "ShiftLeft"){
      shiftLeft.classList.add("active");
    }
    if(e.code === "ShiftRight"){
      shiftRight.classList.add("active");
    }
    if(e.code === "CapsLock"){
      caps.classList.toggle("active");
    }
    if(e.code === "Enter"){
      enter.classList.add("active");
    }
    if(e.code === "AltLeft"){
      altLeft.classList.add("active");
    }
    if(e.code === "AltRight"){
      altRight.classList.add("active");
    }
  })
})

window.addEventListener("keyup", (e)=>{
  attributes.map((key) =>{
    if(e.key === key.getAttribute("lowerCase")|| e.key == key.getAttribute("lowerCase")) {
      key.classList.remove("active");
      key.classList.add("remove");
    }
    if(e.code === "Space"){
      spaceKey.classList.remove("active");
      spaceKey.classList.add("remove");
    };
    if(e.code === "ShiftLeft"){
      shiftLeft.classList.remove("active");
      shiftLeft.classList.add("remove");
    }
    if(e.code === "ShiftRight"){
      shiftRight.classList.remove("active");
      shiftRight.classList.add("remove");
    }
    if(e.code === "Enter"){
      enter.classList.remove("active");
      enter.classList.add("remove");
    }
    if(e.code === "Backspace"){
      backspace.classList.remove("active");
      backspace.classList.add("remove");
    }
    if(e.code === "ControlLeft"){
      ctrlLeft.classList.remove("active");
      ctrlLeft.classList.add("remove");
    }
    if(e.code === "ControlRight"){
      ctrlRight.classList.remove("active");
      ctrlRight.classList.add("remove");
    }
    if(e.code === "AltLeft"){
      altLeft.classList.remove("active");
      altLeft.classList.add("remove");
    }
    if(e.code === "AltRight"){
      altRight.classList.remove("active");
      altRight.classList.add("remove");
    }
    setTimeout(() => {
      key.classList.remove("remove")
    }, 200);
  })
})
