var data = mydata.result.records;
var selectAd = document.querySelector('.select-ad');
var btn = document.querySelectorAll('.hot-btn');

function addToList(){
  var str = '';
  var zone = [];
  str += '<option>--請選擇行政區--</option>';
  for(var i = 0;i < data.length; i++){
    if(zone.indexOf(data[i].Zone) == -1){
      zone.push(data[i].Zone);
      str += '<option>'+data[i].Zone+'</option>';
    }
  }
  selectAd.innerHTML = str;
}

function createCard(event){
  var location = event.target.value;
  var str = '';
  if (location == '--請選擇行政區--') {return;}
  for (var i = 0; i < data.length; i++) {
    var url = data[i].Picture1;
    url = url.replace("http", "https");
    if (data[i].Zone == location) {
      str +='<div class="card">';
      str +='<div class="ad-location">';
      str +='<div class="ad-location-img" style="background-image: url('+url+');">';
      str +='<h3>'+data[i].Name+'</h3>';
      str +='<p>'+data[i].Zone+'</p>';
      str +='</div>';
      str +='<div class="ad-location-info">';
      str +='<ul>';
      str +='<li><img src="./assets/icons_clock.png" style="height:18px;margin:0px 4px;">'+data[i].Opentime+'</li>';
      str +='<li><img src="./assets/icons_pin.png" style="height:18px;margin:0px 6px;">'+data[i].Add+'</li>';
      str +='<li><img src="./assets/icons_phone.png" style="height:18px;margin:0px 8px;">'+data[i].Tel+'</li>';
      str +='</ul>';
      str +='</div>';
      str +='<div class="ad-location-free">';
      str +='<p><img src="./assets/icons_tag.png" style="height:18px;margin:0px 2px;">'+data[i].Ticketinfo+'</p>';
      str +='</div>';
      str +='</div>';
      str +='</div>';
    }
  }
  document.querySelector('.sub-title').textContent = location;
  document.querySelector('.ad-list').innerHTML = str;
}

addToList();

selectAd.addEventListener('change',function(event){
  var location = event.target.value;

  createCard(event);
});

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click',createCard);
}
