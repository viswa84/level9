// write js code here corresponding to matches.html

// write js code here corresponding to favourites.html




var arr1 = JSON.parse(localStorage.getItem("schedule")) || []

vishwanth(arr1)



  function filtrbyvenue() {

    var select = document.querySelector("#filterVenue").value 

    console.log(select)

    var filtervenue = arr1.filter(function(el){

        return el.venue == select
    })

    vishwanth(filtervenue)


  }


function vishwanth(data){

    document.querySelector("tbody").innerHTML =""

    data.forEach(function(el){

        var tr = document.createElement("tr")


        var td1 = document.createElement("td")
        td1.innerText=el.matchno
        
        var td2 = document.createElement("td")
        td2.innerText=el.team_a
        
        var td3 = document.createElement("td")
        td3.innerText=el.team_b
        var td4 = document.createElement("td")
        td4.innerText=el.date
        
        var td5 = document.createElement("td")
        td5.innerText=el.venue
        
        var td6 = document.createElement("td")
        td6.innerText="Favourites" ;
        td6.style.color="green"
        td6.style.cursor="pointer" ;
        td6.addEventListener("click",function(){

            vinod(el)
        })

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)
    

    })

    var bag = JSON.parse(localStorage.getItem("favourites")) || []

    console.log(bag)

    function vinod(el){
        bag.push(el)

        localStorage.setItem("favourites",JSON.stringify(bag))


    }

   
}