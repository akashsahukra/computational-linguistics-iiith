$(document).ready(function () {

    
var sentence1=["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"]
var sentence2=["some students like to study in the night","at night some students like to study"]
var sentence3=["John and Mary went to church","Mary and John went to church"]
var sentence4=["John went to church after eating",	"after eating John went to church","John after eating went to church"]
var sentence5=["did he go to market","he did go to market"]
var sentence6=["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"]
var sentence7=["John goes to the library and studies","John studies and goes to the library"]
var sentence8=["John ate an apple so did she","she ate an apple so did John"]
var sentence9=["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"]
var sentence10=["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her"	,"yesterday I bought a book that I told her"]
var alleng=["John ate an apple before afternoon","John goes to the library and studies","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"]


var sen1=["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"]
var sen2=["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"]
var sen3=["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"]
var sen4=["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"]
var sen5=["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया"	 ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"]
var sen6=["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"]
var sen7=["एक बड़ी सी किताब वहाँ है	","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]
var allhin = ["राम और श्याम बाजार गयें", "राम सोया और श्याम भी", "मैंने उसे बताया कि राम सो रहा है", "राम खाकर सोया", "बिल्लियों को मारकर कुत्ता सो गया", "एक लाल किताब वहाँ है", "एक बड़ी सी किताब वहाँ है	"]
    
    function createbuttons(list_of_buttons) {
        for (let i = 0; i < list_of_buttons.length; i++) {
            // $("<button id=" + i.toString() + ">" + list_of_buttons[i] + "</button>").appendTo("#btns");
            
            var btn = document.createElement("button");
            btn.id = i.toString();
            btn.className = "word";
            btn.textContent = list_of_buttons[i];
            $("#btns").append(btn);
            
        }
    }

    
    function Reform() {
        if ($("#user-input").html() == false && $("#reform").children().length == 0){
            // alert(345);
            var reform = document.createElement("button");
            reform.setAttribute("onclick", )
            reform.id = "re-form";
            reform.textContent = "Re-form the sentence";
            $("#reform").append(reform);
        }
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
    function showOff(id) {
        id1 = "#" + id.toString();
        var value = $(id1).text();
        alert(67);
        console.log(value);
        $("#user-input").append(value + " ");
    }


    function English() {
        $("<p>" + "Form a sentence (Declarative or Interrogative or any other type) from the given words" + "</p>").appendTo(".start-1");
        $("<p>" + "(select the buttons in proper order)" + "</p>").appendTo(".start-2");
        var sentences = "John ate an apple before afternoon    before afternoon John ate an apple    John before afternoon ate an apple    some students like to study in the night    at night some students like to study    John and Mary went to church    Mary and John went to church    John went to church after eating    after eating John went to church    John after eating went to church    did he go to market    he did go to market    the woman who called my sister sells cosmetics    the woman who sells cosmetics called my sister    my sister who sells cosmetics called the woman    my sister who called the woman sells cosmetics    John goes to the library and studies    John studies and goes to the library    John ate an apple so did she    she ate an apple so did John    the teacher returned the book after she noticed the error    the teacher noticed the error after she returned the book    after the teacher returned the book she noticed the error    after the teacher noticed the error she returned the book    she returned the book after the teacher noticed the error    she noticed the error after the teacher returned the book    after she returned the book the teacher noticed the error    after she noticed the error the teacher returned the book    I told her that I bought a book yesterday    I told her yesterday that I bought a book    yesterday I told her that I bought a book    I bought a book that I told her yesterday    I bought a book yesterday that I told her    yesterday I bought a book that I told her".split("    ")
        console.log(sentences.length);
        var idx = Math.floor(Math.random() * sentences.length);
        var arr1 = sentences[25];
        console.log(idx);
        console.log(arr1);
        var list_of_buttons = shuffle(arr1.split(" "));
        console.log(list_of_buttons);
        // createbuttons(list_of_buttons);
        for (let i = 0; i < list_of_buttons.length; i++) {
            // $("<button id=" + i.toString() + ">" + list_of_buttons[i] + "</button>").appendTo("#btns");
            
            var btn = document.createElement("button");
            btn.id = i.toString();
            btn.className = "word";
            btn.textContent = list_of_buttons[i];
            $("#btns").append(btn);
            
        }
        $(".word").click(function () {
            Reform();

            alert("HI");
            $("#user-input").show();
            Reform();
            if ($.isNumeric(this.id)) {
                $("#user-start").css("display", "block");

                // $("<p>" + "Formed Sentence (after selecting words):" + "</p>").appendTo("#start-3");
                showOff(this.id);
                document.getElementById(this.id).style.display = "none";
                document.getElementById("btns").removeChild(document.getElementById(this.id));


                if ($("#btns").children().length === 0) {
        
                    var check = document.createElement("button");
                    check.id = "check-btn";
                    check.textContent = "Check the correctness of sentence";
                    $("#check").append(check);
                    $("#check-btn").click(function () {
        
                        if (sentences.includes($("#user-input").text().trim())) {
                            $("#result").text("Right answer");
                        }
                        else {
                            $("#result").text("Wrong Answer");
                        }
                
                    })
                }
                $("#re-form").click(function () {
    
                    $("#user-input").css("display", "none");
                    $("#btns").empty();
                    createbuttons(list_of_buttons);
                
                })
            }
        })
    } 
        
        
    

    function Hindi() {
        $("<p>" + "Form a sentence (Declarative or Interrogative or any other type) from the given words" + "</p>").appendTo(".start-1");
        $("<p>" + "(select the buttons in proper order)" + "</p>").appendTo(".start-2");
        var hindisen = `राम और श्याम बाजार गयें    राम और श्याम गयें बाजार    बाजार गयें राम और श्याम    गयें बाजार राम और श्याम    राम सोया और श्याम भी    श्याम सोया और राम भी    सोया श्याम और राम भी    सोया राम और श्याम भी    मैंने उसे बताया कि राम सो रहा है    मैंने उसे बताया कि सो रहा है राम    उसे मैंने बताया कि राम सो रहा है    उसे मैंने बताया कि सो रहा है राम    मैंने बताया उसे कि राम सो रहा है    मैंने बताया उसे कि सो रहा है राम    उसे बताया मैंने कि राम सो रहा है    उसे बताया मैंने कि सो रहा है राम    बताया मैंने उसे कि राम सो रहा है    बताया मैंने उसे कि सो रहा है राम    बताया उसे मैंने कि राम सो रहा है    बताया उसे मैंने कि सो रहा है राम    राम खाकर सोया    खाकर राम सोया    राम सोया खाकर    खाकर सोया राम    सोया राम खाकर    सोया खाकर राम    क्या वो बाजार गया    वो क्या बाजार गया    क्या बाजार वो गया    वो बाजार क्या गया    बाजार क्या वो गया    बाजार वो क्या गया    क्या वो गया बाजार    वो क्या गया बाजार    क्या गया वो बाजार    वो गया क्या बाजार    गया क्या वो बाजार    गया वो क्या बाजार    गया क्या बाजार वो    क्या गया बाजार वो    गया बाजार क्या वो    क्या बाजार गया वो    बाजार गया क्या वो    बाजार गया क्या वो    वो बाजार गया क्या    बाजार वो गया क्या    बाजार गया वो क्या    वो गया बाजार क्या    गया वो बाजार क्या    गया बाजार वो क्या    बिल्लियों को मारकर कुत्ता सो गया    मारकर बिल्लियों को कुत्ता सो गया    बिल्लियों को मारकर सो गया कुत्ता    मारकर बिल्लियों को सो गया कुत्ता    कुत्ता सो गया बिल्लियों को मारकर    कुत्ता सो गया मारकर बिल्लियों को    सो गया कुत्ता बिल्लियों को मारकर    सो गया कुत्ता मारकर बिल्लियों को    एक लाल किताब वहाँ है    एक लाल किताब है वहाँ    वहाँ है एक लाल किताब    है वहाँ एक लाल किताब    एक बड़ी सी किताब वहाँ है    एक बड़ी सी किताब है वहाँ    बड़ी सी एक किताब वहाँ है    बड़ी सी एक किताब है वहाँ    वहाँ है एक बड़ी सी किताब    वहाँ है बड़ी सी एक किताब    है वहाँ एक बड़ी सी किताब    है वहाँ बड़ी सी एक किताब`.split("    ");
        console.log(hindisen.length);
        var idx = Math.floor(Math.random() * hindisen.length);
        var arr1 = hindisen[idx];
        console.log(idx);
        console.log(arr1);
        var list_of_buttons = shuffle(arr1.split(" "));
        console.log(list_of_buttons);
        // createbuttons(list_of_buttons);
        for (let i = 0; i < list_of_buttons.length; i++) {
            // $("<button id=" + i.toString() + ">" + list_of_buttons[i] + "</button>").appendTo("#btns");
            
            var btn = document.createElement("button");
            btn.id = i.toString();
            btn.className = "word";
            btn.textContent = list_of_buttons[i];
            $("#btns").append(btn);
            
        }
        $(".word").click(function () {
            Reform();
            // alert("HI");
            if ($.isNumeric(this.id)) {
                $("#user-start").css("display", "block");
                // $("<p>" + "Formed Sentence (after selecting words):" + "</p>").appendTo("#start-3");
                showOff(this.id);
                document.getElementById(this.id).style.display = "none";
                document.getElementById("btns").removeChild(document.getElementById(this.id));

                if ($("#btns").children().length === 0) {
        
                    var check = document.createElement("button");
                    check.id = "check-btn";
                    check.textContent = "Check the correctness of sentence";
                    $("#check").append(check);
                    $("#check-btn").click(function () {
        
                        if (hindisen.includes($("#user-input").text().trim())) {
                            $("#result").css("color", "green");
                            $("#result").text("Right answer!!!");
                        }
                        else {
                            $("#result").css("color", "red");
                            $("#result").text("Wrong Answer!!!");
                        }
                
                    })
                }
                $("#re-form").click(function () {
    
                    $("#user-input").css("display", "none");
                    $("#btns").empty();
                    createbuttons(list_of_buttons);
                })
            }
        })
        
    }

    

    $("#lang").on("change", function () {
        if ($(this).val() == "null") {
            alert("Select a language");
            return false;
        }
        
        if ($(this).val() == "english") {
            $("#start-1").empty();
            $("#start-2").empty();
            $("#btns").empty();
            English();
        }
        // location.reload();
        if ($(this).val() == "hindi") {
            $("#start-1").empty();
            $("#start-2").empty();
            $("#btns").empty();
            Hindi();
            
        }
    });

});