
     $(function(){
        
        var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        });
        let section = $(".section")
        let about = $("main #about")
        let skill = $("main #skill")
        let design = $("main #design")
        const grid = $(".grid");
        
        $("header #menu .button").on("click",function(){
            $("header #menu").addClass("view");
        });

        $("header #menu .close").on("click",function(){
            $("header #menu").removeClass("view");
        });
        
        
        $(window).scroll(function(){
            const top = $(this).scrollTop();
            console.log(top);
            
            if(top > 50){
                $("header").addClass("view");
            }else{
                $("header").removeClass("view");
            }
            
            
            
            about.each(function(){
                const pos = $(this).offset().top - 800;
                if(top > pos){
                   $(this).addClass("view");
                }else{
                    $(this).removeClass("view");
                };
                
            });
            
            section.each(function(){
                const pos = $(this).offset().top - 1000;
                if(top > pos){
                   $(this).addClass("view");
                }else{
                    $(this).removeClass("view");
                };
                
            });
            
            skill.each(function(){
                const pos = $(this).offset().top - 500;
                if(top > pos){
                   $(this).addClass("view");
                }else{
                    $(this).removeClass("view");
                };
                
            });
            
            grid.each(function(){
                const pos = $(this).offset().top - 400;
                
                if(top > pos){
                    $(this).addClass("view");
                }else{
                    $(this).removeClass("view");
                }
            });
            
            design.each(function(){
                const pos = $(this).offset().top - 400;
                
                if(top > pos){
                    $(this).addClass("view");
                }else{
                    $(this).removeClass("view");
                }
            });
            
            
        });     
    });
    