const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector("body");
const h1 = document.querySelector("#h1");
const p = document.querySelector("#p");

buttons.forEach(function (button) {
    button.addEventListener('click',function(evt){
    
        switch (evt.target.id) {
            case "white":
                body.style.backgroundColor = '#ddddddc7';
                h1.style.color = "#212121bc"
                p.style.color = "#30303088"
                break;

            case "gray":
                body.style.backgroundColor = evt.target.id;
                h1.style.color = '#fff'
                p.style.color = '#f9f8f1'
                break;

            case "blue":
                body.style.backgroundColor = '#4d8bff';
                h1.style.color = '#fff'
                p.style.color = '#f9f8f1'
                break;

            case "yellow":
                body.style.backgroundColor = evt.target.id;
                h1.style.color = "#212121bc"
                p.style.color = "#30303088"
                break;
        
            case "default":
                body.style = 0
                h1.style.color = '#fff'
                p.style.color = '#f9f8f1'
                break
            default:
                break;
        }
        
    })
});