// 获取书籍列表中的所有书籍
const books = document.querySelectorAll('.book');
// 获取搜索输入框和书籍标题
const searchInput = document.getElementById('searchInput');


// 为每本书籍的标题和封面添加点击事件监听器
books.forEach(book => {
  const title = book.querySelector('.bookTitle');
  const cover = book.querySelector('img');
  const chapters = book.querySelector('.chapters');
  let isExpanded = false;

  title.addEventListener('click', toggleChapters);
  cover.addEventListener('click', toggleChapters);

  function toggleChapters() {
    if (isExpanded) {
      chapters.style.display = 'none';
      isExpanded = false;
    } else {
      chapters.style.display = 'block';
      isExpanded = true;
    }
  }
});

// 为搜索输入框添加输入事件监听器
searchInput.addEventListener('input', handleSearch);

// 处理搜索事件
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  
  books.forEach(book => {
    const title = book.querySelector('.bookTitle').textContent.toLowerCase();
    
    if (title.includes(searchTerm)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
}