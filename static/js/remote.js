if (getUrlParam("remote") == "true") {
  let content = document.getElementsByClassName("content_single")[0];
  content.style.maxHeight = "1080px";
  content.style.maxWidth = "1002px";
  document.head.innerHTML += `
    <style>
        #site_credits { display: none; }
    </style>`;
  document.body.innerHTML = "";
  document.body.appendChild(content);
}
