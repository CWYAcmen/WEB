class slideshow {
	constructor(selector) {
		this.div = document.querySelector(selector);
		this.ul = this.div.querySelector("ul");
		this.btns = this.div.querySelector("ol").children;
		this.goPrev = document.querySelector("#goPrev");
		this.goNext = document.querySelector("#goNext");
		this.index = 0;
		this.lastIndex = 0;
		this.timer = null;

		this.init();
	}

	init() {
		this.btnClick();
		this.goNextClick();
		this.goPrevClick();
		this.autoPlay();
		this.swichStop();
		this.swichOver();
	}
	//给所有的按钮绑定点击事件
	btnClick() {
		Array.from(this.btns).forEach((btn, i) => {
			btn.onclick = () => {
				this.index = i;
				this.changeImg();
			}
		})
	}
	//点击前近一步
	goNextClick() {
		this.goNext.onclick = () => {
			this.index++;
			if (this.index === this.btns.length) {
				this.index = 0;
			}
			this.changeImg();
		}
	}
	//点击退后一步
	goPrevClick() {
		this.goPrev.onclick = () => {
			this.index--;
			if (this.index < 0) {
				this.index = this.btns.length - 1;
			}
			this.changeImg();
		}
	}
	//自动切换图片
	autoPlay() {
		this.timer = setInterval(() => {
			this.goNext.onclick();
		}, 3000);
	}
	//鼠标进入时,清除定时器
	swichStop() {
		this.div.onmouseenter = () => {
			clearInterval(this.timer);
		}
	}
	//鼠标离开时时,自动切换
	swichOver() {
		this.div.onmouseleave = () => {
			this.autoPlay();
		}
	}
	//图片切换事件
	changeImg() {
		this.btns[this.lastIndex].classList.remove("ac");
		this.btns[this.index].classList.add("ac");
		this.ul.style.top = -500 * this.index + "px";
		this.lastIndex = this.index;
	}
}
new slideshow("#box");
