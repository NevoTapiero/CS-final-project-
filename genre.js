function formatPage(){
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const title1 = document.getElementById("title1");
  
  console.log(document.cookie)

  if(document.cookie === "genre=horror"){
    title.innerHTML = "horror";
    description.innerHTML = "you seeing the horror page" 
    title1.innerHTML = "ggggg"

  } else if(document.cookie === "genre=romance"){
    title.innerHTML = "romance";
    description.innerHTML = "you seeing the romance page" 

  } else if(document.cookie === "genre=anime"){
    title.innerHTML = "anime";
    description.innerHTML = "you seeing the anime page" 

  } else if(document.cookie === "genre=musical"){
    title.innerHTML = "musical";
    description.innerHTML = "you seeing the musical page" 

  } else if(document.cookie === "genre=action"){
    title.innerHTML = "action";
    description.innerHTML = "you seeing the action page" 

  } else if(document.cookie === "genre=comedy"){
    title.innerHTML = "comedy";
    description.innerHTML = "you seeing the comedy page" 

  } else if(document.cookie === "genre=fantasy"){
    title.innerHTML = "fantasy";
    description.innerHTML = "you seeing the fantasy page"

  } else if(document.cookie === "genre=drama"){
    title.innerHTML = "drama";
    description.innerHTML = "you seeing the drama page"

  } else if(document.cookie === "genre=marvel"){
    title.innerHTML = "marvel";
    description.innerHTML = "you seeing the marvel page"

  } else if(document.cookie === "genre=sci-fi"){
    title.innerHTML = "sci-fi";
    description.innerHTML = "you seeing the sci-fi page"
  
  } else if(document.cookie === "genre=crime"){
    title.innerHTML = "crime";
    description.innerHTML = "you seeing the crime page"

  } else if(document.cookie === "genre=adventure"){
    title.innerHTML = "adventure";
    description.innerHTML = "you seeing the adventure page"

  } else if(document.cookie === "genre=mystery"){
    title.innerHTML = "mystery";
    description.innerHTML = "you seeing the mystery page"

  } else if(document.cookie === "genre=chistmas"){
    title.innerHTML = "chistmas";
    description.innerHTML = "you seeing the chistmas page"

  } else if(document.cookie === "genre=family"){
    title.innerHTML = "family";
    description.innerHTML = "you seeing the family page"

  } else if(document.cookie === "genre=teen"){
    title.innerHTML = "teen";
    description.innerHTML = "you seeing the teen page"
  }


}