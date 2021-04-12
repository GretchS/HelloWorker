import flag from 'country-code-emoji'

const template = (cf) => {
    const emoji = flag(cf.country) || '👋'
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>WWCode Worker</title>

            <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
            <style>
                body {
                    background: #003682;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    font-family: sans-serif;
                }
                div.container {
                    background: #fff;
                    text-align: center;
                    border-radius: 1rem;
                    padding: 4rem;
                    box-shadow: 5px 5px #414243;
                }
            </style>    
        </head>
        <body>
            <div class="container">
                <h1>Hello Worker!</h1> 
                <h2>You're connecting from ${cf.country} ${emoji}</h2>
            </div>
        </body>
        </html>
        `
}


export default template