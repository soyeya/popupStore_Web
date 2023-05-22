

const jomalone_prdName = [

    "Lime Basil & Mandarin Cologne 100ml",
    "Pomegranate Noir Cologne 100ml",
    "English Pear & Freesia Cologne 100ml",
    "Peony & Blush Suede Cologne 100ml",
    "Wood Sage & Sea Salt Cologne 100ml",
    "Blackberry & Bay Cologne 100ml",
    "Honeysuckle & Davana Cologne 100ml",
    "Mimosa Cardamom Cologne 100ml",
    "Red Roses Cologne 100ml",
    "Wild Bluebell Cologne 100ml",
    "Poppy & Barley Cologne 100ml",
    "Crapefruit Cologne 100ml",
    "Earl Grey & Cucumber Cologne 100ml",


]

const sw19_prdName = [

    "SW19 6am EAU DE PARFUM (50ml)",
    "SW19 Noon EAU DE PARFUM (50ml)",
    "SW19 3pm EAU DE PARFUM (50ml)",
    "SW19 9pm EAU DE PARFUM (50ml)",
    "SW19 Midnight EAU DE PARFUM (50ml)",
    "SW19 DISCOVERY SET (8ml*5)",
    "SW19 6am EAU DE PARFUM (8ml)",
    "SW19 Noon EAU DE PARFUM (8ml)",
    "SW19 3pm EAU DE PARFUM (8ml)",
    "SW19 9pm EAU DE PARFUM (8ml)",
    "SW19 Midnight EAU DE PARFUM (8ml)",
    "SW19 6am PERFUME & HAND CREAM DUO SET",
    "SW19 Noon PERFUME & HAND CREAM DUO SET",


]

const tamburins_prdName = [

    "퍼퓸 카모(50ml)",
    "퍼퓸 카모(10ml)",
    "퍼퓸 버가샌달(50ml)",
    "퍼퓸 버가샌달(10ml)",
    "퍼퓸 쏘,선셋(50ml)",
    "퍼퓸 쏘,선셋(10ml)",
    "퍼퓸 바이링거(50ml)",
    "퍼퓸 바이링거(10ml)",
    "퍼퓸 스웨이드페어(50ml)",
    "퍼퓸 스웨이드페어(10ml)",
    "퍼퓸 화이트다즐링(50ml)",
    "퍼퓸 화이트다즐링(10ml)",
    "퍼퓸 헤이스텍스(50ml)",


]

const jamalone_text = `Enjoy with your Jomalone`;
const sw19_text = `Stay with Perfume of SW19`;
const tamburins_text = `Natural Sensation of Tamburins`;


let subprd_List = document.querySelector(".sub_prdWrap");
let sub_title = document.querySelector(".sub_title span");
let main_background = document.querySelector(".sub_main");
let prd_text = document.querySelector(".prd_Name");

const $hash_tag = location.hash;
console.log($hash_tag);
let $sub_text = $hash_tag.replace("#" , "");
console.log($sub_text);

let prd_content = "";

function hash_page() {

if($sub_text){
    
    main_background.style.backgroundImage = `url(./img/${$sub_text}_banner.jpg)`;
    prd_content = "";

 if($sub_text == "jomalone"){

        sub_title.textContent = jamalone_text;

        for(var i = 0; i < 13; i++){
    
        prd_content += `<li><a href="" class="prd_text"><img src="./img/${$sub_text}_${i+1}.webp" alt="">${jomalone_prdName[i]}</a></li>`;
        
      };

       subprd_List.innerHTML = prd_content;

     }else if($sub_text == "sw19"){
    
        sub_title.textContent = sw19_text;

    for(var i = 0; i < 13; i++){

            prd_content += `<li><a href="" class="prd_text"><img src="./img/${$sub_text}_${i+1}.webp" alt="">${sw19_prdName[i]}</a></li>`;

    };

    subprd_List.innerHTML = prd_content;
    
     }else if($sub_text == "tamburins"){
    
        sub_title.textContent = tamburins_text;

        for(var i = 0; i < 13; i++){
    
                prd_content += `<li><a href="" class="prd_text"><img src="./img/${$sub_text}_${i+1}.webp" alt="">${tamburins_prdName[i]}</a></li>`;

        };

        subprd_List.innerHTML = prd_content;

     }

    }else{

        location.href="./"; 
    }

 }

hash_page();



const $sub_header = document.querySelectorAll("header .store_list li");
console.log($sub_header);

for(const v of $sub_header){

    v.addEventListener("click" , () => {

        $sub_text = v.getAttribute("rel");

        hash_page();

    });
}


