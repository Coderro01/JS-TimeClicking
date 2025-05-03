//This Timer Not a counter

const endDate = "- - 2025 00:00 AM"
const input = document.querySelectorAll("input")



document.getElementById("end_date").innerText = endDate;


function clock() {
    const end = new Date(endDate) // Kab tk ke liye chlana h
    const now = new Date() //Current date after putting the kb tk chlana h
    console.log(end)
    console.log(now)

    const antar = (end - now) / 1000 //convert milisec into Sec
    if (antar < 0) return;


    console.log(antar);
    // console.log(Math.floor(antar / 3600 / 24));
    input[0].value = (Math.floor(antar / 3600 / 24));
    input[1].value = (Math.floor(antar / 3600) % 24);
    input[2].value = (Math.floor(antar / 60) % 60);
    input[3].value = (Math.floor(antar) % 60);


}
//initial ONLY call when page reload
clock()


setInterval(
    function () {
        clock()
    }, 1000
)