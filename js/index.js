window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const canvas = document.getElementById('canvas')
  canvas.width  = window.innerWidth
  canvas.height = window.innerHeight
  
  const ctx = canvas.getContext('2d')
  function startGame() {
    var audio = new Audio('../images/Manuel-Gas Gas Gas.mp3')
    audio.loop=true
    audio.play();

    let road = new Image()
    road.src='../images/road.png'
    road.onload=function(e){
    drawRoad()  
  }

    function drawRoad(){
      ctx.drawImage(road,0,0,canvas.width,canvas.height)
    }



    
    const obstacles = []

    function drawObstacles(){
      obstacles.forEach(obstacle => {
        ctx.fillStyle=obstacle.color
        ctx.fillRect(obstacle.x,obstacle.y+=3,obstacle.w,obstacle.h)
      })
    }
    
    setInterval(function(){
      let obstacle = {
        x:Math.random()*canvas.width,
        y: 0,
        w:Math.random()*canvas.width/2,
        h:50,
        color:'red',
      }
      obstacles.push(obstacle)
    }, 2222)



    const car = {
      x:750,
      y:750,
      w:160,
      h:180
    }
    let carImg = new Image()
    carImg.src='../images/car.png'
    carImg.onload=function(e){
      drawCar()
    }

    function drawCar(){
      ctx.drawImage(carImg,car.x,car.y,car.w,car.h)
    }

  //   function drawObstacles(){
  //     for(i=0;i<obstacleArray.length;i++)
  //     {
  //       ctx.fillStyle="purple"
  //       if (obstacleArray[i].y > 1500)
  //       {
  //         obstacleArray.pop()
  //       }
  //       else
  //       {
  //         ctx.fillRect(obstacleArray[i].x,obstacleArray[i].y+=5,obstacleArray[i].xLength,20)
  //       }
  //     }
  //   }

  //   function createObstacle(){
  //   for(i=obstacleArray.length; i > 0; i--)
  //   {
  //     obstacleArray[i] = obstacleArray[i-1]
  //   }
  //   obstacleArray[0] = {
  //     x: Math.floor(Math.random()*2700), 
  //     y: 0, 
  //     xLength:Math.floor(Math.random() + 75)}
  // }

  // function detectCollision(obs){
  //     if (obs.x < car.x + car.w &&
  //     obs.x + obs.w > car.x &&
  //     obs.y < car.y + car.h &&
  //     obs.y + obs.h > car.y) {
  //       window.cancelAnimationFrame()
  //     }
  //   }




    // function obstacleDrawing(){
      
    //   ctx.fillStyle = 'purple'
    //   ctx.fillRect(i,i+=2, 100, 20)

    //   // ctx.fillStyle='green'
    //   // ctx.fillRect(obstacle2.x, obstacle2.y += 3,80, 20)

    //   if(obstacle1.y >= 350){
    //     obstacle1.y=0
    //     obstacle.x=Math.floor(Math.random()*180)
    //   }
    //   // if(obstacle1.y >= 350){
    //   //   obstacle1.y=0
    //   //   obstacle.x=Math.floor(Math.random()*180)
    //   // }

    // }


    // let treeImg = new Image()
    // treeImg.src='../images/obstacle.png'
    // treeImg.onload=function(e){
    //   drawtreeImg()
    // }

    // let tree1={
    //   x: Math.floor(Math.random()*180),
    //   y:0
    // }
    // let tree2={
    //   x: Math.floor(Math.random()*180),
    //   y:0
    // }

    // function drawtreeImg(){
    //   ctx.drawImage(treeImg,50,50,100,100)
    // }

    // function moveObstacles(object,speed){
    //   object.y += speed
    //   if (object.y>config.height) {
    //     this.resetObjectPos(object)
    //   }
    // }
    // function resetObjectPos(object){
    //   object.y=0
    //   var randomX=Math.floor(Math.random()*canvas.height)
    // }


  document.body.onkeypress = function(e){
    if(e.key === 'd'){ //Move right
        car.x+=30
    }
    if(e.key === 'a'){ //Move left
        car.x-=30
    }
  
  }


  function animate(){ //Where the magic happens
    ctx.clearRect(0, 0, canvas.width, canvas.height) //clears the canvas - flipping to a blank page

    drawRoad()
    drawObstacles()
    drawCar() 
    // obstacleDrawing() 
    // detectCollision()



    animateId = window.requestAnimationFrame(animate) //Game rendering -infinite loop that goes super fast
}
animate()
//window.cancelAnimationFrame(animateId) to stop it


//setInterval clearInterval(id)
//setTimeout clearTimeout(id)
//requestAnimationFrame cancelAnimationFrame(id)


document.body.onclick = function(e){
}
}
}






