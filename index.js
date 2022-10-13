$(document).ready(() => {
    var rating = 0
    $('.rating').click(function(){
        $('.rating').removeClass('bg-activeGrey text-white').addClass('bg-MediumGrey text-LightGrey')
        $(this).removeClass('bg-MediumGrey text-LightGrey').addClass('bg-activeGrey text-white')
        rating = $(this).val()
        $('#rating').text(rating)
        console.log(rating)
    })

    $('#submitButton').click(function(){
        if(rating){
            $('#rating-selection').addClass('hidden')
            $('#thankYouState').removeClass('hidden') 
        } else {
            alert('Select Your Rating')
        }
        
    })

})