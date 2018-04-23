//################ testing functions ############################
var test_board = [
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

//################ Main functions##################################
loadgame(demo);
solveSudoku(demo);
function solveSudoku(board){
    
    // keep track of the current cordinates
    var x_cord=0;
    var y_cord=0;
    // keep trac on all the possible entries for the cordinate
    var possibleEntries;
    
    // terminating conditon
    if(isBoardFull(board)){
		//console.log()
        finalval = board;
        
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
				//console.log( board[x_cord][y_cord],possibleEntries[i],x_cord,y_cord);
                //alert(board);
				renderimage(x_cord,y_cord,possibleEntries[i]);
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
	var name = 'img/' + value + '.png';
	document.getElementById(counter).src = name;
	
}
function renderimage(x,y,value){
	var counter = getCounter(x,y);
	var name = 'img/' + value + '.png';
	document.getElementById(counter).src = name;
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
	alert("It is currenly in the beta phase. at the moment, a default sudoku  chalenge is looded backend and now i am working hard to build a user friendly interface. Thanks. Ankit");
}

