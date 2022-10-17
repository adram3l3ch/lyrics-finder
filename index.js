const express = require("express");
const app = express();
const cors = require("cors");
const lyricsFinder = require("lyrics-finder");

app.use(cors());

app.get("/", (req, res) => {
	res.send("Go to /lyrics?artist=&title=");
});

app.get("/lyrics", async (req, res) => {
	const { artist, title } = req.query;
	const a = await lyricsFinder(artist, title);
	res.json({ lyrics: a || "No lyrics found" });
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Listening on port ${PORT}`));
