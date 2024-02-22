let navbar= document.querySelector('.header .flex .navbar');
// let popup=document.getElementById('popup');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
}

// Home section script

document.querySelectorAll('input[type="number"]').forEach(inputNumber=>{

    // Streange function 'oninput'
    inputNumber.oninput = () =>{
        if(inputNumber.value.length> inputNumber.maxLength)
            inputNumber.val= inputNumber.value.slice(0, inputNumber.maxLength);
    };
});

// function openPopup(){
//     popup.classList.add("open-popup");
// }
// function closePopup(){
//     popup.classList.remove("open-popup");
// }

//Toggle the pop-up bar
const popup=document.getElementById("popup");

        
function openPopup1(){
    popup1.classList.toggle("open-popup");
}
function closePopup1(){
   popup1.classList.toggle("open-popup");
}

const fetchData = async () => {
    try{
        const response = await fetch("http://localhost:3000/cities")
        const data = await response.json()
        console.log(data)
        return data;
    }
    catch(err){
        console.log(err)
    }
}


const AgraEstd = document.querySelector("#AgraEstd")
fetchData().then(data => {
    AgraEstd.innerHTML = "Estd: "+ data[0].estd
})
const AgraCity = document.querySelector("#AgraCity")
fetchData().then(data => {
    AgraCity.innerHTML = "City: " + data[0].city
})
const AgraFee = document.querySelector("#AgraFee")
fetchData().then(data => {
    AgraFee.innerHTML = "Fee:"+ data[0].fee
})

const  UttrakhandEstd= document.querySelector("#UttrakhandEstd")
fetchData().then(data => {
    UttrakhandEstd.innerHTML = data[1].estd
    // console.log(data)
})
const  UttrakhandCity= document.querySelector("#UttrakhandCity")
fetchData().then(data => {
    UttrakhandCity.innerHTML = data[1].city
    // console.log(data)
})
const  UttrakhandFee= document.querySelector("#UttrakhandFee")
fetchData().then(data => {
    UttrakhandFee.innerHTML = data[1].fee
    // console.log(data)
})

const  PatnaEstd= document.querySelector("#PatnaEstd")
fetchData().then(data => {
    PatnaEstd.innerHTML = data[2].estd
    // console.log(data)
})
const  PatnaFee= document.querySelector("#PatnaFee")
fetchData().then(data => {
    PatnaFee.innerHTML = data[2].city
    // console.log(data)
})
const  PatnaCity= document.querySelector("#PatnaCityEstd")
fetchData().then(data => {
    PatnaCity.innerHTML = data[2].fee
    // console.log(data)
})

const HyderabadhEstd = document.querySelector("#HyderabadhEstd")
fetchData().then(data => {
    HyderabadhEstd.innerHTML = data[3].estd
    // console.log(data)
})
const HyderabadhCity = document.querySelector("#HyderabadhCity")
fetchData().then(data => {
    HyderabadhCity.innerHTML = data[3].city
    // console.log(data)
})
const HyderabadhFee = document.querySelector("#HyderabadhFee")
fetchData().then(data => {
    HyderabadhFee.innerHTML = data[3].fee
    // console.log(data)
})

const JaipurEstd = document.querySelector("#JaipurEstd")
fetchData().then(data => {
    JaipurEstd.innerHTML = data[4].estd
    // console.log(data)
})
const JaipurCity = document.querySelector("#JaipurCity")
fetchData().then(data => {
    JaipurCity.innerHTML = data[4].city
    // console.log(data)
})
const JaipurFee = document.querySelector("#JaipurFee")
fetchData().then(data => {
    JaipurFee.innerHTML = data[4].fee
    // console.log(data)
})

const GayaEstd = document.querySelector("#GayaEstd")
fetchData().then(data => {
    GayaEstd.innerHTML = data[5].estd
    // console.log(data)
})
const GayaCity = document.querySelector("#GayaCity")
fetchData().then(data => {
    GayaCity.innerHTML = data[5].city
    // console.log(data)
})
const GayaFee = document.querySelector("#GayaFee")
fetchData().then(data => {
    GayaFee.innerHTML = data[5].fee
    // console.log(data)
})

// data.map(data => return <Component city={`data.city`} />)

////


function openPopup2(){
    popup2.classList.toggle("open-popup");
}
function closePopup2(){
   popup2.classList.toggle("open-popup");
}

function openPopup3(){
    popup3.classList.toggle("open-popup");
}
function closePopup3(){
   popup3.classList.toggle("open-popup");
}

function openPopup4(){
    popup4.classList.toggle("open-popup");
}
function closePopup4(){
   popup4.classList.toggle("open-popup");
}

function openPopup5(){
    popup5.classList.toggle("open-popup");
}
function closePopup5(){
   popup5.classList.toggle("open-popup");
}

function openPopup6(){
    popup6.classList.toggle("open-popup");
}
function closePopup6(){
   popup6.classList.toggle("open-popup");
}
function openPopup7(){
    popup7.classList.toggle("open-popup");
}
function closePopup7(){
   popup7.classList.toggle("open-popup");
}
function openPopup8(){
    popup8.classList.toggle("open-popup");
}
function closePopup8(){
   popup8.classList.toggle("open-popup");
}
function openPopup9(){
    popup9.classList.toggle("open-popup");
}
function closePopup9(){
   popup9.classList.toggle("open-popup");
}
function openPopup10(){
    popup10.classList.toggle("open-popup");
}
function closePopup10(){
   popup10.classList.toggle("open-popup");
}

function openPopup11(){
    popup11.classList.toggle("open-popup");
 }

function closePopup11(){
   popup11.classList.toggle("open-popup");
}

function openPopup12(){
    popup12.classList.toggle("open-popup");
 }
function closePopup12(){
   popup12.classList.toggle("open-popup");
}
function closePopup13(){
   popup13.classList.toggle("open-popup");
}
function closePopup14(){
   popup14.classList.toggle("open-popup");
}
function closePopup15(){
   popup15.classList.toggle("open-popup");
}
function closePopup16(){
   popup16.classList.toggle("open-popup");
}
function closePopup17(){
   popup17.classList.toggle("open-popup");
}
function closePopup18(){
   popup18.classList.toggle("open-popup");
}
function closePopup19(){
   popup19.classList.toggle("open-popup");
}
function closePopup20(){
   popup20.classList.toggle("open-popup");
}
function closePopup21(){
   popup21.classList.toggle("open-popup");
}
function closePopup22(){
   popup22.classList.toggle("open-popup");
}
function closePopup23(){
   popup23.classList.toggle("open-popup");
}
function closePopup24(){
   popup24.classList.toggle("open-popup");
}
function closePopup25(){
   popup25.classList.toggle("open-popup");
}
function closePopup26(){
   popup26.classList.toggle("open-popup");
}
function closePopup27(){
   popup27.classList.toggle("open-popup");
}
function closePopup28(){
   popup28.classList.toggle("open-popup");
}
function closePopup29(){
   popup29.classList.toggle("open-popup");
}
function closePopup30(){
   popup30.classList.toggle("open-popup");
}
function closePopup31(){
   popup31.classList.toggle("open-popup");
}


function openPopup13(){
   popup13.classList.toggle("open-popup");
}
function openPopup14(){
   popup14.classList.toggle("open-popup");
}
function openPopup15(){
   popup15.classList.toggle("open-popup");
}
function openPopup16(){
   popup16.classList.toggle("open-popup");
}
function openPopup17(){
   popup17.classList.toggle("open-popup");
}
function openPopup18(){
   popup18.classList.toggle("open-popup");
}
function openPopup19(){
   popup19.classList.toggle("open-popup");
}
function openPopup20(){
   popup20.classList.toggle("open-popup");
}
function openPopup21(){
   popup21.classList.toggle("open-popup");
}
function openPopup22(){
   popup22.classList.toggle("open-popup");
}
function openPopup23(){
   popup23.classList.toggle("open-popup");
}
function openPopup24(){
   popup24.classList.toggle("open-popup");
}
function openPopup25(){
   popup25.classList.toggle("open-popup");
}
function openPopup26(){
   popup26.classList.toggle("open-popup");
}
function openPopup27(){
   popup27.classList.toggle("open-popup");
}
function openPopup28(){
   popup28.classList.toggle("open-popup");
}
function openPopup29(){
   popup29.classList.toggle("open-popup");
}
function openPopup30(){
   popup30.classList.toggle("open-popup");
}
function openPopup31(){
   popup31.classList.toggle("open-popup");
}



AOS.init({
    duration: 400,
    delay: 200, 
});