"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        // Circle area = π * radius^2
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.shape === "rectangle") {
        // Rectangle area = width * height
        return shape.width * shape.height;
    }
    else {
        throw new Error("Unknown shape type");
    }
}
// Input 1
var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
//Input 2
var rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea);
