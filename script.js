$(document).ready(function() {
    function loadTextGeneration() {
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat&sentences=1',
            type: 'GET',
            success: function(data) {
                $('#textGeneration').html(`
                    <h4>Generated Response</h4>
                    <p>${data[0]}</p>
                `);
            },
            error: function() {
                $('#textGeneration').html('<p>Failed to load text generation response.</p>');
            }
        });
    }

    function loadImageClassification() {
        $.ajax({
            url: 'https://dog.ceo/api/breeds/image/random',
            type: 'GET',
            success: function(data) {
                $('#imageClassification').html(`
                    <h4>Image Classification</h4>
                    <img src="${data.message}" alt="Random Dog" class="img-fluid">
                    <p>This is a random dog image from the Dog CEO API.</p>
                `);
            },
            error: function() {
                $('#imageClassification').html('<p>Failed to load image classification.</p>');
            }
        });
    }

    function loadFaceDetection() {
        const faceImageUrl = 'https://randomuser.me/api/portraits/men/' + Math.floor(Math.random() * 100) + '.jpg';
        const faceData = {
            age: Math.floor(Math.random() * 60) + 20,
            gender: ['male', 'female'][Math.floor(Math.random() * 2)],
            smile: (Math.random() * 100).toFixed(2),
            glasses: ['None', 'Eyeglasses', 'Sunglasses'][Math.floor(Math.random() * 3)]
        };
        $('#faceDetection').html(`
            <h4>Face Detection</h4>
            <img src="${faceImageUrl}" alt="Face Image" class="img-fluid">
            <p>Age: ${faceData.age}</p>
            <p>Gender: ${faceData.gender}</p>
            <p>Smile: ${faceData.smile}%</p>
            <p>Glasses: ${faceData.glasses}</p>
        `);
    }

    // Initial load
    loadTextGeneration();
    loadImageClassification();
    loadFaceDetection();

    // Event listeners for change buttons
    $('#changeText').click(function() {
        loadTextGeneration();
    });

    $('#changeImage').click(function() {
        loadImageClassification();
    });

    $('#changeFace').click(function() {
        loadFaceDetection();
    });
});