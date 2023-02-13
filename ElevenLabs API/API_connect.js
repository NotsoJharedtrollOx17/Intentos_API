const API_KEY = "7230dc39b46506d0ae608ce9c538df71"
const API_LINK = "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/"

function getTextBoxTextAsJson() {
    const textBox = document.getElementById("textBox");
    const textBox_text = textBox.getAttribute("value");
    const json = JSON.stringify({
        'text': textBox_text
    });

    return json;
}

function sendAPIRequest() {
    const body = getTextBoxTextAsJson();
    const audioPlayer = document.getElementById("audioPlayer");

    alert('sendAPIrequest() initialize');

    fetch(API_LINK, {
        method: 'POST',
        headers: {
            'accept': 'audio/mpeg',
            'xi-api-key': API_KEY,
            'Content-Type': 'application/json'
        },
        body: body,
        //mode: "no-cors"
    }).
    then((data) => { 
        alert(data.json());
    });
}

const inputText = document.getElementById("inputText"); 
inputText.addEventListener("click", sendAPIRequest);