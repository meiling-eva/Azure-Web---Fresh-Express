// Carousels/sliders
window.addEventListener('load',function(){
    //1. get variables
    var arrow_l=document.querySelector('.arrow_l');
    var arrow_r=document.querySelector('.arrow_r');
    var focus=document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 2. show arrows when mouse enter
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display='block';
        arrow_r.style.display='block';
        clearInterval(timer);
        timer = null;
    })
    // when mouse leave, hide the arrows
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display='none';
        arrow_r.style.display='none';
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000);
    })
    // 3. automate generate circles, the number of circles should be the same with the number of images
    var ul=focus.querySelector("ul");
    var ol=focus.querySelector(".circle");
    // console.log(ul.children.length)
    for(var i=0; i < ul.children.length; i++){
        // create li
        var li=document.createElement('li');
        //set index to every circle 'li'
        li.setAttribute('index', i);
        // insert li into ol
        ol.appendChild(li); 
        // console.log(ol.children.length);
        //when click the circle, the circle's classname changes to current 
        li.addEventListener('click',function(){
        //4. clear current
            for(var i=0; i<ol.children.length;i++){
                ol.children[i].className='';
            }
            //set classname to the current circle
            this.className='current';
        //5.click the circle, image moves
            var index=this.getAttribute('index');
            num = index;
            circle = index;
            // var focusWidth = focus.offsetWidth;
            // console.log(focusWidth);
            // console.log(index);
            animate(ul, -index*focusWidth);
      })
    }
    // set the first circle classname as current
    ol.children[0].className="current";
    //6. clone the first image in the focus ul 
    var first=ul.children[0].cloneNode(true);
    ul.appendChild(first);

    //7.click the right button, show the next image on the right hand side
    var num = 0;
    //8. var circle to control the animation of the small circels current state
    var circle = 0;
    arrow_r.addEventListener('click',function(){
        if(num == ul.children.length - 1){
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul,-num*focusWidth);
        //use circle to control the little circles' current state
        circle++;
        //if circle = the number of li - 1, it goes back to 0
        if(circle == ol.children.length ){
            circle = 0;
        }
        circleChange();
    })
    //9. click the left button, show the next image on the left hand side
    arrow_l.addEventListener('click',function(){
        if(num == 0){
            num = ul.children.length - 1;
            ul.style.left =  -num * focusWidth + 'px';
        }
        num--;
        animate(ul, - num*focusWidth);
        //use circle to control the little circles' current state
        circle--;
        //if circle = the number of li - 1, it goes back to 0
        if(circle < 0 ){
            circle = ol.children.length -1;
        }
        //circle = circle < 0? ol.children.length -1 : circle;
        circleChange();
    })

    function circleChange(){
        //clear all circles's current
        for(var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        //set the current
        ol.children[circle].className = 'current'; 
    }
    //10. autoplay all the images
    var timer = this.setInterval(function(){
        arrow_r.click();
    },2000)
})
