// ensure document is ready before running any scripts
$(document).ready(() => {
    // call header to activate on click 
    $('#life_section_header').on('click', () =>{
        // toggle fade on the story section
        $('#story_items').fadeToggle(1500);
    })
});