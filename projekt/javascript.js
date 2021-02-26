function odliczanie()
	{
		if (sessionStorage.sekunda) {
        	    sessionStorage.sekunda = Number(sessionStorage.sekunda) + 1;
    		} else {
        	    sessionStorage.sekunda = 1;
    		}
		if (sessionStorage.sekunda > 59){
		    if (sessionStorage.minuta) {
        	        sessionStorage.minuta = Number(sessionStorage.minuta) + 1;
			sessionStorage.sekunda = 0;
    		    } else {
        	        sessionStorage.minuta = 1;
			sessionStorage.sekunda = 0;
    		    }
		}
		if (sessionStorage.minuta > 59){
		    if (sessionStorage.godzina) {
        	        sessionStorage.godzina = Number(sessionStorage.godzina) + 1;
			sessionStorage.minuta = 0;
    		    } else {
        	        sessionStorage.godzina = 1;
			sessionStorage.minuta = 0;
    		    }
		}
		if (typeof(sessionStorage.godzina) !== "undefined"){
		    document.getElementById("zegar").innerHTML = "Odwiedzales ta karte przez " + sessionStorage.godzina + " godzin " + sessionStorage.minuta + " minut " + sessionStorage.sekunda + " sekund.";
		}
		else if(typeof(sessionStorage.minuta) !== "undefined"){
		    document.getElementById("zegar").innerHTML = "Odwiedzales ta karte przez " + sessionStorage.minuta + " minut " + sessionStorage.sekunda + " sekund.";
		}
		else{
		    document.getElementById("zegar").innerHTML = "Odwiedzales ta karte przez " + sessionStorage.sekunda + " sekund.";
		}
		setTimeout("odliczanie()",1000);
	}

function pobierzKolor(){
    sessionStorage.klub = document.getElementById("ulubiony").value;
    zmienKolor();
}
function zmienKolor(){
    var warstwa = document.getElementsByClassName("tytul")[0];
    var titles = document.querySelectorAll('body div.container main article section header h2');
    if(sessionStorage.klub == "Chelsea"){
        document.getElementById('logo').src = 'cfc.jpg';
	sessionStorage.kolor = "#034694";
	titles[0].style.color = "#034694";
	titles[1].style.color = "#034694";
	titles[2].style.color = "#034694";
	warstwa.style.color = "#034694";
    }
    else if(sessionStorage.klub == "Manchester United"){
        document.getElementById('logo').src = 'utd.jpg';
        sessionStorage.kolor = "#DA291C";
	titles[0].style.color = "#DA291C";
	titles[1].style.color = "#DA291C";
	titles[2].style.color = "#DA291C";
	warstwa.style.color = "#DA291C";
	
    }
    else if(sessionStorage.klub == "Manchester City"){
        document.getElementById('logo').src = 'city.jpg';
        sessionStorage.kolor = "#6CABDD";
	titles[0].style.color = "#6CABDD";
	titles[1].style.color = "#6CABDD";
	titles[2].style.color = "#6CABDD";
	warstwa.style.color = "#6CABDD";
	
    }
    else if(sessionStorage.klub == "Liverpool"){
        document.getElementById('logo').src = 'live.jpg';
        sessionStorage.kolor = "#C8102E";
	titles[0].style.color = "#C8102E";
	titles[1].style.color = "#C8102E";
	titles[2].style.color = "#C8102E";
	warstwa.style.color = "#C8102E";
	
    }
    else if(sessionStorage.klub == "Arsenal"){
        document.getElementById('logo').src = 'ars.jpg';
        sessionStorage.kolor = "#EF0107";
	titles[0].style.color = "#EF0107";
	titles[1].style.color = "#EF0107";
	titles[2].style.color = "#EF0107";
	warstwa.style.color = "#EF0107";
	
    }
    else if(sessionStorage.klub == "Tottenham"){
        document.getElementById('logo').src = 'tot.jpg';
        sessionStorage.kolor = "#132257";
	titles[0].style.color = "#132257";
	titles[1].style.color = "#132257";
	titles[2].style.color = "#132257";
	warstwa.style.color = "#132257";
	
    }
}
function wyczysc(){
	sessionStorage.removeItem("klub");
	localStorage.removeItem('dni');
	localStorage.removeItem('data');
	location.reload();
}
function dodajAkapit(){
    var p = document.createElement("p");
    var div1 = document.createElement("div");
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	var btnT = document.createElement("input");
	var btn = document.createElement("input");
	var btnDP = document.createElement("input");
	var btnWyslij = document.createElement("input");
	var br1 = document.createElement("br");
	var br2 = document.createElement("br");
	div1.id = "jsDIV";
	div2.id = "jqUI";
	div3.id = "jqDialog";
	btnT.id = "ulubiony";
	btnWyslij.setAttribute("type","submit");
	btnWyslij.setAttribute("onclick","pobierzDate();pobierzKolor();pokazDialog();")
	btnWyslij.setAttribute("value","Wyślij");
	btnT.setAttribute("type","text");
	btnT.setAttribute("maxlength","20");
	btnT.setAttribute("size","70");
	btnT.setAttribute("value","Podaj nazwę swojego ulubionego klubu z Top 6");
	btnDP.id = "datepicker";
	btnDP.setAttribute("maxlength","20");
	btnDP.setAttribute("size","70");
	btnDP.setAttribute("value","Zaznacz kiedy gra Twój ulubiony klub i sprawdź ile czasu zostało do meczu!");
	btn.setAttribute("onclick","wyczysc()");
	btn.setAttribute("type","submit");
	btn.setAttribute("value","Usuń zmiany");
	p.appendChild(div1);
	div1.appendChild(div2);
	div1.appendChild(div3);
	div2.appendChild(btnT);
	div2.appendChild(br1);
	div2.appendChild(btnDP);
	div2.appendChild(br2);
	div2.appendChild(btnWyslij);
	div1.appendChild(btn);
	
    document.getElementsByTagName("article")[0].appendChild(p);
}
function pobierzDate(){
	localStorage.data = $("#datepicker").datepicker( 'getDate' );
	obliczDni();
}
function obliczDni(){
	var dane = localStorage.data;
	var data = new Date(dane);
	const dzis = new Date();
	var roznica = data.getTime() - dzis.getTime();
	roznica = Math.ceil(roznica/ (1000 * 3600 * 24));
	localStorage.dni = roznica;
	if (localStorage.dni == 0){
		localStorage.removeItem('dni');
	}
}
function dopiszIleDni(){
	if(localStorage.dni > 0){
		var tekst = document.createTextNode("Do ostatnio zaznaczonego meczu zostało " + localStorage.dni + " dni.");
		document.getElementById('ls').appendChild(tekst);
	}	
}