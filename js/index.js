// Logic for Navbar Toggle
let hamburger = document.getElementById("hamburger")
let ul_container = document.getElementById("ul_container")
let nav = document.getElementById("nav")
ul_container.style.left = '-150px'
function toggle_nav(){
    if (ul_container.style.left != '-150px') {
        ul_container.style.left = '-150px'
    }
    else {
        ul_container.style.left = '0px'
    }
}

let testonimals_container = document.querySelector('.testonimals')
let t_1 = document.getElementById("t-1")
let t_2 = document.getElementById("t-2")
let backward_t_btn =  document.querySelectorAll('.back_t')
let forward_t_btn =  document.querySelectorAll('.forw_t')
let is_t_1 = true 


Array.from(forward_t_btn).forEach((e)=>{

    e.addEventListener('click',()=>{
        if(is_t_1==true){
        testonimals_container.scrollLeft+=1000
        is_t_1=false;
        }
})

})

Array.from(backward_t_btn).forEach((e)=>{

    e.addEventListener('click',()=>{
        if(is_t_1==false){
        testonimals_container.scrollLeft-=1000
        is_t_1=true
        }
})
})







// // Logic for change of navbar's background
// setInterval(() => {
//     if(window.pageYOffset>200){
//         ul_container.style.backgroundColor="white"
//         nav.style.backgroundColor="white"
//     }
//     else{
//         ul_container.style.backgroundColor="transparent"
//         nav.style.backgroundColor="transparent"
//     }
//     console.log(window.pageYOffset)
    
// }, 1);