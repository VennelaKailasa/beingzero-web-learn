$(document).ready(function(){
    $(".container").hide()
    $("#strt").click(function(){
        $(".container").show();

    })
    var numbers=[];
    var numslen=90;
    for(let i=1;i<91;i++)
    numbers.push(i);
    $("#numbtn").click(function(){
        if(numslen==0)
        alert("Click reset to restart the game");
        else{
            var pos=Math.floor(Math.random()*numslen);
            console.log(pos);
            var n=numbers[pos];
            $("#num").html(n);
            numbers[pos]=numbers[numslen-1];
            numslen--;
            $("#"+n).html(n);
            }
    })
    $("#resetbtn").click(function(){
        
        for(let i=1;i<91;i++)
        numbers[i-1]=i;
        numslen=90;
        $("#num").html("0");
        for(let i=1;i<91;i++)
        {
        $("#"+i).css("background-color","white");
        $("#"+i).html("");
        }
        $(".container").hide()
    })

});


