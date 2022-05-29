class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="styles.css">
            <title>Webbkreatör | Per Olov Näs</title>
        </head>
        <header>
            <a href="/">head and header</a>
        </header>
        `
    }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            footer here
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter);