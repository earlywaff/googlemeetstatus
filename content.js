setInterval(() => {
    const element = document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(14) > div.crqnQb > div.fJsklc.nulMpf.Didmac.G03iKb > div > div");
    let status;
    if (element) {
        status = true;
        console.log("Call is active");
    } else {
        status = false;
        console.log("Call is not active");
    }
    
    chrome.runtime.sendMessage({ status: status, body: "Nikita" });
}, 10000);
