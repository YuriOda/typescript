class Books {
  id: string;
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.id = new Date().toISOString();
  }
}

export default Books;
