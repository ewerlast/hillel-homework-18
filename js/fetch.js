function fetch(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "json";

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
                return;
            }
            reject(new Error(`error :${xhr.status}`));
        }
        xhr.send();

    })
}





function chechBackEnd(arr) {


    function run() {
        fetch(arr)
            .then((data) => {
                let dataResult = data;
                let body = document.querySelector('body');
                let ul = document.createElement('ul');


                if (dataResult.results) {
                    for (let i = 0; i < dataResult.results.length; i++) {
                        if (typeof(dataResult.results[i]) === "object" && dataResult.results[i].hasOwnProperty('name')) {

                            let li = document.createElement('li');
                            li.innerHTML = `${dataResult.results[i].name}`;
                            ul.append(li)
                        }


                    }

                    body.appendChild(ul)
                }
            })

        .catch((error) => console.error(error))



    }
    return run;
}