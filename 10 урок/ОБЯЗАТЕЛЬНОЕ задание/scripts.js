class options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  createDiv(text) {
  	let newDiv = document.createElement("div");
  	document.body.appendChild(newDiv);
    newDiv.innerHTML = text;
    newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
  }
}

let obj = new options('100px', '350px', '#3498db', '15px', 'center');

obj.createDiv('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit architecto voluptates accusantium assumenda nam, ducimus eaque deleniti delectus perferendis quaerat! Tenetur perferendis quo adipisci quis reiciendis fuga nam dolores. Unde.');