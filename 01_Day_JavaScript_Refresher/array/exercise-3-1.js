const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

console.log("---------------- exercise 3-1 ----------------")
console.log("--- Declare an empty array ---")
const emptyArr = Array();
console.log(emptyArr);

console.log("--- Declare an array with more than 5 number of elements ---")
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

console.log("--- Find the length of your array ---");
console.log(numbers.length);

console.log("--- Get the first item, the middle item and the last item of the array ---");
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[numbers.length - 1]);

console.log("--- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5 ---");
const mixedDataTypes = [
    "apple",
    123,
    {country: "Japan", city: "Osaka"},
    true,
    ["a", "b", "c"]
]
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

console.log("Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon")
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

console.log("Print the array using console.log()")
console.log(itCompanies)

console.log("Print the number of companies in the array")
console.log(itCompanies.length)

console.log(" Print the first company, middle and last company")
console.log(itCompanies[0])
console.log(itCompanies[3])

console.log(" Print out each company")
itCompanies.forEach(e => console.log(e));

console.log(" Change each company name to uppercase one by one and print them out")
const itCompaniesUpperCase = itCompanies.map(e => e.toUpperCase());
console.log(itCompaniesUpperCase)

console.log(" Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.")
const lastIndex = itCompanies.length - 1;
console.log(itCompanies.slice(0, lastIndex).join(", ") + " and " + itCompanies[lastIndex] + " are big IT companies.")

console.log("  Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found")
console.log(itCompanies.includes("Facebook") ? "Facebook" : "not found")
console.log(itCompanies.includes("Twitter") ? "Facebook" : "not found")

console.log("  Filter out companies which have more than one 'o' without the filter method")
itCompanies.map(e => e.indexOf("o") === -1 ? "" : e).forEach(e => {
    if (e !== "") {
        console.log(e);
    }
});

console.log("  Sort the array using sort() method");
const sorted = itCompanies.sort();
console.log(sorted);

console.log("  Reverse the array using reverse() method");
const reversed = itCompanies.reverse();
console.log(reversed);

console.log("  Slice out the first 3 companies from the array");
console.log(itCompanies.slice(0, 3));

console.log("  Slice out the last 3 companies from the array");
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

console.log("  Slice out the middle IT company or companies from the array");
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);

console.log("   Remove the first IT company from the array");
itCompanies.shift();
console.log(itCompanies);

console.log("  Remove the middle IT company or companies from the array");
itCompanies.push("Oracle");
console.log(itCompanies);
const middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies.slice(0, middleIndex).concat(itCompanies.slice(middleIndex + 1, itCompanies.length)));

console.log("  Remove the last IT company from the array");
itCompanies.pop();
console.log(itCompanies);

console.log("  Remove all IT companies");
console.log(itCompanies.splice());
  