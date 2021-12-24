window.onload = function () {
    for (let node of document.querySelectorAll("td")) {
      node.onclick = function () {
        if (node.className == "") {
          node.className = "selected";
        } else {
          node.className = "";
        }
      };
    }
  };