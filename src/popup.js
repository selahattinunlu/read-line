$(document).on("ready", function() {
    // $("#readline-switch").on("change", function(e) {
    //     if ($(this).is(":checked"))
    //         runFunction(lineShow);
    //     else
    //         runFunction(lineHide);
    // });

    $("#show").on("click", function(e) {
        runFunction(lineShow);
    });

    $("#hide").on("click", function(e) {
        runFunction(lineHide);
    });
});

function runFunction(func) {
    chrome.tabs.executeScript(null, {
        code: func.toString().replace(/function \w+[^{]*/, "")
    });
    window.close();
}

function lineShow() {
    var $line = $("#read-line");
    var $body = $("body");

    if ($line.length < 1) {
        $line = $('<div id="read-line"/>');
        $("body").append($line);
    }

    $(document).mousemove(function(e) {
        $line.css({
            top: e.clientY
        });

        $body.css({
            cursor: "default"
        });

        setTimeout(function() {
            $body.css({
                cursor: "none"
            });
        }, 1200);
    });


}

function lineHide() {
    var $line = $("#read-line");
    $line.remove();
}