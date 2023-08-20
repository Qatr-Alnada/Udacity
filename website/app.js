/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const baseURL = `https://api.openweathermap.org/data/2.5/forecast?zip=` 
const apikey = `&appid=91fad862e765ec6dc3fd7334514820c4&units=matric`;


document.getElementById('generate').addEventListener('click',getUserCredentials);

function getUserCredentials(e) {
    //e.preventDefault();
    const userZip = document.getElementById('zip').value;
    const userFav = document.getElementById('feelings').value;
    getUserTemp(baseURL,userZip,apikey)

    .then((data) => {
        console.log(data);
        const day = data.list[0].dt_txt.slice(0,10);
        postData('/add', {temp:data.list[0].main.temp, date:day, userRes:userFav})
        updateUI();
    })

}
const getUserTemp = async (baseURL,userZip,apikey) => {
    const res = await fetch(baseURL+userZip+apikey)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch(error){
        console.log("error", error);
    }
}
const postData = async (url ='', data = {}) => {
    console.log(data)
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await res.json();
        console.log(newData);
        return newData
    } catch(error) {
        console.log("error",error);
    }
    
}
const updateUI = async ()=> {
        const res = await fetch('/get')
        try{
            const userData = await res.json();
            document.getElementById('temp').innerHTML = `Your Temprature: ${userData.temp} Celcius`;
            document.getElementById('date').innerHTML = `Your Date: ${userData.date}`;
            document.getElementById('content').innerHTML = `I Feel: ${userData.userRes}`;
        } catch(error) {
            console.log("error", error);
        }
    }