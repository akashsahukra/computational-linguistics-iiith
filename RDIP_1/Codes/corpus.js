  
var corpus1=['A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.']

var corpus2=['A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'];

var corpus3=["A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.\" Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair."]
 
let other_cases = new Map();
other_cases.set(corpus1, ['not', 'as', 'heard', 'if', 'too']);
other_cases.set(corpus2, ['at', 'better', 'he', 'heared', 'himself', 'insisted', 'once', 'would', 'than']);
other_cases.set(corpus3, ['in', 'its', 'head', 'as', 'is', 'into', 'if', 'men', 'they', 'only']);

var errmsg = document.getElementById("errmsg");
var display = document.getElementById("paragraph");
var inputs = document.getElementById("inputs");
var submitbtn = document.getElementById("submit");
var inp1 = document.getElementById("ans1");
var inp2 = document.getElementById("ans2");
var response = document.getElementById("response");
var options = document.getElementById("options");

//stemer

// stemmer.setCurrent('asky');    
// var s = stemmer.stem();
// console.log(s);
// console.log(stemmer.getCurrent());

function newtypes() {
    corpval = document.getElementById("corpus").value;
    temp = []
    if (corpval == "corpus1") { 
        c = corpus1[0];
        console.log(c);
        d = corpus1;
    }
    if (corpval == "corpus2") {
        c = corpus2[0];
        d = corpus2;
    }
    if (corpval == "corpus3") {
        c = corpus3[0];
        d = corpus3;
    }
    console.log(c);
    c = c.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ");
    for (i = 0; i < c.length; i++){
        arr = other_cases.get(d);

        if (!arr.includes(c[i])) {
            stemmer.setCurrent(c[i]);
            stemmer.stem();
            temp.push(stemmer.getCurrent());
        }
    }
    count = counttypes(temp);
    console.log(count);
}

function recalculate() {
    document.getElementById("re-calculate").style.display = "none";
    submitbtn.style.display = "none";
    response.innerHTML = "<p>Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.</p>"
    document.getElementById("inp-3").innerHTML = '<p>#new types</p><input type="text" id="ans3" size="4"><br>';
    var another = document.getElementById("another-smt");
    another.innerHTML = '<button id="re-submit" onclick="newtypes();">Submit</button>';
}

function tokens(str) {
    temp = str;
    temp = temp.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ");
    return temp.length;
}
function types(str) {
    temp = str;
    temp = temp.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ").join('|').toLowerCase().split("|");
    ans = temp.filter(function (i, idx, arr) { return idx == arr.indexOf(i); });
    return ans.length;
}
function counttypes(arr) {
    temp = arr.join('|').toLowerCase().split("|");
    ans = temp.filter(function (i, idx, arr) { return idx == arr.indexOf(i); });
    console.log(ans);
    return ans.length;
}

function getAnswer(token, type) {
    if (token == inp1.value && type == inp2.value) {
        response.innerHTML = '<p style="color: green;">Right Answer</p>';
        inp1.style.backgroundColor = 'green';
        inp2.style.backgroundColor = 'green';
        
        // document.getElementById("submit").style.display = "none";
        document.getElementById("re-calculate").style.display = "block";
    }

    else {
        if (token == inp1.value && type != inp2.value) {
            response.innerHTML = '<p style="color: red;">Wrong Answer</p>';
            inp1.style.backgroundColor = 'green';
            inp2.style.backgroundColor = 'red';
        }

        else if (token != inp1.value && type == inp2.value) {
            response.innerHTML = '<p style="color: red;">Wrong Answer</p>';
            inp1.style.backgroundColor = 'red';
            inp2.style.backgroundColor = 'green';
        }
        else {
            response.innerHTML = '<p style="color: red;">Wrong Answer</p>';
            inp1.style.backgroundColor = 'red';
            inp2.style.backgroundColor = 'red';
        }
    }
}

function showcorpus() {
    errmsg.style.display = "block";
    submitbtn.style.display = "block";
    inputs.style.display = "block";
    var corpval = document.getElementById("corpus").value;
    if (corpval == "corpus1") {
        display.innerHTML = "";
        inp1.value = "";
        inp2.value = "";
        inp1.removeAttribute('style');
        // alert(09);
        inp2.removeAttribute('style');
        document.getElementById("re-calculate").style.display = "none";
        response.innerHTML = "";
    
        
        // for (let i = 0; i < corpus.length; i++) {
        //     display.append(corpus1[i]);
            
        // }
        display.innerHTML = corpus1[0];
    }
    if (corpval == "corpus2") {
        display.innerHTML = "";
        display.innerHTML = "";
        inp1.value = "";
        inp2.value = "";
        inp1.removeAttribute('style');
        // alert(09);
        inp2.removeAttribute('style');
        document.getElementById("re-calculate").style.display = "none";
        response.innerHTML = "";
        ;
        
        // for (let i = 0; i < corpus.length; i++) {
        //     display.append(corpus2[i]);
            
        // }
        display.innerHTML = corpus2[0];
    }
    if (corpval == "corpus3") {
        display.innerHTML = "";
        display.innerHTML = "";
        inp1.value = "";
        inp2.value = "";
        inp1.removeAttribute('style');
        // alert(09);
        inp2.removeAttribute('style');
        document.getElementById("re-calculate").style.display = "none";
        response.innerHTML = "";
        
        
        // for (let i = 0; i < corpus.length; i++) {
        //     display.append(corpus3[i]);
        // }
        display.innerHTML = corpus3[0];
    }
    if(corpval == "none") {
        alert("Select a language");
        return false;
    }
}
var stemmer = new Snowball('English');
stemmer.setCurrent('abbreviations');    
stemmer.stem();
console.log(stemmer.getCurrent());


function check() {
    
    
    corpval = document.getElementById("corpus");
    // alert(78);
    var corpval = document.getElementById("corpus").value;
    if (corpval == "corpus1") {
        var corptype1 = types(corpus1[0]);
        var cortoken1 = tokens(corpus1[0]);
        getAnswer(cortoken1, corptype1);
    }
    if (corpval == "corpus2") {
        var corptype2 = types(corpus2[0]);
        var cortoken2 = tokens(corpus2[0]);
        getAnswer(cortoken2, corptype2);
    }
    if (corpval == "corpus3") {
        var corptype3 = types(corpus3[0]);
        var cortoken3 = tokens(corpus3[0]);
        getAnswer(cortoken3, corptype3);
    }
}

// Source : https://stackoverflow.com/questions/13841217/remove-duplicate-characters-from-string/39761020
// Source : https://www.mathworks.com/help/textanalytics/ref/tokenizeddocument.regexprep.html