function loadJson(file,callback){
var xhr=new XMLHttpRequest();//obj creation for http request
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true)//opening the request and getting the information from the file in asyrncs
xhr.onreadystatechange=function(){
  if(xhr.readyState===4 && xhr.status=="200"){//readystate 1 request,2 request send &responce receive,3 req send res received 4 sucess
    callback(xhr.responseText);
  }
};
xhr.send();
}
loadJson("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var childTwo=document.querySelector(".child2");
function career(careerInfo){
  var heading=document.createElement("h2");
  heading.textContent="Career Objective";
  childTwo.appendChild(heading);
  var hr=document.createElement("hr");
  childTwo.appendChild(hr);
  var careerP=document.createElement("p");
  careerP.textContent=careerInfo.info;
  childTwo.appendChild(careerP);
}
function education(edu){
  var heading=document.createElement("h2");
  heading.textContent="Education Qualification";
  childTwo.appendChild(heading);
  var hr=document.createElement("hr");
  childTwo.appendChild(hr);
  var table=document.createElement("table");
  childTwo.appendChild(table);
  table.border="1";

  var tr1="<tr><td>Degree</td><td>Institute</td><td>Data</td></tr>";

  var tr2="";
  for (var i = 0; i < edu.length; i++) {
   tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>";
  }
  table.innerHTML=tr1+tr2;
}
function skills(skil){
  var heading=document.createElement("h2");
  heading.textContent="Techincal Skills";
  childTwo.appendChild(heading);
  var hr=document.createElement("hr");
  childTwo.appendChild(hr);
  for (var i = 0; i < skil.length; i++) {
    var titleH=document.createElement("h3");
    titleH.textContent=skil[i].title;
    childTwo.appendChild(titleH);
    var ul=document.createElement("ul");
    childTwo.appendChild(ul);
    for (var j = 0; j <skil[i].info.length; j++) {
      var li=document.createElement("li");
      li.textContent=skil[i].info[j];
      ul.appendChild(li);
    }
  }

}
