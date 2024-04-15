let truthBtn=document.querySelector('.truth-button');
let dareBtn=document.querySelector('.dare-button');
let displaycontainer =document.querySelector('.display-container');



let truth=[
"What's the strangest thing you've ever eaten?",
"What's your biggest fear?",
"What's a secret you've never told anyone?",
"What's the biggest mistake you've ever made?",
"What's the best piece of advice you've been given?",
"Name something you can’t live without",
"What app do you waste the most time on?",
"What's one thing in your life you wish you could change?",
"What was the greatest day of your life?",
"What's the last thing you Googled?",
"What's a skill you wish you had?",
"Would you ever get plastic surgery?",
"What is the biggest lie you've ever told?",
"If you could only eat one meal for the rest of your life, what would it be?",
"What do most people assume about you that isn’t true?",
"Who is the funniest person here?",
"What’s the weirdest dream you’ve ever had?",
"What's your worst personality trait?",
"Do you find it easy to trust people?",
"What is your dream career?",
];

let dare =[
"Show us your screen time report",
"Keep your eyes closed until it's your go again",
"Pretend to be the person to your right for 10 minutes",
"Say two honest things about everyone else in the group",
"Eat a raw piece of garlic",
"Do your best celebrity impression",
"Try not to laugh for the next 10 minutes",
"Talk without closing your mouth",
"Show the weirdest item you have in your purse/pockets",
"Show the group your internet search history",
"Show us the goofiest photo of you as a kid" ,
"Let someone in the room do your makeup",
"Sing a song of the group’s choosing",
];

truthBtn.addEventListener('click', () => {
    let trueValue = truth[Math.floor(Math.random() * truth.length)];
    displaycontainer.innerHTML = `<p class='text'>${trueValue}</p>`;
})


dareBtn.addEventListener('click', () => {
    let dareValue = dare[Math.floor(Math.random() * dare.length)];
    displaycontainer.innerHTML = `<p class='text'>${dareValue}</p>`;
})