const copyBtn = document.getElementById('copy-btn');
let memo = document.getElementById('memo');

copyBtn.addEventListener('click', () => {
    const memoValue = memo.value;
    copyToClipboard(memoValue);
})

function copyToClipboard(text) {
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text);
    } else {
        memo.select();
        document.execCommand('copy');
        console.log('Copied to clipboard');
    }
}