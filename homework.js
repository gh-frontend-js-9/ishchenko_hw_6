let array = [1,2,3,80,5,6,14,18,21];

//first task
function calcSum(arr) {
    let sum = 0;
    for (i=0;i<arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}

function getNum(arr){
	console.log(Math.max.apply(null, arr));
	console.log(Math.min.apply(null, arr));
}

function swapNum(arr){
	let temp = arr[arr.indexOf(Math.max.apply(null, arr),0)];
	arr[arr.indexOf(Math.max.apply(null, arr),0)] = arr[arr.indexOf(Math.min.apply(null, arr),0)];
	arr[arr.indexOf(Math.min.apply(null, arr),0)] = temp;
	console.log(arr);
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
function divNum(arr){
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i]%3==0 && arr[i]%7==0){
			arr[i] = 'foobar';
		}else if (arr[i]%7==0){
			arr[i] = 'bar';
		} else if (arr[i]%3==0){
			arr[i] = 'foo';
		}
	}
	console.log(arr);
}

//fourth task
function checkDiff(f,s){
	let t = 0;
	for (let i = 0; i < f.length; i++){
		for (let j = 0; j < s.length; j++){
			if(f[i]===s[j]){
				t++;
			}
		}
	}
	console.log(`Number of matches: ${t}`);
	console.log(`All letters: ${f.length+s.length}`)
	let percent = t/(f.length+s.length)*100;
	console.log(`Diff in percent: ${percent}`);
}