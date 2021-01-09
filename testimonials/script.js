'use strict';
(function () {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            rmvActive();
            panel.classList.add('active');

        })
    });

    function rmvActive() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        })
    }

}());
