
const like = document.querySelectorAll('.like')
const img = document.querySelectorAll('.text-right > img')
    let isLike = true
    like.forEach((item,index) =>{
        item.addEventListener('click', (e)=>{
            if(isLike){
                e.target.textContent = 'Đã thích'
                img[index].setAttribute('src','https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/pJoAsLqC77U.png');
                isLike = false
            }else{
                e.target.textContent = 'Thích'
                img[index].setAttribute('src','../img/icon-like.png')
                isLike = true
            }
        })
    })
 