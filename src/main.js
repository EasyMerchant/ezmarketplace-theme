document.addEventListener('DOMContentLoaded', function() {
    // Select theme toggle icons and button
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
    var themeToggleBtn = document.getElementById("theme-toggle");

    // Log the elements to check if they are found

    if (!themeToggleDarkIcon || !themeToggleLightIcon || !themeToggleBtn) {
        console.error('One or more theme toggle elements not found');
        return; // Exit the function if elements are not found
    }

    // Handle theme toggling based on local storage and media query
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Change icons based on current theme
    if (localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        themeToggleLightIcon.classList.remove("hidden");
    } else {
        themeToggleDarkIcon.classList.remove("hidden");
    }

    // Add event listener for theme toggle button
    themeToggleBtn.addEventListener("click", function () {
        themeToggleDarkIcon.classList.toggle("hidden");
        themeToggleLightIcon.classList.toggle("hidden");

        // Toggle theme and save to local storage
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        }

        updateSidebarTheme(); // Call function to update sidebar theme
    });

    // Select sidebar and related elements
    const siderbarButton = document.querySelector(".siderbar-button");
    const sidebar = document.querySelector('.sidebar');
    const logo = document.querySelector(".logo");
    const logohead = document.querySelector(".logo-header");
    const menuitems = document.querySelectorAll(".menu");

    // Log the elements to check if they are found

    if (!siderbarButton || !sidebar || !logo || !logohead || menuitems.length === 0) {
        console.error('One or more sidebar elements not found');
        return; // Exit the function if elements are not found
    }

    // Function to update sidebar theme based on current theme
    function updateSidebarTheme() {
        const isDarkTheme = document.documentElement.classList.contains('dark');
        sidebar.style.backgroundColor = isDarkTheme ? '#242933' : '#FFFFFF';
    }

    // Initialize sidebar theme
    updateSidebarTheme();

    // Add event listener for sidebar toggle button
    siderbarButton.addEventListener('click', () => {
        if (sidebar.style.maxWidth === '256px') {
            sidebar.style.maxWidth = '';
            sidebar.style.boxShadow = '';
            sidebar.style.transition = 'all .4s ease-in-out';
            logo.style.display = 'none';
            menuitems.forEach(item => {
                item.style.display = 'none';
            });
            logohead.style.justifyContent = "center";
        } else {
            sidebar.style.maxWidth = '256px';
            sidebar.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
            sidebar.style.transition = 'all .4s ease-in-out';
            logo.style.display = 'flex';
            menuitems.forEach(item => {
                item.style.display = 'block';
            });
            logohead.style.justifyContent = "space-between";
        }
    });

    // Ensure initial sidebar theme is set correctly
    updateSidebarTheme();
});



const selectedElm = document.getElementById('selected');

function showChecked() {
    selectedElm.innerHTML = document.querySelectorAll('input[name=user]:checked').length;
}

document.querySelectorAll("input[name=user]").forEach(i => {
    i.onclick = () => showChecked();
});
const uploadInput = document.getElementById('upload');
const imagePreviews = document.getElementsByClassName('image-preview');
const deleteIcon = document.getElementById('delete-icon');
const filenameSpan = document.getElementById('filename');
const uploadLabel = document.getElementsByClassName('upload-label');

// Initially hide the delete icon
if (deleteIcon) {
    deleteIcon.style.display = 'none';
}

if (uploadInput) {
    uploadInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                Array.from(imagePreviews).forEach(imagePreview => {
                    imagePreview.style.backgroundImage = `url(${e.target.result})`;
                    imagePreview.style.backgroundSize = 'cover';
                    imagePreview.style.backgroundPosition = 'center';
                    imagePreview.style.borderWidth = '0px';
                });
                filenameSpan.textContent = file.name;
                Array.from(uploadLabel).forEach(uploadLabels => {
                    uploadLabels.classList.add('opacity-0');
                });
                // Show the delete icon
                if (deleteIcon) {
                    deleteIcon.style.display = 'block';
                }
            }
            reader.readAsDataURL(file);
        }
    });
}

if (deleteIcon) {
    deleteIcon.addEventListener('click', function () {
        uploadInput.value = '';
        Array.from(imagePreviews).forEach(imagePreview => {
            imagePreview.style.backgroundImage = '';
            imagePreview.style.borderWidth = '2px';
        });
        filenameSpan.textContent = '';
        Array.from(uploadLabel).forEach(uploadLabels => {
            uploadLabels.classList.remove('opacity-0')
        });
    });
}
function toggleSelection(imageElement) {
    const maxSelected = 5;
    const isSelected = imageElement.classList.toggle('selected'); // Toggle 'selected' class
    const tickElement = imageElement.nextElementSibling; // Select the tick element
    tickElement.style.opacity = isSelected ? '1' : '0'; // Show or hide the tick

    // Count selected images
    const selectedImages = document.querySelectorAll('.selected');
    const selectedCount = selectedImages.length;

    // Update count display
    document.getElementById('selectedCount').textContent = `${selectedCount}/${maxSelected}`;

    // Check if the limit of 5 selected images is reached
    if (selectedCount > maxSelected) {
        alert('You can only select up to 5 images.');
        imageElement.classList.remove('selected'); // Remove the selection if exceeded the limit
        tickElement.style.opacity = '0'; // Hide the tick mark
        return;
    }

    // Find the corresponding placeholder for the selected image
    const placeholders = document.querySelectorAll('.imagePlaceholder');
    placeholders.forEach((placeholder, index) => {
        const placeholderSvg = placeholder.querySelector('svg');
        const selectedImage = selectedImages[index];

        if (selectedImage) {
            // Replace SVG with selected image
            const selectedImageSrc = selectedImage.src; // Assuming the image src is the URL of the selected image
            const selectedImageHTML = `
                <div class="selected-image">
                    <img src="${selectedImageSrc}" alt="Selected Image">
                    <div class="absolute -top-5 -right-3 remove-image">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="white" class="dark:fill-outer-space"/>
                            <path d="M10 12H11.3333H22" stroke="#E93939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="dark:stroke-baker-miller-pink"/>
                            <path d="M20.6654 11.9987V21.332C20.6654 21.6857 20.5249 22.0248 20.2748 22.2748C20.0248 22.5249 19.6857 22.6654 19.332 22.6654H12.6654C12.3117 22.6654 11.9726 22.5249 11.7226 22.2748C11.4725 22.0248 11.332 21.6857 11.332 21.332V11.9987M13.332 11.9987V10.6654C13.332 10.3117 13.4725 9.9726 13.7226 9.72256C13.9726 9.47251 14.3117 9.33203 14.6654 9.33203H17.332C17.6857 9.33203 18.0248 9.47251 18.2748 9.72256C18.5249 9.9726 18.6654 10.3117 18.6654 10.6654V11.9987" stroke="#E93939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="dark:stroke-baker-miller-pink"/>
                            <path d="M14.668 15.332V19.332" stroke="#E93939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="dark:stroke-baker-miller-pink"/>
                            <path d="M17.332 15.332V19.332" stroke="#E93939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="dark:stroke-baker-miller-pink"/>
                        </svg>
                    </div>
                </div>
            `;
            placeholder.innerHTML = selectedImageHTML;
            placeholder.style.padding = '0';
            placeholder.style.border = '0';
            placeholder.style.position = 'relative';

            // Add click event listener to remove the selected image
            const removeImageBtn = placeholder.querySelector('.remove-image');
            removeImageBtn.addEventListener('click', () => {
                imageElement.classList.remove('selected'); // Remove the 'selected' class from the image
                tickElement.style.opacity = '0'; // Hide the tick mark
                placeholder.innerHTML = placeholderSvg.outerHTML; // Restore the SVG placeholder
                placeholder.style.padding = '24px';
                placeholder.style.border = '2px #f3f4f6';
                placeholder.style.position = 'relative'
                document.getElementById('selectedCount').textContent = `${--selectedCount}/${maxSelected}`; // Update selected count
            });
        } else {
            // Show SVG if no selected image for this placeholder
            placeholder.innerHTML = placeholderSvg.outerHTML;
        }
    });
}




document.querySelectorAll('.delete-icon').forEach(function(deleteIcon) {
    deleteIcon.addEventListener('click', function() {
        let targetId = this.getAttribute('data-target');
        let input = document.getElementById(targetId);
        let values = input.value.split('|');
        if (values.length > 0) {
            values.pop();
            input.value = values.join('|');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    ImgUpload();
});

function ImgUpload() {
    var imgWrap = "";
    var imgArray = [];

    var inputFiles = document.querySelectorAll('.upload__inputfile');
    inputFiles.forEach(function (inputFile) {
        inputFile.addEventListener('change', function (e) {
            imgWrap = this.closest('.upload__box').querySelector('.upload__img-wrap');
            var maxLength = this.getAttribute('data-max_length');

            var files = e.target.files;
            var filesArr = Array.prototype.slice.call(files);
            var iterator = 0;
            filesArr.forEach(function (f, index) {

                if (!f.type.match('image.*')) {
                    return;
                }

                if (imgArray.length > maxLength) {
                    return false;
                } else {
                    var len = 0;
                    for (var i = 0; i < imgArray.length; i++) {
                        if (imgArray[i] !== undefined) {
                            len++;
                        }
                    }
                    if (len > maxLength) {
                        return false;
                    } else {
                        imgArray.push(f);

                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var html = "<div class='w-20 h-20'><div style='background-image: url(" + e.target.result + ")' data-number='" + document.querySelectorAll(".upload__img-close").length + "' data-file='" + f.name + "' class='bg-no-repeat bg-center bg-cover relative pb-100%'><div class='absolute -top-5 -right-3 remove-image'><svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='32' height='32' rx='16' fill='white' class='dark:fill-outer-space'/><path d='M10 12H11.3333H22' stroke='#E93939' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='dark:stroke-baker-miller-pink'/><path d='M20.6654 11.9987V21.332C20.6654 21.6857 20.5249 22.0248 20.2748 22.2748C20.0248 22.5249 19.6857 22.6654 19.332 22.6654H12.6654C12.3117 22.6654 11.9726 22.5249 11.7226 22.2748C11.4725 22.0248 11.332 21.6857 11.332 21.332V11.9987M13.332 11.9987V10.6654C13.332 10.3117 13.4725 9.9726 13.7226 9.72256C13.9726 9.47251 14.3117 9.33203 14.6654 9.33203H17.332C17.6857 9.33203 18.0248 9.47251 18.2748 9.72256C18.5249 9.9726 18.6654 10.3117 18.6654 10.6654V11.9987' stroke='#E93939' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='dark:stroke-baker-miller-pink'/><path d='M14.668 15.332V19.332' stroke='#E93939' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='dark:stroke-baker-miller-pink'/><path d='M17.332 15.332V19.332' stroke='#E93939' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='dark:stroke-baker-miller-pink'/></svg></div></div></div>";
                            imgWrap.insertAdjacentHTML('beforeend', html);
                            iterator++;
                        }
                        reader.readAsDataURL(f);
                    }
                }
            });
        });
    });

    document.body.addEventListener('click', function (e) {
        if (e.target.closest('.remove-image')) {
            var imageDiv = e.target.closest('.remove-image').parentNode;
            var file = imageDiv.getAttribute("data-file");
            for (var i = 0; i < imgArray.length; i++) {
                if (imgArray[i].name === file) {
                    imgArray.splice(i, 1);
                    break;
                }
            }
            imageDiv.parentNode.remove();
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    var reed = document.getElementById("clockOuterCircle");
    var reed1 = document.getElementById("clockStyleCircle");
    var reed2 = document.getElementById("colorClock");
    var reed4 = document.getElementById("colorClock2");

    if (reed) {
        reed.addEventListener('click', deed);
    }

    if (reed1) {
        reed1.addEventListener('click', deed);
    }

    if (reed2) {
        reed2.addEventListener('input', deed);
    }

    if (reed4) {
        reed4.addEventListener('input', deed1);
    }

    function deed() {
        var reed3 = reed2.value;
        if (reed) {
            reed.style.backgroundColor = reed3;
        }
    }

    function deed1() {
        var reed5 = reed4.value;
        if (reed1) {
            reed1.style.backgroundColor = reed5;
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var reed = document.getElementById("clockOuterCircle2");
    var reed1 = document.getElementById("clockStyleCircle2");
    var reed2 = document.getElementById("colorClock2-1");
    var reed4 = document.getElementById("colorClock2-2");

    if (reed) {
        reed.addEventListener('click', deed);
    }

    if (reed1) {
        reed1.addEventListener('click', deed);
    }

    if (reed2) {
        reed2.addEventListener('input', deed);
    }

    if (reed4) {
        reed4.addEventListener('input', deed1);
    }

    function deed() {
        var reed3 = reed2.value;
        if (reed) {
            reed.style.backgroundColor = reed3;
        }
    }

    function deed1() {
        var reed5 = reed4.value;
        if (reed1) {
            reed1.style.backgroundColor = reed5;
        }
    }
});



function myFunction() {
    var copyText = document.getElementById("Token");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }
  

  document.addEventListener('DOMContentLoaded', (event) => {
    const filterButton = document.getElementById('filterButton');
    const filterIcon = document.getElementById('filterIcon');
    const filterModal = document.getElementById('filterModal');
    const clearButton = document.getElementById('clearButton');
    const selects = document.querySelectorAll('#filterModal select');

    if (filterButton) {
        filterButton.addEventListener('click', () => {
            if (filterModal) {
                filterModal.classList.remove('hidden');
            }
        });
    }

    if (clearButton) {
        clearButton.addEventListener('click', () => {
            // Reset select elements to default
            selects.forEach(select => select.value = 'Select');

            // Reset button classes
            if (filterButton) {
                filterButton.classList.remove('bg-new-car', 'text-white' ,'rounded-lg');
                filterButton.classList.add('bg-white', 'text-gray-700','rounded-lg');
            }

            // Reset icon classes
            if (filterIcon) {
                filterIcon.classList.remove('stroke-[#ffffff]');
                filterIcon.classList.add('stroke-[#2E333E]');
            }

            // Hide the modal
            if (filterModal) {
                filterModal.classList.add('hidden');
            }
        });
    }

    if (filterModal) {
        filterModal.addEventListener('click', (event) => {
            if (event.target === filterModal) {
                filterModal.classList.add('hidden');
            }
        });
    }

    if (selects) {
        selects.forEach(select => {
            select.addEventListener('change', () => {
                let isAnySelected = false;
                selects.forEach(sel => {
                    if (sel.value !== 'Select') {
                        isAnySelected = true;
                    }
                });

                if (isAnySelected) {
                    if (filterButton) {
                        filterButton.classList.remove('bg-white', 'text-gray-700','rounded-lg');
                        filterButton.classList.add('bg-new-car', 'text-white','rounded-lg');
                    }
                    if (filterIcon) {
                        filterIcon.classList.remove('stroke-[#2E333E]');
                        filterIcon.classList.add('stroke-[#ffffff]');
                    }
                } else {
                    if (filterButton) {
                        filterButton.classList.remove('bg-new-car', 'text-white' ,'rounded-lg');
                        filterButton.classList.add('bg-white', 'text-gray-700','rounded-lg');
                    }
                    if (filterIcon) {
                        filterIcon.classList.remove('stroke-[#ffffff]');
                        filterIcon.classList.add('stroke-[#2E333E]');
                    }
                }
            });
        });
    }
});

function addEventListeners() {
    const openPopupButton = document.getElementById('openPopup');
    if (openPopupButton) {
        openPopupButton.addEventListener('click', function() {
            document.getElementById('popup').style.display = 'flex';
        });
    } 

    const cancelButton = document.getElementById('cancelButton');
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            document.getElementById('popup').style.display = 'none';
        });
    } 

    const deleteButton = document.getElementById('deleteButton');
    if (deleteButton) {
        deleteButton.addEventListener('click', function() {
            // Add your delete functionality here
            alert('Entries deleted!');
            document.getElementById('popup').style.display = 'none';
        });
    } 
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addEventListeners);
