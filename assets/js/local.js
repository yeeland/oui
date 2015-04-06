$(document).ready(function(){

    // Build IDs and side navigation.
    function buildIDs(){
        $('#doc-entries .doc-entry > h1').each(function(index){
            var text = $(this).text();
            var idText = ($(this).text()).toLowerCase();
            // Cleaning string to make it id friendly.
            idText = idText.split(' ').join('-');
            idText = idText.replace(/:/g, "");
            // Adding the index to make the ids unique.
            var id = idText + '-' + index;
            // Add ids to each h1.
            $(this).attr('id', id);
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
    $('#doc-nav a').click(function(event){
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
        $("#icon-examples").append('<li><div class="doc-ex-html"><svg class="lego-icon">\n\t<use xlink:href="#'+id+'"></use>\n</svg></div><div class="doc-ex-code icon-example">'+id+'</div></li>');
    });


    //////////////////////
    // Two Column Layout
    /////////////////////

    function wrapper() {
      $(".temp").wrapAll( "<div class='doc-text'/>");
      $(".temp").removeClass( "temp");
    }

    $(".doc-entry").each(function(i){

      var count = $(this).children().length;

      $(this).find(" > * ").each(function(i){
        i++;
        var target = $(this);

        if ( target.is("pre") ) {
          $(this).addClass("doc-pre")
          wrapper();
        } else {
          target.addClass("temp");
        }

        if (i == count) {
          wrapper();
        }

      })
    });

    // Wrap each text/code pair in a row.
    $(".doc-text").each(function(i){
      $(this).next('pre').andSelf().wrapAll('<div class="doc-row"/>');
    });


    //////////////////////
    // Syntax Highlighting via Prism.js
    /////////////////////

    $('.doc-pre > code').each(function(){
        $(this).addClass('language-css');
    });
    $('.doc-ex-code > pre > code').each(function(){
        $(this).addClass('language-markup');
    });


    //////////////////////
    // HTML Playground
    /////////////////////

    $(".playground-button").click(function(){
      $(".playground").addClass("playground--active");
    })

    $( ".playground" ).keyup(function() {
      var html = editor.getValue()
      $(".playground-render").html(html);
    });

    $(".playground-close").click(function(){
      $(".playground").removeClass("playground--active");
    })


    //////////////////////
    // Zero Clipboard
    /////////////////////

    $(".doc-ex-html").each(function(){
        $( "<div class='clippy-wrap'><button class='clippy'><svg class='lego-icon'><use xlink:href='#clipboard'></use></svg></button></div>" ).insertBefore( $(this) );
    })

    var client = new ZeroClipboard( $(".clippy") );

    // Zero Clipboard grabs the HTML for the selected item.
    client.on( 'ready', function(event) {
        client.on( 'copy', function(event) {
            var html_to_copy = $(event.target).closest(".clippy-wrap").next(".doc-ex-html").html();
            event.clipboardData.setData('text/plain', $.trim(html_to_copy));
        });
        client.on( 'aftercopy', function(event) {
            $(event.target).closest(".clippy").css("color","#1270b1")
            setTimeout(function() {
                $(event.target).closest(".clippy").css("color","inherit")
            }, 1000);
        });
    });
})
