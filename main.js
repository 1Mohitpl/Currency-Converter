
const populate =  async(value, currency) =>{
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_PSEsYB5KqD5hMzrgprDq8137CzKq8hua82lo0yNv";

    let str = "";
     
    const currData = await fetch(url);
     
    const realdata = await currData.json();
   document.querySelector(".output").style.display = "block";
    
    for (let key of Object.keys(realdata["data"])) {
        str += `
        <tr>
            <td>${key}</td>
            <td>${realdata["data"][key]["code"]}</td>
            <td>${realdata["data"][key]["value"]}</td>
        </tr>`;
    }

    const data = document.querySelector("tbody");
    data.innerHTML = str;
    
}



const button = document.querySelector(".btn").addEventListener("click", (e) =>{
      e.preventDefault();
       console.log("button is click");
       
       const value = parseInt(document.querySelector("input[name='quantity']").value);
       const currency = document.querySelector("select[name='Currency']").value;
       if(value){
        populate(value, currency);
       }
       
})