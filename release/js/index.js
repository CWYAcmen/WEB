class Rel {
	constructor(select) {
		this.btn=document.querySelector(select);
		this.box=document.querySelector("#box");
		this.content=this.box.querySelector("#content");
		this.off=this.box.querySelector(".off") ;
		this.text=this.box.querySelector("textarea");
		this.add=this.box.querySelector("#add");
		this.divs=document.querySelector(".divs");
		this.userName=this.box.querySelector("#userName");
		this.div=document.querySelectorAll(".ac");
		this.withdrow=document.querySelector("#withdrow");
		
		this.body="";
		
	    this.n=0;
		
		this.init();
	}

	init() {
		this.btn.onclick=this.btnClick.bind(this);
		this.off.onclick=this.btnoff.bind(this);
		this.add.onclick=this.addDiv.bind(this);
		this.backClick();
		this.withdrow.onclick=this.onBack.bind(this);
		this.getBodysize();
		this.timer();
	}

	
	btnClick() {
		this.box.className = "bigbox";
	}
	
	btnoff() {
		this.box.className = "bigBox";
	}

	
	onBack() {
		if (this.n < 120) {
			this.div = document.querySelector(".ac");
			this.div.remove();
			this.withdrow.className = "look";
		} else {
			alert("已经超过两分钟，无法撤回消息")
		}
	} 

	backClick() {
		let _this = this;
		this.divs.oncontextmenu = function(e) {
			e.e || event;
			let left = e.offsetX;
			let top = e.offsetY;
			let target = e.target;
			let bodywidth = document.body.clientWidth;
			let bodyheight = document.body.clientHeight;
			
			if (target.className == "ac") {
				_this.withdrow.style.left = (bodywidth / 2 + e.offsetX - 190) + "px";
				_this.withdrow.style.top = (e.offsetY + 15) + "px";
				_this.withdrow.className = "";
			}
			return false;
		}
	} 
	timer() {
		let _this = this
		setInterval(function() {
			++_this.n;
		}, 1000)
	}

	
	addDiv() {
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let val = (this.userName.value);
		let val1 = (this.text.value);
		this.body +=
			`<div class="ac" id="addlist">
				<p>${"用户："+val}</p>
				<p>${"动态:"+val1}</p>
				<p class="date">${year+"年"+month+"月"+day+"日"+hours+"时"+minutes+"分"}</p><br>
				</div>`
		this.divs.innerHTML = this.body;
		this.btnoff();
		this.timer();
	}

	
	getBodysize() {
		let bodywidth = document.body.clientWidth;
		let bodyheight = document.body.clientHeight;
		this.content.style.left = (bodywidth - 400) / 2 + "px";
		this.content.style.top = (bodyheight - 300) / 2 + "px";
	} 

}

new Rel("#button")
