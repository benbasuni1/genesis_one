const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let fibRetracementLevels = {};

// Fib Retracement
// 23.6%, 38.2%, 50%, 61.8%, and 78.6%.
const fibRetracement = (currMin, currMax) => {
  let obj = {};
  let levels = [.236, .382, .5, .618, .786];

  for (let level of levels) {
    obj[level] = currMax - ((currMax - currMin) * level)
  }

  return obj;
}


let initData = [
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor(),
  randomScalingFactor()
];

let drawMax = Math.max.apply(Math, initData);
let drawMin = Math.min.apply(Math, initData);
fibRetracementLevels = fibRetracement(drawMin, drawMax);

const fibAnnotations = [
  {
    type: 'line',
    label : { 
        content: 'max',
        enabled: true,
        position: 'left'
    },
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: drawMax,
    borderColor: 'blue',
    borderWidth: 2,
  },
  {
    type: 'line',
    label : { 
        content: 'min',
        enabled: true,
        position: 'left'
    },
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: drawMin,
    borderColor: 'pink',
    borderWidth: 2
  },
  {
    type: 'line',
    label : { 
        content: fibRetracementLevels[.236].toFixed(2),
        enabled: true,
        position: 'left'
    },
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: fibRetracementLevels[.236],
    borderColor: 'green',
    borderWidth: 2
  },
  {
    type: 'line',
    label : { 
        content: fibRetracementLevels[.382].toFixed(2),
        enabled: true,
        position: 'left'
    },
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: fibRetracementLevels[.382],
    borderColor: 'orange',
    borderWidth: 2
  },
  {
    type: 'line',
    label : { 
        content: fibRetracementLevels[.5].toFixed(2),
        enabled: true,
        position: 'left'
    },
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: fibRetracementLevels[.5],
    borderColor: 'magenta',
    borderWidth: 2
  },
  {
    type: 'line',
    label : { 
        content: fibRetracementLevels[.618].toFixed(2),
        enabled: true,
        position: 'left'
    },
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: fibRetracementLevels[.618],
    borderColor: 'darkblue',
    borderWidth: 2
  },
  {
    type: 'line',
    label : { 
        content: fibRetracementLevels[.786].toFixed(2),
        enabled: true,
        position: 'left'
    },
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: fibRetracementLevels[.786],
    borderColor: 'yellow',
    borderWidth: 2
  },
]

console.log(fibRetracementLevels);
const config = {
  type: 'line',
  data: {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [{
      label: '1',
      backgroundColor: window.chartColors.red,
      borderColor: window.chartColors.red,
      data: initData,
      fill: false,
    }]
  },
  options: {
    elements: {
      line: { tension: 0 }
    },
    responsive: true,
    title: {
      display: true,
      text: 'Genesis One Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
   },
    annotation: {
      annotations: fibAnnotations,
      drawTime: "afterDraw"
    }
  }
};

