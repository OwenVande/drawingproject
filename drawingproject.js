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

//cherry
canvas.beginPath();
canvas.arc(490, 165, 35, 0, 2*Math.PI);
canvas.fillStyle = "Crimson";
canvas.fill();

canvas.beginPath();
canvas.moveTo(510, 135);
canvas.bezierCurveTo(500, 135, 555, 100, 600, 120);
canvas.fillStyle = "ForestGreen";
canvas.fill();

//lines on top scoop
canvas.beginPath();
canvas.moveTo(350, 10);
canvas.bezierCurveTo(350, 70, 390, 120, 390, 110);
canvas.fillStyle = "DarkGreen";
canvas.fill();

canvas.beginPath();
canvas.moveTo(400, 0);
canvas.bezierCurveTo(400, 60, 450, 130, 450, 120);
canvas.fillStyle = "DarkGreen";
canvas.fill();

canvas.beginPath();
canvas.moveTo(310, 44);
canvas.bezierCurveTo(310, 80, 350, 130, 350, 120);
canvas.fillStyle = "DarkGreen";
canvas.fill();

canvas.beginPath();
canvas.moveTo(447, 10);
canvas.bezierCurveTo(450, 70, 500, 140, 500, 130);
canvas.fillStyle = "DarkGreen";
canvas.fill();

//first scoop
canvas.beginPath();
canvas.arc(400, 330, 110, 0, 2*Math.PI);
canvas.fillStyle = "pink";
canvas.fill();

//cone
canvas.beginPath();
canvas.moveTo(520,350); //upper right
canvas.lineTo(280,350); //upper left
canvas.lineTo(400,750); //bottom
canvas.fillStyle = "black";
canvas.fill();

//sprinkle
canvas.fillRect(300, 300, 20, 5);
canvas.fillRect(320, 330, 20, 5);
canvas.fillRect(350, 230, 20, 5);
canvas.fillRect(420, 250, 20, 5);
canvas.fillRect(450, 310, 20, 5);
canvas.fillRect(380, 280, 20, 5);
canvas.fillStyle = "SaddleBrown";
canvas.fill();

//pattern on cone
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

canvas.beginPath();
canvas.moveTo(500,350);
canvas.lineTo(380,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(460,350);
canvas.lineTo(340,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(420,350);
canvas.lineTo(300,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(380,350);
canvas.lineTo(260,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(340,350);
canvas.lineTo(220,750);
canvas.fillStyle = "red";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(300,350);
canvas.lineTo(180,750);
canvas.fillStyle = "red";
canvas.stroke();

//line-pattern cover
canvas.beginPath();
canvas.moveTo(520,350); //upper
canvas.lineTo(800,750); //lowwer right
canvas.lineTo(400,750); //lowwer left
canvas.fillStyle = "Cornsilk";
canvas.fill();

canvas.beginPath();
canvas.moveTo(280,350); //upper
canvas.lineTo(179,750); //lowwer left
canvas.lineTo(400,750); //lowwer right
canvas.fillStyle = "Cornsilk";
canvas.fill();
