//Res of root ('/') entry of the app
//Basic HTML code to use REACT
//Title:  Repo History
//Run: <webpack> bundle.js

export default () => {
    return `<!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Varela+Round&display=swap" rel="stylesheet">
                <title>Repo History</title>
                
            </head>
            <body>
                <div id="root"></div>
                <script type="text/javascript" src="/dist/bundle.js">
                </script>
            </body>
        </html>`
};