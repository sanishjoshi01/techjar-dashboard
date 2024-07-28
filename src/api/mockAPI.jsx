const fetchDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

//All Orders Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const fetchOrdersData = () => {
  return new Promise((resolve) => {
    const rows = [
      createData(
        0,
        "16 Mar, 2019",
        "Elvis Presley",
        "Tupelo, MS",
        "VISA ⠀•••• 3719",
        312.44
      ),
      createData(
        1,
        "21 Mar, 2019",
        "Paul McCartney",
        "London, UK",
        "VISA ⠀•••• 2574",
        866.99
      ),
      createData(
        2,
        "27 Mar, 2019",
        "Tom Scholz",
        "Boston, MA",
        "MC ⠀•••• 1253",
        100.81
      ),
      createData(
        3,
        "16 Apr, 2019",
        "Michael Jackson",
        "Gary, IN",
        "AMEX ⠀•••• 2000",
        654.39
      ),
      createData(
        4,
        "21 Apr, 2019",
        "Bruce Springsteen",
        "Long Branch, NJ",
        "VISA ⠀•••• 5919",
        212.79
      ),
      createData(
        5,
        "21 Apr, 2024",
        "Bruce Lee",
        "Breeze City, IN",
        "VISA ⠀•••• 2424",
        224.79
      ),
      createData(
        6,
        "21 Apr, 2020",
        "Spring Steen",
        "Branch Bay, SW",
        "VISA ⠀•••• 2020",
        202.79
      ),
      createData(
        7,
        "21 Apr, 2021",
        "Losey Guo",
        "Moskow, CH",
        "VISA ⠀•••• 3219",
        214.79
      ),
      createData(
        8,
        "21 Apr, 2022",
        "Danielle",
        "Ditto City, NJ",
        "VISA ⠀•••• 2000",
        200.0
      ),
      createData(
        9,
        "21 Apr, 2023",
        "Sayit Won",
        "Middle Stay, NJ",
        "VISA ⠀•••• 5932",
        232.79
      ),
    ];
    setTimeout(() => resolve(rows), 1500);
  });
};

//Recent Deposits Data
const fetchDepositsData = () => {
  return new Promise((resolve) => {
    const data = {
      amount: "$3,024.00",
      date: "on 15 March, 2019",
    };
    setTimeout(() => resolve(data), 500);
  });
};

//Chart data
function createDataChart(time, amount) {
  return { time, amount: amount ?? null };
}

const fetchChartData = () => {
  return new Promise((resolve) => {
    const data = [
      createDataChart("00:00", 0),
      createDataChart("03:00", 300),
      createDataChart("06:00", 600),
      createDataChart("09:00", 800),
      createDataChart("12:00", 1500),
      createDataChart("15:00", 2000),
      createDataChart("18:00", 2400),
      createDataChart("21:00", 2400),
      createDataChart("24:00"),
    ];
    setTimeout(() => resolve(data), 1000);
  });
};

//Customer Data - Getting from Orders data
const response = await fetchOrdersData();

const customerData = response.map((data) => {
  return {
    customer_name: data.name,
    customer_address: data.shipTo,
  };
});

const fetchCustomerData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(customerData), 2500);
  });
};

//reports data
const fetchReportsData = () => {
  return new Promise((resolve, reject) => {
    const data = [
      { data: [3, 4, 1, 6, 5], stack: "A", label: "Series A1" },
      { data: [4, 3, 1, 5, 8], stack: "A", label: "Series A2" },
      { data: [4, 2, 5, 4, 1], stack: "B", label: "Series B1" },
      { data: [2, 8, 1, 3, 1], stack: "B", label: "Series B2" },
      { data: [10, 6, 5, 8, 9], label: "Series C1" },
    ];
    resolve(data);
    reject({ message: "Something went wrong" });
  });
};

export {
  fetchDashboardData,
  fetchOrdersData,
  fetchDepositsData,
  fetchChartData,
  fetchCustomerData,
  fetchReportsData,
};
