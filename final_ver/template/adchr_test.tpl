<?php echo $header; ?>

<div class="container cart-container">
	<div class="row">
		<div id="content" class="col-md-12">
			<div class="row">
				<div class="col-md-12">
					<h1>Конструктор дополнительных опций (АДЧР)</h1>
					<div class="row info-cat">
						<div class="col-md-12">
							<div class="header__adchr">
								<div class="col-md-1" >
									<div class="filter-head-attr">
										<h4>Э/д</h4>
									</div>
									<div class="form_radio_btn">
										<input id="5ai_button" type="radio" name="radio" value="1" checked>
										<label for="5ai_button">5АИ</label>
									</div>
									<div class="form_radio_btn">
										<input id="din_button" type="radio" name="radio" value="2">
										<label for="din_button">DIN</label>
									</div>
								</div>
								<div class="col-md-4">
									<form id="trash" action="/product-print/">
										<div class="filter-head-attr">
											<h4>Наименование</h4>
										</div>
										<input class="form-control" type="text" id="search-name" name="product_name" product-value="<?php echo $product_id?>" value="<?php ///echo $product_name?>" placeholder="Наименование двигателя..." />

									</div>
									<div class="col-md-2">
										<div class="filter-head-attr">
											<h4>Мощность, кВт</h4>
										</div>
										<select class="form-control" type="text" id="power" name="power">
											<option value="-">-</option>
											<option value="0.12">0.12 кВт</option>
											<option value="0.18">0.18 кВт</option>
											<option value="0.25">0.25 кВт</option>
											<option value="0.37">0.37 кВт</option>
											<option value="0.55">0.55 кВт</option>
											<option value="0.75">0.75 кВт</option>
											<option value="1.1">1.1 кВт</option>
											<option value="1.5">1.5 кВт</option>
											<option value="2.2">2.2 кВт</option>
											<option value="3">3 кВт</option>
											<option value="4">4 кВт</option>
											<option value="5.5">5.5 кВт</option>
											<option value="7.5">7.5 кВт</option>
											<option value="7.6">7.6 кВт</option>
											<option value="11">11 кВт</option>
											<option value="15">15 кВт</option>
											<option value="18.5">18.5 кВт</option>
											<option value="22">22 кВт</option>
											<option value="30">30 кВт</option>
											<option value="37">37 кВт</option>
											<option value="45">45 кВт</option>
											<option value="55">55 кВт</option>
											<option value="75">75 кВт</option>
											<option value="90">90 кВт</option>
											<option value="110">110 кВт</option>
											<option value="132">132 кВт</option>
											<option value="160">160 кВт</option>
											<option value="200">200 кВт</option>
											<option value="250">250 кВт</option>
											<option value="315">315 кВт</option>
											<option value="355">355 кВт</option>
											<option value="400">400 кВт</option>
											<option value="450">450 кВт</option>
											<option value="500">500 кВт</option>
										</select>
										<select class="form-control" style="display: none;" type="text" id="din_power" name="din_power">
											<option value="-">-</option>
											<option value="0.06">0.06 кВт</option>
											<option value="0.09">0.09 кВт</option>
											<option value="0.12">0.12 кВт</option>
											<option value="0.18">0.18 кВт</option>
											<option value="0.25">0.25 кВт</option>
											<option value="0.37">0.37 кВт</option>
											<option value="0.55">0.55 кВт</option>
											<option value="0.75">0.75 кВт</option>
											<option value="1.1">1.1 кВт</option>
											<option value="1.5">1.5 кВт</option>
											<option value="2.2">2.2 кВт</option>
											<option value="3">3 кВт</option>
											<option value="4">4 кВт</option>
											<option value="5.5">5.5 кВт</option>
											<option value="7.5">7.5 кВт</option>
											<option value="7.6">7.6 кВт</option>
											<option value="11">11 кВт</option>
											<option value="15">15 кВт</option>
											<option value="18.5">18.5 кВт</option>
											<option value="22">22 кВт</option>
											<option value="30">30 кВт</option>
											<option value="37">37 кВт</option>
											<option value="45">45 кВт</option>
											<option value="55">55 кВт</option>
											<option value="75">75 кВт</option>
											<option value="90">90 кВт</option>
											<option value="110">110 кВт</option>
											<option value="132">132 кВт</option>
											<option value="160">160 кВт</option>
											<option value="160">180 кВт</option>
											<option value="200">200 кВт</option>
											<option value="250">250 кВт</option>
											<option value="250">280 кВт</option>
											<option value="315">315 кВт</option>
											<option value="355">355 кВт</option>
											<option value="400">400 кВт</option>
											<option value="450">450 кВт</option>
											<option value="500">500 кВт</option>
											<option value="560">560 кВт</option>
											<option value="630">630 кВт</option>
										</select>
									</div>
									<div class="col-md-2">
										<div class="filter-head-attr">
											<h4>Обороты, об/мин</h4>
										</div>
										<select class="form-control" type="text" id="rotation" name="rotation">
											<option value="-">-</option>
											<option value="600">600 об/мин</option>
											<option value="750">750 об/мин</option>
											<option value="1000">1000 об/мин</option>
											<option value="1500">1500 об/мин</option>
											<option value="3000">3000 об/мин</option>
										</select>
										<select class="form-control" style="display: none;"  type="text" id="din_rotation" name="din_rotation">
											<option value="-">-</option>
											<option value="600">600 об/мин</option>
											<option value="750">750 об/мин</option>
											<option value="1000">1000 об/мин</option>
											<option value="1500">1500 об/мин</option>
											<option value="3000">3000 об/мин</option>
										</select>
									</div>
									<div class="col-md-3">
										<div class="filter-head-attr">
											<h4>Исполнение</h4>
										</div>
										<select class="form-control" type="text" id="search-offer" name="offer_id">
										</select>
									</div>
									<div class="help__filter col-md-12 hide">
										<h4>Таких вариантов электродвигателей нет</h4>
									</div>
									<div class="help__filter_selection col-md-12" style="display: : none">
										
									</div>
								</div>

							</div>
							<div class="col-md-4 options hide" style="border-right: 1px solid #d2d2d2;">
								<div class="col-md-6 winding__group item">
									<div class="filter-head-title-attr" style="padding-bottom: 5px;">
										<h4 style="text-align: center;">Датчик температуры обмотки</h4>
									</div>
									<div class="form-check long-check">  
										<input class="form-check-input hidden" type="checkbox" name="winding_sensor" value="1" id="winding_sensor1">            
										<label class="form-check-label" for="winding_sensor1">Биметаллические <br>
										датчики</label>
									</div>
									<div class="form-check long-check">  
										<input class="form-check-input hidden" type="checkbox" name="winding_sensor" value="3" id="winding_sensor3">            
										<label class="form-check-label" for="winding_sensor3">Датчики РТС</label>
									</div>
									<div class="form-check long-check">  
										<input class="form-check-input hidden" type="checkbox" name="winding_sensor" value="5" id="winding_sensor5">            
										<label class="form-check-label" for="winding_sensor5">Датчики РТ100</label>
									</div>
								</div>
								<div class="col-md-6 bearing__group item" >
									<div class="filter-head-title-attr" style="padding-bottom: 5px;">
										<h4 style="text-align: center;">Датчик температуры подшипников</h4>
									</div>
									<div class="form-check long-check">  
										<input class="form-check-input hidden" type="checkbox" name="bearing_sensor" value="2" id="bearing_sensor2">            
										<label class="form-check-label" for="bearing_sensor2">Биметаллические <br> датчики</label>
									</div>
									<div class="form-check long-check">  
										<input class="form-check-input hidden" type="checkbox" name="bearing_sensor" value="4" id="bearing_sensor4">            
										<label class="form-check-label" for="bearing_sensor4">Датчики РТС</label>
									</div>
									<div class="form-check long-check">  
										<input class="form-check-input hidden" type="checkbox" name="bearing_sensor" value="6" id="bearing_sensor6">            
										<label class="form-check-label" for="bearing_sensor6">Датчики РТ100</label>
									</div>
								</div>
								<div class="col-md-12 item disabled_din">
									<div class="filter-head-title-attr col-md-6">
										Два вала(без втулки)
									</div>
									<div style="text-align: right;">
										<label class="checkbox" for="double_shaft">
											<input type="checkbox" id="double_shaft" name="double_shaft" />
											<div class="checkbox__text">
											</div>
										</label>
										<!--<label class="control-label help_tooltip" for="input-group">
                   		 					<span data-toggle="tooltip"  id="double_shaft_tooltip" title=""></span>
                   		 				</label>-->
                   		 			</div>
                   		 		</div>
                   		 		<div class="col-md-12 item disabled_din">
                   		 			<div class="filter-head-title-attr col-md-6">
                   		 				Конический вал
                   		 			</div>
                   		 			<div style="text-align: right;">
                   		 				<label class="checkbox" for="shaft">
                   		 					<input type="checkbox" id="shaft" name="shaft" />
                   		 					<div class="checkbox__text">
                   		 					</div>
                   		 				</label>
										<!--<label class="control-label help_tooltip" for="input-group">
                   		 					<span data-toggle="tooltip"  id="shaft_tooltip" title=""></span>
                   		 				</label>-->
                   		 			</div>
                   		 		</div>
                   		 		<div class="col-md-12 item__option item">
                   		 			<!--<div class="filter-head-attr">-->
                   		 				<div class="filter-head-title-attr col-md-6">
                   		 					<?php echo $help_vibro;?>
                   		 				</div>
                   		 				<!--</div>-->
                   		 				<div style="text-align: right;">
                   		 					<label class="checkbox" for="vibro">
                   		 						<input type="checkbox" id="vibro" name="vibro" />
                   		 						<div class="checkbox__text">
                   		 							
                   		 						</div>
                   		 					</label>
                   		 				</div>
                   		 			</div>
                   		 			<div class="col-md-12 item__option item">
                   		 				<div class="filter-head-title-attr col-md-6">
                   		 					<?php echo $help_heating;?>
                   		 				</div>
                   		 				<div style="text-align: right;">
                   		 					<label class="checkbox" for="heating">
                   		 						<input type="checkbox" id="heating" name="heating" />
                   		 						<div class="checkbox__text">
                   		 							
                   		 						</div>
                   		 					</label>
                   		 				</div>

                   		 			</div>
                   		 			<div class="col-md-12 item">
                   		 				<div class="filter-head-title-attr col-md-6">
                   		 					<?php echo $help_bearing;?>
                   		 				</div>
                   		 				<div style="text-align: right;">
                   		 					<label class="checkbox" for="bearing">
                   		 						<input type="checkbox" id="bearing" name="bearing" />
                   		 						<div class="checkbox__text">
                   		 							
                   		 						</div>
                   		 					</label>
                   		 				</div>
                   		 				<div class="col-md-12" id="bearing_danger" style="display: none">Элком рекомендует установку токоизолированных подшипников на двигатели выше 200 габарита
                   		 				</div>
                   		 			</div>
                   		 			<div class="col-md-12 item">
                   		 				<div class="filter-head-title-attr col-md-6">
                   		 					<?php echo $help_import_bearing;?>
                   		 				</div>
                   		 				<div class="col-md-6" style="margin-top: 10px;">
                   		 					<select class="form-control"  type="text" id="import_bearing" name="import_bearing">
                   		 						<option value="-">-</option>
                   		 						<option 
                   		 						value="S1" 
                   		 						data-value="Заменен передний штатный подшипник на подшипник повышенной надежности шариковый (производства SKF/NSK/KOYO/FAG)"
                   		 						>
                   		 						Передний шариковый подшипник (производства SKF/NSK/KOYO/FAG)
                   		 					</option>
                   		 					
                   		 					<option 
                   		 					value="S12"
                   		 					data-value="Заменены передний и задний штатные подшипники на подшипники повышенной надежности шариковые (производства SKF/NSK/KOYO/FAG)"
                   		 					>
                   		 					Передний и задний шариковые подшипники (производства SKF/NSK/KOYO/FAG)
                   		 				</option>
                   		 			</select>
                   		 		</div>
                   		 	</div>
                   		 	<div class="col-md-12 item">
                   		 		<div class="filter-head-title-attr col-md-6">
                   		 			<h4><?php echo $help_brake;?></h4>
                   		 		</div>
                   		 		<div style="text-align: right;">
                   		 			<label class="checkbox" for="brake">
                   		 				<input type="checkbox" id="brake" name="brake" />
                   		 				<div class="checkbox__text">

                   		 				</div>
                   		 			</label>
                   		 		</div>
									<!--
									<div class="brake__group" id="brake__new">
										<div class="brake__group-voltage">
											<div class="form-check long-check">  
	                              				<input class="form-check-input hidden" type="checkbox" name="brake_voltage" value="220" id="brake_220">        
	                              				<label class="form-check-label" for="brake_220">Тормоз (питание 220В)</label>
	                           				</div>
	                           				<div class="form-check long-check">  
	                              				<input class="form-check-input hidden" type="checkbox" name="brake_voltage" value="380" id="brake_380">       
	                              				<label class="form-check-label" for="brake_380">Тормоз (питание 380В)</label>
	                           				</div>
                           				</div>

									</div>
								-->
								<div>
									<div class="col-md-1">
									</div>
									<div class="col-md-11">
										<select class="form-control " style="display: none; margin-top: 10px;" type="text" id="brake_extanded" name="brake_extanded">
											<option value="-">-</option>
											<option 
											value="ED" 
											data-value="<?php echo $brake_hint1;?>"
											>
											Тормоз (питание 220В)
										</option>
										<option 
										value="ED1"
										data-value="<?php echo $brake_hint3;?>"
										>
										Тормоз (питание 220В) с независимым питанием 
									</option>
									<option 
									value="ED2" 
									data-value="<?php echo $brake_hint4;?>"
									>
									Тормоз (питание 220В)  с ручным растормаживающим устройством
								</option>
								<option 
								value="ED1ED2" 
								data-value="<?php echo $brake_hint4;?>"
								>
								Тормоз (питание 220В)  с независимым питанием  и ручным растормаживающим устройством
							</option>
							<option 
							value="ET" 
							data-value="<?php echo $brake_hint2;?>"
							>
							Тормоз (питание 380В)
						</option>
						<option 
						value="ET1" 
						data-value="<?php echo $brake_hint4;?>"
						>
						Тормоз (питание 380В) с независимым питанием 
					</option>

					<option 
					value="ET2" 
					data-value="<?php echo $brake_hint6;?>"
					>
					Тормоз (питание 380В)  с ручным растормаживающим устройством
				</option>
				<option 
				value="ET1ET2" 
				data-value="<?php echo $brake_hint6;?>"
				>
				Тормоз (питание 380В)  с ручным растормаживающим устройством и  независимым питанием 
			</option>
		</select>
	</div>
</div>
</div>
<div class="col-md-12 item">
	<div class="filter-head-title-attr col-md-6">
		<h4><?php echo $help_ventilation;?></h4>
	</div>
	<div class="col-md-6" style="margin-top: 10px;">
		<select class="form-control" type="text" id="vent" name="vent">
			<option value="-">-</option>
			<option value="1" data-value="<?php echo $vent_hint1;?>">Встроенный вентилятор с питанием 220В(V1)</option>
			<option value="2" data-value="<?php echo $vent_hint2;?>">Встроенный вентилятор с питанием 380В(V2)</option>
			<option value="3" data-value="<?php echo $vent_hint3;?>">Пристроенный вентилятор (наездник) с питанием 220В(V3)</option>
			<option value="4" data-value="<?php echo $vent_hint4;?>">Пристроенный вентилятор (наездник) с питанием 380В(V4)</option>
		</select>
	</div>
</div>

<div class="col-md-12 item">
	<div class="filter-head-title-attr col-md-6">
		<h4>Энкодер</h4>
	</div>
	<div style="text-align: right;">
		<label class="checkbox" for="encoder">
			<input type="checkbox" id="encoder" name="encoder" />
			<div class="checkbox__text">
			</div>
		</label>
	</div>
	<div id="block_encoder" class="row" style="display: none;padding-top: 15px;">
		<div class="col-md-12">
			<div class="filter-head-title-attr col-md-6" style="display: block">
				Разрешение(имп/об)
			</div>
			<div class="col-md-6">

				<input class="form-control ui-autocomplete-input encoder_danger" type="number" id="imp-ob" name="imp-ob"  value="" placeholder="1-65536" oninput="check(this)">
			</div>
		</div>
		<div class="col-md-12">
			<div class="filter-head-title-attr col-md-6" style="margin-bottom: 10px; margin-top: 10px;">
				Напряжение питания
			</div>
			<div class="col-md-6" style=" padding-top: 18px;">
				<select class="form-control encoder_danger" type="text" id="encoder_voltage" name="encoder_voltage" >
					<option value="-">-</option>
					<option value="1">+5В</option>
					<option value="2">+10…30В</option>
				</select>
			</div>
		</div>
		<div class="col-md-12">
			<div class="filter-head-title-attr col-md-6" style="margin-bottom: 10px; margin-top: 10px;">
				Тип выходного сигнала
			</div>
			<div class="col-md-6" style=" padding-top: 18px;">
				<select class="form-control encoder_danger" type="text" id="encoder_signal" name="encoder_signal">
					<option value="-">-</option>
					<option value="1">TTL/RS422, 6 каналов</option>
					<option value="2">HTL/push pull, 6 каналов</option>
												<!--<option value="3">ПИ (ТТL)</option>
													<option value="4">ПИ (HTL)</option>-->
												</select>
											</div>
										</div>
										<!--<div class="filter-head-attr">
											<h4>Точность энкодера</h4>
										</div>
										<select class="form-control" type="text" id="encoder_accuracy" name="encoder_accuracy">
											<option value="1">±15"(класс точности 5 по ГОСТ 26242)</option>
										</select>-->
									</div>
								</div>
								<div class="col-md-12 item">
									<div class="filter-head-title-attr col-md-6">
										<h4>Климатическое исполнение</h4>
									</div>
									<div class="col-md-6" style="margin-top: 10px;">
										<select class="form-control" type="text" id="climat" name="climat">
											<option value="У2">У2</option>
											<option value="У1">У1</option>
											<option value="УХЛ1">УХЛ1</option>
											<option value="УХЛ2">УХЛ2</option>
										</select>
									</div>
								</div>
								<div class="col-md-12 item">
									<div class="filter-head-title-attr col-md-6">
										<h4>Степень<br> защиты</h4>
									</div>
									<div class="col-md-6" style="margin-top: 10px;">
										<select class="form-control" type="text" id="degree" name="degree">
											<option value="54" style="display: none" id="ip54">IP54</option>
											<option value="55">IP55</option>
											<option value="65">IP65</option>
											<option value="66">IP66</option>
										</select>
									</div>
									<!--<label class="control-label help_tooltip" for="input-group">
                   		 					<span data-toggle="tooltip"  id="degree_tooltip" title=""></span>
                   		 				</label>-->
                   		 			</div>
                   		 			<div class="col-md-12 item">
                   		 				<div class="filter-head-title-attr col-md-6">
                   		 					Дополнительная упаковка оборудования
                   		 				</div>
                   		 				<div style="text-align: right;">
                   		 					<label class="checkbox" for="pack">
                   		 						<input type="checkbox" id="pack" name="pack" />
                   		 						<div class="checkbox__text">
                   		 						</div>
                   		 					</label>
                   		 				</div>

                   		 			</div>
                   		 			<div class="col-md-12 item">
                   		 				<div class="filter-head-title-attr col-md-6">
                   		 					Вал
                   		 				</div>
                   		 				<div class="col-md-6 shaft_up_down__group">
                   		 					<div class="form-check long-check">  
                   		 						<input class="form-check-input hidden" type="checkbox" name="shaft_up_down" value="up" id="shaft_up" data-toggle="modal" data-target="#exampleModal">            
                   		 						<label class="form-check-label" for="shaft_up">Вверх</label>
                   		 					</div>
                   		 					<div class="form-check long-check">  
                   		 						<input class="form-check-input hidden" type="checkbox" name="shaft_up_down" value="down" id="shaft_down" data-toggle="modal" data-target="#exampleModal">            
                   		 						<label class="form-check-label" for="shaft_down">Вниз</label>
                   		 					</div>

                   		 				</div>
                   		 			</div>
                   		 			<!-- Modal -->
                   		 			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                   		 				<div class="modal-dialog" role="document">
                   		 					<div class="modal-content" style="min-height: 300px;">
                   		 						<div class="modal-header">
                   		 							<h5 class="modal-title"></h5>
                   		 							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                   		 								<span aria-hidden="true">&times;</span>
                   		 							</button>
                   		 						</div>
                   		 						<div class="modal-body">
                   		 							<p>Для правильного просчета цены данной доработки необходимо знать:</p>
                   		 							<ol>
                   		 								<li>Есть ли повышенная радиальная нагрузка? Как правило, это справедливо для двигателей с ременной передачей (со шкивом на валу), но возможны и другие случаи. 
                   		 									<div class="col-md-12 modal_shaft_first_question__group">
                   		 										<span class="form-check long-check col-md-1">  
                   		 											<input class="form-check-input hidden" type="checkbox" name="modal_shaft_first_question" id="modal_shaft_first_question_no" value="no"><label class="form-check-label" for="modal_shaft_first_question_no">нет</label>
                   		 										</span>
                   		 										<span class="form-check long-check col-md-1" style="margin-left: 5px;">
                   		 											<input class="form-check-input hidden" type="checkbox" name="modal_shaft_first_question" id="modal_shaft_first_question_yes" value="yes"><label class="form-check-label" for="modal_shaft_first_question_yes">да</label>
                   		 										</span>
                   		 									</div>
                   		 								</li>
                   		 								<li><p>Т.к. двигатель валом вверх или валом вниз, то уже точно будет присутствовать осевая нагрузка в одном направлении. Но, в некоторых случаях, эта осевая нагрузка будет сразу в обоих направлениях. Такое встречается, например, в дробилках. В итоге, осевая нагрузка в обе стороны?</p>
                   		 									<div class="col-md-12 modal_shaft_second_question__group">
                   		 										<span class="form-check long-check col-md-1">  
                   		 											<input class="form-check-input hidden" type="checkbox" name="modal_shaft_first_question" id="modal_shaft_second_question_no" value="no"><label class="form-check-label" for="modal_shaft_second_question_no">нет</label>
                   		 										</span>
                   		 										<span class="form-check long-check col-md-1" style="margin-left: 5px;">
                   		 											<input class="form-check-input hidden" type="checkbox" name="modal_shaft_first_question" id="modal_shaft_second_question_yes" value="yes"><label class="form-check-label" for="modal_shaft_second_question_yes">да</label>
                   		 										</span>
                   		 									</div></li>
                   		 								</ol>
                   		 							</div>
                   		 						</div>
                   		 					</div>
                   		 				</div>
                   		 				<div style="display: none;">
                   		 					<input type="text" name="l30" value="" id="print_l30">
                   		 				</div>
                   		 				<div style="display: none;">
                   		 					<input type="text" name="l33" value="" id="print_l33">
                   		 				</div>
                   		 				<div style="display: none;">
                   		 					<input type="text" name="h31" value="" id="print_h31">
                   		 				</div>
                   		 				<div style="display: none;">
                   		 					<input type="text" name="way" value="" id="print_path">
                   		 				</div>
                   		 				<div style="display: none;">
                   		 					<input type="text" name="isp" value="" id="print_isp">
                   		 				</div>
                   		 				<div style="display: none;">
                   		 					<input type="text" name="isp_name" value="" id="print_name_isp">
                   		 				</div>
                   		 				<div style="display: none;">
                   		 					<input type="text" name="scheme" value="" id="print_scheme">
                   		 				</div>
                   		 				<div style="display: none;">
                   		 					<input type="text" name="gab" value="" id="print_gab">
                   		 				</div>
                   		 				<div style="display: none;">
                   		 					<input type="text" name="price" value="" id="print_price">
                   		 				</div>
                   		 				<div style="display: none;">
                   		 					<input type="text" name="price" value="" id="ispolnenie_name_default">
                   		 				</div>
                   		 				<div class="col-md-12 print">
                   		 					<button type="submit" formtarget="_blank" class="btn btn-primary button-print">На печать</button>
                   		 				</div>
                   		 			</div>
                   		 		</form>
                   		 		<span id="gab" value="0" hidden></span>
                   		 		<span id="offer-id" value="0" hidden></span>
                   		 		<span id="l30" value="0" hidden></span>
                   		 		<span id="l33" value="0" hidden></span>
                   		 		<span id="h31" value="0" hidden></span>
                   		 		<span id="img_default" value="0" hidden></span>

                   		 		<div class="tab-content col-md-8">
                   		 			<h1 class="hide_hint">
                   		 				<span id="name_isp"></span><span id="name_power_rotation"></span><span id="name_rocker"></span><span id="name_vibro"></span><span id="name_heating"></span><span id="name_bearing"></span><span id="name_import_bearing"></span><span id="name_brake"></span><span id="name_vent"></span><span id="name_encoder"></span><span id="name_encoder_impuls"></span><span id="name_encoder_voltage"></span><span id="name_encoder_signal"></span><span id="name_encoder_accuracy"></span><span id="defence"></span><span id="climat_name"></span><span id="ispolnenie_name"></span>
                   		 			</h1>
                   		 			<div class="tab-content">
                   		 				<div class="tab-pane active" id="description">
                   		 				</div>
                   		 				<p class="hide_hint" id="vent_ip_hint" style="color: #ff00009e;display: none;"></p>
                   		 				<div id="list" style="display: none">
                   		 					<ul>
                   		 						<!--<li class="hide_hint danger" id="warning_list">* Данная комбинация невозможна</li>-->
                   		 						<li class="hide_hint" id="double_shaft_hint"></li>
                   		 						<li class="hide_hint" id="shaft_hint"></li>
                   		 						<li class="hide_hint" id="rocker_list"></li>
                   		 						<li class="hide_hint" id="vibro_list"></li>
                   		 						<li class="hide_hint" id="heating_list" ></li>
                   		 						<li class="hide_hint" id="bearing_list"></li>
                   		 						<li class="hide_hint" id="import_bearing_list"></li>
                   		 						<li class="hide_hint" id="brake_list" ></li>
                   		 						<li class="hide_hint" id="vent_list"></li>
                   		 						<li class="hide_hint" id="encoder_list">
                   		 							<span id="encoder_list_hint"></span>
                   		 							<span id="encoder_impuls_list"></span>
                   		 							<span id="encoder_voltage_list"></span>
                   		 							<span id="encoder_signal_list"></span>
                   		 							<span id="encoder_accuracy_list"></span>
                   		 						</li>
                   		 						<li class="hide_hint" id="climat_list"></li>
                   		 					</ul>
                   		 				</div>
                   		 				<div id="tech_param" style="display: none;">
                   		 					<h3>Технические характеристики доработок:</h3>
                   		 					<div class="row">
                   		 						<div class="col-md-4" id="param_tormoz" style="display: none;">
                   		 							<table class="table table-condensed">
                   		 								<thead> 
                   		 									<tr> 
                   		 										<th>Электромагнитный тормоз</th> 
                   		 									</tr>
                   		 								</thead>
                   		 								<tbody> 
                   		 									<tr> 
                   		 										<td>Тормозной момент, Н х м (Ном./Макс.)
                   		 										</td>
                   		 										<td id="param_tormoz1">
                   		 										</td>
                   		 									</tr>
                   		 									<tr> 
                   		 										<td>Напряжение питания, В
                   		 										</td>
                   		 										<td id="param_tormoz2">
                   		 										</td>
                   		 									</tr>
                   		 									<tr> 
                   		 										<td>Потребляемая мощность, Вт
                   		 										</td>
                   		 										<td id="param_tormoz3">
                   		 										</td>
                   		 									</tr>
                   		 									<tr> 
                   		 										<td>Время срабатывания, мс
                   		 										</td>
                   		 										<td id="param_tormoz4">
                   		 										</td>
                   		 									</tr>
                   		 								</tbody>
                   		 							</table>
                   		 						</div>
                   		 						<div class="col-md-4" id="param_vent" style="display: none;">
                   		 							<table class="table table-condensed">
                   		 								<thead> 
                   		 									<tr> 
                   		 										<th>Независимая вентиляция</th> 
                   		 									</tr>
                   		 								</thead>
                   		 								<tbody> 
                   		 									<tr> 
                   		 										<td>Напряжение питания, В
                   		 										</td>
                   		 										<td id="param_vent1">
                   		 										</td>
                   		 									</tr>
                   		 									<tr> 
                   		 										<td>Потребляемая мощность, Вт
                   		 										</td>
                   		 										<td id="param_vent2">
                   		 										</td>
                   		 									</tr>
                   		 									<tr> 
                   		 										<td>Потребляемый ток, А
                   		 										</td>
                   		 										<td id="param_vent3">
                   		 										</td>
                   		 									</tr>
                   		 								</tbody>
                   		 							</table>
                   		 						</div>
                   		 						<div class="col-md-4" id="param_encoder" style="display: none;">
                   		 							<table class="table table-condensed">
                   		 								<thead> 
                   		 									<tr> 
                   		 										<th>Энкодер</th> 
                   		 									</tr>
                   		 								</thead>
                   		 								<tbody> 
                   		 									<tr> 
                   		 										<td>Напряжение питания, В
                   		 										</td>
                   		 										<td id="param_encoder1">4.75...30В
                   		 										</td>
                   		 									</tr>
                   		 									<tr> 
                   		 										<td>Выходные сигналы
                   		 										</td>
                   		 										<td id="param_encoder2">1
                   		 										</td>
                   		 									</tr>
                   		 									<tr> 
                   		 										<td>Тип выхода
                   		 										</td>
                   		 										<td id="param_encoder3">1
                   		 										</td>
                   		 									</tr>
                   		 									<tr> 
                   		 										<td>Разрешение, имп/об.
                   		 										</td>
                   		 										<td id="param_encoder4">
                   		 										</td>
                   		 									</tr>
                   		 								</tbody>
                   		 							</table>
                   		 						</div>
                   		 					</div>
                   		 				</div>
                   		 				<div style="padding-top: 15px; display: none;" id="price_block">
                   		 					<div class="row">
                   		 						<div class="col-md-12">
                   		 							<span style="font-size: 18px; font-weight: bold">*Итоговая стоимость:</span> <span id="res_price" style="font-size: 16px;"> </span>
                   		 							<p>*Не является публичной офертой</p>
                   		 						</div>
                   		 					</div>
                   		 				</div>
                   		 			</div>
                   		 		</div>
                   		 	</div>
                   		 </div>
                   		</div>
                   	</div>
                   </div>
               </div>
               <?php echo $footer; ?>

