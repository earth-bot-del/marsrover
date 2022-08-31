canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";
function add()
{
    background_img=new Image();
    background_img.onload=uploadbackground;
    background_img.src=background_image;
    
    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}
function uploadbackground()
{
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
}