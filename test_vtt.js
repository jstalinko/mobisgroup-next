const http = require('http');

const subtitleUrl = "https://video-v6.mydramawave.com/vt/14698/52fd6942-651c-4f7a-a6ca-ee547ff68601.srt";
const proxyUrl = "http://localhost:3000/api/proxy/video?url=" + encodeURIComponent(subtitleUrl);

console.log("Fetching:", proxyUrl);

http.get(proxyUrl, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log("Status:", res.statusCode);
    console.log("Content-Type:", res.headers['content-type']);
    console.log("--- BODY START ---");
    console.log(data);
    console.log("--- BODY END ---");
  });
}).on('error', (err) => {
  console.error("Error:", err.message);
});
