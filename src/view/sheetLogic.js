
sheetProj.view.sheetLogic = {
  setupUserInterface: function () {
    cardForms.loadCardForms();
    canvasLogic.displayItemCard();
    }
};

let data={
  getCard:function(){
    return JSON.parse(localStorage.getItem("card"));
  },
  saveCard:function(card){
    localStorage.setItem("card", JSON.stringify(card));
  },
  getAllBackgrounds:function(){
    return JSON.parse(localStorage.getItem("backgroundCatalogue"));
  },
  getAllImages:function(){
    return JSON.parse(localStorage.getItem("imageCatalogue"));
  },
  getFilteredEntries:function(){
    let activeCatalogue=data.getActiveCatalogue();
    let filter=activeCatalogue.activeTags;
    let rawEntries;
    let polishedEntries=[];
    let entryLength;

    if (activeCatalogue.catalogueType=="background"){
      rawEntries=data.getAllBackgrounds();
    }
    else{
      rawEntries=data.getAllImages();
    }
    entryLength=rawEntries.length;
    for(let i=0; i<entryLength; i++){
      if(utility.checkInclusion(rawEntries[i].tags,filter)){
        rawEntries[i].ID=i;
        polishedEntries.push(rawEntries[i]);
      }
    }

    return polishedEntries;
  },
  getActiveCatalogue:function(){
    return JSON.parse(localStorage.getItem("activeCatalogue"));
  },
  resetActiveCatalogue:function(givenCatalogueType, givenImageIndex){
    localStorage.setItem("activeCatalogue", JSON.stringify(
      {
        activeTags:[],
        catalogueType:givenCatalogueType,
        imageIndex:givenImageIndex
      }
    ));
  },
  getActiveTags:function(){
    return JSON.parse(localStorage.getItem("activeCatalogue")).activeTags;
  },
  saveActiveTags:function(newActives){
    let activeCatalogue=data.getActiveCatalogue();
    activeCatalogue.activeTags=newActives;
    localStorage.setItem("activeCatalogue", JSON.stringify(activeCatalogue));
  },

  getFonts:function(){
    return JSON.parse(localStorage.getItem("fonts"));
  },
  getFontList:function(){
    let detective = new data.fontDetector();
    if (localStorage.getItem("fonts")){
      cardForms.setFontOptions();
      return;
    }


    let untestedFonts=["Abadi MT Condensed Light", "Albertus Extra Bold", 'Zurich Ex BT','Zurich BlkEx BT',"Albertus Medium","Antique Olive ","Arial","Arial Black","Arial MT","Arial Narrow","Bazooka","Book Antiqua","Bookman Old Style ","Boulder","Calisto MT","Calligrapher","Century Gothic","Century Schoolbook","Cezanne","CG Omega","CG Times","Charlesworth","Chaucer","Clarendon Condensed","Comic Sans MS","Copperplate Gothic Bold","Copperplate Gothic Light","Cornerstone","Coronet","Courier","Courier New","Cuckoo","Dauphin","Denmark","Fransiscan","Garamond","Geneva","Haettenschweiler","Heather","Helvetica","Herald","Impact","Jester","Letter Gothic","Lithograph","Lithograph Light","Long Island","Lucida Console","Lucida Handwriting","Lucida Sans","Lucida Sans Unicode","Marigold","Market","Matisse ITC","MS LineDraw","News GothicMT","OCR A Extended","Old Century","Pegasus","Pickwick","Poster","Pythagoras","Sceptre","Sherwood","Signboard","Socket","Steamer","Storybook","Subway","Tahoma ","Technical",'Teletype','Tempus Sans ITC','Times','Times New Roman','Times New Roman PS','Trebuchet MS','Tristan','Tubular','Unicorn','Univers','Univers Condensed','Vagabond','Verdana','Westminster','Allegro','Amazone BT','AmerType Md BT','Arrus BT','Aurora Cn BT','AvantGarde Bk BT','AvantGarde Md BT','BankGothic Md BT','Benguiat Bk BT','BernhardFashion BT','BernhardMod BT','BinnerD','Bremen Bd BT','CaslonOpnface BT','Charter Bd BT','Charter BT','ChelthmITC Bk BT','CloisterBlack BT','CopperplGoth Bd BT','English 111 Vivace BT','EngraversGothic BT','Exotc350 Bd BT','Freefrm721 Blk BT','FrnkGothITC Bk BT','Futura Bk BT','Futura Lt BT','Futura Md BT','Futura ZBlk BT','FuturaBlack BT','Galliard BT','Geometr231 BT','Geometr231 Hv BT','Geometr231 Lt BT','GeoSlab 703 Lt BT','GeoSlab 703 XBd BT','GoudyHandtooled BT','GoudyOLSt BT','Humanst521 BT','Humanst 521 Cn BT','Humanst521 Lt BT ','Incised901 Bd BT ','Incised901 BT ','Incised901 Lt BT ','Informal011 BT ','Kabel Bk BT ','Kabel Ult BT ','Kaufmann Bd BT ','Kaufmann BT ','Korinna BT ','Lydian BT ','Monotype Corsiva','NewsGoth BT ','Onyx BT ','OzHandicraft BT','PosterBodoni BT','PTBarnum BT','Ribbon131 Bd BT','Serifa BT','Serifa Th BT','ShelleyVolante BT','Souvenir Lt BT','Swis721 BlkEx BT','Swiss911 XCm BT ','TypoUpright BT','ZapfEllipt BT','ZapfHumnst BT','ZapfHumnst Dm BT'];
    let fonts=untestedFonts.filter(font => detective.detect(font));
    localStorage.setItem("fonts",JSON.stringify(fonts));
    cardForms.setFontOptions();
  },
  fontDetector:function(){
    /**
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/javascript-css-font-detect/
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.15 (21 Sep 2009)
 *          Changed comparision font to default from sans-default-default,
 *          as in FF3.0 font of child element didnt fallback
 *          to parent element if the font is missing.
 * Version: 0.2 (04 Mar 2012)
 *          Comparing font against all the 3 generic font families ie,
 *          "monospace", "sans-serif" and "sans". If it doesn't match all 3
 *          then that font is 100% not available in the system
 * Version: 0.3 (24 Mar 2012)
 *          Replaced sans with serif in the list of baseFonts
 */

/**
 * Usage: d = new Detector();
 *        d.detect("font name");
 */
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ["monospace", "sans-serif", "serif"];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = "72px";

    var h = document.getElementsByTagName("body")[0];

    // create a SPAN in the document to get the width of the text we use to test
    var s = document.createElement("span");
    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};
    for (var index in baseFonts) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
        h.removeChild(s);
    }

    function detect(font) {
        var detected = false;
        for (var index in baseFonts) {
            s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
            h.appendChild(s);
            var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
            h.removeChild(s);
            detected = detected || matched;
        }
        return detected;
    }

    this.detect = detect;
  },
}

let catalogue={
  getImageData:function(catalogueType){
    let imageData;
    if (catalogueType=="background"){
      imageData=data.getAllBackgrounds();
    }
    else{
      imageData=data.getAllImages();
    }
    return imageData;
  },
  setTags:function(catalogueType){

    // let imageData=catalogue.getImageData(catalogueType);
    let imageData=data.getFilteredEntries();
    let tags=data.getActiveTags();
    let checked;
    let filters={};
    let searchBar=`Filter results:`;
    for (let i=0; i<imageData.length; i++){
      let imageTags=imageData[i].tags;
      for (let j=0; j<imageTags.length; j++){
        let newFilter=imageTags[j];
        if (filters.hasOwnProperty(newFilter)){
          filters[newFilter].counter++;
        }
        else{
          filters[newFilter]={
            counter:1,
            label:newFilter
          }
        }
      }
    }

    filters=Object.values(filters);
    ///if the filter happens to be active then set the toggle to be checked from get-go
    filters.forEach(function(filter){
      checked=utility.checkInclusion(tags,[filter.label]) ? "checked" : "";
      searchBar+=`<div class="filterToggle  mx-2 mt-3" style="display: inline-block;">
        <input ${checked} id="toggle${filter.label}" type="checkbox" onchange="catalogue.toggleTag(event.target.checked, '${filter.label}')">
        <label class="pl-1" for="toggle${filter.label}">${filter.label}<span class="badge badge-light mx-1">${filter.counter}</span></label>
      </div>`;
    });

    $("#catalogueTags").html(searchBar);
    return;
  },
  toggleTag:function(checked, filterName){
    let activeCatalogue=data.getActiveCatalogue();
    let filter=data.getActiveTags();

    if (checked){
      filter.push(filterName);
    }
    else{
      filter.splice(filter.indexOf(filterName),1);
    }

    data.saveActiveTags(filter);
    catalogue.resetGrid();
    catalogue.setTags();
  },
  tagEdit:function(newTags, catalogueIndex){
    newTags=polishTags(newTags);
    let activeCatalogue=data.getActiveCatalogue();
    let catalogueType=activeCatalogue.catalogueType;

    if (catalogueType=="background"){
      let backgroundCatalogue=data.getAllBackgrounds();
      backgroundCatalogue[catalogueIndex].tags=newTags;
      localStorage.setItem("backgroundCatalogue", JSON.stringify(backgroundCatalogue));
    }
    else{
      let imageCatalogue=data.getAllImages();
      imageCatalogue[catalogueIndex].tags=newTags;
      localStorage.setItem("imageCatalogue", JSON.stringify(imageCatalogue));
    }
    data.saveActiveTags([]);
    catalogue.resetGrid();
    catalogue.setTags();


    function polishTags(rawTags){
      let tags= rawTags.split(",");
      tags=tags.filter(tag => tag.trim());
      return tags;
    }

  },
  removeFromCatalogue:function(catalogueIndex){
    let activeCatalogue=data.getActiveCatalogue();
    let catalogueType=activeCatalogue.catalogueType;

    if (catalogueType=="background"){
      let backgroundCatalogue=data.getAllBackgrounds();
      if (backgroundCatalogue.length<=1){
        alert("Catalogues must have at least 1 image in them at all times.  You can't delete your last image!");
        return;
      }
      else{
        backgroundCatalogue.splice(catalogueIndex, 1);
        localStorage.setItem("backgroundCatalogue", JSON.stringify(backgroundCatalogue));
      }


    }
    else{
      let imageCatalogue=data.getAllImages();
      if (imageCatalogue.length<=1){
        alert("Catalogues must have at least 1 image in them at all times.  You can't delete the last image!");
        return;
      }
      else{
        imageCatalogue.splice(catalogueIndex, 1);
        localStorage.setItem("imageCatalogue", JSON.stringify(imageCatalogue));
      }
    }
    data.saveActiveTags([]);
    catalogue.resetGrid();
    catalogue.setTags();
  },
  getGrid:function(){
    let grid;
    let gridTiles="";
    let activeCatalogue=data.getActiveCatalogue();
    let catalogueType=activeCatalogue.catalogueType;
    // let imageData=catalogue.getImageData(catalogueType);
    // let taglist=data.getActiveTags();
    let imageData=data.getFilteredEntries();

    for (let i=0; i<imageData.length; i++){

      gridTiles+=`<div onclick="catalogue.gridTileClick(${activeCatalogue.imageIndex},'${imageData[i].url}', ${imageData[i].ID})" id="gridTile${imageData[i].ID}" class="gridTile" style=" background-image:url('${imageData[i].url}'); )"></div>`;

    }

    grid=`<div class="row tileRow" style="height:20%;">
      ${gridTiles}
    </div>`;
    return grid;
  },
  resetGrid:function(){
    $("#catalogueGrid").html(catalogue.getGrid());
    catalogue.setActiveTile();
    catalogue.setTileDims();
  },

  setActiveTile:function(){
    let card=data.getCard();
    // let imageData=catalogue.getImageData(catalogueType);
    let imageData=data.getFilteredEntries();
    let activeCatalogue=data.getActiveCatalogue();
    let imageIndex=activeCatalogue.imageIndex;
    let catalogueType=activeCatalogue.catalogueType;

    let activeImage;
    let catalogueData;
    let catalogueIndex;

    if (catalogueType=="background"){
      if (!card.backgroundID && card.backgroundID!=0){
        return false;
      }
      catalogueData=data.getAllBackgrounds();
      catalogueIndex=card.backgroundID;
      tileSetup();
      return;

    }
    else{
      activeImage=card.images[imageIndex];
      if (!activeImage.catalogueNum && activeImage.catalogueNum!=0){
        return false;
      }
      catalogueData=data.getAllImages();
      catalogueIndex=activeImage.catalogueNum;
      tileSetup();
      return;
    }

    function tileSetup(){
      let tagEdit=`<br><hr><div class="container-fluid">
      <div class="row">
        <div class="col-3">
          Edit Tags (seperated by ','):
        </div>
        <div class="col-4">
          <textarea onchange="catalogue.tagEdit(event.target.value, ${catalogueIndex})">${catalogueData[catalogueIndex].tags}</textarea>
        </div>
        <div class="col offset-1">
        <button style="background-color:red" onclick="catalogue.removeFromCatalogue(${catalogueIndex})">REMOVE FROM CATALOGUE</button>
        </div>
      </div>
      </div>`;
      $(`.activeTile`).removeClass("activeTile");
      $(`#gridTile${catalogueIndex}`).addClass("activeTile");
      $("#catalogueDescription").html(`${catalogueData[catalogueIndex].description}${tagEdit}`);
      $("#catalogueDescription").removeClass("hidden");

    }





  },
  setTileDims:function(){
    let height=$(".tileRow").height();
    let width=$(".gridTile").width();
    // if (width>height){
    //   $(".gridTile").width(height);
    // }
    // else{
    //   $(".tileRow").height(width);
    // }
    $(".tileRow").height(width);
    console.log(width);
  },

  gridTileClick:function(imageIndex, newURL, newCataNum){
      let card=data.getCard();
      let tileType=data.getActiveCatalogue().catalogueType;

      if (tileType=="background"){
        card.backgroundID=newCataNum;
        card.background=newURL;
      }
      else{
        let image=card.images[imageIndex];
        image.content=newURL;
        image.catalogueNum=newCataNum;
      }

      data.saveCard(card);
      cardForms.loadCardForms();
      catalogue.setActiveTile();
  },
  addToCatalogue:function(){
    let catalogueType=$('input[name=catalogueType]:checked').val();
    let uploadType=$('input[name=uploadType]:checked').val();
    // let fileGet=$('#catAddByFile').val();
    let fileGet=document.querySelector('input[type=file]').files[0];
    let url=$('#catAddByURL').val();
    let tags=polishTags($('#catAddTags').val());
    let description=$('#catAddDescription').val();




    if (uploadType=="file"){
      getDataUrl(fileGet).then(
        data => testURL(data)
      );
    }
    else{

      testURL(url);
    }

    function uploadToCatalogue(finalUrl){
      let newEntry=new construct.catalogueEntry(finalUrl, description, tags);

      if (catalogueType=="background"){
        let backgroundCatalogue=data.getAllBackgrounds();
        backgroundCatalogue.push(newEntry);
        console.log(backgroundCatalogue);
        localStorage.setItem("backgroundCatalogue", JSON.stringify(backgroundCatalogue));
      }
      else{
        let imageCatalogue=data.getAllImages();
        imageCatalogue.push(newEntry);
        localStorage.setItem("imageCatalogue", JSON.stringify(imageCatalogue));
      }

      alert("New image successfully added to Catalogue!");

    }

    function testURL(unknownString){
      let promisedTest=new Promise(function (resolve, reject){
        const img = new Image();
        img.onload = () => resolve(unknownString);
        img.onerror = () => reject(`Sorry!  Our test showed that the image file/url you submitted to the catalogue wasn't valid.  If you're getting this message in error please let me know.`);

        img.src = unknownString;
      });
      promisedTest.then((testedUrl)=>{uploadToCatalogue(testedUrl);}).catch((failMessage)=>{alert(failMessage);});
    }


    function polishTags(rawTags){
      let tags= rawTags.split(",");
      tags=tags.filter(tag => tag);
      tags.push("userUploaded");
      return tags;
    }

    function getDataUrl(image){
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }


  }
}

let cardForms={
  loadCardForms:function(){
    let card=data.getCard();
    let textForms=``;
    let imageForms=`<hr><div class="row backgroundForm formStyle m-1 py-2">
          <div class="col">
            <div class="container-fluid">
              <div class="row">
                <div class="badge">Background</div>
              </div>
              <div class="row">
                <div class="col">
                  Choose background from catalogue:
                </div>

                <div class="col">
                  <button onclick="imageFuncs.openCatalogue('background', 0)">Open</button>
                </div>
              </div>
              <div class="row">
                <div class="col-2 mt-1 offset-1">
                  <i>OR</i>
                </div>
              </div>
              <div class="row">
                <div class="col">Set Background by URL:</div>
                <div class="col"><input type="text" onchange="imageFuncs.directURLChange(event.target.value)" value='${card.background}'></div>
              </div>
            </div>
          </div>
        </div>`;


        for (let i=0; i<card.images.length; i++){
          let image=card.images[i];
          // col-4 offset-2
          // <table>
          //   <tr>
          //     <td>
          //       Choose item image from catalogue:
          //     </td>
          //     <td>
          //       <button onclick="imageFuncs.openCatalogue('images', ${i})">Open</button>
          //     </td>
          //   </tr>
          //   <tr>
          //     <td>Set Image by URL:</td>
          //     <td><input type="text" onchange="imageFuncs.directURLChange(event.target.value, ${i})" placeholder='Enter URL...' value='${image.content}'></td>
          //   </tr>
          //   <tr>
          //     <td>Position image:</td>
          //     <td><label>X-pos:<input type="number" onchange="imageFuncs.changeImageStats('xPos',event.target.value,${i})" placeholder='X-coordinate as integer...' value='${image.xPos}'></label></td>
          //     <td><label>X-pos:<input type="number" onchange="imageFuncs.changeImageStats('yPos',event.target.value,${i})" placeholder='Y-coordinate as integer...' value='${image.yPos}'></label></td>
          //   </tr>
          //   <tr>
          //     <td>Size image:</td>
          //     <td><label>Width<input type="number" onchange="imageFuncs.changeImageStats('width',event.target.value,${i})" placeholder='Enter a width...' value='${image.width}'></label></td>
          //     <td><label>Height<input type="number" onchange="imageFuncs.changeImageStats('height',event.target.value,${i})" placeholder='Enter a height...' value='${image.height}'></label></td>
          //   </tr>
          // </table>
          imageForms+=`<hr><div class="row imageForm m-1 py-2 formStyle">
                <div class="col closableDiv">
                  <div onclick="imageFuncs.deleteImageForm(${i})" class="closeButton"></div>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="badge">Image: ${i}</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-4">
                        Choose item image from catalogue:
                      </div>
                      <div class="col-2">
                        <button onclick="imageFuncs.openCatalogue('images', ${i})">Open</button>
                      </div>
                    </div>
                    <div class="row">
                    <div class="col-2 mt-1 offset-1">
                      <i>OR</i>
                    </div>
                    </div>

                    <div class="row mt-1">

                      <div class="col-4">Set Image by URL:</div>
                      <div class="col"><input type="text" onchange="imageFuncs.directURLChange(event.target.value, ${i})" placeholder='Enter URL...' value='${image.content}'></div>
                    </div>
                    <hr>
                    <div class="row mt-2">
                      <div class="col-4">Position image:</div>
                      <div class="col"><label>X-pos:<input type="number" onchange="imageFuncs.changeImageStats('xPos',event.target.value,${i})" placeholder='X-coordinate as integer...' value='${image.xPos}'></label></div>
                      <div class="col"><label>Y-pos:<input type="number" onchange="imageFuncs.changeImageStats('yPos',event.target.value,${i})" placeholder='Y-coordinate as integer...' value='${image.yPos}'></label></div>
                    </div>
                    <hr>
                    <div class="row mt-2">
                      <div class="col-4">Size image:</div>
                      <div class="col"><label>Width:<input type="number" onchange="imageFuncs.changeImageStats('width',event.target.value,${i})" placeholder='Enter a width...' value='${image.width}'></label></div>
                      <div class="col"><label>Height:<input type="number" onchange="imageFuncs.changeImageStats('height',event.target.value,${i})" placeholder='Enter a height...' value='${image.height}'></label></div>
                    </div>

                  </div>


                </div>
              </div>`;
        }

        for (let i=0; i<card.text.length; i++){
          let text=card.text[i];
          let leftSelect, rightSelect, centerSelect;
          text.fontAlign=="left" ?  leftSelect="selected":leftSelect="";
          text.fontAlign=="center" ?  centerSelect="selected":centerSelect="";
          text.fontAlign=="right" ?  rightSelect="selected":rightSelect="";
          // col-6 offset-2
          textForms+=`<hr><div class="row textForm m-1 py-2 formStyle">

            <div class="col closableDiv">
              <div onclick="textFormFuncs.deleteTextForm(${i})" class="closeButton"></div>
              <div class="container-fluid">
              <div class="row">
                <div class="badge">Text: ${i}</div>
              </div>
                <div class="row">
                  <div class="col-2">Position text:</div>
                  <div class="col-3"><label>X-pos:<input onchange="textFormFuncs.changeTextStats('xPos',event.target.value,${i})" type="number" value='${text.xPos}'></label></div>
                  <div class="col-3"><label>Y-pos:<input onchange="textFormFuncs.changeTextStats('yPos',event.target.value,${i})" type="number" value='${text.yPos}'></label></div>
                  <div class="col-4"><label>Align:<select onchange="textFormFuncs.changeTextStats('fontAlign',event.target.value,${i})" id="alignSet${i}">
                  <option value="left" ${leftSelect}>Left</option>
                  <option value="center" ${centerSelect}>Center</option>
                  <option value="right" ${rightSelect}>Right</option>
                  </select></label></div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-2">Set Font:</div>
                  <div class="col-3"><select onchange="textFormFuncs.changeTextStats('fontFam',event.target.value,${i})" id="fontSelect${i}" class="fontSelector">
                  </select></div>
                  <div class="col-3" ><label>Size:<input type="number" onchange="textFormFuncs.changeTextStats('fontNum',event.target.value,${i})" value='${text.fontNum}'></label></div>
                  <div class="col-4"><label>Color:<input type="color" onchange="textFormFuncs.changeTextStats('fontColor',event.target.value,${i})" value="${text.fontColor}"></label></div>
                </div>
                <hr>
                <div class="row">

                  <div class="col-10 offset-1">

                    <textarea style="white-space: pre-wrap;" onchange="textFormFuncs.changeTextContent(event.target.value,${i})" placeholder="Write Text Here...">${text.content}</textarea>
                  </div>
                </div>
              </div>


            </div>
          </div>
          </div>`;
        }

        // <table style="width:100%;">
        //   <tr>
        //     <td>
        //      <textarea style="white-space: pre-wrap;" onchange="textFormFuncs.changeTextContent(event.target.value,${i})" placeholder="Set text here...">${text.content}</textarea>
        //     </td>
        //   </tr>
        //   <tr>
        //     <td>Position text:</td>
        //     <td><label>X-pos:<input onchange="textFormFuncs.changeTextStats('xPos',event.target.value,${i})" type="number" value='${text.xPos}'></label></td>
        //     <td><label>X-pos:<input onchange="textFormFuncs.changeTextStats('yPos',event.target.value,${i})" type="number" value='${text.yPos}'></label></td>
        //     <td><label>Align:<select onchange="textFormFuncs.changeTextStats('fontAlign',event.target.value,${i})" id="alignSet${i}">
        //     <option value="left" ${leftSelect}>Left</option>
        //     <option value="center" ${centerSelect}>Center</option>
        //     <option value="right" ${rightSelect}>Right</option>
        //     </select></label></td>
        //   </tr>
        //   <tr>
        //     <td style="width:10%;">Set Font:</td>
        //     <td style="width:10%;"><label>Type<select onchange="textFormFuncs.changeTextStats('fontFam',event.target.value,${i})" id="fontSelect${i}" class="fontSelector">
        //     </select></label></td>
        //     <td style="width:10%;"><label>Size<input type="number" onchange="textFormFuncs.changeTextStats('fontNum',event.target.value,${i})" value='${text.fontNum}'></label></td>
        //     <td style="width:10%;"><label>Color<input type="color" onchange="textFormFuncs.changeTextStats('fontColor',event.target.value,${i})" value="${text.fontColor}"></label></td>
        //   </tr>
        // </table>

    imageForms+=`<div class="mt-2 row">
    <div class="col-4 offset-4">

      <button class="addFormButton" onclick="imageFuncs.addImageForm()">New Image</button>
      <hr>
    </div>
    </div>`;
    textForms+=`<div class="mt-2 row">
      <div class="col-4 offset-4">

        <button class="addFormButton" onclick="textFormFuncs.addTextForm()">New Text</button>
        <hr>
      </div>
    </div>`;

    $("#cardImageForms").html(imageForms);
    $("#cardTextForms").html(textForms);
    data.getFontList();

  },

  setFontOptions:function(){

      let fonts=data.getFonts();

      let fontSelect=``;

      // <option value="armor">Armor Bonus (enhancement)</option>
      // <option value="weapon">Weapon Bonus (enhancement)</option>
      // <option value="spellSlot">Bonus Spell</option>
      // <option value="spellResist">Spell Resistance</option>
      // <option value="spellEffect">Spell Effect</option>
      //
      // <option value="abilityScore">Ability Bonus (enhancement)</option>
      // <option value="AC">AC Bonus (deflection/other)</option>
      // <option value="natArmor">Natural Armor Bonus (Enhancement)</option>
      // <option value="saves">Save Bonuses (Resistance/Other)</option>
      // <option value="skills">Skill Bonuses (Competence)</option>

      //Create for loop to create options for each font.  Could we set the font for each to be their own individual fonts?  That SEEMS totally doable...
      fonts.forEach(function(font){
        fontSelect+=`<option style="font-family:'${font}' "value="${font}">${font}</option>`;
      });
      $(".fontSelector").html(fontSelect);
      cardForms.showSelectedFonts();
  },
  showSelectedFonts:function(){
    let card=data.getCard();

    for (let i=0; i<card.text.length; i++){
      let text=card.text[i];
      $(`#fontSelect${i}`).val(text.fontFam);
    }


  },
}

let utility={
  checkInclusion:function(theList, guest){
    //both assumed to be arrays, returns true if EVERY element in guest is on the list therwise return false
    for (let i=0; i<guest.length; i++){
      if (!theList.includes(guest[i])){
        return false;
      }
    }
    return true;
  }
}

let imageFuncs={
  openCatalogue:function(catalogueType, imageIndex){
    data.resetActiveCatalogue(catalogueType, imageIndex);
    let card=data.getCard();
    let name=`Image Catalogue ${imageIndex}: `;
    let description=card.description;
    if (catalogueType=="background"){
      name="Background Catalogue:";

    }

    //set name section of catalogue
    $("#catalogueName").html(name);

    //set tags for catalogue
    // $("#catalogueTags").html(catalogue.getTags(catalogueType));
    catalogue.setTags();
    //set catalogue grid

    $("#catalogueGrid").html(catalogue.getGrid(catalogueType));

    //set selected item description
    $("#catalogueDescription").addClass("hidden");
    catalogue.setActiveTile();

    $("#imgSelectContainer").removeClass("hidden");
    catalogue.setTileDims();
  },
  directURLChange:function(newURL, imageIndex){
    let card=data.getCard();
    console.log(imageIndex);

    if (imageIndex!==undefined){
      let image=card.images[imageIndex];
      image.content=newURL;
      image.catalogueNum=null;
    }
    else{
      card.background=newURL;
      card.backgroundID=null;
    }

    data.saveCard(card);
    cardForms.loadCardForms();
    catalogue.setActiveTile();
  },
  changeImageStats:function(statChanged, newStat, imageIndex){
    let card=data.getCard();
    let image=card.images[imageIndex];
    image[statChanged]=newStat;
    data.saveCard(card);
  },
  addImageForm:function(){
    let card=data.getCard();
    card.images.push(new construct.image());
    data.saveCard(card);
    cardForms.loadCardForms();
  },
  deleteImageForm:function(imageIndex){
    let card=data.getCard();
    card.images.splice(imageIndex, 1);
    data.saveCard(card);
    cardForms.loadCardForms();
  }
}

let textFormFuncs={
  changeTextStats:function(statChanged, newStat, textIndex){
    let card=data.getCard();
    let text=card.text[textIndex];
    text[statChanged]=newStat;
    data.saveCard(card);
  },
  changeTextContent:function(newContent, textIndex){
    let card=data.getCard();
    let text=card.text[textIndex];
    text.content=newContent;
    console.log(newContent);
    data.saveCard(card);
  },
  addTextForm:function(){
    let card=data.getCard();
    card.text.push(new construct.text());
    data.saveCard(card);
    cardForms.loadCardForms();
  },
  deleteTextForm:function(imageIndex){
    let card=data.getCard();
    card.text.splice(imageIndex, 1);
    data.saveCard(card);
    cardForms.loadCardForms();
  }
}

let canvasLogic={
  displayItemCard:function(gridOn){

      let card=data.getCard();
      let promisedBackground= new Promise(function (resolve, reject){
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Sorry!  We weren't able to load the url "${card.background}" from your background selection.`);

        img.src = card.background;
      });

      let promisedItems=[]
      for (let i=0; i<card.images.length; i++){
        promisedItems.push(
          new Promise(function (resolve, reject){
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(`Sorry!  We weren't able to load the url "${card.images[i].content}" from image number: "${i}"`);

            img.src = card.images[i].content;
          })
        );
      //   promisedItems[i].catch(function(error) {
      //   console.log(error);
      // });
      }

      Promise.all([promisedBackground, ...promisedItems]).then(
        function(img){
          let canvas = $("#cardCanvas")[0];
          let ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          canvas.crossOrigin = "Anonymous";
          ctx.textBaseline = "middle";
          ctx.textAlign = "center";

          //load images THEN draw images
          ctx.drawImage(img[0], 0, 0, img[0].width,    img[0].height,
                        0, 0, canvas.width, canvas.height);

          for (let i=1; i<img.length; i++){
            // ctx.drawImage(img[i], 0, 0, img[i].width,    img[i].height,
            //               canvas.width/4, canvas.height/4.5, canvas.width/2, canvas.height/2.5);
            ctx.drawImage(img[i], 0, 0, img[i].width,    img[i].height,
                          card.images[i-1].xPos, card.images[i-1].yPos, card.images[i-1].width, card.images[i-1].height);
                          console.log(card.images[i-1]);
            // context.drawImage(img,sx,sy,swidth,sheight,
            //                   x,y,width,height);
          }



          //write name

          card.text.forEach(function(textObj){
            ctx.font = `${textObj.fontNum}px ${textObj.fontFam}`;
            ctx.textAlign = textObj.fontAlign;
            ctx.fillStyle=textObj.fontColor;
            let lineHeight=ctx.measureText("M").width+3;
            let lines = textObj.content.split('\n');
            for (let i=0; i<lines.length; i++){
              ctx.fillText(lines[i], textObj.xPos, parseInt(textObj.yPos)+(i*lineHeight));
              console.log(parseInt(textObj.yPos)+(i*lineHeight));
            }
          });

          if (gridOn){

            ctx.strokeStyle="#00ff40";
            for (let y=0; y<canvas.height; y+=25){
              for (let x=0; x<canvas.width; x+=25){
                ctx.rect(x, y, 25, 25);
                ctx.stroke();
              }
            }
          }
          else{
            $("#gridLayerButton").removeClass("hidden");
          }

      }).catch(function(err) {
        alert(err); // some coding error in handling happened
      });;




},

// displayCardGrid:function(){
//   let card=data.getCard();
//   let promisedBackground= new Promise(function (resolve, reject){
//     const img = new Image();
//     img.onload = () => resolve(img);
//     img.onerror = () => reject('error');
//
//     img.src = card.background;
//   });
//
//   let promisedItems=[]
//
//
//   Promise.all([promisedBackground]).then(
//     function(img){
//       let canvas = $("#cardCanvas")[0];
//       let ctx = canvas.getContext('2d');
//
//       canvas.crossOrigin = "Anonymous";
//       ctx.textBaseline = "middle";
//       ctx.textAlign = "center";
//
//       //load images THEN draw images
//       ctx.drawImage(img[0], 0, 0, img[0].width,    img[0].height,
//                     0, 0, canvas.width, canvas.height);
//
//
//
//
//
//   });
// }
}





function setClicks(){
  $("#resetButton").click(resetStorage);

  $("#charPortrait").click({element:'#charOverlay'},toggleDisplay);
  $("#exitPageButton").click({element:'#charOverlay'},toggleDisplay);
  $("#skillsPageButton").click({page:'#skillSheet'},turnPage);
  $("#statsPageButton").click({page:'#statSheet'},turnPage);

  $(".tabHead").click(collapseTabBody);
}
