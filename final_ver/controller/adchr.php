<?php
class ControllerToolAdchrTestAdchr extends Controller
{
	public function index()
	{

		//замени на свои, как вариант создать папку catalog/view/javascript/podbor/adchr/test/adchr.js
		$this->document->addScript('catalog/view/javascript/podbor/adchr.js');

		/** Стили
		$this->document->addStyle('catalog/view/theme/default/stylesheet/tool/adchr/test/adchr.css');*/

		$data['footer'] = $this->load->controller('common/footer');
		$data['header'] = $this->load->controller('common/header');

		$this->response->setOutput($this->load->view('tool/adchr/test/adchr', $data));
	}

	//get data by model input and frameSize:
	public function get_data_by_input()
	{
		$this->load->model('tool/adchr/test/adchr');
		$keyword = $this->request->post['keyword'];
		$type = $this->request->post['type'];
		$json = $this->model_tool_adchr_test_adchr->get_data_by_input($keyword, $type);


		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	//get data by power and rpm selection:
	public function get_data_by_power_and_rpm_selection()
	{
		$this->load->model('tool/adchr/test/adchr');

		$json = $this->model_tool_adchr_test_adchr->get_data_by_power_and_rpm_selection($this->request->post['power'], $this->request->post['rpm'], $this->request->post['type']);

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
}
