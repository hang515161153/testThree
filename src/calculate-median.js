function calculate_median(arr) {
 	 var Arr = [];
  	 var i = 0;
  	 var m;
  	 var n;
  	 var mid;
  	 for(i=1;i<arr.length;i=i+2){
  	 	Arr.push(arr[i]);
  	 }
  	 Arr.sort();
  	 if(Arr.length%2==0){
  	 	m=Arr.length/2-1;
  	 	n=Arr.length/2;
  	 	mid = (Arr[m]+Arr[n])/2;	 
  	 }
  	 else{
  	 	m = Math.floor(Arr.length/2);
  	 	mid = Arr[m];
  	 }
  	return mid;
}

module.exports = calculate_median;
