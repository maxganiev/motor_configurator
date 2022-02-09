<?php
//root/Eloquent/Product
use Eloquent\Product;
use Eloquent\CategoryProduct;
use Eloquent\AttributeProduct;

class ModelToolAdchrTestAdchr extends Model
{
	public function get_data_by_input($keyword, $type)
	{
		// var_dump($decoded);
		//обработка post запросов
		if ($type == '5AI') {
			$category_id = [69];
			$like = '%5АИ%';
		}

		if ($type == 'ESQ') {
			$category_id = [296];
			$like = '%ESQ%';
		}

		$products = CategoryProduct::whereIn('category_id', $category_id)->select('product_id')->get()->pluck('product_id')->toArray();

		return Product::with(['relOffers' => function ($query) {
			$query->with(['desc', 'setka', 'brake']);
		}])
			->with('attrs')
			->whereIn('product_id', $products)
			->where('model', 'like', '%' . $keyword . '%')
			->where('model', 'like', $like)
			->get();
	}

	public function get_data_by_power_and_rpm_selection($power, $rpm, $type)
	{
		if ($type == '5AI') {
			$category_id = [69];
			$like = '%5АИ%';
		}

		if ($type == 'ESQ') {
			$category_id = [296];
			$like = '%ESQ%';
		}

		$products = CategoryProduct::whereIn('category_id', $category_id)->select('product_id')->get()->pluck('product_id')->toArray();

		$products = Product::whereIn('product_id', $products)
			->where('model', 'like', $like)
			->select('product_id')
			->get()
			->pluck('product_id')
			->toArray();

		$products = AttributeProduct::whereIn('product_id', $products)
			->whereIn('text', [$power, $rpm])
			->whereIn('attribute_id', ['33', '36'])
			->whereNotIn('attribute_id', ['103'])
			->get()
			->groupBy('product_id');
		$result = [];

		foreach ($products as $key => $value) {
			if (count($value) > 1) {
				$result[] = array_unique($value->pluck('product_id')->toArray());
			}
		}

		if (!empty($result) && count($result) > 1 && $type == 'ESQ') {
			return $this->getProductsByIds($result, $type);
		} elseif (!empty($result) && count($result) == 1) {
			return $this->getProductById($result[0], $type);
		} else {
			return [];
		}
	}

	public function getProductsByIds($array, $type)
	{
		$tmp = [];
		foreach ($array as $product_id) {
			$tmp[] = $this->getProductById($product_id, $type);
		}
		return $tmp;
	}

	public function getProductById($product_id, $type)
	{
		if ($type == '5AI') {
			$like = '%5АИ%';
		}
		if ($type == 'ESQ') {
			$like = '%ESQ%';
		}
		return Product::with(['relOffers' => function ($query) {
			$query->with(['desc', 'setka', 'brake']);
		}])
			->with('attrs')
			->whereIn('product_id', $product_id)
			->where('model', 'like', $like)
			->get()[0];
	}
}
