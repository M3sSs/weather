const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '933e265971mshaff3cdb46fc7a90p1a849djsn5aaa32649746',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
var l=document.getElementById("bcg")
console.log(l);
l.style.setProperty('background-color','rgb(50, 54, 57)')
var bt=document.getElementsByClassName("btn1");

// script for show and hide using button
		function lod(a){
			// console.log(i)
					var b=document.querySelectorAll(".btn1>span")	
					var t=document.getElementsByClassName("more_info")
					// console.log(t)
					if(t[a].style.display!='none')
					{
						b[a].innerHTML="SHOW DETAILS"
						t[a].style.display='none';
					}
					else
					{
						b[a].innerHTML="HIDE DETAILS"
						t[a].style.display='block';
					}	
					console.log(b[a])   
	
				}
		
			var r=document.getElementById("ff")
			r.style.backgroundColor="rgb(50, 54, 57)";
const getweather=(city)=>{



	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
	cloud_pct8.innerHTML= response.cloud_pct,
	
  	temp8.innerHTML= response.temp,
  	feels_like8.innerHTML= response.feels_like,
  	humidity8.innerHTML= response.humidity,
  	min_temp8.innerHTML= response.min_temp,
  	max_temp8.innerHTML= response.max_temp,
  	wind_speed8.innerHTML= response.wind_speed,
  	wind_degrees8.innerHTML= response.wind_degrees,
  	sunrise8.innerHTML= response.sunrise,
  	sunset8.innerHTML= response.sunset
	cityName.innerHTML=city.toUpperCase();	
	if(response.cloud_pct>90){
		console.log(response.cloud_pct)
	}
		
		console.log(response)})

}



submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value);
})
getweather("delhi")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dehradun', options)
	.then(response => response.json())
	.then(response => {
	cloud_pct.innerHTML= response.cloud_pct,
  	temp.innerHTML= response.temp,
  	feels_like.innerHTML= response.feels_like,
  	humidity.innerHTML= response.humidity,
  	min_temp.innerHTML= response.min_temp,
  	max_temp.innerHTML= response.max_temp,
  	wind_speed.innerHTML= response.wind_speed,
  	wind_degrees.innerHTML= response.wind_degrees,
  	sunrise.innerHTML= response.sunrise,
  	sunset.innerHTML= response.sunset
		
		
		console.log(response)})


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=DELHI', options)
	.then(response => response.json())
	.then(response => {
	cloud_pct1.innerHTML= response.cloud_pct,
  	temp1.innerHTML= response.temp,
  	feels_like1.innerHTML= response.feels_like,
  	humidity1.innerHTML= response.humidity,
  	min_temp1.innerHTML= response.min_temp,
  	max_temp1.innerHTML= response.max_temp,
  	wind_speed1.innerHTML= response.wind_speed,
  	wind_degrees1.innerHTML= response.wind_degrees,
  	sunrise1.innerHTML= response.sunrise,
  	sunset1.innerHTML= response.sunset
		
		
		console.log(response)})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=BENGALURU', options)
	.then(response => response.json())
	.then(response => {
	cloud_pct2.innerHTML= response.cloud_pct,
  	temp2.innerHTML= response.temp,
  	feels_like2.innerHTML= response.feels_like,
  	humidity2.innerHTML= response.humidity,
  	min_temp2.innerHTML= response.min_temp,
  	max_temp2.innerHTML= response.max_temp,
  	wind_speed2.innerHTML= response.wind_speed,
  	wind_degrees2.innerHTML= response.wind_degrees,
  	sunrise2.innerHTML= response.sunrise,
  	sunset2.innerHTML= response.sunset
		
		
		console.log(response)})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=MUMBAI', options)
	.then(response => response.json())
	.then(response => {
	cloud_pct3.innerHTML= response.cloud_pct,
  	temp3.innerHTML= response.temp,
  	feels_like3.innerHTML= response.feels_like,
  	humidity3.innerHTML= response.humidity,
  	min_temp3.innerHTML= response.min_temp,
  	max_temp3.innerHTML= response.max_temp,
  	wind_speed3.innerHTML= response.wind_speed,
  	wind_degrees3.innerHTML= response.wind_degrees,
  	sunrise3.innerHTML= response.sunrise,
  	sunset3.innerHTML= response.sunset
		
		
		console.log(response)})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
	.then(response => response.json())
	.then(response => {
	cloud_pct4.innerHTML= response.cloud_pct,
  	temp4.innerHTML= response.temp,
  	feels_like4.innerHTML= response.feels_like,
  	humidity4.innerHTML= response.humidity,
  	min_temp4.innerHTML= response.min_temp,
  	max_temp4.innerHTML= response.max_temp,
  	wind_speed4.innerHTML= response.wind_speed,
  	wind_degrees4.innerHTML= response.wind_degrees,
  	sunrise4.innerHTML= response.sunrise,
  	sunset4.innerHTML= response.sunset
		
		
		console.log(response)})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=HYDERABAD', options)
	.then(response => response.json())
	.then(response => {
	cloud_pct5.innerHTML= response.cloud_pct,
  	temp5.innerHTML= response.temp,
  	feels_like5.innerHTML= response.feels_like,
  	humidity5.innerHTML= response.humidity,
  	min_temp5.innerHTML= response.min_temp,
  	max_temp5.innerHTML= response.max_temp,
  	wind_speed5.innerHTML= response.wind_speed,
  	wind_degrees5.innerHTML= response.wind_degrees,
  	sunrise5.innerHTML= response.sunrise,
  	sunset5.innerHTML= response.sunset
		
		
		console.log(response)})
		
	.catch(err => console.error(err));