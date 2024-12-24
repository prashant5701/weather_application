let data;

apiCall("delhi");


//code to get input from user
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", searchBtnClick);

function searchBtnClick() {
    // only to change css for btn clicked
    searchBtn.style.backgroundColor = "grey";
    setTimeout(() => { searchBtn.style.backgroundColor = "white"; }, 200);


    // getting inputcity and calling api 
    inputcity = document.getElementById("if1").value;
    if (inputcity != "") {
        city = inputcity;
        apiCall(city);
    }
}
//api logic below ====================================

function apiCall(city) {

    // let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a87f6623d68df1903a4fd2605787491&units=metric`);
    // data = await result.json();

    let result = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a87f6623d68df1903a4fd2605787491&units=metric`);
    result.then((response) => {
        let data = response.json();
        data.then((data) => {
            // accessing html elements=====================================
            let hCity = document.getElementById("city");
            let htemp = document.getElementById("temp");
            let hhumidity = document.getElementById("humidity");
            let hwindspeed= document.getElementById("windspeed");

            // console.log(data); 
            
            
            if (response.ok == true) {
                // dom code ===============================================
                htemp.innerText = `${data.main.temp}°C`
                hCity.innerHTML = city.toUpperCase();
                hhumidity.innerHTML = `${data.main.humidity}%`;
                hwindspeed.innerHTML = `${data.wind.speed}km/h`;
            }
            else {

                htemp.innerText = `x°C`
                hCity.innerHTML = "Enter correct city name";
                hhumidity.innerHTML = "x";
                hwindspeed.innerHTML = "x";
            }
        })
    })


}


