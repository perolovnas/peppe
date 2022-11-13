console.log('lets go');

$(function() {

    $.getJSON('data/data.json', function(data){ 
        $.each(data,function(idx, obj){ 
            $.each(obj, function(key, value){
                // console.log(value);
                $("#case-wrapper").append(
                    value
                );
            });
        });
    });
    
    // // First animation
    // setTimeout(function() { 
    //     $('.one').addClass('active');
    // }, 500);
    // setTimeout(function() { 
    //     $('.one').addClass('no-active');
    // }, 2000);
    // setTimeout(function() { 
    //     $('.one').addClass('scrollDown');
    // }, 6000);
    
    // // Second animation
    // setTimeout(function() { 
    //     $('.two').addClass('active');
    // }, 2500);
    // setTimeout(function() { 
    //     $('.two').addClass('no-active');
    // }, 4000);
    
    // // Third animation
    // setTimeout(function() { 
    //     $('.third').addClass('active');
    // }, 4500);
    // setTimeout(function() { 
    //     $('.third').addClass('no-active');
    // }, 6000);

    // setTimeout(function() { 
    //     $('.case-wrapper').addClass('active');
    // }, 2000);

    // setTimeout(function() { 
    //     $('.top-wrapper svg').addClass('active');
    // }, 1500);

    // setTimeout(function() { 
    //     $('.top-wrapper').addClass('active');
    // }, 1000);

});

const caseItem = document.querySelectorAll('.image-wrapper');

caseItem.forEach((child, index) => {
  child.addEventListener('mouseenter', () => handleMouseEnter(event));
  child.addEventListener('mouseleave', () => handleMouseLeave()) 
});

function handleMouseEnter(event) {
  caseItem.forEach(child => {
    if (event.target === child) return;
    
    child.classList.add('is-dimmed');
  })
}

function handleMouseLeave() {
  caseItem.forEach(child => {
    child.classList.remove('is-dimmed');
  })
}