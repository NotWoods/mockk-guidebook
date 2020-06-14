require(['gitbook'], function(gitbook) {
    gitbook.events.bind('start', function(e, config) {
        if (navigator.share) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-share-alt',
                label: 'Share',
                position: 'right',
                onClick: function(e) {
                    e.preventDefault();
                    navigator.share({
                        text: document.title,
                        url: location.href,
                    });
                }
            });
        }
    });
});
