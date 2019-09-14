let opennav = document.querySelector(".app");
let subnav = document.querySelector("#subnavbar");
opennav.addEventListener("click", function() {
  if (subnav.style.display === "none") {
    document.querySelector(".fa-sort-desc").style.display = "inline";
    document.querySelector(".fa-sort-asc").style.display = "none";
    subnav.style.display = "block";
  } else {
    document.querySelector(".fa-sort-desc").style.display = "none";
    document.querySelector(".fa-sort-asc").style.display = "inline";
    subnav.style.display = "none";
  }
});

//line chat update
let chartdata = [0, 0, 0, 0, 0, 0, 0];
let form = document.querySelector(".form");
form.addEventListener("submit", function(e) {
  let chartinput = document.querySelectorAll(".inp");
  let i = 0;
  chartinput.forEach(function(input) {
    chartdata[i] = input.value;
    i = i + 1;
  });
  chart.updateSeries([
    {
      data: chartdata
    }
  ]);
  e.preventDefault();
});

//linechart
var options = {
  chart: {
    height: 350,
    type: "line",
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#0054a6"],
  series: [
    {
      name: "Series A",
      data: chartdata
    }
  ],
  stroke: {
    width: [1]
  },
  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  xaxis: {
    categories: ["", "", "", "", "", "", ""]
  },
  yaxis: [
    {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#FF1654"
      },
      labels: {
        style: {
          color: "#FF1654"
        }
      }
    }
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

//circularchart
let chartdata1 = [0, 0];
let chartdata2 = [0, 0];
let chartdata3 = [0, 0];
let formc = document.querySelector(".formc");
formc.addEventListener("submit", function(e) {
  let chartinput1 = parseFloat(document.querySelector(".input-one").value);
  let chartinput2 = parseFloat(document.querySelector(".input-two").value);
  let chartinput3 = parseFloat(document.querySelector(".input-three").value);
  let total = chartinput1 + chartinput2 + chartinput3;
  chartdata1[0] = (chartinput1 / total) * 100;
  chartdata1[1] = 100 - chartdata1[0];
  chartdata2[0] = (chartinput2 / total) * 100;
  chartdata2[1] = 100 - chartdata2[0];
  chartdata3[0] = (chartinput3 / total) * 100;
  chartdata3[1] = 100 - chartdata3[0];

  chart1.data.datasets[0].data = chartdata1;

  chart1.update();
  chart2.data.datasets[0].data = chartdata2;

  chart2.update();
  chart3.data.datasets[0].data = chartdata3;

  chart3.update();

  e.preventDefault();
});
let mychart1 = document.getElementById("mychart-one").getContext("2d");

let chart1 = new Chart(mychart1, {
  type: "doughnut",

  data: {
    datasets: [
      {
        data: [30, 0],

        backgroundColor: ["#9100a6", "#fff"]
      }
    ]
  },
  options: {
    tooltips: {
      enabled: false
    },
    cutoutPercentage: 60,
    rotation: 0.5 * Math.PI
  }
});

let mychart2 = document.getElementById("mychart-two").getContext("2d");

let chart2 = new Chart(mychart2, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [30, 0],

        backgroundColor: ["#fae42a", "#fff"]
      }
    ]
  },
  options: {
    tooltips: {
      enabled: false
    },
    cutoutPercentage: 75,
    rotation: 0.5 * Math.PI
  }
});

let mychart3 = document.getElementById("mychart-three").getContext("2d");

let chart3 = new Chart(mychart3, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [30, 0],

        backgroundColor: ["#8244e0", "#fff"]
      }
    ]
  },
  options: {
    tooltips: {
      enabled: false
    },
    cutoutPercentage: 80,
    rotation: 0.5 * Math.PI
  }
});

let nav = document.querySelector("#sidebar");
nav.addEventListener("mouseover", innav);
nav.addEventListener("mouseout", outnav);
let a1 = document.querySelector(".a-one");
let a2 = document.querySelector(".a-two");
let a3 = document.querySelector(".a-three");
let a4 = document.querySelector(".a-four");
let a5 = document.querySelector(".a-five");
let a6 = document.querySelector(".a-six");
let a7 = document.querySelector(".a-seven");
let a8 = document.querySelector(".a-eight");

function innav() {
  if (window.screen.width <= 1000) {
    a1.style.display = "inline";
    a2.style.display = "inline";
    a3.style.display = "inline";
    a4.style.display = "inline";
    a5.style.display = "inline";
    a6.style.display = "inline";
    a7.style.display = "inline";
    a8.style.display = "inline";
    if (window.screen.width <= 768) {
      nav.style.width = "45%";
      document.querySelector("#main-content-bg ").style.height = "1800px";
    } else {
      nav.style.width = "22%";
    }

    document.querySelector("#main-content-bg ").style.display = "inline";
    document.querySelector("#main-content-bg ").style.backgroundColor =
      "rgba(0, 0, 0, 0.28)";
  }
}

function outnav() {
  if (window.screen.width <= 1000) {
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    a5.style.display = "none";
    a6.style.display = "none";
    a7.style.display = "none";
    a8.style.display = "none";
    nav.style.width = "7%";
    document.querySelector("#main-content-bg ").style.display = "none";
    document.querySelector("#main-content-bg ").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
    document.querySelector(".fa-sort-desc").style.display = "none";
    document.querySelector(".fa-sort-asc").style.display = "inline";
    subnav.style.display = "none";
  }
}
