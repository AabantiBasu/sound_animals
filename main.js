function startclassification()
  {
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HzBF8BbH3/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}
var dog=0;
var cat=0;
var cow=0;
var lion=0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog- '+ dog +'Detected Cat-'+cat+'Detected Cow-'+cow+'Detected Lion-'+lion;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('animal_image');
    
    if(results[0].label=="Dog-Bark"){
      img.src='dog.avif';
      dog=dog+1;
    }
    else if(results[0].label=="Cat-Meow"){
      img.src='cat.avif';
      cat=cat+1;
    }
    else if(results[0].label=="Cow-Moos"){
      img.src='cow.avif';
      cow=cow+1;
    }
    else if(results[0].label=="Lion-Roar"){
      img.src='lion.avif';
      lion=lion+1;
    }
    else{
      img.src='ear_pic.jpeg';
    }
}
}