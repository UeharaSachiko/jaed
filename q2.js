"use strict" /* @charset "utf-8" */

const startQuiz = function(title, quiz, callback) {
	let nq = 0
	let pnt = 0
	let uienable = true

	const show = function(aquiz) {
		head.textContent = title + " - 隨ｬ" + (nq + 1) + "蝠� / " + quiz.length + "蝠�"
		ind.textContent = ""
		for (let i = 0; i < 2; i++) {
			const div = get("ans" + (i + 1))
			div.className = ""
			div.textContent = aquiz[1 + i]
			div.no = i
			div.onclick = function() {
				if (!uienable)
					return
				if (this.no == (aquiz[3] ? 0 : 1)) {
					ind.textContent = "豁｣隗｣"
					ind.className = "indcorrect"
					this.className = "correct"
					uienable = false
					pnt++
				} else {
					ind.textContent = "荳肴ｭ｣隗｣"
					ind.className = "indincorrect"
					this.className = "disable"
					uienable = false
				}
				setTimeout(function() {
					nq++
					if (nq < quiz.length) {
						show(quiz[nq])
					} else {
						ind.textContent = "繧ｯ繝ｪ繧｢"
						ind.className = "indclear"
						if (callback) {
							setTimeout(function() {
								callback(pnt)
							}, 1000)
						}
					}
				}, 1000)
			}
		}
		q.textContent = aquiz[0]
		uienable = true
	}

	show(quiz[nq])
}