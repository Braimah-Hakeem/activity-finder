let buttonClick = document.getElementById("request")

buttonClick.addEventListener('click', showActivity)

function showActivity(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("newActivity").textContent = data.activity
        document.getElementById("title").textContent="New Activity Yayyy!!!"
        document.body.classList.add("fun")
    })
}