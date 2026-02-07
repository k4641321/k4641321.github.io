(function() {
    var a_idx = 0;
    window.onclick = function(event) {
        var a = new Array(
            "Perfect",
            "Great",
            "Good",
            "Bad",
            "Miss"
        );

        // 创建元素并防止选中
        var heart = document.createElement("b");
        heart.onselectstart = new Function('event.returnValue=false');

        // 添加元素到页面
        document.body.appendChild(heart).innerHTML = a[a_idx];
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed; left: -100%;";

        // 初始化动画参数
        var f = 16,                     // 字体大小
            x = event.clientX - f / 2,  // 横坐标
            y = event.clientY - f,      // 纵坐标
            c = randomColor(),          // 随机颜色
            a = 1,                      // 透明度
            s = 1.2;                    // 缩放比例

        // 动画定时器
        var timer = setInterval(function() {
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = `
                    font-size: 16px;
                    cursor: default;
                    position: fixed;
                    color: ${c};
                    left: ${x}px;
                    top: ${y}px;
                    opacity: ${a};
                    transform: scale(${s});
                `;
                y--;          // 垂直位移
                a -= 0.016;   // 透明度衰减
                s += 0.002;   // 持续放大
            }
        }, 15);  // 15ms帧间隔
    };

    // 生成随机RGB颜色
    function randomColor() {
        return "rgb(" +
            ~~(Math.random() * 255) + "," +
            ~~(Math.random() * 255) + "," +
            ~~(Math.random() * 255) + ")";
    }
})();
