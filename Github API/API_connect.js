import { Octokit } from "https://cdn.skypack.dev/octokit";
    const GITHUB_TOKEN = "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"

    const GithubAPI = new Octokit({
        auth: GITHUB_TOKEN
    });

    function getTextBoxText(id) {
        const textBox = document.getElementById(id);
        const textBox_text = textBox.getAttribute("value");

        return textBox_text;
    }

    function sendAPIRequest() {
        const owner = getTextBoxText("textBox");
        const repo = getTextBoxText("textBox1");

        const repo_data = GithubAPI.request("GET /repos/{owner}/{repo}", {
            owner: owner,
            repo: repo
        });
        
        console.log(JSON.stringify(repo_data));
    }

    const inputText = document.getElementById("inputText"); 
    inputText.addEventListener("click", sendAPIRequest);