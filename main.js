var canvas = new fabric.Canvas('myCanvas');
 var myAudio= document.getElementById('myAudio');

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
    new_image = Img;

    new_image.scaleToWidth(700);
    new_image.scaleToHeight(510);
    new_image.set({
top:0,
left:0
    
    });
    canvas.add(new_image);
    });
	
	
    }

function playsound(){
	myAudio.play();
}
