let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter;
        span.className=letter;
        word.append(span);
    });
});

let curentWordIndex=0;
let maxWordIndex=words.length -1;
words[curentWordIndex].style.opacity="1";
let changeText=()=>{
    let currentWord=words[currentWordIndex];
    let nextWord=curentWordIndex===maxWordIndex ? words[0] : words[curentWordIndex+1];
    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
        },i*80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className="letter in";
        },340+i*80);
    });
    currentWordIndex=curentWordIndex===maxWordIndex ? 0 : curentWordIndex + 1;
};
changeText();
setInterval(changeText,3000)