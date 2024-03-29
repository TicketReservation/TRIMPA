// function to generate 140 sits in every flight

function generateSitsInFlight() {
    const rowseconomic = 20
    const colseconomic = 6

    const rowsvip = 5
    const colsvip = 4

    const sits = []

    for (var row = 1; row <= rowseconomic; row++) {

        for (var col = 0; col < colseconomic; col++) {
            const sit = String.fromCharCode(65 + col) + row
            sits.push(sit)
        }
    }
    
    for (var row = 1; row <= rowsvip; row++) {
        for (var col = 0; col < colsvip; col++) {
            const sit = String.fromCharCode(65 + col) + row
            sits.push(sit)
        }
    }

    return sits
}

const flightSits = generateSitsInFlight()
console.log(flightSits)