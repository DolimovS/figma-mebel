const navLeft=document.querySelectorAll(".nav_left")
const hero_link=document.querySelector(".hero_link")
console.log(navLeft);


function nav_links(){
    hero_link.classList.toggle("hidden");
    console.log("true");
}
let products = [
    {
      id: 1,
      img: "./img/img_1.png",
      name: "CHAIR",
      model: "Minimal LCD chair",
      skidka: "$180",
      sum: "$250",
    },
    {
      id: 2,
      img: "./img/img_2.png",
      name: "sofa",
      model: "Modern Sofa",
      skidka: "$120",
      sum: "$150",
    },
    {
      id: 3,
      img: "./img/img_3.png",
      name: "sofa",
      model: "Modern Sofa",
      skidka: "$130",
      sum: "$150",
    },
    {
      id: 4,
      img: "./img/img_4.png",
      name: "tabble",
      model: "Wood Coffee Tables",
      skidka: "$100",
      sum: "$120",
    },
    {
      id: 5,
      img: "./img/img_5.png",
      name: "CHAIR",
      model: "Acacia Wood  Chairs",
      skidka: "$100",
      sum: "120",
    },
    {
      id: 6,
      img: "./img/img_6.png",
      name: "Bench",
      model: "Amalia Cowhide Bench",
      skidka: "$130",
      sum: "$150",
    },
    {
    id: 7,
    img: "./img/img_7.png",
    name: "Storage",
    model: "Juno-Hinged  Storage",
    skidka: "$180",
    sum: "$250",
    },
    {
    id: 8,
    img: "./img/img_8.png",
    name: "Furniture",
    model: "Delicia 3 Piece  Room",
    skidka: "$120",
    sum: "$150",
    },
]

products=JSON.parse(localStorage.getItem("list"))

const cards=document.querySelector(".cards")

function setdata(){
    localStorage.setItem("list", JSON.stringify(products))
}

function getdata(){
    cards.innerHTML = "";
const list_1=JSON.parse(localStorage.getItem("list"))

    list_1.map((item,index)=>{
        cards.innerHTML+=`
    
        <div class="card">
                        <div class="img">
                        <img src="${item.img}" alt="">
                            <div class="icons">
                                <div class="iconca"><i class="fa-regular fa-heart" style="color: #888b91;"></i></div>
                                <div class="iconca"><i class="fa-solid fa-bag-shopping" style="color: #888b91;"></i></i></div>
                                <div class="iconca"><i class="fa-solid fa-arrows-rotate" style="color: #888b91;"></i></div>
                                <div class="iconca"><i class="fa-regular fa-eye" style="color: #888b91;"></i></div>
                            </div>
                        </div>
                        <h2>${item.name}</h2>
                        <h1>${item.model}</h1>
                        <div class="summa">
                            <p><span >${item.skidka}</span><span>${item.sum}</span></p>
                            <button onclick="delete_1(${index})">Delete</button>
                        </div>
                    </div>
        
        
        `
    })
}
setdata()
getdata()

function delete_1(id){
    console.log("delete");
    let list_1 = JSON.parse(localStorage.getItem("list"));
    const filtered = list_1.filter((item, i) => id !== i);
    localStorage.setItem("list", JSON.stringify(filtered));

    getdata();
}

// console.log(list_1);