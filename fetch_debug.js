const https = require('https');

const url = "https://api.sansekai.my.id/api/freereels/detailAndAllEpisode?id=4sR2d0wWmh";

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
        const json = JSON.parse(data);
        // The API response structure might be different from local proxy
        // Based on detail/route.ts, local proxy returns `encryptedResponse(data)`
        // But here we are fetching raw data.
        
        // Let's print the structure
        const info = json.data?.info || json.data; 
        const ep2 = info?.episode_list?.[1];
        
        console.log("Response Code:", json.code);
        console.log("Original Audio Language:", ep2?.original_audio_language);
        console.log("Subtitle List Ep 2:", JSON.stringify(ep2?.subtitle_list, null, 2));

        if (!ep2) console.log("No episode 2 info found.");
    } catch (e) {
        console.log("Parse Error or Raw:", data.substring(0, 500));
    }
  });
}).on('error', (err) => {
  console.error("Error:", err.message);
});
