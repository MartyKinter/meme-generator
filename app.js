const form = document.querySelector("#memeform");
const topText = document.querySelector('input[name="top-text"]');
const imageURL = document.querySelector('input[name="image"]');
const bottomText = document.querySelector('input[name="bottom-text"]');
const results = document.querySelector('#results');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newMeme = makeMeme(topText.value, imageURL.value, bottomText.value);
    results.appendChild(newMeme);
    topText.value = '';
    imageURL.value = '';
    bottomText.value = '';
});

function makeMeme(topTxt, image, bottomTxt){
    const meme = document.createElement('div');
    meme.innerHTML = `
    <div class="meme">
    <img src="${image}" class="img">
    <div class="top-text">${topTxt} </div>
    <div class="bottom-text">${bottomTxt}</div>
    <button class="remove">Delete</button>
    </div>
    
    `;
    results.appendChild(meme);
}

results.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
});