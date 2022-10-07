function loadEvents()
{
    document.getElementById("div1").addEventListener('click', () => cambiacolor(1));
    document.getElementById("div2").addEventListener('click', () => cambiacolor(2));
    document.getElementById("div3").addEventListener('click', () => cambiacolor(3));
    document.getElementById("Reset").addEventListener('click', inicio);
}
function inicio()
{
    x = 0;

    div1Obj=document.getElementById("div1");
    div2Obj=document.getElementById("div2");
    div3Obj=document.getElementById("div3");

    div1Obj.style.backgroundColor = "red";
    div2Obj.style.backgroundColor = "blue";
    div3Obj.style.backgroundColor = "yellow";
    
    document.getElementById("Enhorabuena").innerHTML = "";
}
function cambiacolor(c)
{
    if (x == 0)
    {
        if(c == 1)
        {
            c = document.getElementById("div1");
        }
        else if(c == 2)
        {
            c = document.getElementById("div2");
        }
        else
        {
            c = document.getElementById("div3");
        }

        if(c.style.backgroundColor == "red")
        {
            c.style.backgroundColor = "blue";
        }
        else if(c.style.backgroundColor == "blue")
        {
            c.style.backgroundColor = "yellow";
        }
        else
        {
            c.style.backgroundColor = "red";
        }  

        comprobacion()
    }
}
function comprobacion()
{
    div1Obj=document.getElementById("div1");
    div2Obj=document.getElementById("div2");
    div3Obj=document.getElementById("div3");

    if(div1Obj.style.backgroundColor == div2Obj.style.backgroundColor)
    {
        if(div1Obj.style.backgroundColor == div3Obj.style.backgroundColor)
        {
            aciertos(a)
        }
    } 
}
function aciertos()
{
    document.getElementById("Enhorabuena").innerHTML = "Enhorabuena";
    
    a = a + 1;
    document.getElementById("Aciertos").innerHTML = "Número de aciertos: " + a;
    x = 1;
}
