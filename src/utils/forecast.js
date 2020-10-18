const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=61fe190d70ea905e5c1da5d05f9719af&query=' + latitude + ',' + longitude;
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            });
        }
    })
}

module.exports = forecast;
