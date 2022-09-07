import {
  productBoard,
  town,
  mapContainer,
  locationBtn,
  mapHidingBtn,
} from "./elements.js";

paintUserLocationOnMap();
function paintUserLocationOnMap() {
  // geolocation을 사용할 수 있으면
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      //console.log(lat, lon);

      const mapOption = {
        center: new kakao.maps.LatLng(lat, lon),
        level: 4,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      // 마커 표시를 위한 위치 변수
      let userPosition = new kakao.maps.LatLng(lat, lon);

      // 마커 표시
      displayMarker(map, userPosition);
      // 유저 위치로 주소를 검색해서 상단에 표시
      searchAddrFromCoords(userPosition, displayInfo);
    });
  } else {
    alert("죄송합니다. geolocation을 사용할 수 없습니다.");
  }
}

function displayMarker(map, userPosition) {
  const marker = new kakao.maps.Marker({
    map: map,
    position: userPosition,
  });
}

function searchAddrFromCoords(coords, callback) {
  // 주소 -> 좌표 변환 객체
  const geocoder = new kakao.maps.services.Geocoder();
  // 좌표로 행정동 주소 정보를 요청
  geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
}

function displayInfo(result, status) {
  if (status === kakao.maps.services.Status.OK) {
    for (let i = 0; i < result.length; i++) {
      if (result[i].region_type === "H") {
        town.innerHTML = result[i].address_name;
        break;
      }
    }
  }
}

function clickHiding() {
  map.classList.toggle("hidden");
  if (mapHidingBtn.innerText === "▲") {
    mapHidingBtn.innerText = "▼";
    productBoard.style.height = "630px";
  } else {
    mapHidingBtn.innerText = "▲";
    productBoard.style.height = "480px";
  }
}

locationBtn.addEventListener("click", paintUserLocationOnMap);
mapHidingBtn.addEventListener("click", clickHiding);
