import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "It's a weekday"
    let adv = "Go to work"

    if (day === 0 || day === 6) {
        type = "It's a weekend"
        adv = "Relax"
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: adv});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

