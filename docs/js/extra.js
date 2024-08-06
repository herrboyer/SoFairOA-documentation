// https://github.com/mkdocs/mkdocs/discussions/3177
$(document).ready(function () {
    const selectors = document.querySelectorAll('pre code');
    const copyButton = '<div class="clipboard popup-container">' +
        '<button class="btn btn-neutral btn-clipboard" title="Copy to clipboard">Copy</button>' +
        '<span class="popup">Copied!</span>' +
        '</div>';
    Array.prototype.forEach.call(selectors, function (selector) {
        selector.insertAdjacentHTML('beforebegin', copyButton);
    });
    const clipboard = new ClipboardJS('.btn-clipboard', {
        target: function (trigger) {
            return trigger.parentNode.nextElementSibling;
        }
    });

    clipboard.on('success', function (e) {
        e.clearSelection();

        const popup = e.trigger.parentNode.querySelector(".popup");
        popup.classList.toggle("show");

        setTimeout(function () {
            popup.classList.toggle("show");
        }, 1000);
    });
});
