module.exports = function check(arr, config) {
let stack = [];
	
	for (let i = 0; i < arr.length; i++){
		let stackLength = stack.length;
		
		for (let j = 0; j < config.length; j++){
			if ( config[j][0] === config[j][1] && 
				arr[i] === config[j][0]){
					if(stack[stack.length - 1] === arr[i]){
						stack.pop();
					} else {
						stack.push(arr[i]);
					}
					break;
				}
			
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
	if(stack.length === 0){
	return true;
	} else {
		return false;
	}
}
