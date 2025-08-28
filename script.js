function volume_sphere() {
    //Write your code here
    let radius = document.getElementById("radius").value;

    // Convert to number
    radius = parseFloat(radius);

    // Validate input (must be a non-negative number)
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Formula: V = (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volume = volume.toFixed(4);

    // Display the result
    document.getElementById("volume").value = volume;

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
