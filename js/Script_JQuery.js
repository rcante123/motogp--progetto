document.write(`
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script>
        $(document).ready(function(){

            $(".icon-bar").click(function(e){

                 $(".nav").toggleClass('is-open-1');
                e.preventDefault();

             });

         });
    </script>

`)