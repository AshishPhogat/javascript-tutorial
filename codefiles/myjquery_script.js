$(document).ready(() => {
  $("#container").css("display", "flex");
  $("#container").css("padding", "100px");
  $("#container").css("backgroundColor", "black");
  $("#container").css("color", "white");

  $("#box").css("width", "50%");
  $("#second").css("width", "50%");
  let bin = 0;
  $("#btn").on("click", () => {
    $("#container").css({ "flex-direction": !bin ? "row-reverse" : "row" });
    bin = (bin + 1) % 2;

    if (bin) {
      $("#second").hide(1000);
    } else {
      $("#second").show(1000);
    }
  });
});
