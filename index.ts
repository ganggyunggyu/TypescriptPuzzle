const items = document.querySelectorAll('.item')
const results = document.querySelectorAll('.result')
const itemsImg = document.querySelectorAll<HTMLImageElement>('.item > img')
const resultsImg = document.querySelectorAll<HTMLImageElement>('.result > img');
const puzzle = document.querySelectorAll<HTMLImageElement>('.puzzle > img')
const noImg = 'http://127.0.0.1:5500/img/No_img.jpg'





let randomNumArr :number[] = []
let imgIndex = 0;
let puzzleIndex = 0;
let resultIndex = 0;
let imgBox = ''
let dropImgBox = ''
let resultImgBox = ''


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
randomNumber()

const makeImg = () :void => {
    randomNumArr.forEach((el, i) => {
        if(itemsImg[i] instanceof HTMLImageElement){
            itemsImg[i].src  = `/img/deer_${el}.jpg`
        }
    })
}

makeImg();

for(let i=0; i<puzzle.length; i++){
    puzzle[i].addEventListener('dragstart' ,()=>{

    })
    puzzle[i].addEventListener('dragover', ()=>{

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

