var counter = 0;

var zahl = 1;

var score = 0;

function Start() {
    $("#btn4").hide();
    $('#btn6').hide();
    $('#scoretext').hide();
    $('#scorenumber').hide();

    $('#btn0').toggle(450);
    $('#btn1').delay(250).toggle(500);
    $('#btn2').delay(500).toggle(500);
    $('#btn3').delay(750).toggle(500);

    counter = 0;

    score = 0;

    zahl = 1;

    var element = document.getElementById("zaehler");
    element.innerHTML = "Question " + zahl + " of 10";

    var element = document.getElementById("text");
    element.innerHTML = neue_frage[0].frage;

    var x = document.getElementById("choice0");
    x.innerHTML = neue_frage[0].auswahl[0];

    var e = document.getElementById("choice1");
    e.innerHTML = neue_frage[0].auswahl[1];

    var y = document.getElementById("choice2");
    y.innerHTML = neue_frage[0].auswahl[2];

    var r = document.getElementById("choice3");
    r.innerHTML = neue_frage[0].auswahl[3];



};

function Check(clicked_id){
    var answer = document.getElementById(clicked_id).innerText;

    if(answer == neue_frage[counter].antwort){
        $('#btn0').toggle(450);
        $('#btn1').delay(250).toggle(500);
        $('#btn2').delay(500).toggle(500);
        $('#btn3').delay(750).toggle(500);

        var richtig = document.getElementById("text");
        richtig.innerHTML = "<center>Spot on!</center>" + "<br>";

        var explanation = document.getElementById("text");
        explanation.innerHTML += neue_frage[counter].erkl;

        counter++

        score++

        zahl++

        $('#btn5').delay(550).toggle(450);

        move();

        }

    else {
        $('#btn0').toggle(450);
        $('#btn1').delay(250).toggle(500);
        $('#btn2').delay(500).toggle(500);
        $('#btn3').delay(750).toggle(500);

        var falsch = document.getElementById("text");
        falsch.innerHTML = "<center>Me thinks not ...</center>" + "<br>";

        var explanation = document.getElementById("text");
        explanation.innerHTML += neue_frage[counter].erkl;

        $('#btn5').delay(550).toggle(450);

        counter++

        zahl++


    };
};

function Weiter() {
    if(counter < 10){

        var element = document.getElementById("zaehler");
        element.innerHTML = "Question " + zahl + " of 10";

        var element = document.getElementById("text");
        element.innerHTML = neue_frage[counter].frage;

        $('#btn5').hide(250)
        $('#btn0').toggle(450);
        $('#btn1').delay(250).toggle(500);
        $('#btn2').delay(500).toggle(500);
        $('#btn3').delay(750).toggle(500);

        var x = document.getElementById("choice0");
        x.innerHTML = neue_frage[counter].auswahl[0];

        var e = document.getElementById("choice1");
        e.innerHTML = neue_frage[counter].auswahl[1];

        var y = document.getElementById("choice2");
        y.innerHTML = neue_frage[counter].auswahl[2];

        var r = document.getElementById("choice3");
        r.innerHTML = neue_frage[counter].auswahl[3];
    }
    else {
        End();
    };

};

function End(){
    $('#btn5').hide(250)
    $('#scorenumber').toggle();
    var element = document.getElementById("scorenumber");
    element.innerHTML = score;


    $('#scorenumber').animate({fontSize:"60px"}, 400);

    //$('#scoretext').delay(350).toggle(400);

    var element = document.getElementById("zaehler");
    element.innerHTML = "Results";

    if(score < 4){
        var element = document.getElementById("text");
        element.innerHTML = "<center>Now, now ... You can do better than that! Try again!";
    }
    else if(score < 8){
        var element = document.getElementById("text");
        element.innerHTML = "<center>Alright, alright - Good job! That's some solid quizzing there. Give it another go!";
    }
    else{
        var element = document.getElementById("text");
        element.innerHTML = "<center>Tallyho, ole chap! Congratulations, that's some mighty fine knowledge there!";
    };


    //new quiz
    $('#btn6').delay(400).toggle(400);

};


function Fragen(frage, auswahl, antwort, erkl) {
    this.frage = frage;
    this.auswahl = auswahl;
    this.antwort = antwort;
    this.erkl = erkl;
    }

var neue_frage = [
    new Fragen("<i>Riot on an Empty Street</i> was Kings of Convenience's second album. The Norwegian combo was able to secure what contributing artist to sing on their record?",["Feist","Regina Spector","Lisa Hannigan","Bjoerk"],"Feist","Feist sang the lead vocals on the tracks 'Know-how' and 'The Build-Up'. The album sold over half a million copies in Europe and the United States."),
    new Fragen("The Reykjanes peninsula in Iceland is a region with a history of intense volcanic activity. The last active period began in the 10th century and lasted for how many years?",["10","100","300","500"],"300","300 years! The last active period extended into the 13th century. Because the region is beset by five distinct volcanic systems, lava fountains and eruptive episodes feed into each other and sputter along. Researchers are warning that the region has seen increased activity recently."),
    new Fragen("Due the to COVID-19 pandemic, football leagues across Europe are on pause. The German Bundesliga has moved its games online using what gaming franchise to stage eFootball matches?",["Pro Evolution Soccer", "Fifa 20", "Fifa 94", "Netherhall"],"Fifa 20","The Bundesliga Home Challenge broadcasts over YouTube and Twitter every weekend. A professional player and an e-sports player team up in best-of-three matchups between Bundesliga clubs on Fifa 20."),
    new Fragen("Netflix remains one of the world's most popular streaming services. While most people watch their favourite shows and films on their own this new browser add-on allows you to watch Netflix along with friends and family.",["Netflix & Chill","Netflix Party","Disney+","Napster"],"Netflix Party","The add-on Netflix Party wasn't made by Netflix. Some nifty kids discovered an open door in Netflix's control system and came up with the idea of shared watching."),
    new Fragen("Julia Child was perhaps the first TV chef, bringing the mastery of what European cuisine to American households in 1963?",["German cooking","Italian cooking","Danish cooking","French cooking"],"French cooking","<i>Mastering the Art of French Cooking</i> was Julia Child's breakthrough publication in 1961. Child shaped American food culture and remains an icon to this day. She died in 2004 at the age of 91."),
    new Fragen("Matt Leacock is the creater of the popular board game Pandemic. In keeping with the cooperative message of the game, Leacock donates 5% of his royalties for Pandemic products to which charity?",["Red Crescent","Red Cross","Doctors Without Borders","UNICEF"],"Doctors Without Borders","It's Doctors Without Borders. Since 2004, Leacock also donates 5% of his royalties for <i>Thunderbirds</i> products to the charity International Rescue Committee."),
    new Fragen("November 9 is a complex anniversary in Germany as it combines a series a key moments in the country's history. Which of these is not associated with that date?",["Fall of the Wall","Night of Broken Glass","Killing of Rosa Luxemburg","Proclamation of the Socialist Republic"],"Killing of Rosa Luxemburg","The philosopher Rosa Luxemburg was assassinated along with Karl Liebknecht by right-wing paramilitaries in Berlin on January 15, 1919. The Fall of the Wall (1989), the Night of Broken Glass (1938), the proclamation of a socialist republic (1919) all occurred on November 9."),
    new Fragen("Teresa Heinz is an American-Portuguese business woman and partial inheritor of the Heinz Ketchup imperium. In 2004, Heinz almost took on which other American job?",["First Lady","CEO of Coca Cola","Condiments Protection Tsar","Foreign Secretary"],"First Lady","First Lady! Teresa Heinz is married to John Kerry, who ran as the Democratic presidential candidate and lost to George W. Bush in the 2004 US presidential elections."),
    new Fragen("Season 10 of<i>The Great British Bake Off</i> ended with David Atherton winning the competition with which 'edible illusion'?",["Wedding parlor","Mexican cactus","Open-cut watermelon","Picnic basket"],"Picnic basket","Atherton won the show with a picnic basket that featured cakes shaped like cheese blocks and fig rolls in the shape of sausage rolls. His victory was the first ever for a candidate without having won 'Star Baker' once during the show."),
    new Fragen("Without a doubt, this Indiana Jones feature film outclasses all other movies in the franchise:",["Raiders of the lost Ark", "Last Crusade", "Crystal Ball", "Temple of Doom"],"Last Crusade","Nazis, biblical treasures, and a father-son conflict between Sean Connery and Harrison Ford, <i>Indiana Jones and the Last Crusade</i> has them all."),
];
