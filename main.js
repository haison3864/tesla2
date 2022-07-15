

data = [
    // {
    //     namee: "fhjhsdhjdf",
    //     cost: 6676,
    //     category: "sabzavotlar",
    //     picture: "windovs.jpg"
    // },
];

massiv_cart = []

let cart_Part = document.querySelector(".offcanvas-body")

let row = document.getElementById("row1")

function Mapping(massivi) {

    
    row.innerHTML = ""
    massivi.map((value, index) => {
        

        let img = document.createElement("img")
        let card = document.createElement("div")
        let ikons = document.createElement("h3")
        let part = document.createElement("part")
        let hlar = document.createElement("div")
        let gift = document.createElement("h5")
        let cat = document.createElement("h6")
        let pul = document.createElement("h5")
        let button_cart = document.createElement("button")
        let col = document.createElement("div")

        img.src = value.picture;
        ikons.innerHTML = "ikonkalar"
        gift.innerHTML = value.namee;
        cat.innerHTML = value.category;
        pul.innerHTML = value.cost;
        button_cart.innerHTML = "Add to Cart"
        button_cart.setAttribute("onclick", `korzina(${index})`)

        hlar.appendChild(gift)
        hlar.appendChild(cat)

        part.appendChild(hlar)
        part.appendChild(pul)

        card.appendChild(img)
        card.appendChild(ikons)
        card.appendChild(part)
        card.appendChild(button_cart)

        col.appendChild(card)

        row.appendChild(col);

        gift.classList.add("gift")
        cat.classList.add("cat")
        pul.classList.add("pul")
        ikons.classList.add("text-center", "mt-2")
        part.classList.add("part")
        card.classList.add("card")

        button_cart.classList.add("button_cart")
        col.classList.add("col-lg-3", "col-md-6", "col-sm-12")

    })

}
Mapping(data);

function Addd() {

    let product_name = document.getElementById("Name")
    let product_cost = document.getElementById("Cost")
    let kategory = document.getElementById("Category");

    data.push({
        namee: product_name.value,
        cost: product_cost.value,
        category: kategory.value,
        picture: new_Picture

    })

    Mapping(data)
}


let new_Picture = ""

function picturing(val) {
    val.src = window.URL.createObjectURL(val.files[0]);
    new_Picture = val.src;
    console.log(new_Picture);

}

function Del() {
    row.innerHTML = ""
}


function korzina(index) {
    massiv_cart.push(data[index])
    Mapping_korzina(massiv_cart)
}

function Mapping_korzina(massivi) {

    row.innerHTML = ""

    massivi.map((value, index) => {

        let img = document.createElement("img")
        let card = document.createElement("div")
        let ikons = document.createElement("h3")
        let part = document.createElement("part")
        let hlar = document.createElement("div")
        let gift = document.createElement("h5")
        let cat = document.createElement("h6")
        let pul = document.createElement("h5")
        let button_cart = document.createElement("button")
        let col = document.createElement("div")

        img.src = value.picture;
        ikons.innerHTML = "ikonkalar"
        gift.innerHTML = value.namee;
        cat.innerHTML = value.category;
        pul.innerHTML = value.cost;
        button_cart.innerHTML = "Buy"
        // button_cart.setAttribute("onclick" `korzina(${index})`)

        hlar.appendChild(gift)
        hlar.appendChild(cat)

        part.appendChild(hlar)
        part.appendChild(pul)

        card.appendChild(img)
        card.appendChild(ikons)
        card.appendChild(part)
        card.appendChild(button_cart)

        col.appendChild(card)


        gift.classList.add("gift")
        cat.classList.add("cat")
        pul.classList.add("pul")
        ikons.classList.add("text-center", "mt-2")
        part.classList.add("part")
        card.classList.add("card")

        button_cart.classList.add("button_cart")
        col.classList.add( "col-12")

        cart_Part.appendChild(col)

    })

}






