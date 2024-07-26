document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("color-picker");
    const listStyleSelect = document.getElementById("list-style");
    const imageDropdown = document.getElementById("image-dropdown");
    const sampleList = document.getElementById("sample-list");
    const body = document.body;

    // Load saved preferences
    const savedColor = localStorage.getItem("themeColor");
    const savedListStyle = localStorage.getItem("listStyle");
    const savedBackgroundImage = localStorage.getItem("backgroundImage");

    if (savedColor) {
        colorPicker.value = savedColor;
        document.documentElement.style.setProperty("--theme-color", savedColor);
    }

    if (savedListStyle) {
        listStyleSelect.value = savedListStyle;
        sampleList.className = savedListStyle;
    }

    if (savedBackgroundImage) {
        imageDropdown.value = savedBackgroundImage;
        body.style.backgroundImage = `url(${savedBackgroundImage})`;
    }

    // Update and save preferences
    colorPicker.addEventListener("input", () => {
        const color = colorPicker.value;
        document.documentElement.style.setProperty("--theme-color", color);
        localStorage.setItem("themeColor", color);
    });

    listStyleSelect.addEventListener("change", () => {
        const listStyle = listStyleSelect.value;
        sampleList.className = listStyle;
        localStorage.setItem("listStyle", listStyle);
    });

    imageDropdown.addEventListener("change", () => {
        const backgroundImage = imageDropdown.value;
        body.style.backgroundImage = `url(${backgroundImage})`;
        localStorage.setItem("backgroundImage", backgroundImage);
    });
});
