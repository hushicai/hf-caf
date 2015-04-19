/**
 * @file cancelAnimationFrame
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var caf = window.cancelAnimationFrame
            || window.webkitCancelAnimationFrame
            || window.mozCancelAnimationFrame
            || window.oCancelAnimationFrame
            || window.msCancelAnimationFrame
            || clearTimeout;

        return caf;
    }
);
