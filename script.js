window.addEventListener('DOMContentLoaded',() => {
	const tabs = document.querySelectorAll('.tab__item');
			tabContent = document.querySelectorAll('.tab__content')
			tabParents = document.querySelector('.tab__items');

	function hideTabContent() {
		tabContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'anim')
		})
		tabs.forEach(item => {
			item.classList.remove('tab__item-active');
		})
	}

	function showTabContent(i = 0) {
		tabContent[i].classList.add('show', 'anim');
		tabContent[i].classList.remove('hide');
		tabs[i].classList.add('tab__item-active')
	}

	hideTabContent();
	showTabContent();

	tabParents.addEventListener('click', (event) => {
		const target = event.target;

		if( target && target.classList.contains('tab__item')) {
			tabs.forEach((item, i) => {
				if(target === item) {
					hideTabContent();
					showTabContent(i);
				}
			})
		}

	})
})