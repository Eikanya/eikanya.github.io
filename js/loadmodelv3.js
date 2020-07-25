try {
    $('body').append('<div class="Canvas" style="position: fixed;right: 5px;bottom: 5px;background-color:transparent;z-index: 999999"id="L2dCanvas"></div>')
	$.ajax({url: "live2dv3/live2dcubismcore.min.js", dataType:"script", cache: true, success: function() {
        $.ajax({url: "live2dv3/pixi.min.js", dataType:"script", cache: true, success: function() {
            $.ajax({url: "live2dv3/live2d/live2dframework.js", dataType:"script", cache: true, success: function() {
				new l2dViewer({
				el: document.getElementById('L2dCanvas'), // 要添加Live2d的元素
				basePath: './live2dv3/live2d', // 模型根目录
				modelName: 'shengluyisi_3', // 模型名称
				width: 400,
				height: 350
				})
			}});	
            
        }});	
    }});
} catch(err) { console.log("[Error] JQuery is not defined.") }

const live2d_path = "/live2dv3/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "polyfill.min.js", "js"),
		loadExternalResource(live2d_path + "jquery.min.js", "js")
		
	])
}

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
