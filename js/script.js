
document.addEventListener("DOMContentLoaded", function() {
    fetch('channels.php')
        .then(response => response.json())
        .then(data => {
            const channelsContainer = document.getElementById('channels');
            data.forEach(channel => {
                const channelElement = document.createElement('div');
                channelElement.textContent = channel.name;
                channelElement.addEventListener('click', () => {
                    const video = document.getElementById('video');
                    video.src = channel.stream_url;
                    video.play();
                });
                channelsContainer.appendChild(channelElement);
            });
        })
        .catch(error => console.error('Error loading channels:', error));
});
