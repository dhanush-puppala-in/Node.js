    const express = require('express');
    const app = express();
    const path = require('path');   
    const port = process.env.PORT||8000;

    //app.use(express.static(path.join(__dirname, 'public')));

    app.get('/dp', (req, res) => {
        res.sendFile(path.join(__dirname, 'public'));
        app.use((path.join(__dirname, 'public')));
    });
    app.get('/', (req, res) => {
        res.write("hello!!!")/*(path.join(__dirname, 'public', 'index.html'))*/;
        res.end();
    });

    app.listen(port)
    /*
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });*/


    
