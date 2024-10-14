let faith = {
    firstName : "Faithza",
    weight : 55,
    height : 1.65,
    calculateBMI : function(){
        let bmi= this.weight / (this.height * this.height)
        console.log(bmi)
        if(bmi < 16.0 && bmi > 0){
            return "Severely Underweight"
        }
        else if(bmi >= 16.0 && bmi <= 18.4){
            return "Underweight"
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            return "Normal"
        }
        else if(bmi >= 25.0 && bmi <= 29.9){
            return "Overweight"
        }
        else if(bmi >= 30.0 && bmi <= 34.9){
            return "Moderately Obese"
        }
        else if(bmi >= 35.0 && bmi <= 39.9){
            return "Severely Obese"
        }
        else{
            return "Morbidly Obese"
        }
    }
}

faith.BMI = faith.calculateBMI()
console.log(faith)