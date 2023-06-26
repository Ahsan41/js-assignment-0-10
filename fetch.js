 var fetchcountry = (country)=>{
var getCountry = fetch (`https://restcountries.com/v3.1/name/${country}`)
        .then(function(response){
            console.log(Response) 
            return response.json()
        })
        .then(function(data){
            console.log(data)
            uiOfCountry(data[0])

        })
    }

    const uiOfCountry = (countrydata)=>{
     console.log(countrydata)

     const img = document.querySelector(`#img`) 
     const cardtitle = document.querySelector(`.card-title`) 
     const cardtext = document.querySelector(`.card-text`)
      
     img.src = countrydata.flags.png
     cardtext.textContent = (`the languages spoken in this country are ${countrydata.languages.eng} and ${countrydata.languages.urd}`)

     cardtitle.textContent = countrydata.altSpellings[1]
    }

    fetchcountry(`pakistan`)
