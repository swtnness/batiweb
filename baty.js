document.addEventListener('DOMContentLoaded', function () {
    const fileItems = document.querySelectorAll('.file-item');
    const fileContents = document.querySelectorAll('.file-content');

    fileContents[0].classList.add('active');
    fileItems[0].classList.add('active');

    fileItems.forEach(item => {
        item.addEventListener('click', function () {
            const fileId = this.getAttribute('data-file');

            fileItems.forEach(i => i.classList.remove('active'));
            fileContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(fileId).classList.add('active');
        });
    });

    const titles = document.querySelectorAll('.content-title');
    titles.forEach(title => {
        const originalText = title.textContent;
        title.textContent = '';

        let i = 0;
        const typing = setInterval(() => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 50);
    });
});
