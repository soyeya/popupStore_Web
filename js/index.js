
let slider_wrap = document.querySelector(".slider_wrap");
const slider_prevBtn = document.querySelector(".prevBtn");
const slider_nextBtn = document.querySelector(".nextBtn");

function popup_auto(){ 
    
    setInterval( (evt) => {

    const $hover = slider_wrap.classList.contains("hover");

    if($hover == true){


    }else{

    const slides_first = document.querySelector(".slider_wrap li:last-child");

    slider_wrap.classList.add("active");

    setTimeout( function() {

        slider_wrap.prepend(slides_first);
        slider_wrap.classList.remove("active");

    },1000)

    }

},3000)

}

popup_auto();


slider_wrap.addEventListener("mouseover" , (ev) => {

    const $hover = slider_wrap.classList.add("hover");

    slider_prevBtn.addEventListener("click" , () => {

        const slides_last = document.querySelector(".slider_wrap li:first-child");
    
        slider_wrap.classList.add("move");
    
        setTimeout( function() {
    
            slider_wrap.append(slides_last);
            slider_wrap.classList.remove("move");
    
        },1000)
    
    
    })

    slider_nextBtn.addEventListener("click" , () => {

        const slides_first = document.querySelector(".slider_wrap li:last-child");
        console.log(slides_first);
    
        slider_wrap.classList.add("active");
    
        setTimeout( function() {
    
            slider_wrap.prepend(slides_first);
            slider_wrap.classList.remove("active");
    
        },1000)
    
    
    })

})


slider_wrap.addEventListener("mouseout" , () => {

    const $hover = slider_wrap.classList.remove("hover");

})