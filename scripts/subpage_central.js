

const fourthBlockNav = document.querySelector(".content-block__fourth-nav");

fourthBlockNav.childNodes.forEach( navItem => {

    const fourthBlockWrapper = document.querySelector(".content-block__fourth-wrapper")

    navItem.addEventListener("click", (e) => {

        let moveValue;
    
        switch(e.target.id) {

            case "first":
              moveValue = 0;
              break;
            case "second":
                moveValue = -100;
                break;
            case "third":
                moveValue = -200;
                break;
            default :
            moveValue = 0;
            break;
        }

        fourthBlockWrapper.style.transform = `translateX(${moveValue}%)`

        /* Remove earlier active options */
        if(document.querySelector(".flying-nav-central.active") ){
            const activeBlock = document.querySelector(".flying-nav-central.active");

            activeBlock.classList.remove("active");
        }

        e.target.classList.add("active");
        
    })
    
})