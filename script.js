const container = document.getElementById("container");
//window.onresize = () => {
while(container.firstChild){
    container.removeChild(container.firstChild);
}
var vWidth = parseFloat(document.documentElement.clientWidth, 10);
var vHeight = parseFloat(document.documentElement.clientHeight, 10);

console.log(`${vWidth} + ${vHeight}`);

const initial = [
    [1,1,1, ,1,1, ,1, , , , , , , , , ,1, ,1,1, ,1,1,1,],
    [1, , , , , , , , , , , , , , , , , , , , , , , ,1,],
    [1, , , , , , , , , , , , , , , , , , , , , , , ,1,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [1, , , , , , , , , , , , , , , , , , , , , , , ,1,],
    [1, , , , , , , , , , , , , , , , , , , , , , , ,1,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [1, , , , , , , , , , , , , , , , , , , , , , , ,1,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [1, , , , , , , , , , , , , , , , , , , , , , , ,1,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [1, , , , , , , , , , , , , , , , , , , , , , , ,1,],
    [1, , , , , , , , , , , , , , , , , , , , , , , ,1,],
    [ , , , , , , , , , , , , , , , , , , , , , , , , ,],
    [1, , , , , , , , , , , , , , , , , , , , , , , ,1,],
    [1, , , , , , , , , , , , , , , , , , , , , , , ,1,],
    [1,1,1, ,1,1, ,1, , , , , , , , , ,1, ,1,1, ,1,1,1,],
]

console.log(initial.length + " " + initial[0][1]);

var bWidth = vWidth/25;
var bHeight = vHeight/25;

for(var x = 0; x < vWidth/bWidth; x += 1){
    for(var y = 0; y < vHeight/bHeight; y += 1){
        let newEl = document.createElement("div");
        newEl.classList.add("box");
        if(initial[y][x] != undefined){
            newEl.setAttribute("data-click-toggle", "on");
        }else{
            newEl.setAttribute("data-click-toggle", "off");
        }

        newEl.addEventListener("click", async (event) => {
            let toggle = event.target.getAttribute("data-click-toggle");
            event.target.setAttribute("id", "justClicked");
            await new Promise(r => setTimeout(r, 0));
            event.target.removeAttribute("id","justClicked");

            if(toggle == "off"){
                event.target.setAttribute("data-click-toggle", "on");
            }else{
                event.target.setAttribute("data-click-toggle", "off");
            }
        })

        Object.assign(newEl.style, {
            gridRowStart: y+1,
        });
        container.append(newEl);
    }
}
//};