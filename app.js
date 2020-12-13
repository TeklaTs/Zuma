var BALL_RADIUS = 20;
var NUM_BALL = 10;

var ball;
var color;

var dx = [];
var dy = [];
var y = [];

var balls = [];

var x = BALL_RADIUS;
var y1 = BALL_RADIUS;

function start(){
  //  backgraund();
    
    zone();
    for (var i = 0; i < NUM_BALL; i++){
        dx[i] = 2;
        dy[i] = 0;
        y[i] = BALL_RADIUS;
    }

    for(var i = 0; i < NUM_BALL; i++) {
        balls[i] = new Circle (BALL_RADIUS);
        balls[i].setPosition (x , y1);
        changeColor();
        balls[i].setColor(color);
        add(balls[i]);
        
        setTimer(moveBalls , 200);
        
        x += 2 * BALL_RADIUS;
    }
    
}

function changeColor(){
	var colorCode = Randomizer.nextInt(0, 3);

	if(colorCode == 0)
	    color = Color.red;
	
	if (colorCode == 1)
	    color = Color.green;
    
    if(colorCode == 2)
        color = Color.blue;
    
    if(colorCode == 3)
        color = Color.yellow;
}

function moveBalls(){
    for(var i = 0; i < NUM_BALL; i++){
        balls[i].move(dx[i] , dy[i]);
        check();
    }
}

function check(){
   // for(var j = 0; j <= 5; j++)
        for (var i = 0; i < NUM_BALL; i++){
         
            if (y[i] > getHeight() / 2){
               // removeAll();
                for (var i = 1; i <= NUM_BALL; i++){
                    stopTimer(moveBalls);
                }
                zone();
                text();
                
                break;
            }
            
            if(balls[i].getX() + BALL_RADIUS > getWidth()){
                y[i] += 2 * BALL_RADIUS;   
                balls[i].setPosition (getWidth() - BALL_RADIUS , y[i]);
                dx[i] = -dx[i];
            }
    
            if(balls[i].getX() - BALL_RADIUS < 0){
                y[i] += 2 * BALL_RADIUS;
                balls[i].setPosition (BALL_RADIUS , y[i]);
                dx[i] = -dx[i];
            }
    

    }
}


function backgraund(){
    var image = new WebImage ("https://images2.fanpop.com/image/photos/10900000/Codex-of-Mixtec-zuma-deluxe-10908727-640-480.jpg");
    image.setSize(getWidth() , getHeight());
    image.setPosition (0 ,0);
    add(image);
}

function text(){
    var txt = new Text ("You Lose", "30pt Arial");
    txt.setPosition (getWidth() / 2 - 100 , getHeight() / 2);
    txt.setColor(Color.black);
    add(txt);
}

function zone(){
    var zone = new Rectangle(getWidth() , 6);
    zone.setPosition(0 , getHeight() / 2 + 3);
    zone.setColor (Color.grey);
    add(zone);
}