function getfuncion(){
    let link = ``;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
    console.log(response)
    let daticos=response.data
    console.log(daticos)
        }
    })
    }