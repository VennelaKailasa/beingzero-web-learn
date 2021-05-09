google.charts.load('current',{'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
var cc,cf,mp,lc
function totalsum(){
     cc=document.getElementById('ccmarks').value;
     cf=document.getElementById('cfmarks').value;
     mp=document.getElementById('mpmarks').value;
     lc=document.getElementById('lcmarks').value;
     var name=document.getElementById('name').value;
    var total=parseInt(cc)+parseInt(cf)+parseInt(mp)+parseInt(lc);
    document.getElementById('total').innerHTML="The total marks of " + name + " are :" + total;

    drawChart();
    
    

}
function drawChart()
{

    var data=google.visualization.arrayToDataTable([
        ['Website','Score'],
        ['Codechef',parseInt(cc)],
        ['Codeforces',parseInt(cf)],
        ['Mentorpick',parseInt(mp)],
        ['Leetcode',parseInt(lc)]

    ]);
    var opt={'title':'Score','height':550,'width':550 };
    var chart =new
    google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data,opt);

}
