var isDarkMode = true;

var themeSwitcher = document.getElementById("theme");
themeSwitcher.addEventListener('click', function() {
    if (isDarkMode) {
        changeTheme("light", "dark", ".dark");
    } else {
        changeTheme("dark", "light", ".light");
    }
    isDarkMode = !isDarkMode
});

if (themeSwitcher.checked) {
    changeTheme("light", "dark", ".dark");
    isDarkMode = !isDarkMode;
}

function changeTheme(newClazz, oldClazz, selector) {
    let oldClassElements = document.querySelectorAll(selector);
    for (i = 0; i < oldClassElements.length; i++) {
        let elem = oldClassElements[i];
        elem.classList.add(newClazz);
        elem.classList.remove(oldClazz);
    }
}
