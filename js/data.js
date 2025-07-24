// js/data.js

// 博客数据结构：包含个人信息、分类列表和文章列表
const blogData = {
    // 个人介绍数据
    profile: {
        name: "李子怡",
        intro: "一位热爱生活与学习的金融从业者，在这里分享我的工作笔记、行业洞察、CFA备考经验，以及日语、法语、商务英语的学习心得。同时，也记录摄影、滑板、钢琴、吉他等兴趣爱好带来的乐趣。期待与您一同成长，探索更多可能。",
        // 简历内容的占位符，实际应指向一个PDF文件或一个详细的HTML页面
        resumeContent: "images/my_resume.pdf", // 假设简历是一个PDF
        aboutContent: `
            <p>大家好，我是李子怡，一位在金融行业深耕多年的专业人士。我热爱我的工作，也享受生活中的点滴乐趣。这个博客是我分享知识、记录成长的平台。</p>
            <p>在金融领域，我专注于金融行研，对宏观经济、行业趋势和公司基本面有深入的理解。我在这里分享我的工作笔记、行业分析和CFA备考经验，希望能为同行提供一些参考。</p>
            <p>除了工作，我还是一个积极的学习者和探索者。我正在学习日语、法语和商务英语，希望通过语言打开通往世界的大门。在业余时间，我喜欢用镜头捕捉生活中的美好瞬间（摄影），在滑板上感受风的速度，用钢琴和吉他弹奏心中的旋律。</p>
            <p>我相信学习和分享是最好的成长方式。如果你对金融、语言学习或我的任何兴趣爱好感兴趣，欢迎与我交流！</p>
        `
    },

    // 博客分类列表
    // id: 用于URL参数和内部逻辑识别
    // title: 显示在页面上的标题
    // description: 分类的简短描述 (可选)
    categories: [
        { id: 'personal-intro', title: '个人介绍', link: 'about.html' }, // 链接到独立页面
        { id: 'resume', title: '简历', link: 'resume.html' }, // 链接到独立页面
        { id: 'japanese', title: '日语', description: '日语学习心得与文化分享' },
        { id: 'french', title: '法语', description: '法语学习之路' },
        { id: 'business-english', title: '商务英语', description: '商务沟通技巧与实践' },
        { id: 'financial-research', title: '金融行研', description: '行业深度分析与报告解读' },
        { id: 'work-notes', title: '工作笔记', description: '日常工作经验与思考' },
        { id: 'cfa-prep', title: 'CFA备考', description: 'CFA考试经验与资料分享' },
        { id: 'photography', title: '摄影', description: '光影记录生活' },
        { id: 'skateboarding', title: '滑板', description: '滑板运动的乐趣与挑战' },
        { id: 'piano', title: '钢琴', description: '钢琴学习与演奏记录' },
        { id: 'guitar', title: '吉他', description: '吉他弹唱与创作' }
    ],

    // 博客文章列表
    // id: 文章唯一标识符
    // category: 所属分类的ID (与上面categories的id对应)
    // title: 文章标题
    // date: 发布日期 (格式为 YYYY-MM-DD，方便排序)
    // thumbnail: 缩略图路径 (请在 images/thumbnails/ 文件夹中放置实际图片)
    // type: 文章内容类型 ('text', 'pdf', 'image')
    // content: 如果type是'text'，则为文章正文HTML内容
    // pdfUrl: 如果type是'pdf'，则为PDF文件路径 (请在 pdfs/ 文件夹中放置实际PDF)
    // imageUrl: 如果type是'image'，则为图片路径
    articles: [
        // 金融行研
        {
            id: 'finance-001',
            category: 'financial-research',
            title: '2024年新能源汽车行业深度分析报告',
            date: '2024-07-20',
            thumbnail: 'images/thumbnails/finance_thumb1.jpg',
            type: 'pdf',
            pdfUrl: 'pdfs/finance_report_new_energy.pdf',
            content: '' // PDF类型文章，content为空
        },
        {
            id: 'finance-002',
            category: 'financial-research',
            title: 'AI在金融领域的应用前景探讨',
            date: '2024-06-15',
            thumbnail: 'images/thumbnails/finance_thumb2.jpg',
            type: 'text',
            content: `
                <p>人工智能（AI）正在以前所未有的速度改变各行各业，金融领域也不例外。从智能投顾到风险管理，AI的应用正在重塑金融服务的未来。本文将深入探讨AI在金融领域的当前应用、面临的挑战以及未来的发展趋势。</p>
                <h3>AI在金融领域的应用</h3>
                <ul>
                    <li><strong>智能投顾：</strong> AI驱动的平台可以根据用户的风险偏好和财务目标提供个性化的投资建议。</li>
                    <li><strong>风险管理：</strong> AI模型能够更精准地识别欺诈行为、评估信用风险和市场风险。</li>
                    <li><strong>量化交易：</strong> AI算法可以分析海量市场数据，发现交易模式并执行高速交易。</li>
                </ul>
                <p>尽管AI带来了巨大的机遇，但也面临数据隐私、算法透明度、监管合规等挑战。未来，随着技术的成熟和监管框架的完善，AI将在金融领域发挥更核心的作用。</p>
            `
        },
        // 日语
        {
            id: 'jp-001',
            category: 'japanese',
            title: '我的日语学习心得：从N3到N2的飞跃',
            date: '2023-10-26',
            thumbnail: 'images/thumbnails/jp_thumb1.jpg',
            type: 'text',
            content: `
                <p>日语学习是一个漫长而有趣的过程。从N3到N2，我总结了一些经验，希望能帮助到正在学习日语的朋友们。</p>
                <h3>关键学习策略</h3>
                <ol>
                    <li>**词汇积累：** 每天坚持背诵新词汇，并结合例句记忆。推荐使用Anki等间隔重复软件。</li>
                    <li>**语法理解：** 不要死记硬背语法点，要理解其语感和使用场景。多做练习，多造句。</li>
                    <li><strong>听力训练：</strong> 每天听日语新闻、播客、动漫，从简单到复杂，逐步提高听力能力。</li>
                    <li><strong>口语练习：</strong> 找语伴或参加线上交流，勇敢开口说日语，不怕犯错。</li>
                </ol>
                <p>N2阶段需要更深入地理解日本文化和语境，多阅读原版材料，看日剧、电影，沉浸式学习效果更佳。</p>
            `
        },
        {
            id: 'jp-002',
            category: 'japanese',
            title: '日本京都秋日摄影之旅',
            date: '2023-09-15',
            thumbnail: 'images/thumbnails/jp_thumb2.jpg',
            type: 'image',
            imageUrl: 'images/posts/kyoto_autumn.jpg', // 假设这是一张大图
            content: '' // 图片类型文章，content为空
        },
        // CFA备考
        {
            id: 'cfa-001',
            category: 'cfa-prep',
            title: 'CFA一级备考经验分享与资料推荐',
            date: '2024-03-01',
            thumbnail: 'images/thumbnails/cfa_thumb1.jpg',
            type: 'text',
            content: `
                <p>CFA一级考试是金融专业人士的敲门砖，备考过程充满挑战但也收获满满。以下是我的一些备考经验和资料推荐：</p>
                <h3>备考建议</h3>
                <ul>
                    <li><strong>制定详细计划：</strong> 将所有科目分配到每周甚至每天，确保进度。</li>
                    <li><strong>理解而非死记：</strong> CFA注重理解概念和应用，多做题是关键。</li>
                    <li><strong>善用官方教材和Mocks：</strong> 官方教材是基础，Mocks是检验和适应考试节奏的最佳方式。</li>
                </ul>
                <p>祝所有CFA考生都能顺利通过！</p>
            `
        },
        // 摄影
        {
            id: 'photo-001',
            category: 'photography',
            title: '城市夜景摄影技巧分享',
            date: '2024-05-10',
            thumbnail: 'images/thumbnails/photo_thumb1.jpg',
            type: 'text',
            content: `
                <p>拍摄迷人的城市夜景需要一些技巧。以下是我在实践中总结的一些经验：</p>
                <h3>夜景摄影小贴士</h3>
                <ul>
                    <li><strong>使用三脚架：</strong> 夜景通常需要长时间曝光，三脚架是必不可少的。</li>
                    <li><strong>低ISO：</strong> 尽量使用最低ISO，以减少噪点。</li>
                    <li><strong>广角镜头：</strong> 捕捉城市全景的利器。</li>
                    <li><strong>寻找光源：</strong> 利用城市灯光、车流光轨等作为画面元素。</li>
                </ul>
                <p>多尝试不同的角度和曝光组合，你会发现夜景的无限魅力。</p>
            `
        },
        // 滑板
        {
            id: 'skate-001',
            category: 'skateboarding',
            title: '我的第一个Ollie：从摔倒到起飞',
            date: '2023-08-01',
            thumbnail: 'images/thumbnails/skate_thumb1.jpg',
            type: 'text',
            content: `
                <p>Ollie是滑板的基础动作，也是最让人兴奋的动作之一。我花了很长时间才掌握它，期间摔了很多次，但每次站起来都离成功更近一步。</p>
                <h3>Ollie学习心得</h3>
                <ul>
                    <li><strong>反复练习：</strong> 没有捷径，只有不断重复。</li>
                    <li><strong>分解动作：</strong> 先练习踩板、滑行，再练习跳跃和摩擦。</li>
                    <li><strong>观看教学视频：</strong> 学习标准动作，纠正自己的错误。</li>
                </ul>
                <p>坚持下去，你也能飞起来！</p>
            `
        },
        // 钢琴
        {
            id: 'piano-001',
            category: 'piano',
            title: '古典钢琴入门：我的启蒙之路',
            date: '2023-07-05',
            thumbnail: 'images/thumbnails/piano_thumb1.jpg',
            type: 'text',
            content: `
                <p>钢琴是我从小就喜欢的乐器。虽然现在工作很忙，但我仍然坚持练习。以下是我对古典钢琴入门的一些看法：</p>
                <h3>入门建议</h3>
                <ul>
                    <li><strong>找一位好老师：</strong> 专业的指导能让你少走弯路。</li>
                    <li><strong>从基础乐理开始：</strong> 了解音符、节奏、和弦是学习的基础。</li>
                    <li><strong>坚持练习：</strong> 每天固定时间练习，哪怕只有15分钟。</li>
                </ul>
                <p>钢琴的世界很美妙，希望更多人能加入进来。</p>
            `
        },
        // 吉他
        {
            id: 'guitar-001',
            category: 'guitar',
            title: '民谣吉他基础和弦速成',
            date: '2023-06-20',
            thumbnail: 'images/thumbnails/guitar_thumb1.jpg',
            type: 'text',
            content: `
                <p>民谣吉他入门最快的方法就是掌握几个基础和弦。一旦掌握了它们，你就能弹唱很多歌曲。</p>
                <h3>基础和弦</h3>
                <ul>
                    <li><strong>C大调：</strong> C, G, Am, F</li>
                    <li><strong>G大调：</strong> G, C, D, Em</li>
                </ul>
                <p>多练习和弦转换，让手指肌肉形成记忆。享受吉他带来的音乐乐趣吧！</p>
            `
        }
        // ... 更多文章可以继续添加
    ]
};

// 辅助函数：根据日期倒序排序文章
blogData.articles.sort((a, b) => new Date(b.date) - new Date(a.date));

// 将数据导出，以便其他JS文件可以访问
// 如果在浏览器环境中，直接定义为全局变量即可
// 如果是模块化环境，需要使用 export default blogData;
