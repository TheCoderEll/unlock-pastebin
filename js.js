function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function hi(){ 
  document.getElementById("postpasswordverificationform-password").value = Math.random().toString(36).substring(2, Math.random()) + Math.random().toString(36).substring(2, Math.random());
  getElementByXpath("/html/body/div[1]/div[2]/div[1]/div[2]/div[2]/form/div[3]/button").click();
  setTimeout(() => {  hi(); }, 100);
}

hi();
