// Add Custom Javascript Function

function runTypingEffect(){
const Text='I am Nischay Sinha';
const typingElement=document.getElementById('typing-text');
const typingDelay=100;

typeText(Text,typingElement,typingDelay);
}


function typeText(text,typingElement,typingDelay){
  for(let i=0;i<text.length;i++){
    setTimeout(()=>{
      typingElement.textContent+=text.charAt(i);
    },typingDelay*i);
  }
}

document.addEventListener('DOMContentLoaded',runTypingEffect);