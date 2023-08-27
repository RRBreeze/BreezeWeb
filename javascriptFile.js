// 获取导航链接元素
const navLinks = document.querySelectorAll('nav a');

// 添加点击事件处理程序
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert('You clicked a navigation link!');
    });
});
