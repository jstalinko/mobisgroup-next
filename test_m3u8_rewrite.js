const https = require('https');

// This is the URL from the user's error screenshot (reconstructed partially) or from previous debug
// Let's use the one from fetch_debug.js if possible, or just the one we know works for this drama
// Drama ID 4sR2d0wWmh
// Ep 5 (from screenshot)
// We need to get the video_url first.

async function fetchVideoUrl() {
    return new Promise((resolve) => {
        const url = "https://api.sansekai.my.id/api/freereels/detailAndAllEpisode?id=4sR2d0wWmh";
        https.get(url, (res) => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
                const json = JSON.parse(data);
                const ep5 = json.data.info.episode_list[4]; // index 4 = ep 5
                console.log("EP 5 URL:", ep5.video_url || ep5.external_audio_h264_m3u8);
                resolve(ep5.video_url || ep5.external_audio_h264_m3u8);
            });
        });
    });
}

function rewriteM3u8(text, subUrl) {
    const baseUrl = "https://example.com/base/";
    const origin = "http://localhost:3000";
    const isMasterPlaylist = text.includes("#EXT-X-STREAM-INF");
    
    let rewritten = text.split(/\r?\n/).map(line => {
        return line; // Simplify for this test, we care about injection
    }).join('\n');

    if (isMasterPlaylist && subUrl) {
          const proxiedSubUrl = `${origin}/api/proxy/video?url=${encodeURIComponent(subUrl)}`;
          // Create the Media line
          // Make sure to match GROUP-ID quoting style if standard
          const mediaLine = `#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="Indonesia",DEFAULT=YES,AUTOSELECT=YES,LANGUAGE="id",URI="${proxiedSubUrl}"`;
          
          rewritten = rewritten.replace("#EXTM3U", "#EXTM3U\n" + mediaLine);
          
          rewritten = rewritten.replace(/#EXT-X-STREAM-INF:(.*)/g, (match, attrs) => {
               if (attrs.includes("SUBTITLES=")) return match; 
               return `#EXT-X-STREAM-INF:${attrs},SUBTITLES="subs"`;
          });
    }
    return rewritten;
}

async function run() {
    const videoUrl = await fetchVideoUrl();
    console.log("Fetching M3U8:", videoUrl);
    
    https.get(videoUrl, (res) => {
        let text = '';
        res.on('data', c => text += c);
        res.on('end', () => {
            console.log("--- ORIGINAL ---");
            console.log(text);
            console.log("--- REWRITTEN ---");
            const subUrl = "http://dummy.srt";
            console.log(rewriteM3u8(text, subUrl));
        });
    });
}

run();
