// ! Info Card Note
// Create new cards and persist their data in Local Storage
// Render cards using data retrieved from Local Storage
// Handle all button interactions and events
// Implement and manage filter functionality


let addNote = document.querySelector("#addNote");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");
let form = document.querySelector(".form");

let imageUrlInput = form.querySelector("input[placeholder='https://example.com/photo.jpg']");

let fullNameInput = form.querySelector("input[placeholder='Enter Full Name']");

let homeTownInput = form.querySelector("input[placeholder='Enter Home Town']");

let noteInput = form.querySelector("input[placeholder='Enter The Note']");

let categoryRadios = form.querySelectorAll("input[name='category']");

let submitButton = form.querySelector("submit");


// !Code starts here

addNote.addEventListener("click", function(){
    formContainer.style.display = "initial";
});


closeForm.addEventListener("click", function () {
    formContainer.style.display = "none";
});


// !validation 

formContainer.addEventListener("submit", function (evt){
    evt.preventDefault();
    
    //spaces in start and end are removed with trim
    const imageUrl = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const note = noteInput.value.trim();
    
    let selected=false;
    categoryRadios.forEach(function (cat) {
        if(cat.checked){
            selected=cat.value;
        }
    });

    if (imageUrl === "") {
        alert("Please enter an Image URL.");
        return;
    }
    if (fullName === "") {
        alert("Please enter your Full Name.");
        return;
    }
    if (homeTown === "") {
        alert("Please enter your Home Town.");
        return;
    }
    if (note === "") {
        alert("Please enter the note.");
    return;
    }
    if(!selected){
        alert("Please select the TIME.");
        return;
    }
// Save to local storage data of form by calling the function
    saveToLocalStorage({
        imageUrl,fullName,homeTown,note,selected,
    });

    //form values reset karna and create karne ke baad remove karna
    form.reset();
    formContainer.style.display="none";
    showCards();
});


// Collect all form data into an object and save it to Local Storage
// An object is used instead of an array since Local Storage may already contain data

const tasks=[];

function saveToLocalStorage(obj){
    // Get old data from Local Storage
    
    if(localStorage.getItem("tasks")==null){
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
    else{
        let oldTasks=localStorage.getItem("tasks");
        oldTasks=JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
}

const stack = document.querySelector(".stack");
// Function to convert Local Storage data into cards
function showCards(){
        // Clear existing cards before displaying new ones
    stack.innerHTML=""; 

    let allTasks=JSON.parse(localStorage.getItem("tasks"));

    allTasks.forEach(function(task){
        // Create the main card container
        const card = document.createElement("div");
        card.className = "card";

        // Create the info section
        const info = document.createElement("div");
        info.className = "info";

        // Create the mychange div
        const mychange = document.createElement("div");
        mychange.className = "mychange";

        // Create the avatar image
        const img = document.createElement("img");
        img.src = task.imageUrl;
        img.alt = "User avatar";
        img.className = "avatar";

        // Create color-dots container
        const colorDots = document.createElement("div");
        colorDots.className = "color-dots";

        // Dot colors
        const colors = ["gray", "yellow", "red"];
        colors.forEach(color => {
            const dot = document.createElement("span");
            dot.className = `dot ${color}`;
            colorDots.appendChild(dot);
        });

        // Append img and dots into mychange
        mychange.appendChild(img);
        mychange.appendChild(colorDots);

        // Create the name heading
        const name = document.createElement("h3");
        name.textContent = task.fullName;

        // Create the details section
        const details = document.createElement("div");
        details.className = "details";

        // Left details div
        const left = document.createElement("div");
        const leftP1 = document.createElement("p");
        leftP1.textContent = "City";
        const leftP2 = document.createElement("p");
        leftP2.textContent = "Note";
        left.append(leftP1, leftP2);

        // Right details div
        const right = document.createElement("div");
        right.className = "right";
        const rightP1 = document.createElement("p");
        rightP1.textContent = task.homeTown;
        const rightP2 = document.createElement("p");
        rightP2.textContent = task.note;
        right.append(rightP1, rightP2);

        // Combine left and right into details
        details.append(left, right);

        // Create the actions div
        const actions = document.createElement("div");
        actions.className = "actions";

        // Buttons
        const contactBtn = document.createElement("button");
        contactBtn.className = "contact-btn";
        contactBtn.textContent = "📞 Contact";

        const msgBtn = document.createElement("button");
        msgBtn.className = "msg-btn";
        msgBtn.textContent = "💬 Message";

        actions.append(contactBtn, msgBtn);

        // Assemble the info section
        info.append(mychange, name, details, actions);

        // Assemble the card
        card.appendChild(info);

        // Append the card to the document body (or another container)
        document.querySelector(".stack").appendChild(card);
    });
}

const upBtn=document.querySelector("#up-btn");
const downBtn=document.querySelector("#down-btn");

function updateStack() {
    const cards = document.querySelectorAll(".stack .card");

    for (let i = 0; i < 3; i++) {
        card.style.zIndex = 3 - index;
        card.style.transform = `translateY(${index * 10}px) scale(${1 - index * 0.02})`;
        card.style.opacity = `${1 - index * 0.02}`;
    }
}

upBtn.addEventListener("click",function(){
    let lastChild=stack.lastElementChild;
    if(lastChild){
        stack.insertBefore(lastChild, stack.firstElementChild);
        //update stack
        updateStack();
    }
});

downBtn.addEventListener("click",function(){
    const firstChild=stack.firstElementChild;
    if(firstChild){
        stack.appendChild(firstChild);
        //update stack
        updateStack();
    }
});

showCards();