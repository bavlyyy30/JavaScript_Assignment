
const people = [
    { name: "Ahmed", age: 22, city: "Cairo" },
    { name: "Mona", age: 19, city: "Alexandria" },
    { name: "Omar", age: 25, city: "Giza" },
    { name: "Sara", age: 21, city: "Cairo" },
    { name: "Ali", age: 30, city: "Mansoura" }
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const sortNameButton = document.getElementById("sortName");
const sortAgeButton = document.getElementById("sortAge");
const resultsMessage = document.getElementById("resultsMessage");

// Copy the original array so we can sort it
let sortedPeople = [...people];

// Build the table using JavaScript
function displayPeople(list) {
    tableBody.innerHTML = "";

    list.forEach(function(person) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = person.name;

        const ageCell = document.createElement("td");
        ageCell.textContent = person.age;

        const cityCell = document.createElement("td");
        cityCell.textContent = person.city;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(cityCell);

        tableBody.appendChild(row);
    });

    resultsMessage.textContent =
        list.length + " people found.";
}

 
searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase().trim();

    const filteredPeople = sortedPeople.filter(function(person) {
        return (
            person.name.toLowerCase().includes(searchText) ||
            person.city.toLowerCase().includes(searchText)
        );
    });

    displayPeople(filteredPeople);
});

 
sortNameButton.addEventListener("click", function() {
    sortedPeople.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    searchInput.dispatchEvent(new Event("input"));
});

 
sortAgeButton.addEventListener("click", function() {
    sortedPeople.sort(function(a, b) {
        return a.age - b.age;
    });

    searchInput.dispatchEvent(new Event("input"));
});

 
displayPeople(sortedPeople);
