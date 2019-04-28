





let construct={
  card:function(){
    this.text=[];
    this.images=[];
    this.background="https://res.cloudinary.com/metaverse/image/upload/v1554830129/DnD_Card_template.png";
    this.backgroundID=0;
  },
  text:function(){
    this.content="blah; blah";
    this.xPos=0;
    this.yPos=0;
    this.fontFam="Arial";
    this.fontNum=12;
    this.fontColor="#000000";
    this.fontAlign="center";
  },
  image:function(){
    this.content="imageurl";
    this.xPos=0;
    this.yPos=0;
    this.width=30;
    this.height=30;
    this.catalogueNum=null;
  },
  catalogueEntry:function(givenUrl, givenDescription, givenTags){
    this.url=givenUrl;
    this.description=givenDescription;
    this.tags=givenTags;
  }

}


let backgroundCatalogue=[

{url:"https://res.cloudinary.com/metaverse/image/upload/v1554830129/DnD_Card_template.png",
description:"Artist: BernalesTomas",
tags:["BackgroundCard"]
}





];

let imageCatalogue=[
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475584/Domigorgon/Armor/40.png",
description:"Artist: Domigorgon<br><br>For the Anti-Paladin who wants to make a statement, or the small-town cleric looking for a little rebellion.",
tags:["Armor", "Domigorgon", "Villainous"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475576/Domigorgon/Armor/39.png",
description:"Artist: Domigorgon<br><br>A popular design among witch-guards.",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475574/Domigorgon/Armor/38.png",
description:"Artist: Domigorgon<br><br>A practical look that blends form and function.",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475599/Domigorgon/Armor/37.png",
description:"Artist: Domigorgon<br><br>Rugged armor, perfect for treks in icy tundras.",
tags:["Armor", "Domigorgon", "Cold Weather"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475567/Domigorgon/Armor/36.png",
description:"Artist: Domigorgon<br><br>When flexibility is a must.  A great gift for the half-casters in your life.",
tags:["Armor", "Domigorgon"]
},
////
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475559/Domigorgon/Armor/35.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475568/Domigorgon/Armor/34.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475556/Domigorgon/Armor/33.png",
description:"Artist: Domigorgon<br><br>When you wish upon a star, wish to keep away the scars.",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475558/Domigorgon/Armor/32.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475545/Domigorgon/Armor/31.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
////
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475549/Domigorgon/Armor/30.png",
description:"Artist: Domigorgon<br><br>It's got a *BEEPING* bear helmet.  How could you NOT buy this!?",
tags:["Armor", "Domigorgon","Cold Weather", "Right to Bear Armor"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475549/Domigorgon/Armor/29.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475525/Domigorgon/Armor/28.png",
description:"Artist: Domigorgon<br><br>Look.  Lady.  You asked me to make it out of 5,000 gold worth of pure Moon Silver.  You know how expensive Moon Silver is?  I had to throw in an extra 500 gp out of pocket to keep from breaking our town's indecency laws.",
tags:["Armor", "Domigorgon", "Cold Weather"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475537/Domigorgon/Armor/27.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon", "Villainous"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475533/Domigorgon/Armor/26.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
///
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475573/Domigorgon/Armor/25.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475520/Domigorgon/Armor/24.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475534/Domigorgon/Armor/23.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475518/Domigorgon/Armor/22.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475499/Domigorgon/Armor/21.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},

{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475516/Domigorgon/Armor/20.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475507/Domigorgon/Armor/19.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon", "Spiked"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475500/Domigorgon/Armor/18.png",
description:"Artist: Domigorgon<br><br>For when a chip on your shoulder just doesn't cut it.",
tags:["Armor", "Domigorgon", "Spiked"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475465/Domigorgon/Armor/17.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475466/Domigorgon/Armor/16.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},

{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475459/Domigorgon/Armor/15.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475487/Domigorgon/Armor/14.png",
description:"Artist: Domigorgon<br><br>Buy now and get 50% off family-crest designs.",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475444/Domigorgon/Armor/13.png",
description:"Artist: Domigorgon<br><br>For the history buff in your life.",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475516/Domigorgon/Armor/12.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},


{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475489/Domigorgon/Armor/11.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475485/Domigorgon/Armor/10.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475523/Domigorgon/Armor/09.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475485/Domigorgon/Armor/08.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475449/Domigorgon/Armor/07.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
///
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475451/Domigorgon/Armor/06.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475446/Domigorgon/Armor/05.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon", "Cold Weather"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475451/Domigorgon/Armor/04.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475480/Domigorgon/Armor/03.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475432/Domigorgon/Armor/02.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1556475434/Domigorgon/Armor/01.png",
description:"Artist: Domigorgon<br><br>",
tags:["Armor", "Domigorgon"]
},

];

let starterCard=new construct.card();

starterCard.text=[
  { content:"Item Title",
    xPos:170,
    yPos:40,
    fontFam:"Tempus Sans ITC",
    fontNum:25,
    fontColor:"#000000",
    fontAlign:"center"},
  { content:"Item Type",
    xPos:175,
    yPos:400,
    fontFam:"Arial",
    fontNum:12,
    fontColor:"#000000",
    fontAlign:"center"},
  { content:"This is what the item does (is this text sliding off the card?  It should be at first!  But you can fix it by hitting enter to insert linebreaks.  click Load Card to refresh the image)",
    xPos:75,
    yPos:415,
    fontFam:"Arial",
    fontNum:12,
    fontColor:"#000000",
    fontAlign:"left"},

];
starterCard.images=[
  {content:"https://res.cloudinary.com/metaverse/image/upload/v1556475584/Domigorgon/Armor/40.png",
  xPos:75,
  yPos:100,
  width:200,
  height:225,
  catalogueNum:0},

];

 if (localStorage.getItem("backgroundCatalogue") === null) {
   localStorage.setItem('backgroundCatalogue', JSON.stringify(backgroundCatalogue));
 }

 if (localStorage.getItem("imageCatalogue") === null) {
   localStorage.setItem('imageCatalogue', JSON.stringify(imageCatalogue));
 }

 if (localStorage.getItem("card") === null) {

   localStorage.setItem('card', JSON.stringify(starterCard));
 }


function resetStorage(){
  if (window.confirm("Do you really want to delete all your saved info?")) {
  localStorage.clear();
  location.reload();
}
}
