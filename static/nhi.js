let NeverHaveIEverBtn=document.querySelector('.never-button');
let displaycontainer =document.querySelector('.display-container');


let nhi=[
"Never have I ever been on a roller coaster",
"Never have I ever been to a zoo",
"Never have I ever ridden a horse",
"Never have I ever been on TV",
"Never have I ever won a contest",
"Never have I ever baked a cake from scratch",
"Never have I ever danced in the rain",
"Never have I ever caught a fish",
"Never have I ever climbed a tree",
"Never have I ever had a pet",
"Never have I ever swam in the ocean",
"Never have I ever ridden a bike",
"Never have I ever gone scuba diving or snorkeling",
"Never have I ever been to a concert",
"Never have I ever lost a tooth",
"Never have I ever played a video game",
"Never have I ever watched a sunrise or sunset",
"Never have I ever had a surprise party thrown for me",
"Never have I ever tried karate or another martial art", 
"Never have I ever been to an aquarium",
"Never have I ever learned to play a musical instrument",
"Never have I ever made a homemade costume",
"Never have I ever been to a haunted house",
"Never have I ever read a book more than once",
"Never have I ever baked cookies",
"Never have I ever gone bowling",
"Never have I ever gone to an escape room",
"Never have I ever done yoga",
];


NeverHaveIEverBtn.addEventListener('click', () => {
    let nhiValue = nhi[Math.floor(Math.random() * nhi.length)];
    displaycontainer.innerHTML = `<p class='text'>${nhiValue}</p>`;
})
