// Simulate user data
const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" }
];

// Simulate book data
let books = [];


// Login Function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        alert(`Logged in as ${user.role}`);
        if (user.role === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "user.html";
        }
    } else {
        alert("Invalid credentials");
    }
}

// Add Book Function (Admin)
function addBook() {
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("author").value;
    const serialNo = document.getElementById("serialNo").value;
    
    if (title && author && serialNo) {
        const book = { id: books.length + 1, title, author, serialNo, available: true };
        books.push(book);
        alert("Book added successfully!");
        document.getElementById("addBookForm").reset();
        displayBooks();
    } else {
        alert("Please fill all fields");
    }
}

// Display Books (Admin)
function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = books.map(book => `<li>${book.title} by ${book.author} (Serial No: ${book.serialNo})</li>`).join("");
}

// Issue Book Status (User)
function issueBook() {
    const bookId = parseInt(document.getElementById("issueBookId").value);
    const book = books.find(b => b.id == bookId && b.available);
    
    if (book) {
        book.available = false;
        alert(`Book "${book.title}" issued successfully`);
    } else {
        alert("Book not available ");
    }
}

// Return Book Status (User)
function returnBook() {
    const bookId = parseInt(document.getElementById("returnBookId").value);
    const book = books.find(b => b.id == bookId && !b.available);
    
    if (book) {
        book.available = true;
        alert(`Book "${book.title}" returned successfully`);
    } else {
        alert("Invalid book ID or already available");
    }
}

// Extend Membership
function extendMembership() {
    alert("Membership extended by 6 months!");
}

// Cancel Membership
function cancelMembership() {
    alert("Membership canceled!");
}
