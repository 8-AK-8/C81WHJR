canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 8;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 8;
ctx.arc(350,210,40,0,2 * Math.PI);
ctx.stroke();

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 8;
ctx.arc(450,210,40,0,2 * Math.PI);
ctx.stroke();

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 8;
ctx.arc(300,250,40,0,2 * Math.PI);
ctx.stroke();

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 8;
ctx.arc(400,250,40,0,2 * Math.PI);
ctx.stroke();
