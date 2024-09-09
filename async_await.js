async function hello() {
    console.log('Hello from app.js');
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('API request in app.js');
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api();
};