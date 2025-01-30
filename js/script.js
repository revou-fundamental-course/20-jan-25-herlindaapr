// Script Form

// Validation input
function formValidation() {
    let nameInput = document.getElementById('name-input').value
    let heightInput = document.getElementById('height-input').value
    let weightInput = document.getElementById('weight-input').value


    if (nameInput =="") {
        alert('Please fill the name')

        return false

    } else {
        document.getElementById('first-greeting').innerHTML = 'Hello ' + nameInput + '!'
    }

    if (weightInput == "") {
        alert('Please fill up the weight')

        return false
    }

    if (heightInput == "") {
        alert('Please fill up the height')

        return false
    }

    return true

}

// Calculate BMI
function calculateBMI() {
    let validation = formValidation()
    if (validation == false){
        return
    }

    let weight = document.getElementById('weight-input').value
    let height = document.getElementById('height-input').value
    let result = weight / ((height / 100) * (height / 100))
    let resultFixed = result.toFixed(2)

    const resultNumber = document.getElementById('result-number')
    resultNumber.innerHTML = resultFixed

    const resultText = document.getElementById('result-text')
    const resultTips = document.getElementById('result-tips')
     
    if (result < 16){
        resultText.innerHTML = ' You are severely underweight'
        resultTips.innerHTML = 'Increase calorie intake with nutrient-dense foods like nuts, avocados, and lean proteins while eating frequent meals. Strength training can help build muscle mass, and healthy fats should be included for energy. Avoid empty-calorie junk foods and focus on whole, balanced meals.'
    } else if (result >= 16 && result <= 18.4) {
        resultText.innerHTML = ' You are underweight'
        resultTips.innerHTML = 'Increase calorie intake with nutrient-dense foods like nuts, avocados, and lean proteins while eating frequent meals. Strength training can help build muscle mass, and healthy fats should be included for energy. Avoid empty-calorie junk foods and focus on whole, balanced meals.'
    } else if (result >= 18.5 && result <= 24.9) {
        resultText.innerHTML = ' You are normal'
        resultTips.innerHTML = 'Nice one! You are an ideal weight for your height. Maintain a balanced diet rich in lean proteins, whole grains, fruits, and vegetables while staying hydrated. Regular physical activity helps sustain a healthy metabolism and body composition. Avoid excessive processed foods and refined sugars to keep overall health in check.'
    } else if (result >= 25 && result <= 29.9) {
        resultText.innerHTML = ' You are overweight'
        resultTips.innerHTML = 'Reduce portion sizes and prioritize high-fiber, protein-rich foods while limiting added sugars and refined carbs. Incorporate regular exercise to boost metabolism and burn excess fat. Drink plenty of water and practice mindful eating to avoid overeating.'
    } else if (result >= 30 && result <= 34.9) {
        resultText.innerHTML = ' You are moderately obese'
        resultTips.innerHTML = 'Focus on whole, unprocessed foods with a high intake of vegetables, lean proteins, and healthy fats while reducing simple carbs. Increase daily movement with activities like walking and strength training to aid weight loss. Consider professional guidance from a dietitian to create a sustainable, long-term plan.'
    } else if (result >= 35 && result <= 39.9) {
        resultText.innerHTML = ' You are severely obese'
                resultTips.innerHTML = 'Focus on whole, unprocessed foods with a high intake of vegetables, lean proteins, and healthy fats while reducing simple carbs. Increase daily movement with activities like walking and strength training to aid weight loss. Consider professional guidance from a dietitian to create a sustainable, long-term plan.'
    } else if (result >= 40) {
        resultText.innerHTML = ' You are morbidly obese'
                resultTips.innerHTML = 'Focus on whole, unprocessed foods with a high intake of vegetables, lean proteins, and healthy fats while reducing simple carbs. Increase daily movement with activities like walking and strength training to aid weight loss. Consider professional guidance from a dietitian to create a sustainable, long-term plan.'
    }   else {
        resultText.innerHTML =  result
    }

    document.getElementById('result-container2').classList.add('show')
}

function resetForm() {
    window.location.reload()
}
