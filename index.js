var userName = "";

$(document).keydown(function (e) {
  var key = e.key;
  if (key === "Delete" || key === "Backspace") {
    userName = userName.substring(0, userName.length - 1);
    $(".line2").text(userName);
  } else if (
    key != "Shift" &&
    key != "CapsLock" &&
    key != "Tab" &&
    key != "Enter"
  ) {
    userName += key;
    $(".line2").text(userName);
  }
});
