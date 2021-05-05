function update()
{
    var g;
    g=document.getElementById("green").value;
    document.getElementById("Green").innerHTML=g;
    b=document.getElementById("blue").value;
    document.getElementById("Blue").innerHTML=b;
    r=document.getElementById("red").value;
    document.getElementById("Red").innerHTML=r;
    var c='rgb('+ r +','+ g + ',' + b +')'
document.getElementById("check_color").innerHTML=c;
document.getElementById("check_color").style.backgroundColor=c;

}