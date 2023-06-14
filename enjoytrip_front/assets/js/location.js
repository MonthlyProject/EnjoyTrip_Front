import { initHeader } from "./headerScript.js";

window.addEventListener('load', () => {
    initHeader();
});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);
var markers = [];
var markerscontent = [];

// index page 로딩시 검색할 지역 정보 얻기.
const serviceKey = "servicekey";
let areaUrl =
    "https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=" +
    serviceKey +
    "&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json";

fetch(areaUrl)
    .then((response) => response.json())
    .then((data) => makeArea(data));

//서울, 부산, 대구.... 넣기
function makeArea(data) {
    let sel = document.getElementById("search-area");
    // console.log(data);
    let areas = data.response.body.items.item;
    areas.forEach(function (area, i) {
        // console.log(area)
        let opt = document.createElement("option");
        opt.setAttribute("value", area.code);
        opt.appendChild(document.createTextNode(area.name));

        sel.appendChild(opt);
    });
}

const areaarea = [];

document.getElementById("search-area").addEventListener("click", function () {
    let areaCode = document.getElementById("search-area").value;
    console.log(areaCode);
    if (areaCode !== '0') {
        areaarea.length=0;
        let searchUrl = `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&areaCode=${areaCode}&_type=json`;

        fetch(searchUrl)
            .then((response) => response.json())
            .then((data) => makeAreaArea(data, areaCode));
    }
});


function makeAreaArea(data, areaCode) {
    let sel = document.getElementById("search-area-area");
    // console.log(data);

    sel.innerHTML = ''

    let opt = document.createElement("option");
    opt.setAttribute("value", 0);
    opt.appendChild(document.createTextNode("검색 할 세부지역 선택"));
    areaarea.push(areaCode);

    sel.appendChild(opt);

    let areas = data.response.body.items.item;
    areas.forEach(function (area, i) {
        // console.log(area)
        opt = document.createElement("option");
        opt.setAttribute("value", area.code);
        opt.appendChild(document.createTextNode(area.name));
        areaarea.push(area.name);

        sel.appendChild(opt);
    });
}

const TypeId = ['12', '14', '15', '25', '28', '32', '38', '39'];

// 지역, 세부지역, 관광지 유형, 입력 후 검색 버튼 클릭.
document.getElementById("btn-search").addEventListener("click", function () {
    let areaCode = document.getElementById("search-area").value;
    let areaareaCode = document.getElementById("search-area-area").value;
    let contentTypeId = document.getElementById("search-content-id").value;

    console.log(areaarea[areaareaCode]);

    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];//마크 초기화
    markerscontent = [];//마크 내용 초기화

    if (contentTypeId === '0') {
        for (let i = 0; i < 8; i++) {
            let searchUrl = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${areaarea[areaareaCode]}&contentTypeId=${TypeId[i]}&areaCode=${areaCode}`;

            fetch(searchUrl)
                .then((response) => response.json())
                .then((data) => makeTripDot(data));
        }
    } else {
        let searchUrl = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${areaarea[areaareaCode]}&contentTypeId=${contentTypeId}&areaCode=${areaCode}`;

        fetch(searchUrl)
            .then((response) => response.json())
            .then((data) => makeTripDot(data));
    }
});

function getmarkerimage(contentTypeId) {
    console.log(contentTypeId);

    if (contentTypeId == '12') {
        return '../assets/img/marker12.png';
    } else if (contentTypeId === '14') {
        return '../assets/img/marker14.png';
    } else if (contentTypeId === '15') {
        return '../assets/img/marker15.png';
    } else if (contentTypeId === '25') {
        return '../assets/img/marker25.png';
    } else if (contentTypeId === '28') {
        return '../assets/img/marker28.png';
    } else if (contentTypeId === '32') {
        return '../assets/img/marker32.png';
    } else if (contentTypeId === '38') {
        return '../assets/img/marker38.png';
    } else if (contentTypeId == '39') {
        return '../assets/img/marker39.png';
    }
}

//위치 배열 저장
function makeTripDot(data) {
    if (data.response.body.totalCount !== 0) {//데이터가 존재하면
        console.log(data);
        let trips = data.response.body.items.item;
        var moveLatLon;
        trips.forEach(function (trip) {
            moveLatLon = new kakao.maps.LatLng(`${trip.mapy}`, `${trip.mapx}`);

            var markerimgsize = new kakao.maps.Size(32, 36),
                imageOption = {
                    offset: new kakao.maps.Point(13, 34)
                };

            var marker = new kakao.maps.Marker({
                position: moveLatLon,
                image: new kakao.maps.MarkerImage(getmarkerimage(trip.contenttypeid), markerimgsize, imageOption)
            });


            if (trip.firstimage === "") {
                trip.firstimage = "../assets/img/noimg.png"
            }

            var infowindow = new kakao.maps.InfoWindow({
                position: moveLatLon,
                content: `
                    <div style="width:400px;">
                        <a style="display: block; padding: 6px;background-color: deepskyblue; font-size: 20px; font-weight: bold; color: white;display: block; text-align: center;">${trip.title}</a>
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <img src="${trip.firstimage}" style="width:200px;">
                            <a style="margin: 20px;">${trip.addr1} ${trip.addr2}</a>
                        </div>
                    </div>
                `
            })
            markers.push(marker);//배열에 마크 넣기
            markerscontent.push(infowindow);
            setmarker(moveLatLon);//배열에 든 마크 찍기
        });

        // map.setCenter(moveLatLon);//걍 이동
    }
    //map.panTo(moveLatLon);//부드럽게
}



function setmarker(location) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        kakao.maps.event.addListener(markers[i], 'mouseover', makeOverListener(map, markers[i], markerscontent[i]));
        kakao.maps.event.addListener(markers[i], 'mouseout', makeOutListener(markerscontent[i]));
    }
    //map.setCenter(location);//걍 이동
    map.panTo(location);
}

function makeOverListener(map, marker, infowindow) {
    return function () {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}
