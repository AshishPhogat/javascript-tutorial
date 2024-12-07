const drags = document.querySelectorAll(".message");
let dragelement;

drags.forEach((drag) => {
  drag.ondragstart = (e) => {
    dragelement = e.target;
    e.target.classList.add("dragging");
  };

  drag.ondrag = (e) => {
    console.log("dragging");
  };

  drag.ondragend = (e) => {
    dragelement.classList.remove("dragging");
  };
});

const elements = document.querySelectorAll(".dropbox");

elements.forEach((ele) => {
  ele.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  ele.addEventListener("dragenter", (e) => {
    console.log("targert ", e.target);
    if (!e.target.classList.contains("highlight")) {
      e.target.classList.add("highlight");
    }
  });
  ele.addEventListener("dragleave", (e) => {
    if (e.target.classList.contains("highlight")) {
      e.target.classList.remove("highlight");
    }
  });
  ele.addEventListener("drop", (e) => {
    if (e.target != dragelement) e.target.append(dragelement);
    dragelement.classList.remove("dragging");
    e.target.classList.remove("highlight");
  });
});
