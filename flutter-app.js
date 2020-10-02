class FlutterApp extends HTMLElement {
    constructor() {
        super();
        const width = this.getAttribute("width") || "50%";
        const height = this.getAttribute("height") || "50%";
        this.innerHTML = '
    <style>
        #app-container {
          height: ${height};
          width: ${width};
          background-color: grey;
          margin: 0 auto;
          border: none;
        }
      </style>
    <iframe
        id="app-container"
        src="flutter-app.html">
    </iframe>
       ' ;
    }
}