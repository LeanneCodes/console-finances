// raw dataset
var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


/* Calculate the following:
1. The total number of months included in the dataset.

2. The net total amount of Profit/Losses over the entire period.

3. The average of the changes in Profit/Losses over the entire period.

4. The greatest increase in profits (date and amount) over the entire period.

5. The greatest decrease in losses (date and amount) over the entire period.
*/


// 1. total months
var totalMonths = finances.length;
console.log(totalMonths);

// 2. net total -> sum of all the numbers in the finances array
var netTotal = 0;

for (var i = 0; i < finances.length; i++) {
  netTotal += finances[i][1]; // adding all the values in the finances array
}

console.log(netTotal);

// 3. average change in profit/loss month-on-month
var changes = [];

for (var i = 1; i < finances.length; i++) {
  var currentMonth = finances[i][1]; // looks for number value in each array
  var previousMonth = finances[i - 1][1]; // looks for the adjacent number value in the previous array
  var change = currentMonth - previousMonth; // calculates the difference between the two arrays
  changes.push(change); // pushes the value into a new array
}

console.log(changes);

var newAverageTotal = 0;

for (var i = 0; i < changes.length; i++) {
  newAverageTotal += changes[i]; // adding all the values in the changes array
}

console.log(newAverageTotal);

var average = (newAverageTotal/(totalMonths - 1)).toFixed(2); // calculating the average change to 2 decimal places
console.log(average);

// 4. which month had the greatest increase in profits
var greatest = Math.max(...changes); // finding the highest value in the changes array
console.log(greatest);
var greatestResult = changes.indexOf(greatest); // locating the index of the above value in the changes array
console.log(greatestResult);

var largestProfit = finances[24 + 1]; // adding 1 to find the corresponding month in the finances array
console.log(largestProfit);

// 5. which month had the greatest loss in profits
var lowest = Math.min(...changes); // finding the lowest value in the changes array
console.log(lowest);
var lowestResult = changes.indexOf(lowest); // locating the index of the above value in the changes array
console.log(lowestResult);

var largestLoss = finances[43 + 1]; // adding 1 to find the corresponding month in the finances array
console.log(largestLoss);

// Compiled report
console.log(`Financial Analysis
            \n------------------
            \nTotal Months: ${totalMonths}
            \nTotal: $${netTotal}
            \nAverage Change: ${average}
            \nGreatest Increase in Profits/Losses: ${largestProfit[0]} ($${greatest})
            \nGreatest Decrease in Profits/Losses: ${largestLoss[0]} ($${lowest})
          `);