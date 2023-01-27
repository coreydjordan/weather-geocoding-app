//figure out how to check if city uses mph or kph and if they use C or F. Figure out how to ask for location and get weather based on that.


var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');


apik = "3045dd712ffe6e702e3245525ac7fa38"




function convertion(val){
    return ((val - 273.15)*9/5 + 32).toFixed(0);
};
function feels_conv(val){
    return ((val - 273.15)*9/5 + 32).toFixed(0);
};
function km_conv(val){
    return val / 1.609.toFixed(0);
    
    
}
    convertion();
    feels_conv();
    km_conv();

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+ apik)
    .then(res => res.json())
    .then(data => {
        var namevalue = data['name'];
        var descrip = data['weather']['0']['description'];
        var tempature = data['main']['temp'];
        var wndspeed = data['wind']['speed'];
        var feels_like = data['main']['feels_like'];
        city.innerHTML = `Weather of <span>${namevalue}</span>`;
        temp.innerHTML = `Temperature: <span>${convertion(tempature)}&#8457</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}</span>`
        wind.innerHTML = `Wind speed: <span>${km_conv(wndspeed)} mph</span>`
        feelslike.innerHTML = `Feels like: <span>${feels_conv(feels_like)}&#8457</span>`
    })
    
    .catch(err => alert('You entered a wrong city name'))

})