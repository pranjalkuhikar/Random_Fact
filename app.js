let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let fact = await getFact();
  let p = document.querySelector("p");
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFact() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (err) {
    console.log("Error :- ", err);
    return "No Fact Found";
  }
}
