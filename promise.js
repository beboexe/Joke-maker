let btn = document.getElementById("jokebtn");
let jokePara= document.getElementById("joke");

btn.addEventListener("click", async () => {
  jokePara.textContent = "Loading...";
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokePara.textContent = `${data.setup} - ${data.punchline}`;
  } catch (err) {
    jokePara.textContent = "Error fetching joke!";
  }
});
