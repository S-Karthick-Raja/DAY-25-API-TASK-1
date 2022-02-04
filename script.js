async function GetData() {
  const dataFetch = await fetch("https://meowfacts.herokuapp.com/");
  const data = await dataFetch.json();

  const body = document.querySelector(".quotes");
  body.innerHTML = data.data;
}

GetData();
