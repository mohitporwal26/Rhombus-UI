const labels = [
  "Today",
  "23 Mar",
  "28 Mar",
  "2 Mar",
  "7 Mar",
  "12 Mar",
  "17 Mar",
  "22 Mar",
  "21 Mar",
  "12 Mar",
  "17 Mar",
  "14 Mar",
  "29 Mar",
];

export const options = {
  responsive: true,
  lineTension: 0.8,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 2000,
      grid: {
        display: true,
      },
      ticks: {
        maxTicksLimit: 5,
        beginAtZero: false,
        min: 800,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 7,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

export const dataGraph = {
  labels,
  datasets: [
    {
      label: "",
      fill: true,
      data: [
        1921, 1145, 1654, 1274, 1483, 1346, 1118, 1577, 1949, 1539, 1516, 1937,
        1956, 1684, 1640, 1965, 1443, 1146, 1930, 1411, 1906,
      ],
      borderColor: "#775DA6",
      backgroundColor: "#EEEBF4",
    },
  ],
};

export const dataGraph2 = {
  labels: [
    "19 Jul",
    "26 Jul",
    "19 Sept",
    "26 Sept",
    "3 Oct",
    "10 Oct",
    "17 Oct",
  ],
  datasets: [
    {
      label: "",
      fill: true,
      data: [
        1921, 1654, 1574, 1483, 1546, 1418, 1377, 1449, 1039, 1316, 1337, 1256,
        1284, 1140, 1165, 1043, 1146, 1030, 1011, 1006,
      ],
      borderColor: "#70B6C1",
      backgroundColor: "#edf6f7",
    },
  ],
};

export const barGraph = {
  labels: [
    "Today",
    "23 Mar",
    "25 Mar",
    "28 Mar",
    "29 Mar",
    "23 May",
    "25 May",
    "28 May",
    "29 May",
    "29 Jun",
    "23 July",
  ],
  datasets: [
    {
      label: "",
      fill: true,
      data: [
        1921, 1145, 1654, 1274, 1483, 1346, 1118, 1577, 1949, 1539, 1516, 1937,
      ],
      backgroundColor: "#775da6",
      borderRadius: 8,
      barThickness: 20,
    },
  ],
};

export const barGraph2 = {
  labels: [
    "Today",
    "23 Mar",
    "25 Mar",
    "28 Mar",
    "29 Mar",
    "23 May",
    "25 May",
    "28 May",
    "29 May",
    "29 Jun",
    "23 July",
  ],
  datasets: [
    {
      label: "",
      fill: true,
      data: [
        1921, 1145, 1654, 1274, 1483, 1346, 1118, 1577, 1949, 1539, 1516, 1937,
      ],
      backgroundColor: "#abdfe7",
      borderRadius: 8,
      barThickness: 20,
    },
  ],
};

export const barGraph3 = {
  labels: ["Older", "Sep 18-24", "This week", "Oct 2-8", "Oct 9-15", "Future"],
  datasets: [
    {
      label: "",
      fill: true,
      backgroundColor: [
        "#abdfe7",
        "#775da6",
        "#775da6",
        "#775da6",
        "#775da6",
        "#775da6",
      ],
      data: [521, 1145, 1654, 1274, 1483, 1346],
      borderRadius: "0px 0px 2px 2px",
      barThickness: 20,
    },
  ],
};
export const groupedBarGraph = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Cash In",
      backgroundColor: "#775DA6",
      borderRadius: 8,
      barThickness: 20,
      maxBarThickness: 20,
      borderWidth: 1,
      data: [1165, 1159, 1180, 1281, 1456, 1555, 1240],
    },
    {
      label: "Cash Out",
      backgroundColor: "#ABDFE7",
      borderRadius: 8,
      barThickness: 20,
      maxBarThickness: 20,
      borderWidth: 1,
      data: [1045, 1179, 1250, 1141, 1416, 1485, 1120],
    },
  ],
};

export const stackedBarGraph = {
  labels: ["Older", "Jan", "Feb", "Mar", "Apr", "Future"],
  datasets: [
    {
      label: "",
      backgroundColor: "#775DA6",
      borderRadius: 2,
      barThickness: 20,
      maxBarThickness: 20,
      borderWidth: 1,
      data: [450, 1220, 240, 1555, 1240, 1452],
    },
    {
      label: "",
      backgroundColor: "#EEEBF4",
      borderRadius: 2,
      barThickness: 20,
      maxBarThickness: 20,
      borderWidth: 1,
      data: [0, 179, 850, 1141, 1120, 1214],
    },
  ],
};
