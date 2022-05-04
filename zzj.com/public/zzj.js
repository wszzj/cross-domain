// CORS
// const request = new XMLHttpRequest();
// request.open("GET", "http://qq.com:8888/friends.json");
// request.onreadystatechange = () => {
//   if (request.readyState === 4) {
//     if (request.status >= 200 && request.status < 300) {
//       console.log(request.response);
//     }
//   }
// };
// request.send();
function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = "zzj" + Math.random();
    window[random] = (x) => {
      resolve(x);
    };
    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
      script.onerror = () => {
        reject();
      };
    };
    document.body.appendChild(script);
  });
}
jsonp("http://qq.com:8888/friends.js").then((x) => {
  console.log(x);
});
