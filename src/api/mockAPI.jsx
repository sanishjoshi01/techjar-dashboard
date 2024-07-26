const fetchDashboardData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

//ORDERS DATA
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const fetchOrdersData = () => {
    return new Promise((resolve) => {
        const rows = [
            createData(
                0,
                '16 Mar, 2019',
                'Elvis Presley',
                'Tupelo, MS',
                'VISA ⠀•••• 3719',
                312.44,
            ),
            createData(
                1,
                '16 Mar, 2019',
                'Paul McCartney',
                'London, UK',
                'VISA ⠀•••• 2574',
                866.99,
            ),
            createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
            createData(
                3,
                '16 Mar, 2019',
                'Michael Jackson',
                'Gary, IN',
                'AMEX ⠀•••• 2000',
                654.39,
            ),
            createData(
                4,
                '15 Mar, 2019',
                'Bruce Springsteen',
                'Long Branch, NJ',
                'VISA ⠀•••• 5919',
                212.79,
            ),
        ];
        setTimeout(() => resolve(rows), 2500);
        console.log(rows)
    });
};

//Recent Deposits Data
const fetchDepositsData = () => {
    return new Promise((resolve) => {
        const data = {
            amount: '$3,024.00',
            date: 'on 15 March, 2019',
        }
        setTimeout(() => resolve(data), 500)
    });
}

//Chart data
function createDataChart(time, amount) {
    return { time, amount: amount ?? null };
  }
  


const fetchChartData = () => {
    return new Promise((resolve) => {
        const data = [
            createDataChart('00:00', 0),
            createDataChart('03:00', 300),
            createDataChart('06:00', 600),
            createDataChart('09:00', 800),
            createDataChart('12:00', 1500),
            createDataChart('15:00', 2000),
            createDataChart('18:00', 2400),
            createDataChart('21:00', 2400),
            createDataChart('24:00'),
          ];
          setTimeout(() => resolve(data), 1000)
    })
};

export { fetchDashboardData, fetchOrdersData, fetchDepositsData, fetchChartData};