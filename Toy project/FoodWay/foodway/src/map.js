import { useEffect, useRef } from "react";
import Stores from "./products.json";

const MapNaverDefault = (props) => {
  const mapElement = useRef(null);
  const { naver } = window;

  let Location = Stores[props.nav_now].location;
  let name = Stores[props.nav_now].name;
  let info = Stores[props.nav_now].info;
  let [a, b] = Location.split(",");
  a = Number(a);
  b = Number(b);

  useEffect(() => {
    if (!mapElement.current || !naver) return;
    var HOME_PATH = window.HOME_PATH || ".";

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(a, b);

    const mapOptions = {
      center: location,
      zoom: 17,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    var marker = new naver.maps.Marker({
      position: location,
      map: map,
    });

    var contentString = [
      `<div class="marker">
        <h4>${name}</h4>
           <p>${info} </p>
        </div>`,
    ].join("");

    var infowindow = new naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 270
        
    });

    naver.maps.Event.addListener(marker, "click", function (e) {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });
    infowindow.open(map, marker);
  }, []);

  return (
    <>
      <div ref={mapElement} style={{ height: "300px", width: "300px" }} />
    </>
  );
};

export default MapNaverDefault;
