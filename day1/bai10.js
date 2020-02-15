// 10. Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as
// follows
// BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m))
// Note: you must do the conversion from cm to m before calculation
// And then based on the calculated BMI, tell them that they are:
// ● Severely underweight if BMI < 16
// ● Underweight if BMI is between 16 and 18.5
// ● Normal if BMI is between 18.5 and 25
// ● Overweight if BMI is between 25 and 30
// ● Obese if BMI is more than 30
function calculateBMI()
    {
        let weight = Number(prompt("moi nhap weight(kg): "))
        let height = Number(prompt("moi nhap height(cm): "))
        let BMI = weight/(height*0.01*height*0.01)
        console.log("Your BMI = ",BMI)
        if(BMI < 16 )console.log("Severely underweight")
        else if(BMI > 16 && BMI < 18.5) console.log("Underweight")
        else if(BMI > 18.5 && BMI < 25) console.log("Normal")
        else if(BMI > 25 && BMI < 30)  console.log("Overweight")
    }