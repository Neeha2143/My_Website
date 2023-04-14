function NavHover(Elem)
{
    Elem.style.color = "#14f15e";
}

function NavOut(Elem)
{
    Elem.style.color = "white";
}


function ButtonHover(Elem)
{
    Elem.style.color = "rgba(255, 158, 231, 0.986)";
}

function ButtonOut(Elem)
{
    Elem.style.color = "white";
}

function LinkHover(Elem)
{
    Elem.style.backgroundColor = "rgb(228, 215, 40)";
}

function LinkOut(Elem)
{
    Elem.style.backgroundColor = "transparent";
}

function ClinkHover(Elem)
{
    Elem.style.color = "brown";
}

function ClinkOut(Elem)
{
    Elem.style.backgroundColor = "transparent";
    Elem.style.color = "black";
}

var NameArr = new Array();
var SkillDict = {};  
var profDict = {}; 

function AppendRow() {      //for the dynamic addition of table
          
    var name = document.getElementById("name").value;
    var skill = document.getElementById("skill").value;
    var table = document.getElementById("FormTable");
    var prof = document.getElementById("level").value;
    
    if( name === "")
    {
        alert("Name cannot be empty");
        return;
    }

    if( skill === "")
    {
        alert("skill cannot be empty");
        return;
    }

    NameArr.push(name);
    SkillDict[name] = skill;
    profDict[name] = prof;
    
    var Numrows = table.rows.length;
    var row = table.insertRow(Numrows);
    
    row.insertCell(0).innerHTML= name;
    row.insertCell(1).innerHTML= skill;
    row.insertCell(2).innerHTML= prof; 
}

//////////////////////////////////////////

var ptr = 0;

function Display()
{
    var NumSlide = document.getElementsByClassName("pics");

    for ( var i = 0; i < NumSlide.length; i++ )
    {
        NumSlide[i].style.display = "none";  
    }

    NumSlide[ptr].style.display = "block";  
}

function Increment()
{
    ptr++;
    ptr %= 5;
    Display(ptr);
}

function Decrement()
{
    ptr--;
    ptr += 5;
    ptr %= 5;
    
    Display();
}

