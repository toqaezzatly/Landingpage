document.addEventListener("DOMContentLoaded", function() {
    // Set the sources for the group photos
    document.getElementById('group-photo-1').src = './images/group-photo-1.jpg'; // Replace with actual image path
    document.getElementById('group-photo-2').src = './images/group-photo-2.jpg'; // Replace with actual image path
    
    // Set links to view full-size images
    document.getElementById('group-photo-1-link').href = './images/group-photo-1.jpg'; // Link to full-size image
    document.getElementById('group-photo-2-link').href = './images/group-photo-2.jpg'; // Link to full-size image
});
