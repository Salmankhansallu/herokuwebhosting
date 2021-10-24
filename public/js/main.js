const cityname=document.getElementById('cityname');
const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp-real-val');
const temp_status=document.getElementById('temp-status');
const datahide=document.querySelector('.middle-layer');
var now = new Date();
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thurday";
weekday[5]="Friday";
weekday[6]="Saturday";
            
 document.getElementById("day").innerText=weekday[now.getDay()];
setInterval(anum,1000);
        function anum(){
           
            
            var t=new Date().toLocaleTimeString();
        document.getElementById("time").innerText=t;
             var d=new Date().toLocaleDateString();
        document.getElementById("today-date").innerText=d;
         
        }
const getinfo=async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;
   
if(cityval==""){
    city_name.innerText="Please write the name before search";
    datahide.classList.add('date-hide');
}
else{
    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=14800f95395d5bcd93afb4d8f4e05acd`
        const response=await fetch(url);
        const data= await response.json();
        const arrdata=[data];
        city_name.innerText=`${arrdata[0].name} , ${arrdata[0].sys.country}`;

        temp.innerText=`${arrdata[0].main.temp}`;
        temp_status.innerText=arrdata[0].weather[0].main;
        console.log(arrdata[0].main.temp);
        console.log(arrdata[0].weather[0].main);
        const tempstatus=arrdata[0].weather[0].main;
        if(tempstatus=="Clear"){
            temp_status.innerHTML='<i class="fas fa-sun" style="color: #eccc68;"></i>';
        }
        else if(tempstatus=="Clouds"){
            temp_status.innerHTML='<i class="fas fa-cloud" style="color: #f1f2f6;"></i>';
        }
        else if(tempstatus=="Rain"){
            temp_status.innerHTML='<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>';
        }
        else{
            temp_status.innerHTML='<i class="fas fa-sun" style="color: #eccc68;"></i>';
        }
        datahide.classList.remove('date-hide');

    }catch{
        city_name.innerText="Please enter the city name properly";
        datahide.classList.add('date-hide');
    }
   
}

}

submitbtn.addEventListener("click",getinfo);