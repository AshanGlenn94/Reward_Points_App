// A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
// A customer receives 2 points for every dollar spent over $100 in each transaction,
// plus 1 point for every dollar spent over $50 in each transaction
// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
// Given a record of every transaction during a three month period,
// calculate the reward points earned for each customer per month and total.

/*

function calculateRewards(price) {
  if (price >= 50 && price < 100) {
    return price - 50;
  } else if (price > 100) {
    return 2 * (price - 100) + 50;
  }
  return 0;
}

class Transaction {
  constructor(price) {
    this.price = price;
    this.rewards = calculateRewards(price);
    this.transactionDate = new Date();
  }
}

class TransactionList {
  constructor() {
    this.list = [];
  }

  getLast3MonthsList() {
    var today = new Date();
    const threeOldDate = today.setMonth(today.getMonth() - 3);
    let filteredList = this.list.filter(
      (trans) => trans.transactionDate > threeOldDate
    );
    return filteredList.sort((a, b) => b.transactionDate - a.transactionDate);
  }

  getAllTransactions() {
    return this.list.sort((a, b) => b.transactionDate - a.transactionDate);
  }

  addTransaction(price) {
    const transaction = new Transaction(price);
    this.list.push(transaction);
  }

  getTotalRewards() {
    return this.list.length
      ? this.list.reduce((acc, key) => key.rewards + acc, 0)
      : 0;
  }

  rewardPerMonth() {
    let last3MonthRewardsInDesc = [];
    for (let i = 0; i < 3; i++) {
      let filteredList = this.list.filter(
        (trans) =>
          trans.transactionDate.getMonth() === new Date().getMonth() - i
      );
      last3MonthRewardsInDesc[i] = filteredList.reduce(
        (acc, key) => key.rewards + acc,
        0
      );
    }
    return last3MonthRewardsInDesc;
  }
}

let myTransactionList = new TransactionList();
myTransactionList.addTransaction(154);
myTransactionList.addTransaction(54);
myTransactionList.addTransaction(200);
myTransactionList.addTransaction(20);
myTransactionList.addTransaction(300);
let arr = myTransactionList.getAllTransactions();


*/
/////////////////////////////////


import React, { useState, useEffect } from "react";
import "./App.css";
// will use react-table npm package
// it would be easy to use lodash or any kind od npm package

function calculatePoints(inputData) { 

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const pointsPerTransaction = inputData.map(transaction=> {
    let points = 0;
    let greaterThan100 = transaction.amt - 100;
    
    if (greaterThan100 > 0) {  // As per the business logic a customer receives 2 points for every dollar spent greater than $100 in each transaction
      points += (greaterThan100 * 2);
    }    
    if (transaction.amt > 50) { // As per the business logic a customer receives 1 point for every dollar spent greater than $50 in each transaction
      points += 50;      
    }
    const month = new Date(transaction.transactionDt).getMonth();
    return {...transaction, points, month};
  });
               
  let byCustomer = {};
  let totalPointsByCustomer = {};
  pointsPerTransaction.forEach(pointsPerTransaction => {
    let {custid, name, month, points} = pointsPerTransaction;   
    if (!byCustomer[custid]) {
      byCustomer[custid] = [];      
    }    
    if (!totalPointsByCustomer[custid]) {
      totalPointsByCustomer[name] = 0;
    }
    totalPointsByCustomer[name] += points;
    if (byCustomer[custid][month]) {
      byCustomer[custid][month].points += points;
      byCustomer[custid][month].monthNumber = month;
      byCustomer[custid][month].numTransactions++;      
    }
    else {
      
      byCustomer[custid][month] = {
        custid,
        name,
        monthNumber:month,
        month: months[month],
        numTransactions: 1,        
        points
      }
    }    
  });

  function App() {
  const [transactionData, setTransactionData] = useState(null);
  
  const tableCol = [];
  const tableRow = [];

  if (transactionData == null) {
    return <div>Loading...</div>;   
  }

  return transactionData == null ?
    <div>Loading...</div> 
      :    
    <div>      
      
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h2>Points Rewards System Totals by Customer Months</h2>
          </div>
        </div>
        <div>
          <div>
                return (
                  <div>
                      {getIndividualTransactions(row).map(transaction=>{
                        return <div className="container">
                          <div>
                            <div>
                              <strong>Transaction Date:</strong> {transaction.transactionDt} - <strong>$</strong>{transaction.amt} - <strong>Points: </strong>{transaction.points}
                            </div>
                          </div>
                        </div>
                      })}                                    
                  </div>
                )
                          
            </div>
          </div>
        </div>
        
            
    </div>
  ;
}

export default App;