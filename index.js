const items = document.querySelectorAll('.item');
const results = document.querySelectorAll('.result');
const itemsImg = document.querySelectorAll('.item > img');
const resultsImg = document.querySelectorAll('.result > img');
const puzzle = document.querySelectorAll('.puzzle > img');
const modal = document.querySelector('.result-modal');
const mainBtn = document.querySelector('.main-btn');
const noImg = 'http://127.0.0.1:5500/img/No_img.jpg';
const btn = document.getElementsByTagName('button');
const resultArr = [
    'http://127.0.0.1:5500/img/deer_1.jpg', 'http://127.0.0.1:5500/img/deer_2.jpg',
    'http://127.0.0.1:5500/img/deer_3.jpg', 'http://127.0.0.1:5500/img/deer_4.jpg',
    'http://127.0.0.1:5500/img/deer_5.jpg', 'http://127.0.0.1:5500/img/deer_6.jpg',
    'http://127.0.0.1:5500/img/deer_7.jpg', 'http://127.0.0.1:5500/img/deer_8.jpg',
    'http://127.0.0.1:5500/img/deer_9.jpg'
];
let randomNumArr = [];
let puzzleIndex = 0;
let resultIndex = 0;
let imgBox = '';
let submitArr = [];
const clearBtn = (btn) => {
    if (btn instanceof HTMLButtonElement) {
        btn.addEventListener('click', () => {
            window.location.reload();
        });
    }
};
const makeImg = () => {
    randomNumArr.forEach((el, i) => {
        if (itemsImg[i] instanceof HTMLImageElement) {
            itemsImg[i].src = `/img/deer_${el}.jpg`;
        }
    });
};
const randomNumber = () => {
    for (let i = 0; i < items.length; i++) {
        let num = 0;
        num = Math.ceil(Math.random() * items.length);
        if (!randomNumArr.includes(num)) {
            randomNumArr.push(num);
        }
        else {
            i--;
        }
    }
    makeImg();
};
const resultFunc = (arr) => {
    let resultCount = 0;
    for (let i = 0; i < resultsImg.length; i++) {
        let resultStr = resultArr[i];
        let puzzleStr = arr[i];
        if (resultStr == puzzleStr) {
            resultCount++;
            if (resultCount == 9) {
                for (let i = 0; i < puzzle.length; i++) {
                    puzzle[i].draggable = false;
                }
                modal === null || modal === void 0 ? void 0 : modal.classList.add('result-ani');
                mainBtn === null || mainBtn === void 0 ? void 0 : mainBtn.classList.add('close');
            }
        }
    }
};
clearBtn(btn[0]);
clearBtn(btn[1]);
randomNumber();
for (let i = 0; i < resultsImg.length; i++) {
    resultsImg[i].addEventListener('drop', (e) => {
        e.preventDefault();
        resultIndex = i;
        console.log('resultIndex : ', resultIndex);
    });
}
for (let i = 0; i < puzzle.length; i++) {
    puzzle[i].addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    puzzle[i].addEventListener('dragstart', () => {
        puzzleIndex = i;
        imgBox = puzzle[i].src;
    });
    puzzle[i].addEventListener('drop', (e) => {
        e.preventDefault();
        puzzle[puzzleIndex].src = puzzle[i].src;
        puzzle[i].src = imgBox;
        submitArr.splice(resultIndex, 1, resultsImg[resultIndex].src);
        if (puzzle[i].src == noImg) {
            puzzle[i].draggable = false;
        }
        else {
            puzzle[i].draggable = true;
        }
        submitArr = [];
        for (let i = 0; i < resultsImg.length; i++) {
            submitArr.push(resultsImg[i].src);
        }
        resultFunc(submitArr);
        console.log('puzzleIndex : ', puzzleIndex, ' i : ', i);
        console.log('imgBox : ', imgBox);
        console.log('submitArr : ', submitArr);
    });
}
