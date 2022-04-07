<?php
use Omnipay\Omnipay;


if(!isset($data['p24_order_id']) or !isset($data['p24_session_id'])){
return;
}



$merchantId = get_option('przelewy24_merchant_id', 'payments');

$is_test = (get_option('przelewy24_testmode', 'payments')) == 'y';
$crc = get_option('przelewy24_crc', 'payments');
$posId = $merchantId;

$gateway = Omnipay::create('Przelewy24');

$gateway->initialize([
    'merchantId' => $merchantId,
    'posId'      => $posId,
    'crc'        => $crc,
    'testMode'   => $is_test,
]);


//$english_format_number = number_format($data['p24_amount'], 2, '.', '');
//$english_format_number = number_format($ord_data['amount'], 2, '.', '');
//$currency = $data['p24_currency'];
//$currency = $ord_data['currency'];

$trans_params = array(

		'transactionId'   => $data['p24_order_id'],
 		'sessionId' => $data['p24_session_id'],
		'amount' => $ord_data['amount'] ,
		'currency' => $ord_data['currency'],

	);





$response = $gateway->completePurchase($trans_params)->send();

if ($response->isSuccessful()){

	$update_order['transaction_id'] = $data['p24_order_id']; // a reference generated by the payment gateway
	$update_order['success'] = 'Your payment was successful! ' . $response->getMessage();
	$update_order['is_paid'] = 1;
	$update_order['order_completed'] = 1;
}
