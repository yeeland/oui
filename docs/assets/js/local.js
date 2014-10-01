$(document).ready(function(){

    // The default syntax highlighting is jacked. These fix it.
    $('.doc-entry-markdown > pre > code').each(function(i, block){
        $(this).addClass('css');
        hljs.highlightBlock(block);
    });

    $('.doc-ex-code > pre > code').each(function(i, block){
        $(this).addClass('xml');
        hljs.highlightBlock(block);
    });

    // Build IDs and side navigation.
    function buildIDs(){
        $('#doc-entries .doc-entry-markdown > h1').each(function(index){
            var text = $(this).text();
            var idText = ($(this).text()).toLowerCase();
            // Cleaning string to make it id friendly.
            idText = idText.split(' ').join('-');
            idText = idText.replace(/:/g, "");
            // Adding the index to make the ids unique.
            var id = idText + '-' + index;
            // Add ids to each h1.
            $(this).attr('id', id)
            // Build the nav with the text and id of each h1.

            // Get the parent directory to add to the nav.
            var path = $(this).prev(".doc-path").find(".doc-file-path").text();
            var patharr = path.split("/");

            var parent_path = patharr[patharr.length - 2];

            buildNav(text,id,parent_path)
        });
    }

    prev_parent_path = "";

    function buildNav(text,id,parent_path) {

        if (parent_path != undefined) {
            if ( prev_parent_path != parent_path ) {
                // Replaces any underscores with spaces.
                var cleaned_parent = parent_path.replace(/_/gi, " ");
                $('#doc-nav').append('<li class="section">'+cleaned_parent+'</li>');
                prev_parent_path = parent_path;
            }
        }
        $('#doc-nav').append('<li><a href="#'+ id + '">' + text + '</a></li>');
    }

    // Build Ids and the nav.
    buildIDs();

    //Smooth scroll to entry.
    $('#doc-nav a').click(function(){
        event.preventDefault();
        $('nav a').removeClass('active');
        $(this).addClass('active');
        var scrollElem = $(this).attr('href');
        curr_top = $('#doc-entries').scrollTop();
        $('#doc-entries').animate({
            scrollTop: $(scrollElem).offset().top + curr_top
        }, 300, function() {
            window.location.hash = scrollElem;
        });
    });

    // File paths for source files are shortened.
    $(".doc-file-path").each(function(){
        str = $(this).text();
        shortString = str.replace(/.*\/(scss)\//gi, "")
        $(this).text(shortString)
    })

    // Read in and generate sprite documenation.
    $("#icon-examples").empty();
    $("body > svg > symbol").each(function(){
        var id = $(this).attr("id");
        var title = $(this).find("title").text();
        $("#icon-examples").append('<li><div class="doc-ex-html"><svg class="lego-icon">\n\t<use xlink:href="#'+id+'"></use>\n</svg></div><div class="doc-ex-code icon-example">'+title+'</div></li>');
    });


    //////////////////////
    // Zero Clipboard
    /////////////////////

    $(".doc-ex-html").each(function(){
        $( "<div class='clippy-wrap'><div class='clippy'>Copy</div></div>" ).insertBefore( $(this) );
    })

    var client = new ZeroClipboard( $(".clippy") );

    // Zero Clipboard grabs the HTML for the selected item.
    client.on( 'ready', function(event) {
        client.on( 'copy', function(event) {
            var html_to_copy = $(event.target).closest(".clippy-wrap").next(".doc-ex-html").html();
            event.clipboardData.setData('text/plain', $.trim(html_to_copy));
        });
        client.on( 'aftercopy', function(event) {
            $(event.target).text("Copied!")
            setTimeout(function() {
                $(event.target).text("Copy")
            }, 1000);
        });
    });

})