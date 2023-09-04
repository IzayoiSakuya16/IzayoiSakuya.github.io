document.addEventListener("DOMContentLoaded", function() {
    var songs = [
        {
            title: "打飞机",
            artist: "红魔馆的主人",
            cover: "game/hongmo.png",
            url: "game/打飞机.zip"
        },
        // 添加更多的歌曲信息
    ];

    var musicContainer = document.querySelector(".music-container");
    var searchInput = document.getElementById("searchInput");

    function displaySongs(songs) {
        musicContainer.innerHTML = "";

        songs.forEach(function(song) {
            var songElement = document.createElement("div");
            songElement.classList.add("song");
            songElement.classList.add("animate__animated");
            songElement.classList.add("animate__fadeInUp");
            songElement.addEventListener("click", function() {
                // 播放歌曲的逻辑
            });

            var coverElement = document.createElement("img");
            coverElement.src = song.cover;
            coverElement.alt = "歌曲封面";
            coverElement.classList.add("song-cover");
            songElement.appendChild(coverElement);

            var detailsElement = document.createElement("div");
            detailsElement.classList.add("song-details");

            var titleElement = document.createElement("h3");
            titleElement.classList.add("song-title");
            titleElement.textContent = song.title;
            detailsElement.appendChild(titleElement);

            var artistElement = document.createElement("p");
            artistElement.classList.add("song-artist");
            artistElement.textContent = song.artist;
            detailsElement.appendChild(artistElement);

            var downloadElement = document.createElement("a");
            downloadElement.classList.add("song-download");
            downloadElement.href = song.url;
            downloadElement.download = "";
            downloadElement.textContent = "下载";
            detailsElement.appendChild(downloadElement);

            songElement.appendChild(detailsElement);

            musicContainer.appendChild(songElement);
        });
    }

    displaySongs(songs);

    searchInput.addEventListener("input", function() {
        var searchText = searchInput.value.toLowerCase();

        var filteredSongs = songs.filter(function(song) {
            return song.title.toLowerCase().includes(searchText) || song.artist.toLowerCase().includes(searchText);
        });

        displaySongs(filteredSongs);
    });
});
