/* Write an ES2015 Version */
const obj = {
	numbers: {
	  a: 1,
	  b: 2
	}
  };

let {numbers:{a,b}} = obj;
/* Write an ES2015 Version */
let arr = [1,2];
[arr[1], arr[0]] = [arr[0], arr[1]];

//raceResults
function raceResults([first,second,third,...rest]){
	return {first,second,third,rest}
	
}