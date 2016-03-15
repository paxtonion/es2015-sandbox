let numberPanels = 1;

let $page = document.querySelector('#page');

function start(legend, execution) {

	let html = `
		<div class="col-md-4 col-sm-6">
			<div class="panel panel-info">
				<div class="panel-heading">
					<div class="panel-title">${legend}</div>
				</div>
				<div class="panel-body"></div>
			</div>
		</div>
	`;

	let $panel = document.createElement('div');
	$panel.innerHTML = html;
	$page.appendChild($panel);

	let $panelBody = $panel.querySelector('.panel-body');

	let context = {
		output: function (content) {

			let $div = document.createElement('div');
			$div.classList.add('item');
			$div.innerHTML += content;
			$panelBody.appendChild($div);
		}
	};

	execution(context);

	numberPanels += 1;
}
