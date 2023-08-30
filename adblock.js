// Wait for the iframe to load
window.addEventListener('load', function() {
    // Get the iframe element
    var iframe = document.querySelector('iframe');

    // Check if the iframe has loaded
    iframe.onload = function() {
        try {
            // Access the contentWindow of the iframe
            var iframeWindow = iframe.contentWindow;
            
            // Insert custom CSS to hide ads
            var adStyles = document.createElement('style');
            adStyles.innerHTML = `
                /* Add your CSS rules here to hide ads */
            `;
            iframeWindow.document.head.appendChild(adStyles);
            
            // Remove elements that are likely to be ads
            var adElements = iframeWindow.document.querySelectorAll('.ad-class, .ad-container');
            adElements.forEach(function(adElement) {
                adElement.remove();
            });
        } catch (error) {
            console.error('Error blocking ads:', error);
        }
    };
});
