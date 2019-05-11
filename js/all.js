const data = mydata.result.records;
const selectAd = document.querySelector('.select-ad');
const btn = document.querySelectorAll('.hot-btn');

//加入行政區到列表
function addToList(){
  let str = '';
  let zone = [];
  str += '<option>--請選擇行政區--</option>';
  for(let i = 0;i < data.length; i++){
    if(zone.indexOf(data[i].Zone) == -1){
      zone.push(data[i].Zone);
      str += '<option>'+data[i].Zone+'</option>';
    }
  }
  selectAd.innerHTML = str;
}

//創建景點卡片
function createCard(event){
  const location = event.target.value;
  let str = '';
  if (location == '--請選擇行政區--') {return;}
  for (let i = 0; i < data.length; i++) {
    let url = data[i].Picture1;
    url = url.replace("http", "https");
    if (data[i].Zone == location) {
      str +='<div class="card">';
      str +='<div class="area-location">';
      str +='<div class="area-location-img" style="background-image: url('+url+');">';
      str +='<h3>'+data[i].Name+'</h3>';
      str +='<p>'+data[i].Zone+'</p>';
      str +='</div>';
      str +='<div class="area-location-info">';
      str +='<ul>';
      str +='<li><img src="./assets/icons_clock.png" style="height:18px;margin:0px 4px;">'+data[i].Opentime+'</li>';
      str +='<li><img src="./assets/icons_pin.png" style="height:18px;margin:0px 6px;">'+data[i].Add+'</li>';
      str +='<li><img src="./assets/icons_phone.png" style="height:18px;margin:0px 8px;">'+data[i].Tel+'</li>';
      str +='</ul>';
      str +='</div>';
      str +='<div class="area-location-free">';
      str +='<p><img src="./assets/icons_tag.png" style="height:18px;margin:0px 2px;">'+data[i].Ticketinfo+'</p>';
      str +='</div>';
      str +='</div>';
      str +='</div>';
    }
  }
  document.querySelector('.sub-title').textContent = location;
  document.querySelector('.area-list').innerHTML = str;
}

//初始化
addToList();
//偵測到改變觸發函式
selectAd.addEventListener('change',createCard);
//掛監聽到按鈕
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click',createCard);
}
