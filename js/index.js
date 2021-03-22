const inputLink = document.getElementsByClassName('inputLink')[0];
const send = document.getElementsByClassName('buttonSend')[0];

let link = '';

inputLink.addEventListener("change", (e) => {
    link = e.target.value;
});

send.addEventListener("click", (e) => {
    e.preventDefault();
    var request = new XMLHttpRequest();
    request.open("POST","./api/getShortLink.php",true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.addEventListener('readystatechange', function() {
        if ((request.readyState ==4 ) && (request.status == 200)) {
        var response = document.getElementsByClassName('response')[0];
        response.innerHTML = request.responseText;
        console.log(request.responseText);
        }
    });
    request.send("link=" + encodeURIComponent(link));
});

