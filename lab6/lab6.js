window.onload = function() {
    var thumbnails = document.getElementById("thumbnails");
    var featureImg = document.querySelector("#featured img");
    var featureTitle = document.querySelector("#featured figcaption");

    thumbnails.addEventListener("click", function(e) {
        var imgClicked = e.target;
        function getPath(src) {
            var reg = /[0-9]+\.jpg$/;
            var path = reg.exec(src).toString();
            return path;
        }
        var imgCLickedPath = getPath(imgClicked.src.toString());
        var featureImgPath = getPath(featureImg.src.toString());
        if (imgCLickedPath != featureImgPath) {
            featureImg.src = "images/medium/" + imgCLickedPath;
            featureTitle.innerHTML = imgClicked.title.toString();
        }
    });

    var flag =0;
    featureImg.addEventListener("mouseover", function(e) {
        var opacity1 = 0;
        if (flag == 0) {
            var animateShow = self.setInterval(function() {
                opacity1 = opacity1 + 0.04;
                if (opacity1 >= 0.8) {
                    featureTitle.style.opacity = "0.8";
                    animateShow = window.clearInterval(animateShow);
                }
                featureTitle.style.opacity = opacity1;
            }, 50);
            flag = 1;
        }
    });

    featureImg.addEventListener("mouseout",function(e){
        var opacity2 = 0.8;
        if(flag == 1) {
            var animateHide = self.setInterval(function() {
                opacity2 = opacity2 - 0.04;
                if (opacity2 <= 0) {
                    animateHide = window.clearInterval(animateHide);
                    featureTitle.style.opacity2 = "0";
                    flag = 0;
                }
                featureTitle.style.opacity = opacity2;
            }, 50);
        }
    });
};
