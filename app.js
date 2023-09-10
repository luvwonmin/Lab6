// function --> dahij ashiglah bolomjtoi kodnii tsugluulga
function restart (){
	console.log("Game restarted");
	console.log("hello");
}
restart();
restart();
restart();
function hello(name,age){
	console.log("Snu minii neriig " + name);
	console.log("Minii nas " + age);
}
hello("Khulan",13);
hello("Bat",15);
hello("Suvd",45);
function sum(a,b){
	console.log(a+b);
}
sum(13,23);
sum(21,3);
function too(i,d){
	if (i>d){
		console.log(i);
	}else{
		console.log(d);
	}
}
too(14,32);
var body = document.getElementsByTagName('body')[0];
console.log(body);
var colors = ['aqua','magenta','yellow','orange','pink'];
var i=-1;
function color(){
	random = Math.floor(Math.random()*(colors.length-1));
	i++;
	body.style.backgroundColor=colors[random];
	button.innerText=colors[random];
    if (i>=colors.length-1){
		i=-1;
	}
}
var button = document.getElementsByTagName('button')[0];
console.log(button);