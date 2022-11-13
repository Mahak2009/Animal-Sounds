function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/n248N-fug/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;



function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    } 
    else 
    {
        console.log(results);
        console.log("working");
        document.getElementById("result_label").innerHTML = "I can hear - " +
        results[0].label;
        img = document.getElementById("sound_image");
        
        if (results[0].label == "barking")
        {
            img.src = "dog.png";
            dog = dog + 1;
        }
        else if (results[0].label == 'meowing')
        {
            img.src = "cat.png";
            cat = cat + 1;
        }
        else 
        {
            img.src = "ear.gif";
        }
    }
}
