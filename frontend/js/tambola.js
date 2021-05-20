$(document).ready(function(){
    $(".container").hide()
    $("#strt").click(function(){
        $(".container").show();

    })
    var numbers=[];
    var numslen=100;
    for(let i=1;i<101;i++)
    numbers.push(i);
    $("#numbtn").click(function(){
        if(numslen==0)
        alert("Click reset to restart the game");
        else{
            var pos=Math.floor(Math.random()*numslen);
            var n=numbers[pos];
            $("#num").html(n);
            numbers[pos]=numbers[numslen-1];
            numslen--;
            $("#"+n).css("background-color","black");


        }
    })
    $("#resetbtn").click(function(){
        
        for(let i=1;i<101;i++)
        numbers[i-1]=i;
        numslen=100;
        $("#num").html("0");
        for(let i=1;i<101;i++)
        {
        $("#"+i).css("background-color","white");
        }
        $(".container").hide()

    })

});


