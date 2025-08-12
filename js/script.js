/* NAVBAR */
$(document).ready(function(){
    $('.navbar-toggle').on('click', function(){
        $(this).toggleClass('active');           // animace hamburgeru → křížku
        $('.navbar-collapse').toggleClass('active');  // zobrazit/skrýt menu
    });

    $('.templatemo-sidebar-menu a').on('click', function(){
        $('.navbar-toggle').removeClass('active'); 
        $('.navbar-collapse').removeClass('active');
    });
});
