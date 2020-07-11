$(document).ready(function () {
    
var s1 = ["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple"]
var s2=["some students like to study in the night","at night some students like to study"]
var s3=["John and Mary went to church","Mary and John went to church"]
var s4=["John went to church after eating",	"after eating John went to church","John after eating went to church"]
var s5=["did he go to market","he did go to market"]
var s6=["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"]
var s7=["John goes to the library and studies","John studies and goes to the library"]
var s8=["John ate an apple so did she","she ate an apple so did John"]
var s9=["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"]
var s10=["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]


var sen1=["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"]
var sen2=["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"]
var sen3=["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"]
var sen4=["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"]
var sen5=["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया"	,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"]
var sen6=["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"]
var sen7=["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]

    function reform() {
        $("#re-form").click(function () {
            // alert(9);
            $("#user-start").hide();
            $("#reform").empty();
            $("#user-input").empty();    
            $("#btns").empty();
            clickword();
        })

    }
    
    function createRandom(RandEng) {
        var idx = Math.floor(Math.random() * RandEng.length);
        arrE = RandEng[idx];
        var w_idx = Math.floor(Math.random() * arrE.length);
        arr1 = arrE[w_idx].split(" ");
        return arr1;
    }    
    function shuffle(arr1) {
        var ctr = arr1.length, temp, index;

        // While there are elements in the array
        while (ctr > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
            ctr--;
            // And swap the last element with it
            temp = arr1[ctr];
            arr1[ctr] = arr1[index];
            arr1[index] = temp;
        }
        return arr1;
    }
    function createButtons(list_of_buttons) {
        for (let i = 0; i < list_of_buttons.length; i++) {
            
            var btn = document.createElement("button");
            btn.id = i.toString();
            btn.className = "word";
            btn.textContent = list_of_buttons[i];
            $("#btns").append(btn);
            
        }
    }
    function showOff(id) {
        id1 = "#" + id.toString();
        var value = $(id1).text();
        console.log(value);
        $("#user-input").append("<p>" + value + " " + "</p>");
        if ($("#user-input").children().length == 1) {
            var reform = document.createElement("button");
            reform.id = "re-form";
            reform.textContent = "Re-form the sentence";
            $("#reform").html(reform);
        }
    }
    
    function right_wrong() {
        
        $("#checked").click(function () {
            if (arrE.includes($("#user-input").text().trim())) {
                $("#result").css("color", "green");
                $("#result").text("Right Answer!!!");
                
            }
            else {
                $("#result").css("color", "red");
                $("#result").text("Wrong Answer!!!")
                $("#getcorrect").text("Get Correct Sentence");
                $("#getcorrect").show();
                $("#getcorrect").click(function () {
                    $("#answers").toggle();
                    if ($("#getcorrect").text() == "Get Correct Sentence") {
                        $("#getcorrect").text("Hide the correct Sentence");
                    }
                    else {
                        $("#getcorrect").text("Get Correct Sentence");
                    }
                })
            }
        })
    }
    
    function check() {
        console.log($("#btns").children().length);
        if ($("#btns").children().length === 0 ) {
            var check = document.createElement("button");
            check.id = "checked";
            check.textContent = "Check correctness of sentence";
            $("#check").html(check);
        }

    }
    function clickword() {
        
        if ($("#lang").val() == "english") {
            $("#btns").html(createButtons(list_of_buttons));
        }
        if($("#lang").val() == "hindi") {
            $("#btns").html(createButtons(list_of_buttons1));
        }
        
        $(".word").click(function () {
            $("#user-start").css("display", "block");
            showOff(this.id);
            document.getElementById(this.id).remove();
            reform();
            check();
            right_wrong();
        })
    }
    
    $("#lang").on("change", function () {
        console.clear();
        $("#user-start").hide();
    if ($(this).val() == "null") {
        alert("Select a language");
        return false;
    }
    
    if ($(this).val() == "english" || $(this).val() == "hindi") {
        $("#start-1").html("<p>" + "Form a sentence (Declarative or Interrogative or any other type) from the given words" + "</p>");
        $("#start-2").html("<p>" + "(select the buttons in proper order)" + "</p>");
    }
    if ($(this).val() == "english") {
        console.clear();
        var RandEng = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
        list_of_buttons = shuffle(createRandom(RandEng));
        $("#user-input").empty();
        $("#reform").empty();
        $("#check").empty();
        $("#result").empty();
        $("#getcorrect").css("display", "none");
        $("#answers").css("display", "none");
        $("#btns").html("");
        
        for (var item of arrE) {
            $("#answers").append("<p>" + item + "</p>");
        }
        clickword();
        
    }

    if ($(this).val() == "hindi") {
        console.clear();
        var RandHin = [sen1, sen2, sen3, sen4, sen5, sen6, sen7];
        list_of_buttons1 = shuffle(createRandom(RandHin));
        $("#user-input").empty();
        $("#reform").empty();
        $("#check").empty();
        $("#result").empty();
        $("#getcorrect").css("display", "none");
        $("#answers").css("display", "none");
        $("#btns").html("");
        $("#btns").html(""); 
        for (var item of arrE) {
            $("#answers").append("<p>" + item + "</p>");
        }
        clickword();
    
    }
});

});