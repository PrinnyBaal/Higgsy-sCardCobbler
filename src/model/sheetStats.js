





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
tags:["BackgroundCard", "BernalesTomas"]
},

{url:"https://res.cloudinary.com/metaverse/image/upload/v1559675658/card%20frames/magicitemcards_template_blank_poker.jpg",
description:"Artist: <a href='https://binaryadventures.com/blog/magic-item-cards/'>Bruno Scheele</a>",
tags:["BackgroundCard", "BrunoScheele"]
},

{url:"https://res.cloudinary.com/metaverse/image/upload/v1559675816/card%20frames/magicitemcards_template_front_poker.jpg",
description:"Artist: <a href='https://binaryadventures.com/blog/magic-item-cards/'>Bruno Scheele</a>",
tags:["BackgroundCard", "BrunoScheele"]
},

{url:"https://res.cloudinary.com/metaverse/image/upload/v1559688922/blank.png",
description:"Artist:....it's...it's just blank, there's no attribution needed here.",
tags:["Blank"]
},









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
{url:"https://res.cloudinary.com/metaverse/image/upload/v1559673989/Textures/paper_texture_by_akinna_stock_dputcr.jpg",
description:"Artist: <a href='https://www.deviantart.com/akinna-stock/art/paper-texture-43428123'>Akinna</a><br><br>",
tags:["Texture", "Akinna"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1559672134/card%20frames/Unique_Item_-_Vorlage_-_Ein_Feld_Geld.png",
description:"Artist: <a href='https://www.deviantart.com/konsumo/art/Unique-Item-Card-Template-2-445518644'>Konsumo</a><br><br>",
tags:["CardFrame", "Konsumo"]
},
{url:"https://res.cloudinary.com/metaverse/image/upload/v1559673630/card%20frames/tarot_card_templates_by_fararden_d21xspd.png",
description:"Artist: <a href='https://www.deviantart.com/fararden/art/Tarot-card-templates-124188817'>Fararden</a><br><br>",
tags:["CardFrame", "Fararden"]
},

{url:"https://res.cloudinary.com/metaverse/image/upload/v1559685187/landscape-2645003_1920.jpg",
description:"Artist: <a href='https://pixabay.com/photos/landscape-fantasy-city-antique-sky-2645003/'>Mystics Art Design</a><br><br>",
tags:["MysticsArtDesign"]
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

let templateCatalogue=[
  {title:"Landscape Art", card:{"text":[{"content":"StormLord's Keep","xPos":"175","yPos":"65","fontFam":"Tempus Sans ITC","fontNum":"28","fontColor":"#000000","fontAlign":"center"},{"content":"A the symbol of the lost Vashunda Empire. \nWhile many reports of it have devolved \ninto mythology, those who would brave\na certain mountain dungeon may discover \nthe means to lift said mountain to the skies and \nadd a new chapter to the story of \nthe StormLord's Keep!","xPos":"25","yPos":"305","fontFam":"Century Schoolbook","fontNum":"14","fontColor":"#000000","fontAlign":"left"}],"images":[{"content":"https://res.cloudinary.com/metaverse/image/upload/v1559685187/landscape-2645003_1920.jpg","xPos":"15","yPos":"35","width":"350","height":"513","catalogueNum":null},{"content":"https://res.cloudinary.com/metaverse/image/upload/v1559672134/card%20frames/Unique_Item_-_Vorlage_-_Ein_Feld_Geld.png","xPos":"0","yPos":0,"width":"350","height":"516","catalogueNum":null}],"background":"https://res.cloudinary.com/metaverse/image/upload/v1559675658/card%20frames/magicitemcards_template_blank_poker.jpg","backgroundID":1}},
  {title:"Brief Description", card:{"text":[{"content":"Mori's Mantle","xPos":170,"yPos":40,"fontFam":"Tempus Sans ITC","fontNum":25,"fontColor":"#000000","fontAlign":"center"},{"content":"Armor","xPos":175,"yPos":400,"fontFam":"Arial","fontNum":12,"fontColor":"#000000","fontAlign":"center"},{"content":"This +3 breastplate will cast \nOverstimulate (DC 17) on either\nits wearer or those in combat against \nits wearer should either fall below\n 0 HP. ","xPos":75,"yPos":415,"fontFam":"Arial","fontNum":"13","fontColor":"#000000","fontAlign":"left"}],"images":[{"content":"https://res.cloudinary.com/metaverse/image/upload/v1556475584/Domigorgon/Armor/40.png","xPos":75,"yPos":100,"width":200,"height":225,"catalogueNum":0}],"background":"https://res.cloudinary.com/metaverse/image/upload/v1554830129/DnD_Card_template.png","backgroundID":0}},
  {title:"Long Description", card:{"text":[{"content":"Item Title","xPos":"175","yPos":"45","fontFam":"Haettenschweiler","fontNum":"39","fontColor":"#000000","fontAlign":"center"},{"content":"Item Type/Restrictions:","xPos":"25","yPos":"110","fontFam":"Impact","fontNum":"14","fontColor":"#000000","fontAlign":"left"},{"content":"Full Item Description:","xPos":"25","yPos":"190","fontFam":"Haettenschweiler","fontNum":"16","fontColor":"#000000","fontAlign":"left"},{"content":"Book Reference and source info:","xPos":"25","yPos":"450","fontFam":"Haettenschweiler","fontNum":"16","fontColor":"#000000","fontAlign":"left"},{"content":"Blah, blah blah.....","xPos":"50","yPos":"135","fontFam":"Arial","fontNum":12,"fontColor":"#000000","fontAlign":"left"},{"content":"Here's some info about the sword and...\nblah blah blah....are you listening?...\nthis is important because...blah...blah\n...blah......evil sentience....blah...blah\n...blah....awakened by blood....blah \nblah blah....","xPos":"50","yPos":"215","fontFam":"Arial","fontNum":12,"fontColor":"#000000","fontAlign":"left"},{"content":"Found in pg. 290 of Hyper Munchkin's Codex","xPos":"50","yPos":"470","fontFam":"Arial","fontNum":12,"fontColor":"#000000","fontAlign":"left"}],"images":[],"background":"https://res.cloudinary.com/metaverse/image/upload/v1559675658/card%20frames/magicitemcards_template_blank_poker.jpg","backgroundID":1}},
  {title:"All Flair~", card:{"text":[{"content":"Fancy Reminder~","xPos":"175","yPos":"465","fontFam":"Monotype Corsiva","fontNum":"35","fontColor":"#000000","fontAlign":"center"}],"images":[{"content":"https://res.cloudinary.com/metaverse/image/upload/v1559685187/landscape-2645003_1920.jpg","xPos":0,"yPos":0,"width":"350","height":"516","catalogueNum":43},{"content":"https://res.cloudinary.com/metaverse/image/upload/v1559673989/Textures/paper_texture_by_akinna_stock_dputcr.jpg","xPos":"50","yPos":"440","width":"255","height":"43","catalogueNum":40},{"content":"https://res.cloudinary.com/metaverse/image/upload/v1559673630/card%20frames/tarot_card_templates_by_fararden_d21xspd.png","xPos":"0","yPos":"0","width":"350","height":"516","catalogueNum":42}],"background":"https://res.cloudinary.com/metaverse/image/upload/v1559688922/blank.png","backgroundID":3}}
];



 if (localStorage.getItem("backgroundCatalogue") === null) {
   localStorage.setItem('backgroundCatalogue', JSON.stringify(backgroundCatalogue));
 }

 if (localStorage.getItem("imageCatalogue") === null) {
   localStorage.setItem('imageCatalogue', JSON.stringify(imageCatalogue));
 }

 if (localStorage.getItem("templateCatalogue") === null) {
   localStorage.setItem('templateCatalogue', JSON.stringify(templateCatalogue));
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
