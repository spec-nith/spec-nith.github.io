var padding = { top: 20, right: 40, bottom: 0, left: 0 },
  w = 500 - padding.left - padding.right,
  h = 500 - padding.top - padding.bottom,
  r = Math.min(w, h) / 2,
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  oldpick = [],
  color = d3.scale.category20(); //category20c()
//randomNumbers = getRandomNumbers();
//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
var data = [
  {
    label: "The Rise of Skywalker",
    value: 1,
    question:
      `I'm not a cook
      I can help u to cook some apps and i can assist to make bots to serve
      but I don't cook food
      I can help you if you are a language freak
      I can be a host to revive you my geek`
  }, //codeChef
  {
    label: "The Last Jedi",
    value: 2,
    question: `Just spare a glance at my map 
    from above
    And you will realize that I look like an armadillo
    I'm greatest and the most powerful in the world
    But, ironically, a duck ruined me, you know:(`
  }, //america
  {
    label: "The Force Awakens",
    value: 3,
    question: `Shining with a green light
    I hold the flame of pride, you all cherish me deeply, 
    Because you are birds in cages, who only see 50 stars in the sky
    So why have you been wearing me as footwear for ages?`
  }, //liberty
  {
    label: "Return of the Jedi",
    value: 4,
    question: `They have ruined the most beautiful gathering place of your college by making a hole in between it
    I've always been there to satisfy your hunger pangs
    I know you miss your beloved ice tea and all the views of hamirpur I hope you soon experience the college spark!`
  }, //nescafe
  {
    label: "The Empire Strikes Back",
    value: 5,
    question: `Yes, my country is responsible for the current chaos
    Still stuck at home!
    All thanks to me
    My name is enough to make a cricket team.`
  }, //xiJinping
  {
    label: "A New Hope",
    value: 6,
    question:
      `Tables turn, bridges burn and ship sink
      But we felt really bad when this one did
      For inside it blossomed a “rose” so pretty!
      “We are still flying”
      `
  }, //titanic
  {
    label: " Rogue One",
    value: 7,
    question:
      `You use me on the place where world makes software 
      figure it out, till then let me take from this cake a bit!`
  }, //fork
  {
    label: "The Mandlorian",
    value: 8,
    question:
      `Flying disc got lost and so were we,
      Play games or create community 
      I hope you won't disapprove
     That my rhythm makes you groove`
  }, //discord
  {
    label: "Revelations",
    value: 9,
    question:
      `The pride of Yankees 
      Multi-talented Artist 
      Eight times gramophone conqueror 
      Still Faced Skin issues
      Guess the name of the superstar`
  }, //michaelJackson
  {
    label: "The Battle for Endor",
    value: 10,
    question:
      `This is all we know, you know what I did for you.
      I was a sick boy for you, 
      My love brought you closer to me
      Just don't take this away from me, don't let me down.
       I will be there for you just call me name`
  } //theChainsmokers 
];
var svg = d3
  .select("#chart")
  .append("svg")
  .data([data])
  .attr("width", w + padding.left + padding.right)
  .attr("height", h + padding.top + padding.bottom);
var container = svg
  .append("g")
  .attr("class", "chartholder")
  .attr(
    "transform",
    "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")"
  );
var vis = container.append("g");

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function (d) {
    return 1;
  });
// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);
// select paths, use arc generator to draw
var arcs = vis
  .selectAll("g.slice")
  .data(pie)
  .enter()
  .append("g")
  .attr("class", "slice");

arcs
  .append("path")
  .attr("fill", function (d, i) {
    return color(i);
  })
  .attr("d", function (d) {
    return arc(d);
  });
// add the text
arcs
  .append("text")
  .attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return (
      "rotate(" +
      ((d.angle * 180) / Math.PI - 90) +
      ")translate(" +
      (d.outerRadius - 10) +
      ")"
    );
  })
  .attr("text-anchor", "end")
  .text(function (d, i) {
    return data[i].label;
  });
container.on("click", spin);
function spin(d) {
  container.on("click", null);
  //all slices have been seen, all done
  console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
  if (oldpick.length == data.length) {
    console.log("done");
    container.on("click", null);
    return;
  }
  var ps = 360 / data.length,
    pieslice = Math.round(1440 / data.length),
    rng = Math.floor(Math.random() * 1440 + 360);

  rotation = Math.round(rng / ps) * ps;

  picked = Math.round(data.length - (rotation % 360) / ps);
  picked = picked >= data.length ? picked % data.length : picked;
  if (oldpick.indexOf(picked) !== -1) {
    d3.select(this).call(spin);
    return;
  } else {
    oldpick.push(picked);
  }
  rotation += 90 - Math.round(ps / 2);
  vis
    .transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function () {
      //mark question as seen
      d3.select(".slice:nth-child(" + (picked + 1) + ") path").attr(
        "fill",
        "#111"
      );
      //populate question
      d3.select("#question h1").text(data[picked].question);
      oldrotation = rotation;

      /* Get the result value from object "data" */
      console.log(data[picked].value);

      /* Comment the below line for restrict spin to sngle time */
      container.on("click", spin);
    });
}
//make arrow
svg
  .append("g")
  .attr(
    "transform",
    "translate(" +
    (w + padding.left + padding.right) +
    "," +
    (h / 2 + padding.top) +
    ")"
  )
  .append("path")
  .attr("d", "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z")
  .style({ fill: "white" });
//draw spin circle
container
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 60)
  .style({ fill: "white", cursor: "pointer" });
//spin text
container
  .append("text")
  .attr("x", 0)
  .attr("y", 15)
  .attr("text-anchor", "middle")
  .text("SPIN")
  .style({ "font-weight": "bold", "font-size": "30px" });

function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function (t) {
    return "rotate(" + i(t) + ")";
  };
}

function getRandomNumbers() {
  var array = new Uint16Array(1000);
  var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
  if (
    window.hasOwnProperty("crypto") &&
    typeof window.crypto.getRandomValues === "function"
  ) {
    window.crypto.getRandomValues(array);
    console.log("works");
  } else {
    //no support for crypto, get crappy random numbers
    for (var i = 0; i < 1000; i++) {
      array[i] = Math.floor(Math.random() * 100000) + 1;
    }
  }
  return array;
}
