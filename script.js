//Globals
var currentTextInput;
var puzzleArrayData;
//Loads the Crossword
function initializeScreen() {
  var puzzleTable = document.getElementById("puzzle");
  puzzleArrayData = preparePuzzelArray();
  for (var i = 0; i < puzzleArrayData.length; i++) {
    var row = puzzleTable.insertRow(-1);
    var rowData = puzzleArrayData[i];
    for (var j = 0; j < rowData.length; j++) {
      var cell = row.insertCell(-1);
      if (rowData[j] != 0) {
        var txtID = String("txt" + "_" + i + "_" + j);
        cell.innerHTML =
          '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' +
          'id="' +
          txtID +
          '" onfocus="textInputFocus(' +
          "'" +
          txtID +
          "'" +
          ')">';
      } else {
        cell.style.backgroundColor = "black";
      }
    }
  }
  addHint();
}
//Adds the hint numbers
function addHint() {
  document.getElementById("txt_0_4").placeholder = "3 \\ 1";
  document.getElementById("txt_2_6").placeholder = "4 \\ 2";
  document.getElementById("txt_4_0").placeholder = "1 \\ 3";
  document.getElementById("txt_7_2").placeholder = "4";
  document.getElementById("txt_1_2").placeholder = "2";
}
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123) {
  currentTextInput = txtID123;
}
//Returns Array
function preparePuzzelArray() {
  var items = [
    [0, 0, 0, 0, "c", "l", "a", "s", "s"],
    [0, 0, "j", 0, "a", 0, 0, 0, 0],
    [0, 0, "a", 0, "c", 0, "c", "s", "s"],
    [0, 0, "v", 0, "h", 0, "o", 0, 0],
    ["f", "r", "a", "m", "e", "w", "o", "r", "k"],
    ["r", 0, 0, 0, 0, 0, "k", 0, 0],
    ["o", 0, 0, 0, 0, 0, "i", 0, 0],
    ["n", 0, "s", "e", "r", "v", "e", "r", 0],
    ["t", 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  return items;
}
//Clear All Button
function clearAllClicked() {
  currentTextInput = "";
  var puzzleTable = document.getElementById("puzzle");
  puzzleTable.innerHTML = "";
  initializeScreen();
}
//Check button
function checkClicked() {
  for (var i = 0; i < puzzleArrayData.length; i++) {
    var rowData = puzzleArrayData[i];
    for (var j = 0; j < rowData.length; j++) {
      if (rowData[j] != 0) {
        var selectedInputTextElement = document.getElementById(
          "txt" + "_" + i + "_" + j
        );
        if (selectedInputTextElement.value != puzzleArrayData[i][j]) {
          selectedInputTextElement.style.backgroundColor = "red";
        } else {
          selectedInputTextElement.style.backgroundColor = "white";
        }
      }
    }
  }
}
