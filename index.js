$(".dropMenu").css("display","none");
$(".menu").on("click", ()=>{
    $(".dropMenu").animate({width: 'toggle'});
})
