It's possible to make extra canvas element whitout adding it to the document and draw inverted sprites to it.
Drawing actual frame, we can just copy already inverted spirtes to the main canvas.
Doing the inverted drawing once, would require to add some handling, because if we do it before image loads it won't draw anything.
We could make a handler on the image to draw the inverted images to the extra canvas. This way we can use this to draw the source immediately.