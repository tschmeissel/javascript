// retain control
// opposite of callback => inversion of control

function finish() {
    console.log("finish");
}

function trackCheckout(purchaseInfo) {
    var listener = new Listener();
    listener.on = function(event, cb) {
        switch (event) {
            case "completion":
                setTimeout(function() {
                    console.log("completion");
                    cb();
                }, 2000)
                break;
            default:
                break;
        }
    }
    return listener;
}

var listener = trackCheckout(purchaseInfo={});

listener.on("completion", finish);