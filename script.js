var codeBlockWrappers = document.getElementsByClassName("code-block-wrapper")
for(var i=0; i < codeBlockWrappers.length; i++){
    var wrapper = codeBlockWrappers[i]
    var headers = wrapper.querySelectorAll(".cb-header")
    var blocks = wrapper.querySelectorAll(".code-block")

    headers[0].className += " selected"
    blocks[0].className += " selected"

    var onClick = function(pos, headers, blocks) {
        return function() {
            var blockToHide
            var headerToHide
            for(var k=0; k < blocks.length; k++){
                if(String(blocks[k].className).includes("selected")) {
                    blockToHide = blocks[k]
                    headerToHide = headers[k]
                }
            }
            if(blockToHide) {
                blockToHide.className = String(blockToHide.className).replace(" selected","")
                blocks[pos].className += " selected"

                headerToHide.className = String(headerToHide.className).replace(" selected","")
                headers[pos].className += " selected"
            }
        }
    }
    for(var t=0; t < headers.length; t++) {
        headers[t].addEventListener("click", onClick(t, headers, blocks))
    }
}

function copyFunction(node) {
    return function(){
        console.log("Clicked ")
        var r = document.createRange();
        r.selectNode(node);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }
  }

  console.log("Looking for code copy buttons")
  var codeCopyButtons = document.getElementsByClassName("copy-icon")
  console.log("Found " + codeCopyButtons.length + " buttons")
  for(var i=0; i < codeCopyButtons.length; i++){
    var copyButton = codeCopyButtons[i]
    var nearestCodeBlock = copyButton.nextElementSibling
    console.log("Found " + nearestCodeBlock)
    copyButton.addEventListener('click', copyFunction(nearestCodeBlock));
  }