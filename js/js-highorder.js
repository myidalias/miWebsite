const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//-------------------------------------------------------------------------------------------------

for (let i = 0; i < companies.length; i++) {
    console.log(i);
};
//for-each is the same as for loop above
companies.forEach(function(company){
    console.log(company.name);
})

//-------------------------------------------------------------------------------------------------
//Filter functions
//-----------------

const canDrink = ages.filter(age => age > 20);
console.log(canDrink);

//
//function within another function (long-hand notation)
//
const retailCompanies = companies.filter (function(retailFlag) {
  if (retailFlag.category === 'Retail'){
      return true}
    });
console.log(retailCompanies);

//
//arrow functions
//
//const retailCompanies = companies.filter (company => company.category === 'Retail');
//console.log(retailCompanies);

const companies80s = companies.filter(company => (company.start > 1979 && company.start < 1990));
console.log(companies80s);

//get companies that lasted 10 years or more
const lasted10years = companies.filter(company => ((company.end - company.start) >= 10));
console.log(lasted10years);

//-------------------------------------------------------------------------------------------------
//MAP functions
//---------------

//create an array of company categories
//but first --- not an arrow fucntion --- so you have a comparison 
const companyCategories = companies.map(function(functionName) { 
  return functionName.category;
});
console.log(companyCategories);

//fancy formatting using the Map function (long hand)
const companyDetailsOutputString = companies.map(function (companyDetails) {
  return `${companyDetails.name} [${companyDetails.start} - ${companyDetails.end}]`;
});
console.log(companyDetailsOutputString);

//fancy formatting using the Map function (short hand using arrow fucntion)
const companyDetailsOutputString2 = companies.map(companyDetails =>
  `${companyDetails.name} - estd. ${companyDetails.start}`);
console.log(companyDetailsOutputString2);

const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => Math.round(age));
console.log(ageMap);


//-------------------------------------------------------------------------------------------------
//Sort functions
//---------------

//sort by start year
//const sortedCompanies = companies.sort(function (a, b) {
// if(co1.start > co2.start){
//    return 1;
// } else {
//    return -1;
//   }
// });

const startSorted = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
//? is for what to return on TRUE statement 
//: is for what to return on FALSE statement
console.log(startSorted);
const endSorted = companies.sort((a,b) => (a.end < b.end ? 1 : -1));
console.log(endSorted);

//-------------------------------------------------------------------------------------------------
//reduce functions
//-----------------

//just a for loop first...
let ageSumForloop = 0;
for (let i = 0; i < ages.length; i++) {
  ageSumForloop += ages[i];
}
console.log(ageSumForloop);

//function within a function...(like long-hand notation)
const ageSumLongway = ages.reduce( function(total,age) {
  return total + age;
}, 0);
//0 was was intial value to start with
console.log(ageSumLongway);

//reduce using arrow fucntion
const ageSumArrowfunction = ages.reduce( (total2,age2) => total2 + age2);   
console.log(ageSumArrowfunction);

const totalYEars = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYEars);

//------------------------------------------------------------------------------------------------------

const combined = ages
  .map (age => age * 2)
  .filter(age => age >= 40)
  .sort((a,b) => a -b);
console.log(combined);
