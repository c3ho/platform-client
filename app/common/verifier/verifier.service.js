module.exports = [
    'Verifier',
    'Notify',
    '$rootScope',
function (
    Verifier,
    Notify,
    $rootScope
) {
    return {
        debugModeCheck: function () {
                Verifier.checkDebugMode(BACKEND_URL)
                    .then(function (result) {
                        if (result) {
                            Notify.notifyPermanent(`You have debug-mode switched on. If you are an admin of this deployment, 
                            we recommend you disable this check and NOT leaving it enabled in the API. 
                        You may disable the check by running the "composer installdebug:disable" command in the API folder.`);
                        }
                    });
            }
    };
}
];

