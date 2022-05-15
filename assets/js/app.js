const game_gallery=document.getElementById('game_gallery');
const map_pop_up=document.getElementById('map_pop_up');
const map_item=document.getElementById('map_item');
const image_vector=[1, 2, 3, 4];
const image_index=null;

// for loop to create new map image elements 
image_vector.forEach(i=>{
    const image=document.createElement('img');
    // use backticks!!! lol
    // had to add two back slashes to make this work
    image.src=`assets\\img\\gallery\\map-${i}.png`;
    image.alt='Video Game Map';
    image.classList.add('game_gallery_image');
    // adding event listener to the new img element
    image.addEventListener('click',()=>{
        // the pop_up when image is clicked
        map_pop_up.hidden = false;
        map_item.src=`assets\\img\\gallery\\map-${i}.png`;
    })
    game_gallery.appendChild(image);
    console.log("image loaded into doc");
})
map_pop_up.addEventListener('click',()=>{
    map_pop_up.hidden = true;
    //map_pop_up.style.transform=`translateY(-100%)`;
    map_pop_up.src='';
    map_pop_up.alt='';
})

