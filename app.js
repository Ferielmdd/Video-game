var player = document.querySelector('.player');
var direction = {
  vitesse : 50 ,
  ArrowUp : function(){ this.y = this.y - this.vitesse ;
    return this.x ;
  } ,
  ArrowDown : function(){ this.y = this.y + this.vitesse ;
    return this.x ;
  } ,
  y : 1 ,
  ArrowRight : function(){ this.x = this.x + this.vitesse ;
    return this.y ;
  } ,
  ArrowLeft : function(){ this.x = this.x - this.vitesse ;
    return this.y ;
  } ,
  x : 1 ,
}

document.addEventListener('keydown', function(){
  if (event.key === "ArrowUp" || event.key === "ArrowDown" ) {
  player.style.transform = "translate("+  direction[event.key]() + "px,"+  direction.y + "px)"
  }
  if( event.key === "ArrowRight" || event.key === "ArrowLeft" ) {
    player.style.transform = "translate("+ direction.x  + "px,"+ direction[event.key]() + "px)"
  }
})
var body = document.querySelector('body')

var arme =  { 
  tir : function (){
  let position = {
    x : direction.x ,
    y : direction.y ,
  }
  let ball = document.createElement('div');
  ball.style.transform = "translate("+  eval( position.x )+ "px,"+  position.y + "px)";
  body.prepend(ball);
  ball.className = "ball";
  
  setInterval( )
} ,
  type : {
    normal : {
      speed : 50,
      height : 2,
      width: 2,
      nombre : 2 ,
    },
  }
  , 
}


//setInterval(arme.tir , 20);
