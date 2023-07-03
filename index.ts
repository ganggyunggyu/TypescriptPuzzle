const items = document.querySelectorAll('.item')
const results = document.querySelectorAll('.result')
const itemsImg = document.querySelectorAll<HTMLImageElement>('.item > img')
const resultsImg = document.querySelectorAll<HTMLImageElement>('.result > img');
const puzzle = document.querySelectorAll<HTMLImageElement>('.puzzle > img')
const modal = document.querySelector('.result-modal')
const mainBtn = document.querySelector('.main-btn')
const noImg = 'http://127.0.0.1:5500/img/No_img.jpg'
const btn = document.getElementsByTagName('button')

const resultArr = [
'http://127.0.0.1:5500/img/deer_1.jpg', 'http://127.0.0.1:5500/img/deer_2.jpg',
'http://127.0.0.1:5500/img/deer_3.jpg', 'http://127.0.0.1:5500/img/deer_4.jpg', 
'http://127.0.0.1:5500/img/deer_5.jpg', 'http://127.0.0.1:5500/img/deer_6.jpg', 
'http://127.0.0.1:5500/img/deer_7.jpg', 'http://127.0.0.1:5500/img/deer_8.jpg', 
'http://127.0.0.1:5500/img/deer_9.jpg']

btn[0].addEventListener('click', ()=>{
    window.location.reload();
})

btn[1].addEventListener('click', ()=>{
    window.location.reload();
})


let randomNumArr :number[] = []
let puzzleIndex = 0;
let resultIndex = 0;
let imgBox = ''
let arr :string[] = []
let str :string = ''


const resultFunc = (a :string[]) => {
    let resultCount = 0
    for(let i=0; i<resultsImg.length; i++){
        let resultStr = resultArr[i]
        let puzzleStr = a[i]
        if(resultStr == puzzleStr){
            resultCount++
            if(resultCount == 9){
                modal?.classList.add('result-ani')
                mainBtn?.classList.add('close')
                for(let i=0; i<puzzle.length; i++){
                    puzzle[i].draggable = false;
                }
             }
        }

    }
}


const makeImg = () :void => {
    randomNumArr.forEach((el, i) => {
        if(itemsImg[i] instanceof HTMLImageElement){
            itemsImg[i].src  = `/img/deer_${el}.jpg`
        }
    })
}

const randomNumber = () :void => {
    for(let i=0; i<items.length; i++){
        let num :number = 0
        num = Math.ceil(Math.random() * items.length)
        if(!randomNumArr.includes(num)){
            randomNumArr.push(num)
        }else{
            i--
        }
    }
}
randomNumber();
makeImg();

for(let i=0; i<resultsImg.length; i++){
    resultsImg[i].addEventListener('drop', (e)=>{
        e.preventDefault();
        resultIndex = i
    })
}


for(let i=0; i<puzzle.length; i++){
    puzzle[i].addEventListener('dragover', (e)=>{
        e.preventDefault();
    })
    puzzle[i].addEventListener('dragstart' ,()=>{
        puzzleIndex = i
        imgBox = puzzle[i].src
        console.log(i)
    })
    puzzle[i].addEventListener('drop', (e)=>{
        e.preventDefault();
        puzzle[puzzleIndex].src = puzzle[i].src
        puzzle[i].src = imgBox;
        arr.splice(resultIndex, 1, resultsImg[resultIndex].src)
        if(puzzle[i].src == noImg){
            puzzle[i].draggable = false;
        }else{
            puzzle[i].draggable = true;
        }
        arr = []
        for(let i=0; i<resultsImg.length; i++){  
            arr.push(resultsImg[i].src)
        }
        resultFunc(arr)
    })
}




// for(let i=0; i<items.length; i++){
//         itemsImg[i].addEventListener('dragover', (e)=>{
//             e.preventDefault()
//         })
//         itemsImg[i].addEventListener('dragstart', (e)=>{
            
//             imgBox = itemsImg[i].src
//             puzzleIndex = i
//             console.log('puzzle start ' , puzzleIndex, i)
//         })
//         itemsImg[i].addEventListener('drop', (e)=>{
//             e.preventDefault();
//             console.log('puzzle drop' )
//             dropImgBox = imgBox

//             resultsImg[resultIndex].src = noImg
//             itemsImg[puzzleIndex].src = itemsImg[i].src
//             itemsImg[i].src = imgBox


//             if(itemsImg[i].src == noImg){
//                 itemsImg[i].draggable = false;
//             }else{
//                 itemsImg[i].draggable = true;
//             }
//         })
//     }


// for(let i=0; i<results.length; i++){
//         results[i].addEventListener('dragover', (e)=>{
//             e.preventDefault()
//         })
    
//         results[i].addEventListener('dragstart', ()=>{
//             imgBox = resultsImg[i].src
//             resultIndex = i;
//             console.log('result start , ' + resultIndex)
//         })
//         results[i].addEventListener('drop', (e)=>{
//             console.log(i)
//             e.preventDefault();
//             console.log('result drop')


//             itemsImg[puzzleIndex].src = noImg
//             resultsImg[resultIndex].src = resultsImg[i].src;
//             resultsImg[i].src = imgBox

//             if(resultsImg[i].src == noImg){
//                 resultsImg[i].draggable = false;
//             }else{
//                 resultsImg[i].draggable = true;
//             }
//             if(itemsImg[puzzleIndex].src == noImg){
//                 itemsImg[puzzleIndex].draggable = false;
//             }else{
//                 itemsImg[puzzleIndex].draggable = true;
//             }
//         })
//     }

