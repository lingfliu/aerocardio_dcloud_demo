	
	share = {
		init : function(option){
			option = option || share.option;
			share.load(option);
		},
		option :{
			title : "1号生活",
			desc :  "帮助商超便利店采购省钱5%起；广州25个仓，品类最全、服务最好、送货最快，价格最低，质量最优，我们是广州商超供应链第一品牌。",
			link : "http://"+window.location.host+"/static/home-main.html",
			imgUrl : "http://"+window.location.host+"/static/img/shareIcon.png"
		},
		load : function(option){
			//获取wx config的值
			mui.getJSON( "http://"+window.location.host +'/wechatController.do?getJSAPIParams',{url:window.location.href},function(data){
				if(data.success){
					wx.config({
						debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					  	appId: data.obj.appId, // 必填，公众号的唯一标识
					  	timestamp: data.obj.timestamp, // 必填，生成签名的时间戳
					  	nonceStr: data.obj.nonceStr, // 必填，生成签名的随机串
					  	signature: data.obj.signature,// 必填，签名，见附录1   
					  	jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2   
					});
					wx.ready(function(){
						//分享朋友圈
						wx.onMenuShareTimeline({
						    title: option.title, // 分享标题
						    link: option.link, // 分享链接
							imgUrl: option.imgUrl, // 分享图标
						    success: function () { 
						        // 用户确认分享后执行的回调函数
						    },
						    cancel: function () { 
						        // 用户取消分享后执行的回调函数
						    }
						});
						//分享给朋友
						wx.onMenuShareAppMessage({
						    title: option.title, // 分享标题
						    desc: option.desc, // 分享描述
						    link: option.link, // 分享链接
						    imgUrl: option.imgUrl, // 分享图标
						    type: '', // 分享类型,music、video或link，不填默认为link
						    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
						    success: function () { 
						        // 用户确认分享后执行的回调函数
						    },
						    cancel: function () { 
						        // 用户取消分享后执行的回调函数
						    }
						});
						//分享QQ
						wx.onMenuShareQQ({
						    title: option.title, // 分享标题
						    desc: option.desc, // 分享描述
						    link: option.link, // 分享链接
						    imgUrl: option.imgUrl, // 分享图标
						    success: function () { 
						       // 用户确认分享后执行的回调函数
						    },
						    cancel: function () { 
						       // 用户取消分享后执行的回调函数
						    }
						});
					});
				}
			});
		}
	}
	
	share.init();