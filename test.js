function createCircularCoordinates(distance, points) {
    if (points < 1) {
        throw new Error(
            "Number of points should be greater than or equal to 1."
        );
    }

    const angleIncrement = (2 * Math.PI) / points;
    const coordinates = [];

    for (let i = 0; i < points; i++) {
        const x = distance * Math.cos(i * angleIncrement);
        const y = distance * Math.sin(i * angleIncrement);
        coordinates.push([x, y]);
    }

    return coordinates;
}

// Example usage:
const distance = 4;
const points = 2;
const result = createCircularCoordinates(distance, points);
console.log(result); // Output: [ [ 0, 5 ], [ 5, 0 ], [ 0, -5 ], [ -5, 0 ] ]
