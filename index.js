const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apikey="b2ac425712fa9269d231a63f6e357902";
const cityname=document.querySelector(".search input");
const btn=document.querySelector(".icon");
btn.addEventListener("click",()=>
{
    getweatherdata(cityname.value);
});

async function getweatherdata(city)
{
      const response=await fetch(apiurl+ city +`&appid=${apikey}`);
      if(response.status == 404)
      {
        document.querySelector(".weather").style.display="none";
      }
      else{
        document.querySelector(".weather").style.display="flex";
        document.querySelector(".search").style.display="none";

        const data=await response.json();
        console.log(data);
        document.querySelector(".forecast").innerHTML=data.weather[0].main;
        document.querySelector(".temp").innerHTML=data.main.temp+"°C";
        document.querySelector(".pressure").innerHTML=data.main.pressure;

        if(data.weather[0].main="clouds")
        {
            document.querySelector(".source").src="clouds.png";
        }
        else if(data.weather[0].main="clear")
        {
            document.querySelector(".source").src="clear.png";
        }
        else if(data.weather[0].main="rain")
        {
            document.querySelector(".source").src="rain.png";
        }
        else if(data.weather[0].main="fog")
        {
            document.querySelector(".source").src="fog.png";
        }
        else if(data.weather[0].main="mist")
        {
            document.querySelector(".source").src="mist.png";
        }
        else{
            document.querySelector(".source").src="drizzle.png";

        }
        cityname.value="";

       
    }
}