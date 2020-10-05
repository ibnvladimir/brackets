module.exports = function check(arr, config) {
  let stack = [];
	
	for (let i = 0; i < arr.length; i++){
		let stackLength = stack.length;
		
		for (let j = 0; j < config.length; j++){
			if (arr[i] === config[j][0]){
				stack.push(arr[i]);
				break;
			}
			
			if(arr[i] === config[j][1]){
				let temp = stack.pop();
				  if(temp !== config[j][0]){
				  	  return false;
				  }
				  break;
			}
		}
		
		if (stackLength === stack.length){
			return false;
		}
		
		
	}
	
	return true;
}
