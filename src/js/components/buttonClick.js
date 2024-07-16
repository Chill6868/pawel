const btnAll = document.querySelectorAll(".btn__click-pulse");

btnAll.forEach((btn) => {
	let appendedAnimationElementGlobal;

	const hideAnimation = () => {
		appendedAnimationElementGlobal.classList.add("btn__click--pulse--hide");
		const appendedAnimationElement = appendedAnimationElementGlobal;
		setTimeout(() => {
			appendedAnimationElement.remove();
		}, 300);
	};

	btn.addEventListener("mousedown", (e) => {
		const animationElement = document.createElement("div");
		appendedAnimationElementGlobal = animationElement;
		animationElement.classList.add("btn__click--pulse");
		const offsetX = e.offsetX;
		const offsetY = e.offsetY;
		animationElement.style.top = `${offsetY}px`;
		animationElement.style.left = `${offsetX}px`;

		btn.append(animationElement);

		const appendedAnimationElement = btn.querySelector(".btn__click--pulse");
		const appendedAnimationElementParent =
			appendedAnimationElement.closest(".btn");

		const appendedAnimationElementWidth =
			appendedAnimationElementParent.offsetWidth;

		animationElement.style.setProperty(
			"--animation-size",
			`${appendedAnimationElementWidth * 2.5}px`
		);

		btn.addEventListener("mouseleave", () => hideAnimation());
	});

	btn.addEventListener("mouseup", () => hideAnimation());
});
