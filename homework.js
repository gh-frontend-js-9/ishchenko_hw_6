let array = [15,2,3,1,14,12,21];

//first task
function calcSum(arr) {
    let result = arr.reduce(function(sum, current){
    	return sum + current;
	});
    console.log(result);
}

function maxNum(arr){
	console.log(Math.max.apply(null, arr));
}

function minNum(arr){
	console.log(Math.min.apply(null, arr));
}

function swapNum(arr){
	let swapArr = [];
	for(num of arr){
		swapArr.push(num);
	}
	let max = Math.max.apply(null, swapArr);
	let min = Math.min.apply(null, swapArr);
	let indexMax = swapArr.indexOf(Math.max.apply(null, swapArr));
	let indexMin = swapArr.indexOf(Math.min.apply(null, swapArr));
	swapArr[indexMax] = min;
	swapArr[indexMin] = max;
	console.log(swapArr);
}

//second task
function showMessage(text, callback){
	console.log(`its just a function with ${text}`);
	callback();
}

function showAnotherMessage(){
	console.log('its a callback function!');
}

//third task
function divNum(arr) {
	let newArr = [];
	arr.forEach(function(elem){
		if(elem%3===0 && elem%7===0){
			elem = 'foobar';
			newArr.push(elem);
		} else if(elem%3===0){
			elem = 'foo';
			newArr.push(elem);
		} else if(elem%7===0){
			elem = 'bar';
			newArr.push(elem);
		} else {
			newArr.push(elem);
		}
	});
	console.log(newArr);
}

//fourth task
function checkDiff(f,s) {
    let t = 0;
    for (let i = 0; i < f.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (f[i]===s[j]) {
                t++;
            }
        }
    }
    console.log(`Number of matches: ${t}`);
    console.log(`All letters: ${f.length + s.length}`);
    let percent = t / (f.length + s.length) * 100;
    console.log(`Diff in percent: ${percent}`);
}

let arrayExample = {
	name: 'John',
	job: 'FE dev',
	sport: 'Ultimate',
	alife: true,
	sayHi: function() {
		console.log(`Hello, ${this.name}!`)
	}
};