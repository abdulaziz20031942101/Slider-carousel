// variable
const Slider = document.querySelectorAll(".slider")
const Prev = document.querySelector(".prev")
const Next = document.querySelector(".next")
const Current = document.querySelector(".current")
const Total = document.querySelector(".total")


// 
let sliderCurrent = 1
ShowSlider(sliderCurrent)
Total.innerHTML = Slider.length


//
if(Slider.length < 10){
    Total.innerHTML = `0${Slider.length}`
}
else{
    Total.innerHTML = `${Slider.length}`

}

//
function ShowSlider(index){
    if(index > Slider.length){
        sliderCurrent = 1
    }
    if(index < 1){
        sliderCurrent = Slider.length
    }

    if(sliderCurrent < 10){
        Current.innerHTML = `0${sliderCurrent}`
    }
    else{
        Current.innerHTML = `${sliderCurrent}`
    }
    Slider.forEach(item=>item.style.display = 'none')
    Slider[sliderCurrent-1].style.display = 'block'
    
}



// 
function PlusSlider(idx){
    ShowSlider(sliderCurrent+=idx)
}



//
Prev.addEventListener('click',()=>{
    PlusSlider(-1)
})

Next.addEventListener('click',()=>{
    PlusSlider(1)
})