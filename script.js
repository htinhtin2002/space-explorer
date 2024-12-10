document.addEventListener("DOMContentLoaded", () => {
    const planetDropdown = document.getElementById("planet-dropdown");
    const planetFunFact = document.getElementById("planet-funfact");
    const planetColor = document.getElementById("planet-color");
    const planetSize = document.getElementById("planet-size");
    const planetDistance = document.getElementById("planet-distance");
    const planetGravity = document.getElementById("planet-gravity");
    const weightInput = document.getElementById("weight-input");
    const calculateButton = document.getElementById("calculate-weight");
    const weightResultsTable = document.querySelector("#weight-results-table tbody");

    const planetData = {
        Mercury: {
            funFact: "It’s the smallest planet!",
            color: "Gray",
            size: "4,879 km",
            distance: "77 million km",
            gravity: 0.38,
        },
        Venus: {
            funFact: "A day on Venus is longer than a year!",
            color: "Yellowish-white",
            size: "12,104 km",
            distance: "41 million km",
            gravity: 0.91,
        },
        Earth: {
            funFact: "It’s the only planet known to support life.",
            color: "Blue and green",
            size: "12,742 km",
            distance: "0 km",
            gravity: 1.0,
        },
        Mars: {
            funFact: "It has the tallest volcano in the solar system.",
            color: "Red",
            size: "6,779 km",
            distance: "78 million km",
            gravity: 0.38,
        },
        Jupiter: {
            funFact: "It’s the largest planet in the solar system.",
            color: "Orange and white",
            size: "139,820 km",
            distance: "628 million km",
            gravity: 2.34,
        },
        Saturn: {
            funFact: "Its rings are made of ice and rock.",
            color: "Yellow and brown",
            size: "116,460 km",
            distance: "1.2 billion km",
            gravity: 1.06,
        },
        Uranus: {
            funFact: "It rotates on its side.",
            color: "Light blue",
            size: "50,724 km",
            distance: "2.6 billion km",
            gravity: 0.92,
        },
        Neptune: {
            funFact: "It has supersonic winds.",
            color: "Deep blue",
            size: "49,244 km",
            distance: "4.3 billion km",
            gravity: 1.19,
        },
    };

    planetDropdown.addEventListener("change", () => {
        const planet = planetDropdown.value;
        if (planet) {
            const data = planetData[planet];
            planetFunFact.textContent = `${planet}: Fun Fact - ${data.funFact}`;
            planetColor.textContent = data.color;
            planetSize.textContent = data.size;
            planetDistance.textContent = data.distance;
            planetGravity.textContent = data.gravity;
        }
    });

    calculateButton.addEventListener("click", () => {
        const weight = parseFloat(weightInput.value);
        weightResultsTable.innerHTML = ""; // Clear previous results
        if (!isNaN(weight)) {
            Object.entries(planetData).forEach(([planet, data]) => {
                const weightOnPlanet = (weight * data.gravity).toFixed(2);
                const row = `<tr><td>${planet}</td><td>${weightOnPlanet} kg</td></tr>`;
                weightResultsTable.innerHTML += row;
            });
        } else {
            weightResultsTable.innerHTML = `<tr><td colspan="2">Please enter a valid weight.</td></tr>`;
        }
    });
});
