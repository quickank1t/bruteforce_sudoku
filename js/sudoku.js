//################ testing functions ############################
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

var black = [
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

var demo = [
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


var evil = [
    [4,0,0, 0,0,2, 0,6,0],
    [0,0,7, 0,0,0, 0,0,0],
	[5,0,9, 8,0,0, 0,0,7],
	
	[0,2,0, 9,4,0, 0,0,0],
	[0,7,0, 1,0,6, 0,9,0],
	[0,0,0, 0,8,5, 0,2,0],
		
	[0,0,0, 0,0,7, 4,0,5],
	[6,0,0, 0,0,0, 8,0,0],
	[0,5,0, 4,0,0, 0,0,2] 
];



var test_board1 = [
    [1,9,3, 5,2,6, 4,7,8],
    [5,2,7, 4,9,8, 6,1,3],
	[6,0,0, 1,0,0, 9,0,0],
	
	[7,0,0, 0,0,0, 3,0,0],
	[0,8,0, 0,3,0, 0,4,0],
	[0,0,1, 0,0,0, 0,0,7],
		
	[0,0,5, 0,0,1, 0,0,4],
	[0,0,0, 9,8,0, 7,0,0],
	[0,3,0, 0,5,4, 0,2,0] 
];
//console.log(test_board);

var finalval ;
var $gameflow = [];
//################ Main functions##################################

function solveSudoku(board){
    
    // keep track of the current cordinates
    var x_cord=0;
    var y_cord=0;
    // keep trac on all the possible entries for the cordinate
    var possibleEntries;
    
    // terminating conditon
    if(isBoardFull(board)){
		//console.log()
        $global_sudoku = board;
        return;
    }else{
        //con
        // next empty spot
        var changed = false;
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
               
                
                if(board[i][j] == 0){
                    //console.log('(',i,',',j,') =', board[i][j]);
                    x_cord = i;
                    y_cord = j;
                    changed = true;
                    break;
                    }
                }
            if(changed)
                break;
        }     
        //here we have the value for x_cord and y_cord
        //get all possible values for this place
        //console.log(x_cord,y_cord);
        possibleEntries = getAllPossibleEntries(board,x_cord,y_cord);
        //console.log(board);
        var ans = 0;
        //recursion
        for(var i=0;i<9;i++){
            if(possibleEntries[i] != 0){
                board[x_cord][y_cord] = possibleEntries[i];
                //console.log( board[x_cord][y_cord],possibleEntries[i],x_cord,y_cord);
                //alert(board);
				renderimage(x_cord,y_cord,possibleEntries[i]);
				console.log("("+x_cord +","+y_cord +")=" + possibleEntries[i]);
				var temp = [x_cord,y_cord,possibleEntries[i]];
				$gameflow.push(temp);
                solveSudoku(board);
                //alert("hi");
                if(isBoardFull(board))
                    break;
            }
        }
        if(isBoardFull(board))
                    return;
         board[x_cord][y_cord] = 0; 
        }
    //console.log(board);
}


//################ Supporting functions ###########################

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
//console.log(isBoardFull(test_board));

//return an array with all possible entries for a the position
// <--- board + x and y cordiante 
// ----> all possible values
//console.log(getAllPossibleEntries(test_board,8,8));
function getAllPossibleEntries(board,x,y){
    var values = [0,0,0,0,0,0,0,0,0];
    var possibleEntries ;
    
    //check horizonatal
    for(var i=0;i<9;i++)
        if(board[i][y] != 0){
			//console.log(i,y,board[i][y],board );
			values[board[i][y] - 1] = 1;
		}
            
     //console.log("hori", values);
        
    //check Vertical
    for(var i=0;i<9;i++)
        if(board[x][i] != 0){
			//console.log('(',i,',',y,')',board[x][i],board );
			values[board[x][i] - 1] = 1;
		}
            
    //console.log("vert", values);
    //check box
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
    //console.log("box", values);
    //console.log(p,q);
    
    for(var i=p;i<p+3;i++)
        for(var j=q;j<q+3;j++)
            if(board[i][j] != 0)
                values[board[i][j] - 1] = 1;   
    
    for(var i=0;i<9;i++)
        if(values[i] == 0)
            values[i] = i + 1;
        else
            values[i] = 0;
    
    //console.log(values,board);
    return values;
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

//getAllPossibleEntries(test_board,0,0);

//################ Display functions ###########################
function loadgame(board){
    for(var i=0;i<9;i++)
		for(var j=0;j<9;j++){
			if(board[i][j] != 0)
				setvalue( getCounter(i,j), board[i][j] );
		}
}

function setvalue(counter, value){
	var name = 'img/d' + value + '.png';
	document.getElementById(counter).src = name;
	
	document.getElementById(counter).value = value;
	var y= getY(counter);
	var x= getX(counter,y);
				
	black[x][y] = parseInt(value);
	document.getElementById("sudoku"+counter).value = value;
	
}
function renderimage(x,y,value){
	var counter = getCounter(x,y);
	var name = 'img/' + value + '.png';
	document.getElementById(counter).src = name;
	//alert(name);
}
	
function getCounter(x,y){
	 return x * 9 + y + 1;
}

//console.log(getY(28), getX(28,getY(28)));
function getY(box){
	return (box - 1) % 9;
}
function getX(box,y){
	return (box - 1- y)/9;
}

function welcome(){
	alert("It is currently in the beta phase. at the moment, a default sudoku chalenge is loaded backend and now I am working hard to build a user-friendly interface. Also really sorry, you might find some small bugs as well. Thanks. Ankit");
}


function clearBoard(){
	black = [
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
	
	var count=1;
	
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			var name = "sudoku" + count;
			renderimage(i,j,"blank");
			document.getElementById(name).value =black[i][j];
			count++;
		}
	}
}
function load(){
	clearBoard();
	black = demo;
	loadgame(black);
}
function solve(){
	var board_instance = black;
	solveSudoku(board_instance);
}
function getBoard(){
	var count=1;
	
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			var name = "sudoku" + count;
			
			black[i][j] = document.getElementById(name).value;
			count++;
		}
	}
	return black;
}








function validate(x){
	
	var allowed = [1,2,3,4,5,6,7,8,9,''];
	for(var i=0;i<10;i++)
		if(allowed[i]==x.value){
			
			return true;
		}
	x.value = '';
	
	alert("Sorry! "+x.value+" Not allowed");		
	return false;
	
}


function changevalueofBoard(id,value){
	
}


// first funtion to be called
// it will be called only once
// start the game here
// use $global_sudoku
function start(){
	//alert("hi");
	renderGlobalSudoku();	
}

//load an exisiting sudoku
function loadSudoku(){
	$global_sudoku = black;
	renderGlobalSudoku();
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
				globalchange_2(i,j,$global_sudoku[i][j]);
			}
		}
	}
	disableEdit();
}

//render the global sudoku in the div
function renderGlobalSudoku(){
	var count = 0;
	var itterator = 0;
	var lbr = 1;
	document.getElementById("image").innerHTML = ''  ;
	document.getElementById("hiddenBoard").innerHTML ='';
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			itterator++;
			
			document.getElementById("hiddenBoard").innerHTML += "<input type='hidden' id='sudoku"+ itterator +"' value='"+$global_sudoku[i][j] +"'>"
			document.getElementById("image").innerHTML += "<img id='"+ itterator +"' src='img/"+$global_sudoku[i][j] +".png'  height='50' width='50' onclick='editBox(this)'>";
			
			if(itterator %3 == 0){
				document.getElementById("image").innerHTML += "<img src='img/space.png'  height='25' width='25'>";
			}
			if(itterator %9 == 0){
				document.getElementById("image").innerHTML += "<br>";
				count++;
			}
			if(count ==3){
				document.getElementById("image").innerHTML += "<br>";
				count=0;
			}
		}
	}
}
//edit mode
function editBox(x){
	editMode();
	name  = "input_"+x.id;
	//alert(name);
	document.getElementById(name).focus();
}
function getinput(){
	var newval = document.getElementById("input").innerHTML ;
	var count = 0;
	for(var i=1;i<82;i++){
		newval += "<input id='input_"+ i +"' type='text' size='1' onkeyup='validate(this)'  onchange='syncBoard(this)' >";
		
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

function syncBoard(x){
	var id= x.id;
	id = id.replace("input_" , "");
	globalchange(id,x.value);
	
}

function globalchange(id,value){
	var y = getY(id)
	var x = getX(id,y);
	
	$global_sudoku[x][y] = value;
	renderAt(id,value);
	
}
function globalchange_2(x,y,value){
	$global_sudoku[x][y] = value;
	document.getElementById(getCounter(x,y)).src = "img/d"+value+".png";
	
}

function normalMode(){
	
	document.getElementById("edit").style.display= "none";
	document.getElementById("normal").style.display= "";
	
}
function renderAt(id,value){
	document.getElementById(id).src = "img/d"+value+".png";
}
function disableEdit(){
	document.getElementById("editbtn").disabled = true;
}
function disableRandom(){
	document.getElementById("randombtn").disabled = true;
}
function editMode(){
	disableRandom();
	document.getElementById("normal").style.display= "none";
	document.getElementById("edit").style.display= "";
	
}
function bruteforce(){
	//alert($global_sudoku);
	//alert(CheckPre())
	if(CheckPre()){
		disableRandom();
		document.getElementById("brutebtn").disabled = true;
		disableEdit();
		solveSudoku($global_sudoku);
		toast("success","May the force be with you! :D");
	}else{
		toast("danger","There is somethig wrong with the sudoku you have entered. Please check!!");
	}
	
}

function CheckPre(){
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			if($global_sudoku[i][j] != 0){
				//alert($global_sudoku[i][j]);
				if(corrupted(i,j,$global_sudoku[i][j])){
					return false;
				}
			} 
		}
	}
	return true;
}

function corrupted(x,y,val){
	board = $global_sudoku;
	value = parseInt(val);
	//check horizonatal
    for(var i=0;i<9;i++){
		
		if(i == x)
			continue;
		if(board[i][y] == value){
			//console.log(x,y,value);
			//console.log(i,y,board[i][y],board );
			badBlock(i,y);
			return true;
		}
		
	}
        
            
     //console.log("hori", values);
        
    //check Vertical
    for(var i=0;i<9;i++){
		if(i == y)
			continue;
		if(board[x][i] == value){
			//console.log('(',i,',',y,')',board[x][i],board );
			badBlock(i,y);
			return true;
		}
		
		
	}
	
	//console.log("vert", values);
    //check box
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
    //console.log("box", values);
    //console.log(p,q);
    
    for(var i=p;i<p+3;i++)
        for(var j=q;j<q+3;j++){
			if(x == i && y == j)
				continue;
			if(board[i][j] == value)
                return true;  
		}
            
        
	
	return false;
}
function toast(type,message){
	document.getElementById("alert").innerHTML = "<br><div class='alert alert-"+ type +"' role='alert'><center>"+ message+"</center></div>";
	setTimeout(
    function() {
      document.getElementById("alert").innerHTML = "";
    }, 3000);
	
	
}

function badBlock(i,y){
	
}
//loadgame(demo);
//;
