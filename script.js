fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.54266581731856&lon=126.96716269932821&appid=1678d5fbe5655c5df4baca85f98cc3ed`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById("temp").innerHTML=data.main.temp-273.15;
        document.getElementById("humidity").innerHTML=data.main.humidity;
        document.getElementById("wind").innerHTML=data.wind.speed;
    })
