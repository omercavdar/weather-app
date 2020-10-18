const geocode = require('./src/utils/geocode')
const forecast = require('./src/utils/forecast')

geocode('Istanbul', (error, { latitude, longitude } = {}) => {
    if (error) {
        return console.log('Error: ', error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
        console.log('Error: ', error);
        console.log('forecastData: ', forecastData);
    })

})