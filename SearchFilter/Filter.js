
//!Search filter
let users = [
    {
        name: "amisha rathore",
        pic:
            "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world | not for everyone",
    },
    {
        name: "kiara mehta",
        pic:
            "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy coffee > everything",
    }, {
        name: "alisha oberoi",
        pic:
            "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens | overthinker",
    },
    {
        name: "Ojin Oklawa",
        pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
        bio: "too glam to give a damn | filter free soul",
    },
    {
        name: "mohit chhabra",
        pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
        bio: "aesthetic overload living in lowercase",
    },
];

// Show all users 
// Filter everytime in input
// Show filered users

function showUsers(array) {
    const container = document.querySelector(".cards");
    container.innerHTML = "";

    if (!array || array.length === 0) {
        container.style.color = "white";
        container.textContent = "User does not Exist";
        return;
    }

    for (const user of array) {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        let blurred = document.createElement("div");
        blurred.style.backgroundImage = `url(${user.pic})`;
        blurred.classList.add("blurred-layer");

        let content = document.createElement("div");
        content.classList.add("content");

        let h3 = document.createElement("h3");
        h3.textContent = user.name;

        let p = document.createElement("p");
        p.textContent = user.bio;

        content.append(h3, p);
        card.append(img, blurred, content);
        container.appendChild(card);
    }
}

showUsers(users);

let inp=document.querySelector(".search-input");
inp.addEventListener("input",function(dets){
    let newUsers=users.filter((user)=>{
        return user.name.startsWith(inp.value);
    });

    let cards=document.querySelector(".cards").innerHTML="";
    if(newUsers){
        showUsers(newUsers);
    }
    
});