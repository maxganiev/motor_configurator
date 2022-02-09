<?php echo $header; ?>
	<!--main-->
		<main>
			<!--area filter-->
			<section class="area-filter" id="area-filter">
				<ul class="list">
					<li>
						<button class="btn btn-5ai-select btn-option-selected" id="btn-5ai-select">5АИ</button>
						<button class="btn btn-din-select btn-option-non-selected" id="btn-din-select">DIN</button>
					</li>
					<li>
						<label for="input-model"> Наименование </label>
						<input type="text" placeholder="Начните ввод..." id="input-model" />
					</li>

					<li>
						<label for="selector-rpm"> Выбрать число оборотов (об/мин) </label>
						<select id="selector-rpm">
							<option value="-">-</option>
							<option value="600">600</option>
							<option value="750">750</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="3000">3000</option>
						</select>
					</li>

					<li>
						<label for="selector-power"> Выбрать мощность (кВт) </label>
						<select id="selector-power">
							<option value="-">-</option>
							<option value="0.12">0.12</option>
							<option value="0.18">0.18</option>
							<option value="0.25">0.25</option>
							<option value="0.37">0.37</option>
							<option value="0.55">0.55</option>
							<option value="0.75">0.75</option>
							<option value="1.1">1.1</option>
							<option value="1.5">1.5</option>
							<option value="2.2">2.2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5.5">5.5</option>
							<option value="7.5">7.5</option>
							<option value="7.6">7.6</option>
							<option value="11">11</option>
							<option value="15">15</option>
							<option value="18.5">18.5</option>
							<option value="22">22</option>
							<option value="30">30</option>
							<option value="37">37</option>
							<option value="45">45</option>
							<option value="55">55</option>
							<option value="75">75</option>
							<option value="90">90</option>
							<option value="110">110</option>
							<option value="132">132</option>
							<option value="160">160</option>
							<option value="200">200</option>
							<option value="250">250</option>
							<option value="315">315</option>
							<option value="355">355</option>
							<option value="400">400</option>
							<option value="450">450</option>
							<option value="500">500</option>
						</select>
					</li>
				</ul>
			</section>

			<!--area selection-->
			<section class="area-selection" id="area-selection">
				<ul class="list">
					<li>
						<label for="selector-model"> Модель электродвигателя </label>
						<select id="selector-model">
							<option value="-">-</option>
						</select>
					</li>

					<li>
						<label for="selector-breaks"> Тип тормозов </label>
						<select id="selector-breaks"></select>
					</li>

					<li>
						<label for="selector-paws"> Тип лап </label>
						<select id="selector-paws"></select>
					</li>

					<li>
						<label for="selector-vent"> Тип вентиляции </label>
						<select id="selector-ventSystem"></select>
					</li>

					<li>
						<label for="checkbox-encoder"> Энкодер </label>
						<input type="checkbox" id="checkbox-encoder" />
					</li>

					<li>
						<label for="checkbox-conicShaft"> Конический вал </label>
						<input type="checkbox" id="checkbox-conicShaft" />
					</li>
				</ul>
			</section>

			<!--area render-->
			<section class="area-render" id="area-render">
				<h2 id="model-name"></h2>
				<h3>Присоединительные размеры</h3>
				<img
					style="
						width: 600px;
						height: 400px;
						border: 0.5px #000 dotted;
						display: block;
						margin: 0 auto;
						object-fit: contain;
					"
					id="img-drawing"
				/>

				<ul class="list flex-row chart-connectionParams" id="chart-connectionParams"></ul>
				<ul class="list flex-row chart-connectionValues" id="chart-connectionValues"></ul>
				<ul class="list chart-description">
					<li class="listItem-upgrades" id="listItem-upgrades"></li>
				</ul>
			</section>
		</main>
<?php echo $footer; ?>

  <script src="/catalog/view/javascript/podbor/adchr/build/app.bundle.js" defer></script>
