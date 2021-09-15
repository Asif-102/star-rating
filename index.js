const fetchApi = async()=>{
    const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ranga-store-api/main/ranga-api.json');
    const data = await res.json();
    showStar(data);
}

const showStar = (data) =>{
    data.forEach(element => {
        const initialRate = ((element.rating.rate)+'').split(".");
        let [firstRate, secondRate] = initialRate;
        if(secondRate === undefined){
            secondRate='0';
        }
        const newFirstRate = +firstRate;
        const newSecondRate = +secondRate;
        
        const ul = document.getElementById('star');
        const li = document.createElement('li');
        li.classList.add("star-color");

        for(let i=1; i<= newFirstRate; i++){
            const span = document.createElement('span');
            span.innerHTML=`<i class="fas fa-star"></i>`;
            li.appendChild(span);
        }
        const span = document.createElement('span');
        if(newSecondRate >0 && newSecondRate <=5){
            span.innerHTML=`<i class="far fa-star"></i>`;
        }
        else if(newSecondRate >5 && newSecondRate <10){
            span.innerHTML=`<i class="fas fa-star-half-alt"></i>`;
        }
        li.appendChild(span);
        ul.appendChild(li);
    });
}

fetchApi();