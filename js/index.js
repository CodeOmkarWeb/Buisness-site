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



// Company Name
const c_name="WebD"
let company_name_mobile = document.querySelector('.company-name-mobile')
let company_name = document.querySelector('.company-name')
company_name_mobile.innerText=c_name;
company_name.innerText=c_name;


// Testonimal Login & Variables

// Testonimal container
let testonimals_container = document.querySelector('.testonimals')

// Testonimal-1
try {
let t_1 = document.getElementById("t-1")
let t_1_para = document.getElementById("t_1_id")
let t_1_name = document.getElementById("t_1_name")
let t_1_text = `Lorem ipsum dolor sit amet consectetu adipisicing elit. Ducimus qui numquam ea! Accusamus obcaecati, at dolor soluta debitis reiciendis iusto tempora consequuntur quibusdam. Thanks`
let t_1_c_name = `STEVE HARRINGTON`
t_1_para.innerText=t_1_text
t_1_name.innerText=t_1_c_name

// Testonimal-2
let t_2 = document.getElementById("t-2")
let t_2_para = document.getElementById("t_2_id")
let t_2_name = document.getElementById("t_2_name")
let t_2_text = `Lorem ipsum dolor sit amet consectetu adipisicing elit. Ducimus qui numquam ea! Accusamus obcaecati, at dolor soluta debitis reiciendis iusto tempora consequuntur quibusdam. Thankyou`
let t_2_c_name = `JOYCE BYERS`
t_2_para.innerText=t_2_text
t_2_name.innerText=t_2_c_name
}
catch(err){

}
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


// Logic for form submit
try{
let fetchBtn = document.querySelector('.sub-btn');
fetchBtn.addEventListener('click', form_submit)
}catch{
    
}
function form_submit() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("POST","http://dummy.restapiexample.com/api/v1/create",true)
    ourRequest.getResponseHeader('Content-type', 'application/json');
    
    
    ourRequest.onprogress = function(){
        console.log("In progress")
    }
    ourRequest.onload  = function(){
        console.log(this.responseText)
    }
    params =  {"name":"Omkar","age":"3"}
    ourRequest.send(params)
    // ourRequest.send()
}





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