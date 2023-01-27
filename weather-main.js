var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var butn = document.querySelector('#butn')
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var country = document.querySelector('#country');

apik = "3045dd712ffe6e702e3245525ac7fa38"




function convertion(val){
    return ((val - 273.15)*9/5 + 32).toFixed(0);
};
function feels_conv(val){
    return ((val - 273.15)*9/5 + 32).toFixed(0);
};
function km_conv(val, cntry){
    if (cntry != "US"){
        return val + ' kph'
    }else{
    return val / 1.609.toFixed(0) + ' mph';
}
}

function country_name(cntry){
    if (cntry == "US"){
        return "You're in the US"
    }else{
        return "You are not in the US"
    }
}
    convertion();
    feels_conv();
    km_conv();
    country_name();

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
        var cntry = data['sys']['country'];
        city.innerHTML = `Weather of <span>${namevalue}</span>`;
        temp.innerHTML = `Temperature: <span>${convertion(tempature)}&#8457</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}</span>`
        wind.innerHTML = `Wind speed: <span>${km_conv(wndspeed, cntry)}</span>`
        feelslike.innerHTML = `Feels like: <span>${feels_conv(feels_like)}&#8457</span>`;
        country.innerHTML = `Country:<span> ${country_name(cntry)}</span>`;
    })
    
    .catch(err => alert('You entered a wrong city name'))

})