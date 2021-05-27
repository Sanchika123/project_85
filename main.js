canvas = document.getElementById('my_canvas');
ctx= canvas.getContext("2d");

car1_width= 100;
car1_height= 60;

car1_x= 10;
car1_y= 10;

car2_width= 100;
car2_height= 60;

car2_x= 10;
car2_y= 80;

background_img= "https://i.postimg.cc/bv5d35nK/racing.jpg";
car_img1= "https://i.postimg.cc/YqdnnNX1/car1.png";
car_img2= "https://www.dlf.pt/png/big/19/198917_car-png-images-top-view.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_img;

    car_img1Tag= new Image();
    car_img1Tag.onload= uploadcar1;
    car_img1Tag.src= car_img1;

    car_img2Tag= new Image();
    car_img2Tag.onload= uploadcar2;
    car_img2Tag.src= car_img2;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0 , canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car_img1Tag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car_img2Tag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed= e.keyCode;
console.log(keyPressed);
if (keyPressed=='38'){
    car1_up();
    console.log("up arrow key");
}

if (keyPressed=='40'){
    car1_down();
    console.log("down arrow key");
}

if (keyPressed=='37'){
    car1_left();
    console.log("left arrow key");
}

if (keyPressed=='39'){
    car1_right();
    console.log("right arrow key");
}
if (keyPressed=='87'){
    car2_up();
    console.log("w key");
}

if (keyPressed=='83'){
    car2_down();
    console.log("s key");
}

if (keyPressed=='65'){
    car2_left();
    console.log("a key");
}

if (keyPressed=='68'){
    car2_right();
    console.log("d key");
}

}

function car1_up(){
    if(car1_y >= 0){
    car1_y-=10;
    console.log("When up pressed x="+car1_x+" y="+ car1_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}

function car1_down(){
    if(car1_y <= 500){
        car1_y+=10;
    console.log("When down pressed x="+car1_x+" y="+ car1_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}

function car1_left(){
    if(car1_x >= 0){
        car1_x-=10;
    console.log("When left pressed x="+car1_x+" y="+ car1_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}

function car1_right(){
    if(car1_x <= 700){
        car1_x+=10;
    console.log("When right pressed x="+car1_x+" y="+ car1_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}

function car2_up(){
    if(car2_y >= 0){
    car2_y-=10;
    console.log("When up pressed x="+car2_x+" y="+ car2_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}

function car2_down(){
    if(car2_y <= 500){
        car2_y+=10;
    console.log("When down pressed x="+car2_x+" y="+ car2_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}

function car2_left(){
    if(car2_x >= 0){
        car2_x-=10;
    console.log("When left pressed x="+car2_x+" y="+ car2_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}

function car2_right(){
    if(car2_x <= 700){
        car2_x+=10;
    console.log("When right pressed x="+car2_x+" y="+ car2_y);
    uploadBackground()
    uploadcar1()
    uploadcar2()
    }
}