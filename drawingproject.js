var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.beginPath();
canvas.arc(400, 110, 110, 0, 2*Math.PI);//third scoop
canvas.fillStyle = "SpringGreen";
canvas.fill();

canvas.beginPath();
canvas.arc(400, 220, 110, 0, 2*Math.PI);//second scoop
canvas.fillStyle = "SkyBlue";
canvas.fill();

canvas.beginPath();
canvas.arc(400, 330, 110, 0, 2*Math.PI);//first scoop
canvas.fillStyle = "pink";
canvas.fill();


canvas.beginPath(); //cone
canvas.moveTo(520,350); //upper right
canvas.lineTo(280,350); //upper left
canvas.lineTo(400,750); //bottom
canvas.fillStyle = "black";
canvas.fill();

//square
canvas.fillRect(300, 300, 20, 20);
canvas.fillStyle = "SaddleBrown";
canvas.fill();

canvas.beginPath();
canvas.moveTo(300,350);
canvas.lineTo(420,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(340,350);
canvas.lineTo(460,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(380,350);
canvas.lineTo(500,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(420,350);
canvas.lineTo(540,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(460,350);
canvas.lineTo(580,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(500,350);
canvas.lineTo(620,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath(); //line cover
canvas.moveTo(520,350); //upper right
canvas.lineTo(800,750); //upper left
canvas.lineTo(400,750); //bottom
canvas.fillStyle = "Cornsilk";
canvas.fill();
