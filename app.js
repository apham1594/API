var button = document.querySelector('.button')
var inputValue= document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value+'&appid=ab2265222413cb3e1744360bd07c7ad6')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var temp = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        name.innnerHTML = nameValue;
        temp.innnerHTML=tempValue;
        desc.innerHTML=descValue;
    })

.catch(err => alert("wrong city name!"))
})


