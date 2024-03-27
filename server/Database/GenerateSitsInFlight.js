// function to generate 400 sits in every flight

function generateSitsInFlight() {
    const rows = 50
    const cols = 8
    const sits = []

    for (let row = 1; row <= rows; row++) {
        for (let col = 0; col < cols; col++) {
            const sit = String.fromCharCode(65 + col) + row
            sits.push(sit)
        }
    }

    return sits
}

const flightSits = generateSitsInFlight()
console.log(flightSits)