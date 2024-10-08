
  function menut() {
    document.getElementById("menu").innerHTML = `
	<style>
	.menu-box {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 1200px;
		background-color: rgba(0, 102, 226, 0.2); 
		}
	</style>
	<div class="menu-all">
		<div class="menu-n" onclick="menuf()">
			<a href="#header">
				<h2>首頁</h2>
			</a>
		</div>
		<div class="menu-n" onclick="menuf()">
			<a href="#text">
				<h2>動態</h2>
			</a>
		</div>
        <div class="menu-n">
			<a href="#introduce" onclick="menuf()">
				<h2>介紹</h2>
			</a>
		</div>
        <div class="menu-n">
			<a href="#characters" onclick="menuf()">
				<h2>角色</h2>
			</a>
		</div>
		<div class="menu-n">
			<a href="#text" onclick="languages()">
				<h2>語言</h2>
			</a>
		</div>
	</div>
    `;
  }

  function menuf() {
    document.getElementById("menu").innerHTML = "";
  }
  function languages() {
    document.getElementById("menu").innerHTML = `
	<style>
	.menu-box {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 1200px;
		background-color: rgba(0, 102, 226, 0.2); 
		}
	</style>
	<div class="menu-all">
		<div class="menu-n" onclick="menuf()">
			<a href="#header">
				<h2>首頁</h2>
			</a>
		</div>
		<div class="menu-n">
			<a href="../en/index.html">
				<h2>ENGLISH</h2>
			</a>
		</div>
		<div class="menu-n">
			<a href="../index.html">
				<h2 style="font-weight: 500; font-size: 24px;" lang="zh-CN">中文简体</h2>
			</a>
		</div>
		<div class="menu-n">
			<a href="index.html">
				<h2 lang="zh-TW">中文繁體</h2>
			</a>
		</div>
		<div class="menu-n">
			<a href="../ja/index.html">
				<h2 lang="ja">日本語</h2>
			</a>
		</div>
	</div>
    `;
  }
