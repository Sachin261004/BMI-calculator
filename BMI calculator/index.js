$(document).ready(function() {
    function calculateBMI(height, weight) {
        return (weight / ((height * height) / 10000));
    }

    $(".btn").on("click", function() {
        var height = parseFloat($("#heightInput").val());
        var weight = parseFloat($('#weightInput').val());
        var bmi = calculateBMI(height, weight);

        if (typeof bmi === 'number' && Number.isFinite(bmi) && bmi % 1 !== 0) {
            if (bmi < 18.5) {
                $("#bmiResult").text("Underweight");
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                $("#bmiResult").text("Healthy weight");
            } else {
                $("#bmiResult").text("Overweight");
            }
        } else {
            $("#bmiResult").text("Wrong input entered");
        }
    });
});
