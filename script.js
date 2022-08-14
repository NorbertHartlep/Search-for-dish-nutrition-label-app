
const apiKey = "7db369e05e0b48ed80522e83495b7439";
document.getElementById("health").style.visibility = "hidden";
// function who defines basic values aand puts them into fields
const checkMacros = function(){
    var queryBasic = document.getElementById("searchDish").value;
    let query = queryBasic.replaceAll(' ', '+');
    let url = "https://api.spoonacular.com/recipes/guessNutrition?apiKey=" + 
    apiKey + 
    "&title=" + 
    query;
    
    const showCalories = function(data){
        document.getElementById("fatValue").innerHTML = data.fat.value + data.fat.unit;
        document.getElementById("carbsValue").innerHTML = data.carbs.value + data.carbs.unit;
        document.getElementById("protValue").innerHTML = data.protein.value + data.protein.unit;
        document.getElementById("fatDayPer").innerHTML = Math.round(data.fat.value * 100 / 30) +"%";
        document.getElementById("carbsDayPer").innerHTML = Math.round(data.carbs.value * 100 / 350) +"%";
        document.getElementById("protDayPer").innerHTML = Math.round(data.protein.value * 100 / 80) +"%";
        document.getElementById("result").innerHTML = queryBasic;
        document.getElementById("kcals").innerHTML = data.calories.value;
        let fatval = data.fat.value; 
        let carval = data.carbs.value;
        let proval = data.protein.value;
        document.getElementById("health").style.visibility = "visible";
        //below functionality who shows which value of each macro is good or bad
        //for fats
        if(fatval < 10){
            document.getElementById("fatval").innerHTML = "good."
            document.getElementById("fatval").style.color = "green"
        }

        if(fatval > 10 && fatval < 30){
            document.getElementById("fatval").innerHTML = "medium."
            document.getElementById("fatval").style.color = "orange"
        }

        if(fatval > 30){
            document.getElementById("fatval").innerHTML = "bad."
            document.getElementById("fatval").style.color = "red"
        }

//for carbs

        if(carval < 50){
            document.getElementById("carbsval").innerHTML = "good."
            document.getElementById("carbsval").style.color = "green"
        }

        if(carval > 50 && carval < 100){
            document.getElementById("carbsval").innerHTML = "medium."
            document.getElementById("carbsval").style.color = "orange"
        }

        if(carval > 100){
            document.getElementById("carbsval").innerHTML = "bad."
            document.getElementById("carbsval").style.color = "red"
        }

        //for protein

        if(proval > 50){
            document.getElementById("protval").innerHTML = "good."
            document.getElementById("protval").style.color = "green"
        }

        if(fatval > 10 && fatval < 50){
            document.getElementById("protval").innerHTML = "medium."
            document.getElementById("protval").style.color = "orange"
        }

        if(fatval < 10){
            document.getElementById("protval").innerHTML = "bad."
            document.getElementById("protval").style.color = "red"
        }
    console.log(data);
    };
// take the data from api, convert to json, and uses showcalories function
fetch(url)
//change format to .json
.then((response) => response.json())
//starts the defined function
.then((data) => showCalories(data));
};
//allow to turn the function by button
document.getElementById("searchbutton").addEventListener("click", function(){
    checkMacros();
});
//same as up but for enter key
var button = document.getElementById("search-bar");
if(button){
    button.addEventListener("keyup", function(event){
        if(event.key == "Enter"){
            checkMacros();
        }
        
    })};