const judul = document.getElementById('judul');

judul.style.color = 'blue';
judul.style.backgrounColor = "#ccc";
judul.innerHTML= "Push DOM";

const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = "red";
}

const p4 =document.querySelector('#b p');
p4.style.backgroundColor = "green";