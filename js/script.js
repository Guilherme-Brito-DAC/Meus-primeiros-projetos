const date = new Date();

let currentyear = date.getFullYear();

const calendar = () =>{
  date.setDate(1);

  colours=[
    "#1094e5",
    "#03b9f2",
    "#2dc2b6",
    "#2fc685",
    "#6fc42d",
    "#ffb81b",
    "#f47722",
    "#f14723",
    "#e12760",
    "#cd2288",
    "#972ff1",
    "#1e62dd",
  ];

  for(let i = 0;i <= 12;i++){  
      
    let days = "";

    const monthnumberdays = new Date(date.getFullYear(),date.getMonth() + i  - 1,0).getDate();

    const firstDayIndex = new Date(date.getFullYear(),date.getMonth() + i -1,1).getDay();

    const prevLastDay = new Date(date.getFullYear(),date.getMonth() + i - 1,0).getDate();

    const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + i ,1).getDay();

    const nextDays = 7 - lastDayIndex;

    let y = "mes"+i;

    const monthDays = document.querySelector("div[title="+y+"]");

    for(let y = firstDayIndex;y > 0;y--){
      days += `<div class="prev-date">${prevLastDay - y + 1}</div>`;  
    }

    for(let x = 1;x <= monthnumberdays;x++){
      if(x === new Date().getDate() && i === new Date().getMonth() && date.getFullYear() === currentyear){
      days += `<div class="today" style="background-color:${colours[i]};">${x}</div>`;  
      }else{
      days += `<div>${x}</div>`;  
      }
      monthDays.innerHTML = days;
    }
    for(let c = 1;c <= nextDays;c++){
      days += `<div class="next-date">${c}</div>`;
      monthDays.innerHTML = days;
    }
  }
}

let year = date.getFullYear();

document.getElementById("year").innerHTML = year;

document.querySelector(".next").addEventListener("click", () => {
    year ++;
    date.setFullYear(year,2,0)
    document.getElementById("year").innerHTML = year;
    calendar();
  });
  document.querySelector(".prev").addEventListener("click", () => {
    year --;
    date.setFullYear(year,2,0)
    document.getElementById("year").innerHTML = year;
    calendar();
  });

calendar();

  