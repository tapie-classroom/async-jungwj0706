fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.54266581731856&lon=126.96716269932821&appid=1678d5fbe5655c5df4baca85f98cc3ed`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById("temp").textContent = `온도: ${(data.main.temp-273.15).toFixed(1)}℃`;
        document.getElementById("humidity").textContent = `습도: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `바람: ${data.wind.speed.toFixed(1)}m/s`;    })
    .catch(error => {
        console.error('오류가 발생했습니다.', error);
    });