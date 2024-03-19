export const detecType=(type)=>{
switch (type) {
    case "park":
        return "park yeri";
    case "home":
        return "ev";
    case "job":
        return "iş yeri";
    case "goto":
        return "gidilecek yer";
}
}

export const setStorage=(data)=>{
    const strData=JSON.stringify(data)
    localStorage.setItem("notes",strData)
}
var carIcon = L.icon({
    iconUrl: "images/car.png",
    iconSize: [35, 35],
  });
  
  var homeIcon = L.icon({
    iconUrl: "images/home-marker.png",
    iconSize: [35, 35],
  });
  
  var jobIcon = L.icon({
    iconUrl: "images/job.png",
    iconSize: [35, 35],
  });
  
  var visitIcon = L.icon({
    iconUrl: "images/visit.png",
    iconSize: [35, 35],
  });
  
  export function detecIcon(type) {
    console.log(type);
    switch (type) {
      case "park":
        return carIcon;
      case "home":
        return homeIcon;
      case "job":
        return jobIcon;
      case "goto":
        return visitIcon;
    }
  }