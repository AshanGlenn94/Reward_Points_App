export default function fetch() {
  // simulates data coming from a database.
  return Promise.resolve([
    {
      custid: 1,
      name: "Customer1",
      amt: 120,
      transactionDt: "05-01-2021",
    },
    {
      custid: 1,
      name: "Customer1",
      amt: 75,
      transactionDt: "05-21-2021",
    },
    {
      custid: 1,
      name: "Customer1",
      amt: 94,
      transactionDt: "05-21-2021",
    },
    {
      custid: 1,
      name: "Customer1",
      amt: 10,
      transactionDt: "06-01-2021",
    },
    {
      custid: 1,
      name: "Customer1",
      amt: 75,
      transactionDt: "06-21-2021",
    },
    {
      custid: 1,
      name: "Customer1",
      amt: 200,
      transactionDt: "07-01-2021",
    },
    {
      custid: 1,
      name: "Customer1",
      amt: 1,
      transactionDt: "07-04-2021",
    },
    {
      custid: 1,
      name: "Customer1",
      amt: 80,
      transactionDt: "07-03-2021",
    },
    {
      custid: 1,
      name: "Customer1",
      amt: 224,
      transactionDt: "07-21-2021",
    },
    {
      custid: 2,
      name: "Customer2",
      amt: 125,
      transactionDt: "05-01-2021",
    },
    {
      custid: 2,
      name: "Customer2",
      amt: 75,
      transactionDt: "05-21-2021",
    },
    {
      custid: 2,
      name: "Customer2",
      amt: 10,
      transactionDt: "06-01-2021",
    },
    {
      custid: 2,
      name: "Customer2",
      amt: 75,
      transactionDt: "06-21-2021",
    },
    {
      custid: 2,
      name: "Customer2",
      amt: 200,
      transactionDt: "07-01-2021",
    },
    {
      custid: 2,
      name: "Customer2",
      amt: 224,
      transactionDt: "07-21-2021",
    },
    {
      custid: 3,
      name: "Customer3",
      amt: 120,
      transactionDt: "06-21-2021",
    },
  ]);
}
