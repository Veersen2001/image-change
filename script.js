// javaScript code
const body = document.getElementById('body');
const myImage = document.getElementById("image");
const previousBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// image Source
const imageSources = [
   "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/15885836/pexels-photo-15885836.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/15113030/pexels-photo-15113030.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/8955379/pexels-photo-8955379.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/15750675/pexels-photo-15750675.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/15872062/pexels-photo-15872062.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400",

];

let currentIndex = 0;

nextBtn.addEventListener('click',() =>{
    if(currentIndex === imageSources.length-1)
    {
        currentIndex=0;
    }
    else
    {
        currentIndex+=1;
    }
    myImage.src=imageSources[currentIndex];

})

previousBtn.addEventListener('click',()=>{
    if(currentIndex===0)
    {
        currentIndex=imageSources.length-1;
    }
    else
    {
        currentIndex-=1;
    }
    
    myImage.src = imageSources[currentIndex];
})