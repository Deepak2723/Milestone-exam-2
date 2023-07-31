// Function to get blogs from LocalStorage
function getBlogs() {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    return blogs;
}

// Function to save blogs to LocalStorage
function saveBlogs(blogs) {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

// Function to display blogs on the home page
function displayBlogs() {
    const blogs = getBlogs();
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    blogs.forEach((blog, index) => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');

        const blogTitle = document.createElement('h2');
        blogTitle.textContent = blog.title;

        const blogPoster = document.createElement('p');
        blogPoster.textContent = `Posted by: ${blog.poster}`;

        const blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;

        const blogContent = document.createElement('p');
        blogContent.textContent = blog.content;

        blogItem.appendChild(blogTitle);
        blogItem.appendChild(blogPoster);
        blogItem.appendChild(blogDescription);
        blogItem.appendChild(blogContent);

        mainContent.appendChild(blogItem);
    });
}

// Function to display the add blog modal
function displayAddBlogModal() {
    const addBlogModal = document.getElementById('add-blog-modal');
    addBlogModal.style.display = 'block';
}

// Function to close the add blog modal
function closeAddBlogModal() {
    const addBlogModal = document.getElementById('add-blog-modal');
    addBlogModal.style.display = 'none';
}

// Function to handle the form submission for adding a new blog
function handleAddBlogFormSubmit(event) {
    event.preventDefault();

    const blogTitle = document.getElementById('blog-title').value;
    const blogPoster = document.getElementById('blog-poster').value;
    const blogDescription = document.getElementById('blog-description').value;
    const blogContent = document.getElementById('blog-content').value;

    const newBlog = {
        title: blogTitle,
        poster: blogPoster,
        description: blogDescription,
        content: blogContent,
    };

    const blogs = getBlogs();
    blogs.push(newBlog);
    saveBlogs(blogs);

    closeAddBlogModal();
    displayBlogs();
}

const addBlogButton = document.getElementById('add-blog-button');
addBlogButton.addEventListener('click', displayAddBlogModal);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', closeAddBlogModal);

const addBlogForm = document.getElementById('add-blog-form');
addBlogForm.addEventListener('submit', handleAddBlogFormSubmit);

displayBlogs();
