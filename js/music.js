const songs = [
  {
    title: '碎月',
    artist: 'なつかぜメモリア',
    cover: 'music/suiyue.jpg',
    src: 'music/Foxtail-Grass Studio - 歳月-雲流れ-.mp3'
  },
  {
    title: 'Flowering Night',
    artist: 'ZUN',
    cover: 'music/sakuya.jpg',
    src: 'music/flowering night.mp3'
  },
  // 添加更多歌曲...
];

const searchInput = document.getElementById('searchInput');
const songList = document.getElementById('songList');
const audioPlayer = document.getElementById('audioPlayer');
const coverImage = document.getElementById('coverImage');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');

function displaySongs() {
  songs.forEach((song, index) => {
    const songItem = document.createElement('div');
    songItem.classList.add('song-item');
    songItem.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <h3>${song.title}</h3>
    `;
    songItem.addEventListener('click', () => playSong(index));
    songList.appendChild(songItem);
  });
}

function playSong(index) {
  const song = songs[index];
  audioPlayer.src = song.src;
  audioPlayer.play();

  coverImage.src = song.cover;
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm) ||
    song.artist.toLowerCase().includes(searchTerm)
  );
  songList.innerHTML = '';
  filteredSongs.forEach((song, index) => {
    const songItem = document.createElement('div');
    songItem.classList.add('song-item');
    songItem.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <h3>${song.title}</h3>
    `;
    songItem.addEventListener('click', () => playSong(index));
    songList.appendChild(songItem);
  });
});
function playSong(index) {
  const song = songs[index];
  audioPlayer.src = song.src;
  audioPlayer.play();

  coverImage.src = song.cover;
  coverImage.classList.add('small'); // 添加 'small' 类以缩小封面尺寸
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
}
// 设置默认封面图像路径
const defaultCover = 'music/默认封面.jpg';

// 在页面加载完成时显示默认封面
window.addEventListener('load', () => {
  setDefaultCover();
});

function setDefaultCover() {
  coverImage.src = defaultCover;
  coverImage.classList.remove('hide');
}

function playSong(index) {
  const song = songs[index];
  audioPlayer.src = song.src;
  audioPlayer.play();

  if (song.cover) {
    coverImage.src = song.cover;
    coverImage.classList.remove('hide');
  } else {
    setDefaultCover();
  }

  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
};
displaySongs();
