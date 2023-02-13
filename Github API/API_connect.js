const ul = document.querySelector('ul')

const inputText = document.getElementById("inputText"); 
inputText.addEventListener("click", sendAPIRequest);

function getTextBoxText(id) {
    const textBox = document.getElementById(id);
    const textBox_text = textBox.value;
    
    return textBox_text;
}

function sendAPIRequest() {
    const owner = getTextBoxText("textBox");
    const API_LINK= `https://api.github.com/users/${owner}/repos`;
    
    fetch(API_LINK).
    then(async response => {
        if(!response.ok) {
            throw new Error(response.status);
        }

        var data = await response.json();

        data.map(item => {
            let li = document.createElement('li');

            li.innerHTML = `
            <strong>${item.name.toUpperCase()}</strong>
            <span>URL: ${item.url}</span>
            `;

            ul.appendChild(li);
        })
    }).
    catch(error => console.log(error))
}
