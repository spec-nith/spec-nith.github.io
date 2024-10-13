let x = parseInt(window.innerWidth),
    y = parseInt(window.innerHeight * 0.5),
    cosmos = document.getElementById("galaxy");

cosmos.setAttribute("viewBox", `0 0 ${x} ${y}`);
cosmos.querySelector("#background").setAttribute("height", y);
cosmos.querySelector("#background").setAttribute("width", x);

let star = () => {
    let z = Math.random() * (0.8 - 0.01) + 0.01,
        star = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    star.setAttribute("width", 1.75 - z + Math.floor(Math.random()));
    star.setAttribute("height", 1.75 - z + Math.floor(Math.random()));
    star.setAttribute("x", Math.floor(Math.random() * x));
    star.style = `fill:rgba(${255},${220}, ${225},${Math.random()})`;

    cosmos.appendChild(star);

    if (z > 0.4 && Math.random() > 0.75) {
        star.classList.add("twinkle");
        star.style.animationDelay = Math.random() + "s";
        star.style.animationDuration = Math.random() * (3 - 1) + 1 + "s";
    }

    if (Math.random() > 0.8) {
        star.style.fill = "red";
    }

    let speed = z * 1000;

    let starMove = new TimelineMax({
        repeat: -1
    });

    starMove.to(star, speed, {
        y: y,
        ease: Linear.easeNone,
        reversed: true
    });

    starMove.progress(Math.random());
};

for (let i = 0; i < x * 2.5; i++) {
    star();
}
