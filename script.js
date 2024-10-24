const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I Love You See you on Christmas";
    gif.src = 
    "https://media.tenor.com/iFXnOUD2D7oAAAAj/milk-and-mocha.gif"
});

noBtn.addEventListener('click', () => {
    question.innerHTML = "please click the yes button!!!!!";
		const noBtnRect = noBtn.getBoundingClientRect();
		const maxX = window.innerWidth - noBtnRect.width;
		const maxY = window.innerHeight - noBtnRect.height;

		const randomX = Math.floor(Math.random() * maxX);
		const randomY = Math.floor(Math.random() * maxY);

		noBtn.style.left = randomX + "px";
		noBtn.style.top = randomY + "px";
        gif.src = 
    "https://media.tenor.com/Gp8KgSOkZwAAAAAM/sad.gif"
    gif.src = "https://media3.giphy.com/media/l378giAZgxPw3eO52/200w.gif?cid=6c09b952w8phd4ttuesnlkw2wtoktnsdib48k8ch5jhye8cf&ep=v1_gifs_search&rid=200w.gif&ct=g"
        gif.style.left = 10 + "px";
		gif.style.top = 10 + "px";
    
    
});