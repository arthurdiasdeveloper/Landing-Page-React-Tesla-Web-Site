"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var ModelsContext_1 = require("./ModelsContext");
function useWrapperScroll() {
    var wrapperRef = react_1.useContext(ModelsContext_1["default"]).wrapperRef;
    var scrollY = framer_motion_1.useMotionValue(0);
    var scrollYProgress = framer_motion_1.useMotionValue(0);
    react_1.useEffect(function () {
        var element = wrapperRef.current;
        if (element) {
            var updateScrollValue_1 = function () {
                var scrollTop = element.scrollTop, scrollHeight = element.scrollHeight, offsetHeight = element.offsetHeight;
                var fullScroll = scrollHeight - offsetHeight;
                scrollY.set(scrollTop); //number px
                scrollYProgress.set(scrollTop / fullScroll); //0 - 1 (%  )
            };
            element.addEventListener('scroll', updateScrollValue_1);
            return function () { return element.removeEventListener('scroll', updateScrollValue_1); };
        }
    }, [scrollY, scrollYProgress, wrapperRef]);
    return { scrollY: scrollY, scrollYProgress: scrollYProgress };
}
exports["default"] = useWrapperScroll;
