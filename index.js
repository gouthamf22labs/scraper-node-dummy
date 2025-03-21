(async () => {
    const https = require('https');

    const url = 'https://adsinspire-puppeteer.leiusn.easypanel.host/facebook/createsession?isIncognito=true&userAgentPos=0&page_id=103032366405927&adsLibraryUrl=https://www.facebook.com/ads/library/?active_status=active%26ad_type=all%26country=ALL%26media_type=all%26search_type=page%26view_all_page_id=103032366405927&close_browser=true'; // Replace with your API endpoint

    try {
        https.get(url, (res) => {
            let data = '';

            // Collect data chunks
            res.on('data', (chunk) => {
                data += chunk;
            });

            // Print response when finished
            res.on('end', () => {
                console.log('Response:', JSON.parse(data));
            });
        }).on('error', (err) => {
            console.error('Error:', err.message);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
})();