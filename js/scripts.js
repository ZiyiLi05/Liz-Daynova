// js/scripts.js

// 确保DOM内容加载完毕后再执行脚本
document.addEventListener('DOMContentLoaded', () => {
    // 获取当前页面的文件名 (例如: "index.html", "category.html", "post.html")
    const currentPage = window.location.pathname.split('/').pop();
    const urlParams = new URLSearchParams(window.location.search);

    // --- 主页 (index.html) 逻辑 ---
    if (currentPage === 'index.html' || currentPage === '') { // 空字符串用于根目录访问
        const categoryGrid = document.getElementById('category-grid');
        if (categoryGrid) {
            // 遍历所有分类，为主页右侧面板生成内容
            blogData.categories.forEach(category => {
                // 跳过 '个人介绍' 和 '简历'，因为它们是独立页面
                if (category.id === 'personal-intro' || category.id === 'resume') {
                    return;
                }

                // 创建分类方块容器
                const categoryBlock = document.createElement('div');
                categoryBlock.classList.add('category-block');

                // 添加分类标题
                const categoryTitle = document.createElement('h3');
                categoryTitle.textContent = `【${category.title}】`;
                categoryBlock.appendChild(categoryTitle);

                // 创建最新文章列表
                const latestArticlesList = document.createElement('ul');
                latestArticlesList.classList.add('latest-articles-list');

                // 筛选并获取该分类下最新的3篇文章
                const articlesInCategory = blogData.articles
                    .filter(article => article.category === category.id)
                    .slice(0, 3); // 只取最新的3篇

                if (articlesInCategory.length > 0) {
                    articlesInCategory.forEach(article => {
                        const listItem = document.createElement('li');
                        const articleLink = document.createElement('a');
                        articleLink.href = `post.html?id=${article.id}`; // 链接到文章详情页
                        articleLink.textContent = `${article.title} (${article.date})`;
                        listItem.appendChild(articleLink);
                        latestArticlesList.appendChild(listItem);
                    });
                } else {
                    const listItem = document.createElement('li');
                    listItem.textContent = '暂无文章。';
                    latestArticlesList.appendChild(listItem);
                }

                categoryBlock.appendChild(latestArticlesList);

                // 添加“查看全部”链接
                const viewAllLink = document.createElement('a');
                viewAllLink.href = `category.html?id=${category.id}`; // 链接到该分类的完整列表页
                viewAllLink.classList.add('view-all-link');
                viewAllLink.textContent = '查看全部 >';
                categoryBlock.appendChild(viewAllLink);

                categoryGrid.appendChild(categoryBlock);
            });
        }
    }

    // --- 分类文章列表页 (category.html) 逻辑 ---
    if (currentPage === 'category.html') {
        const categoryId = urlParams.get('id');
        const categoryTitleElement = document.getElementById('category-title');
        const articleListContainer = document.getElementById('article-list-container');

        if (categoryId && categoryTitleElement && articleListContainer) {
            const category = blogData.categories.find(cat => cat.id === categoryId);
            if (category) {
                categoryTitleElement.textContent = `${category.title} - 所有文章`;

                const articlesToDisplay = blogData.articles
                    .filter(article => article.category === categoryId)
                    .sort((a, b) => new Date(b.date) - new Date(a.date)); // 确保按日期倒序

                if (articlesToDisplay.length > 0) {
                    articlesToDisplay.forEach(article => {
                        const articleItem = document.createElement('div');
                        articleItem.classList.add('article-list-item'); // 定义新CSS类

                        const thumbnailImg = document.createElement('img');
                        thumbnailImg.src = article.thumbnail || 'images/thumbnails/default_thumb.jpg'; // 默认缩略图
                        thumbnailImg.alt = article.title;
                        thumbnailImg.classList.add('article-thumbnail'); // 定义新CSS类

                        const contentDiv = document.createElement('div');
                        contentDiv.classList.add('article-content-preview'); // 定义新CSS类

                        const titleLink = document.createElement('a');
                        titleLink.href = `post.html?id=${article.id}`;
                        titleLink.classList.add('article-title-link'); // 定义新CSS类
                        titleLink.textContent = article.title;

                        const dateSpan = document.createElement('span');
                        dateSpan.classList.add('article-date'); // 定义新CSS类
                        dateSpan.textContent = article.date;

                        contentDiv.appendChild(titleLink);
                        contentDiv.appendChild(dateSpan);
                        articleItem.appendChild(thumbnailImg);
                        articleItem.appendChild(contentDiv);

                        articleListContainer.appendChild(articleItem);
                    });
                } else {
                    articleListContainer.innerHTML = '<p>该分类下暂无文章。</p>';
                }
            } else {
                articleListContainer.innerHTML = '<p>未找到该分类。</p>';
            }
        }
    }

    // --- 文章详情页 (post.html) 逻辑 ---
    if (currentPage === 'post.html') {
        const postId = urlParams.get('id');
        const postTitleElement = document.getElementById('post-title');
        const postMetaElement = document.getElementById('post-meta');
        const postContentElement = document.getElementById('post-content');

        if (postId && postTitleElement && postMetaElement && postContentElement) {
            const article = blogData.articles.find(art => art.id === postId);

            if (article) {
                postTitleElement.textContent = article.title;
                postMetaElement.textContent = `发布日期: ${article.date}`;

                if (article.type === 'text') {
                    postContentElement.innerHTML = article.content;
                } else if (article.type === 'pdf' && article.pdfUrl) {
                    // 嵌入PDF文件
                    const pdfFrame = document.createElement('iframe');
                    pdfFrame.src = article.pdfUrl;
                    pdfFrame.width = '100%';
                    pdfFrame.height = '800px'; // 适当高度
                    pdfFrame.style.border = 'none';
                    postContentElement.appendChild(pdfFrame);
                } else if (article.type === 'image' && article.imageUrl) {
                    // 嵌入图片
                    const postImage = document.createElement('img');
                    postImage.src = article.imageUrl;
                    postImage.alt = article.title;
                    postImage.style.maxWidth = '100%'; // 图片适应容器宽度
                    postImage.style.height = 'auto';
                    postImage.style.display = 'block'; // 避免底部空白
                    postImage.style.margin = '20px auto'; // 居中显示
                    postContentElement.appendChild(postImage);
                } else {
                    postContentElement.innerHTML = '<p>文章内容类型不支持或内容缺失。</p>';
                }
            } else {
                postContentElement.innerHTML = '<p>未找到该文章。</p>';
            }
        }
    }

    // --- 个人介绍页 (about.html) 逻辑 ---
    if (currentPage === 'about.html') {
        const aboutContentDiv = document.getElementById('about-content');
        if (aboutContentDiv && blogData.profile.aboutContent) {
            aboutContentDiv.innerHTML = blogData.profile.aboutContent;
        }
    }

    // --- 简历页 (resume.html) 逻辑 ---
    if (currentPage === 'resume.html') {
        const resumeContentDiv = document.getElementById('resume-content');
        if (resumeContentDiv && blogData.profile.resumeContent) {
            const pdfFrame = document.createElement('iframe');
            pdfFrame.src = blogData.profile.resumeContent;
            pdfFrame.width = '100%';
            pdfFrame.height = '1000px'; // 简历PDF通常需要更高的高度
            pdfFrame.style.border = 'none';
            resumeContentDiv.appendChild(pdfFrame);
        }
    }
});
