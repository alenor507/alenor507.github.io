// Hämtar alla element(audio taggen, div:en, switch knappen)
let cSound = document.querySelector("#cSound");
let cSsound = document.querySelector("#cSsound");
let dSound = document.querySelector("#dSound");
let dSsound = document.querySelector("#dSsound");
let eSound = document.querySelector("#eSound");
let fSound = document.querySelector("#fSound");
let fSsound = document.querySelector("#fSsound");
let gSound = document.querySelector("#gSound");
let gSsound = document.querySelector("#gSsound");
let aSound = document.querySelector("#aSound");
let aSsound = document.querySelector("#aSsound");
let bSound = document.querySelector("#bSound");

let cKey = document.querySelector("#cKey");
let cSkey = document.querySelector("#cSkey");
let dKey = document.querySelector("#dKey");
let dSkey = document.querySelector("#dSkey");
let eKey = document.querySelector("#eKey");
let fKey = document.querySelector("#fKey");
let fSkey = document.querySelector("#fSkey");
let gKey = document.querySelector("#gKey");
let gSkey = document.querySelector("#gSkey");
let aKey = document.querySelector("#aKey");
let aSkey = document.querySelector("#aSkey");
let bKey = document.querySelector("#bKey");

let switchKeys = document.querySelector(".switchKeys")
let keyboardKeys = document.querySelectorAll(".keyboardKeys")
let keyboardkeysSharp = document.querySelectorAll(".keyboardkeysSharp")

let showOrHideKeys = true
// Sätter variebeln som låter mig spela dem en gång(kommer senare)
ckeydoOnce = false
csharpkeydoOnce = false
dkeydoOnce = false
dsharpkeydoOnce = false
ekeydoOnce = false
fkeydoOnce = false
fsharpkeydoOnce = false
gkeydoOnce = false
gsharpkeydoOnce = false
akeydoOnce = false
asharpkeydoOnce = false
bkeydoOnce = false
// Om tanget nr 90 hålls ned spela ljud (cloneNode gör så jag kan spela trots att ljudet spelas redan)
let playAudioOnKeyDown = (_Key) =>  
{
  if (_Key.keyCode == 90) 
  {
    if(ckeydoOnce == false)
    {
      cSound.cloneNode(true).play()
      ckeydoOnce = true
    }
  }
  if (_Key.keyCode == 83) 
  {
    if(csharpkeydoOnce == false)
    {
      cSsound.cloneNode(true).play()
      csharpkeydoOnce = true
    }
  }
  if (_Key.keyCode == 88) 
  {
    if(dkeydoOnce == false)
    {
      dSound.cloneNode(true).play()
      dkeydoOnce = true
    }
  }
  if (_Key.keyCode == 68) 
  {
    if(dsharpkeydoOnce == false)
    {
      dSsound.cloneNode(true).play()
      dsharpkeydoOnce = true
    }
  }
  if (_Key.keyCode == 67) 
  {
    if(ekeydoOnce == false)
    {
      eSound.cloneNode(true).play()
      ekeydoOnce = true
    }
  }
  if (_Key.keyCode == 86) 
  {
    if(fkeydoOnce == false)
    {
      fSound.cloneNode(true).play()
      fkeydoOnce = true
    }
  }
  if (_Key.keyCode == 71) 
  {
    if(fsharpkeydoOnce == false)
    {
      fSsound.cloneNode(true).play()
      fsharpkeydoOnce = true
    }
  }
  if (_Key.keyCode == 66) 
  {
    if(gkeydoOnce == false)
    {
      gSound.cloneNode(true).play()
      gkeydoOnce = true
    }
  }
  if (_Key.keyCode == 72) 
  {
    if(gsharpkeydoOnce == false)
    {
      gSsound.cloneNode(true).play()
      gsharpkeydoOnce = true
    }
  }
  if (_Key.keyCode == 78) 
  {
    if(akeydoOnce == false)
    {
      aSound.cloneNode(true).play()
      akeydoOnce = true
    }
  }
  if (_Key.keyCode == 74) 
  {
    if(asharpkeydoOnce == false)
    {
      aSsound.cloneNode(true).play()
      asharpkeydoOnce = true
    }
  }
  if (_Key.keyCode == 77) 
  {
    if(bkeydoOnce == false)
    {
      bSound.cloneNode(true).play()
      bkeydoOnce = true
    }
  }
}
// Klicka på tangenten med musen
cKey.addEventListener("click", () => 
{
  cSound.cloneNode(true).play()
})   
cSkey.addEventListener("click", () => 
{
  cSsound.cloneNode(true).play()
})    
dKey.addEventListener("click", () => 
{
  dSound.cloneNode(true).play()
})    
dSkey.addEventListener("click", () => 
{
  dSsound.cloneNode(true).play()
})    
eKey.addEventListener("click", () => 
{
  eSound.cloneNode(true).play()
})    
fKey.addEventListener("click", () => 
{
  fSound.cloneNode(true).play()
})    
fSkey.addEventListener("click", () => 
{
  fSsound.cloneNode(true).play()
})    
gKey.addEventListener("click", () => 
{
  gSound.cloneNode(true).play()
})    
gSkey.addEventListener("click", () => 
{
  gSsound.cloneNode(true).play()
})    
aKey.addEventListener("click", () => 
{
  aSound.cloneNode(true).play()
})    
aSkey.addEventListener("click", () => 
{
  aSsound.cloneNode(true).play()
})    
bKey.addEventListener("click", () => 
{
  bSound.cloneNode(true).play()
})  
// 
document.onkeydown = playAudioOnKeyDown 
// När man släpper tangenten nr:x så blir variebeln som låter mig spela tangenten EN gång false vilket gör att jag kan spela den igen

let playAudioOnKeyUp = (_Key) =>  
{
  if (_Key.keyCode == 90) 
  {
    ckeydoOnce = false
  }
  if (_Key.keyCode == 83) 
  {
    csharpkeydoOnce = false
  }
  if (_Key.keyCode == 88) 
  {
    dkeydoOnce = false
  }
  if (_Key.keyCode == 68) 
  {
    dsharpkeydoOnce = false
  }
  if (_Key.keyCode == 67) 
  {
    ekeydoOnce = false
  }
  if (_Key.keyCode == 86) 
  {
    fkeydoOnce = false
  }
  if (_Key.keyCode == 71) 
  {
    fsharpkeydoOnce = false
  }
  if (_Key.keyCode == 66) 
  {
    gkeydoOnce = false
  }
  if (_Key.keyCode == 72) 
  {
    gsharpkeydoOnce = false
  }
  if (_Key.keyCode == 78) 
  {
    akeydoOnce = false
  }
  if (_Key.keyCode == 74) 
  {
    asharpkeydoOnce = false
  }
  if (_Key.keyCode == 77) 
  {
    bkeydoOnce = false
  }
}

document.onkeyup = playAudioOnKeyUp

// switchKeys.addEventListener("click", () => 
// {
//   if(keyboardKeysState == false)
//   {
//     keyboardKeys.style.display = "none"
//     keyboardkeysSharp.style.display = "none"

//     keyboardKeysState = true
//     switchKeys.style.backgroundColor = "#CCCCCC";
//   }
//   else 
//   {
//     keyboardKeys.style.display = "flex"
//     keyboardkeys.style.display = "flex"

//     keyboardKeysState = false
//     switchKeys.style.backgroundColor = "#FFFFFF";
//   }
// })


let i = 0;
switchKeys.addEventListener("click", () =>
{
  if(showOrHideKeys == true)
  {
    for(i = 0; i < 7; i++)
    {
      keyboardKeys[i].style.display = "none"
      if(keyboardkeysSharp[i])
      {
        keyboardkeysSharp[i].style.display = "none"
      }
    }

    showOrHideKeys = false
  }
  else if(showOrHideKeys == false)
  {
    for(i = 0; i < 7; i++)
    {
      keyboardKeys[i].style.display = "flex"
      if(keyboardkeysSharp[i])
      {
        keyboardkeysSharp[i].style.display = "flex"
      }
    }

    showOrHideKeys = true
  }
})