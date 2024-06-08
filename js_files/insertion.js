async function insertion() {
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // Initial color for the first bar
    ele[0].style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, #6B4AB6 48%)';
    for (let i = 1; i < ele.length; i++) {
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // Color the current element being compared
        ele[i].style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, #6B4AB6 48%)';

        await waitforme(delay);

        while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
            console.log('In while loop');
            // Color the elements being compared
            ele[j].style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, #6B4AB6 48%)';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // Color the sorted part of the array
            for (let k = i; k >= 0; k--) {
                ele[k].style.background = 'linear-gradient(180deg, #FFFFFF 0%, #666FFF 100%)';
            }
        }
        ele[j + 1].style.height = key;
        // Color the newly sorted element
        ele[i].style.background = 'linear-gradient(180deg, #FFFFFF 0%, #666FFF 100%)';
    }
    // Ensure all elements are colored correctly at the end
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, #6B4AB6 48%)';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
