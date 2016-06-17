var title = $("title").html();

$.get('http://www.omdbapi.com/?t=' + title + '&y=&plot=short&r=json', function(data) {
	var info = {
		title: data.Title,
		year: data.Year,
		director: data.Director,
		actors: data.Actors,
		poster: data.Poster,
		imdbRating: data.imdbRating,
		poster: data.Poster
	};

	var infoHTML = "<p>Director: " + info.director + "</p>" +
					"<p>Actors: " + info.actors + "</p>" +
					"<p>IMDb rating: " + info.imdbRating + "</p>";

	$("#pic").html('<img class="onesheet" src=' + info.poster + ' alt=info.title>')
	$("#info").html("<h2>" + info.title + " (" + info.year + ")");
	$("#info").append(infoHTML);
	$("#info").append('<button id="trailer">Watch the trailer!</button>');
	$("#info").append('<p><button id="back">Back to Movie Me!</button></p>');

	$("#back").click(function() {
		window.location = "index.html";
	});

	$("#trailer").click(function() {
		var url;

		if (title === "Dirty Harry") {
			url = "https://www.youtube.com/watch?v=HjBNldYiUmg";
		} else if (title === "Die Hard") {
			url = "https://www.youtube.com/watch?v=-qxBXm7ZUTM";
		} else if (title === "The Matrix") {
			url = "https://www.youtube.com/watch?v=Q8g9zL-JL8E";
		} else if (title === "Lethal Weapon") {
			url = "https://www.youtube.com/watch?v=5IlMS-dQb2s";
		} else if (title === "The Blues Brothers") {
			url = "https://www.youtube.com/watch?v=A-xtJYIwfYo";
		} else if (title === "Airplane") {
			url = "https://www.youtube.com/watch?v=jHjPY1jG7lo";
		} else if (title === "Blazing Saddles") {
			url = "https://www.youtube.com/watch?v=A2tPgGiBvkc";
		} else if (title === "This Is Spinal Tap") {
			url = "https://www.youtube.com/watch?v=z6F0VyKp4Ik";
		} else if (title === "Sleepless In Seattle") {
			url = "https://www.youtube.com/watch?v=L4KQsPnz8Tw";
		} else if (title === "P.s. I Love You") {
			url = "https://www.youtube.com/watch?v=3GNxdc-wlw4";
		} else if (title === "Sweet November") {
			url = "https://www.youtube.com/watch?v=Tm249Zbv42Y";
		} else if (title === "Something's Gotta Give") {
			url = "https://www.youtube.com/watch?v=6zVzIaEuXS4";
		}

		window.open(url);
	})
});



