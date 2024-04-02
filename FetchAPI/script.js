const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



const getFacts = async() =>{
    console.log("getting data....");
    let resp = await fetch(URL);
    console.log(resp);//JSON format
    let data = await resp.json();
    // console.log(data);
    factPara.innerText = data[0].text;
};

btn.addEventListener("click", getFacts);