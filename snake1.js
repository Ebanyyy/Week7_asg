const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');

let speed=7;
let tileCount=20;
let tileSize=18;
let headX=10;
let headY=10;
let xvelocity=0;
let yvelocity=0;
let appleX=5;
let appleY=5;

function drawGame() {
	clearScreen();
	drawSnake();
	changeSnakePosition();
	checkCollision();
	drawApple();
	

	setTimeout(drawGame, 1000/speed);
}

function clearScreen() {
	ctx.fillStyle='black'
	ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)
}

function drawSnake() {
	ctx.fillStyle="orange";
	ctx.fillRect(headX* tileCount, headY* tileCount, tileSize,tileSize)
}

document.body.addEventListener('keydown', keyDown);

function changeSnakePosition(){
	headX=headX + xvelocity;
	headY=headY + yvelocity;
}

function keyDown(event)

{
	if(event.keyCode==38){
		yvelocity=-1;
		xvelocity=0;
	}

	if(event.keyCode==40){
		yvelocity=1;
		xvelocity=0;
	}

	if(event.keyCode==37){
		yvelocity=0;
		xvelocity=-1;
	}

	if(event.keyCode==39){
		yvelocity=0;
		xvelocity=1;
	}
}

function drawApple(){
	ctx.fillStyle="red";
	ctx.fillRect(appleX*tileCount, appleY*tileCount, tileSize, tileSize)
}

function checkCollision(){
	if(appleX==headX && appleY==headY){
		appleX=Math.floor(Math.random()*tileCount);
		appleY=Math.floor(Math.random()*tileCount);
		
		tailLength++;
		score++;
	}
}





drawGame();