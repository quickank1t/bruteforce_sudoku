//============================================ Initializating variables
var $global_sudoku = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],

	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],

	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0]
];
var empty = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],

	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],

	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0]
];



var $global_animation = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],

	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],

	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0]
];



var ran = [
  [2,1,0,0,8,5,3,0,0],
  [8,0,4,3,2,9,0,0,0],
	[3,0,0,6,0,0,0,8,2],

	[0,0,0,0,0,0,2,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,9,0,0,0,0,0,0],

	[4,5,0,0,0,3,0,0,1],
	[0,0,0,2,9,8,5,0,3],
	[0,0,3,5,1,0,0,6,8]
];

var random3 = [
  [3,0,5,8,0,0,0,0,0],
  [9,0,0,0,0,0,0,0,0],
	[0,0,1,5,0,0,0,0,0],

	[0,0,0,0,0,7,0,1,0],
	[0,0,0,0,8,0,0,0,0],
	[0,5,0,1,0,0,0,0,0],

	[0,0,0,0,0,1,8,0,0],
	[0,0,0,0,0,0,0,0,9],
	[0,0,0,0,0,4,1,0,6]
];


var random1 = [
  [0,9,0, 5,2,0, 0,7,0],
  [0,0,7, 0,9,8, 0,1,0],
	[6,0,0, 1,0,0, 9,0,0],

	[7,0,0, 0,0,0, 3,0,0],
	[0,8,0, 0,3,0, 0,4,0],
	[0,0,1, 0,0,0, 0,0,7],

	[0,0,5, 0,0,1, 0,0,4],
	[0,0,0, 9,8,0, 7,0,0],
	[0,3,0, 0,5,4, 0,2,0]
];

var random2 = [
  [0,0,6,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,4,0],
	[0,8,0,0,9,0,0,3,0],

	[0,0,0,4,0,0,1,9,0],
	[0,0,0,0,8,0,0,0,0],
	[0,4,9,0,0,5,0,0,0],

	[0,7,0,0,3,0,0,5,0],
	[0,1,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,6,0,0]
];
var $count =0;
var $time = 0;
var $animation= [];

//============================================ Main function
// brute force the sudoku
function bruteForce(board){
    var x_cord=0;
    var y_cord=0;
    var arr= [];
    var possibleEntries;
    // Base case
    if(isBoardFull(board)){
        $global_sudoku = board;
        return;
    }else{
        arr = nextEmptySpace(board);
        x_cord = arr[0];
        y_cord = arr[1];
        possibleEntries = getAllPossibleEntries(board,x_cord,y_cord);
        var ans = 0;
        for(var i=0;i<9;i++){
            if(possibleEntries[i] != 0){
              board[x_cord][y_cord] = possibleEntries[i];
				      var temp = [x_cord,y_cord,possibleEntries[i]];
	            $animation.push(temp);
		          $count++;
              bruteForce(board);
              if(isBoardFull(board))
                  break;
            }
        }
        if(isBoardFull(board))
                    return;
         board[x_cord][y_cord] = 0;
        }
}
//============================================ Supporting functions
// next emptz space in board
function nextEmptySpace(board){
  var arr = [];
  for(var i=0;i<9;i++){
      for(var j=0;j<9;j++){
          if(board[i][j] == 0){
              arr[0] = i;
              arr[1] = j;
              return arr;
            }
        }
  }
}

function CheckPre(){
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			if($global_sudoku[i][j] != 0){
				if(corrupted(i,j,$global_sudoku[i][j])){
					return false;
				}
			}
		}
	}
	return true;
}
//check is board is full- for breaking condiiton of the sudoku
// <--- board
// ----> true or flase
function isBoardFull(board){
    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
            if(board[i][j] == 0)
                return false;
    return true;
}
//return an array with all possible entries for a the position
// <--- board + x and y cordiante
// ----> all possible values
function getAllPossibleEntries(board,x,y){
    var values = [0,0,0,0,0,0,0,0,0];
    var possibleEntries ;
    for(var i=0;i<9;i++)
        if(board[i][y] != 0){
			values[board[i][y] - 1] = 1;
		}
    for(var i=0;i<9;i++)
        if(board[x][i] != 0){
			values[board[x][i] - 1] = 1;
		}
    var p=0;
    var q=0;
    if(x >= 0 && x <= 2)
        p=0;
    else if(x >= 3 && x <= 5)
        p=3;
    else
        p=6;

    if(y >= 0 && y <= 2)
        q=0;
    else if(y >= 3 && y <= 5)
        q=3;
    else
        q=6;
    for(var i=p;i<p+3;i++)
        for(var j=q;j<q+3;j++)
            if(board[i][j] != 0)
                values[board[i][j] - 1] = 1;

    for(var i=0;i<9;i++)
        if(values[i] == 0)
            values[i] = i + 1;
        else
            values[i] = 0;
    return values;
}

//============================================ Onclick events
// Start bruteforce onclick
function startbruteforce(){
	disableall();
	disableinput();

	if(CheckPre()){
		document.getElementById("input").hidden = true;
		document.getElementById("info").hidden = true;
		document.getElementById("stats").hidden = false;
		var start = new Date();
		bruteForce($global_sudoku);
		var end = new Date();
		$time = end - start;
		startStats();
		if($count > 50000){
			alert("The rendering animation may take time. For a faster result plesae check the console :)");
			console.log("Thanks for visiting the console. Please find the answer below");
			console.log($global_sudoku);
		}else
			myFunction("May the force be with you", 3000);
		animate();
	}else{
		myFunction("Please check!!", 3000);
	}
}

// load an exisiting sudoku
function loadSudoku(){
	disableinput();
	drawcanvas();
	$global_sudoku = empty;
	switch (Math.floor((Math.random() * 2) + 1)) {
    case 1:
       $global_sudoku = random1;
        break;
    case 2:
       $global_sudoku = random2;
       break;
	}
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			if($global_sudoku[i][j] != 0){
				putfix($global_sudoku[i][j],i,j,0,"d");
			}
		}
	}
}

//============================================ Display and animation

//draw the canvas
function drawcanvas(){
	var canvas = document.getElementById("sudoku");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById(0);
	for(var a=0;a<9;a++){
		for(var b=0;b<9;b++){
			ctx.drawImage(img, a*60, b*60, 60,60);
		}
	}
}

// load the image
function loadimage(){
	drawcanvas();
}

//  draw in the canvas
function putfix(value,x,y,box,color){
	var canvas = document.getElementById("sudoku");
  var ctx = canvas.getContext("2d");
	var name = color + value;
	if(box != 0){
		y= getY(box);
		x= getX(box,y);
		ctx.drawImage(img, y*60, x*60, 60,60);
		return;
	}
	var img = document.getElementById(name);
	if(value != 0)
		ctx.drawImage(img, y*60, x*60, 60,60);
}

function syncBoard(x){
	var id= x.id;
	id = id.replace("input_" , "");
	globalchange(id,x.value);

}
function corrupted(x,y,val){
	board = $global_sudoku;
	value = parseInt(val);
    for(var i=0;i<9;i++){
		if(i == x)
			continue;
		if(board[i][y] == value){
			badBlock(i,y,value);
		}
	}
    for(var i=0;i<9;i++){
		if(i == y)
			continue;
		if(board[x][i] == value){
			badBlock(x,i,value);
		}
	}
    var p=0;
    var q=0;
    if(x >= 0 && x <= 2)
        p=0;
    else if(x >= 3 && x <= 5)
        p=3;
    else
        p=6;

    if(y >= 0 && y <= 2)
        q=0;
    else if(y >= 3 && y <= 5)
        q=3;
    else
        q=6;
    for(var i=p;i<p+3;i++)
        for(var j=q;j<q+3;j++){
			if(i!=x && j!=y){
				if(board[i][j] == value)
                	badBlock(i,j,value);
			}
		}
}
//============================================ Other random helping functions
function disableall(){
	document.getElementById("randombtn").disabled = true;
	document.getElementById("bruteforce").disabled = true;
}
function enableall(){
	document.getElementById("randombtn").disabled = false;
	document.getElementById("bruteforce").disabled = false;
}

function getlength(number) {
    return number.toString().length;
}

function startStats(){
	var canvas = document.getElementById("statistics");
	var ctx = canvas.getContext("2d");
	ctx.font="20px Verdana";
	ctx.fillText("Total Moves= "+$count,0,100);
	if(getlength($time) <= 9 ){
		ctx.fillText("Total Time= 0.00"+ $time +" s",0,300);
	}else if(getlength($time) <= 99 ){
		ctx.fillText("Total Time= 0.0"+ $time +" s",0,300);
	}else if(getlength($time) <= 999 ){
		ctx.fillText("Total Time= 0."+ $time +" s",0,300);
	}else if(getlength($time) <= 9999 ){
		ctx.fillText("Total Time= "+ $time +" ms",0,300);
	}
}
function badBlock(x,y,value){
	drawimage(value,x,y,0,"r");
}

function CanPut(x){
	var value = x.value;
	var str = x.id;
	var id = str.replace("input_", "");
	var y = getY(id);
	var x = getX(id,y);
	var possibleEntries = getAllPossibleEntries(board,x,y);
	var answer = false;
	for(var i=0;i<9;i++){
		if(value == possibleEntries[i]){
			answer = true;
			break;
		}
	}
	return answer;
}

var $current = 1;
function animate(){
	var arr;
	arr = $animation.shift();
	if(arr){
		$global_animation[ arr[0] ][arr[1]] = arr[2];
		rendersmartimage(arr[0],arr[1],arr[2]);
		rendercount($current++);
		setInterval(animate,1);
	}
}

function rendercount(current){
	var canvas = document.getElementById("statistics");
   	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,150,1000,50);
	ctx.fillText( "Current Move= "+current,0,200);
}

function rendersmartimage(x,y,value){
	var boxcount = 0;
	var boxnumber = x * 9 + y + 1;
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			boxcount++;
			if(i==x && j==y){
				drawimage(value,i,j,0,'r');
				continue;
			}
			if(boxcount < boxnumber){
				if($global_animation[i][j] !=0)
					drawimage($global_animation[i][j],i,j,0,'');
				continue;
			}
			if($global_animation[i][j] !=0)
					drawimage(0,i,j,0,'');
		}
	}
}
function drawimage(value,x,y,box,color){
	var canvas = document.getElementById("sudoku");
   	var ctx = canvas.getContext("2d");
	var name = color + value;

	var img = document.getElementById(name);
	//alert(img);
	if(img == null){
		img = document.getElementById(0);
	}
	ctx.drawImage(img, y*60, x*60, 60,60);

}

function getinput(){
	var newval = document.getElementById("input").innerHTML ;
	var count = 0;
	for(var i=1;i<82;i++){
		newval += "<input id='input_"+ i +"' type='text' size='1' onkeyup='validate(this);'  onchange='syncBoard(this);CheckPre();' >";
		if(i %3 == 0){
			newval += "<img src='img/space.png'  height='10' width='5'>";
		}
		if(i %9 == 0){
			newval += "<br>";
			count++;
		}
		if(count ==3){
			newval += "<br>";
			count=0;
		}
	}
	document.getElementById("input").innerHTML = newval;
}
function validate(x){
	var allowed = [1,2,3,4,5,6,7,8,9,''];
	for(var i=0;i<10;i++)
		if(allowed[i]==x.value){
			return true;
		}
	x.value = '';
	toast("Sorry! "+ x.value +" Not allowed");
	return false;
}


function globalchange(id,value){
	var y = getY(id)
	var x = getX(id,y);
	if(value == "")
		value=0;
	$global_sudoku[x][y] = value;
	drawimage(value,x,y,0,'d');

}

function toast(message){
	alert(message);
}
function getY(box){
	return (box - 1) % 9;
}
function getX(box,y){
	return (box - 1- y)/9;
}
function disableinput(){
	for(var i=1;i<82;i++)
		document.getElementById("input_" + i).disabled =true;
}


//var config = {
//    apiKey: "AIzaSyBpATOpMHR40sASrc2IM66Uv9ThztZU1LQ",
//    authDomain: "ankitproject-44df1.firebaseapp.com",
//    databaseURL: "https://ankitproject-44df1.firebaseio.com",
//    projectId: "ankitproject-44df1",
//    storageBucket: "",
//    messagingSenderId: "512382470895"
//  };
//  firebase.initializeApp(config);
//
//	function upload(sudoku){
//		var database = firebase.database();
//		firebase.database().ref('/sudoku').push({
//			sudoku : sudoku
//	 });
//}
//
//var fbdata;
//function read(){
//
//	var ref = firebase.database().ref('/sudoku');
//
//	ref.on("value", function(snapshot) {
//	   console.log(snapshot.val());
//		fbdata = snapshot.val();
//	}, function (error) {
//	   console.log("Error: " + error.code);
//	});
//
//	read_data();
//}
//
//function read_data(){
//	for (var property in fbdata) {
//		if (fbdata.hasOwnProperty(property)) {
//			// do stuff
//			alert(property);
//		}
//	}
//}



function myFunction(message , time) {
    var x = document.getElementById("snackbar");
	document.getElementById("toast").innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, time );
}
