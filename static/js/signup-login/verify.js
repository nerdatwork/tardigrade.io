function redirectToLogin() {
    const urlParams = new URLSearchParams(window.location.search);
    let redirectParam = urlParams.get('redirect');
    if (redirectParam) {
        redirectParam = addTrailingSlashIfNeeded(redirectParam);

        location.href = `${redirectParam}login?activated=false`;

        return
    }

    location.reload();
}

function addTrailingSlashIfNeeded(str) {
    return str.slice(-1) !== '/' ? `${str}/` : str
}

window.onload = function () {
    document.getElementById('verifyButton').addEventListener('click', redirectToLogin)
}
