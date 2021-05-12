
        // if(typeof(Storage)!=="undefined")
        // {
        // localStorage.setItem("firstname","alen");
        // document.getElementById("result").innerHTML=localStorage.getItem("firstname");
        // }
        // else
        // {
        //     document.getElementById("result").innerHTML="Sorry your browser doesn't support local storage";
        // }
        function countofcliks(){
            if(localStorage.countofclicks){
                localStorage.countofclicks=Number(localStorage.countofclicks)+1;
            }
            else{
                localStorage.countofclicks=1;
            }
            document.getElementById("result").innerHTML="you have pressed " +localStorage.countofclicks;
        }
        function clearcount(){
            window.localStorage.clear();
            document.getElementById("result").innerHTML="";
        }
    