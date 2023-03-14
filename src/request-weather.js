const apiKey = "c003503b588d10abe9229a25f55f26eb"; // This is a free API key.
const WAIT_LIMIT = 2000; // Wait two seconds for a response and then throw an error.
export default async function getWeather(search) {

        const getData = new Promise(async (resolve, reject) => {
            console.log("Fetching data...");
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`);
                if (response.status === 404)
                    throw new Error('Search value not found...');
                else {
                    const data = await response.json();
                    resolve(data);
                }
            }
            catch (error) { reject(error) }
        });

        const timeOut = new Promise ((resolve, reject) => { 
                setTimeout(() => {
                reject(new Error('Timeout'));
            }, WAIT_LIMIT);
        });
        
        try {
            const sendData = await Promise.race([getData, timeOut]);
            console.log("Fetch successful...");
            return sendData;
        } catch (error) {
            console.log("Fetch failed...");
            console.log(error);
            return null; 
        }
}