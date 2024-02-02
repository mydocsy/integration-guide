import 'dart:convert';
import 'package:crypto/crypto.dart' as crypto;
import 'package:http/http.dart' as http;

final String apiKey = 'Your API Key';
final String apiSecret = 'Your API Secret';

final String baseUrl = 'https://staging.mydocsy.com';
// final String baseUrl = 'https://mydocsy.com' ;

String generateJWT(Map<String, dynamic> params) {
  params['timestamp'] = DateTime.now().millisecondsSinceEpoch;
  final base64Header =
      base64Url.encode(utf8.encode(jsonEncode({'alg': 'HS256', 'typ': 'JWT'})));
  final base64Payload = base64Url.encode(utf8.encode(jsonEncode(params)));
  final signatureInput = '$base64Header.$base64Payload';
  final hmac = crypto.Hmac(crypto.sha256, utf8.encode(apiSecret));
  final signature =
      base64Url.encode(hmac.convert(utf8.encode(signatureInput)).bytes);
  return '$base64Header.$base64Payload.$signature';
}

Future<void> createCorporate() async {
  final jwtToken = generateJWT({
    'name': 'Test',
    'country': 'India',
    'city': 'Jaipur',
    'state': 'Rajasthan',
    'address': 'Address',
  });

  try {
    final response = await http.post(
      Uri.parse('$baseUrl/api/auth/corporates?api_key=${apiKey}'),
      headers: {
        'x-payload': jwtToken,
        'Content-Type': 'application/json',
      },
    );

    if (response.statusCode != 200) {
      throw Exception('HTTP error! Status: ${response.statusCode}');
    }

    final responseData = json.decode(response.body)['data'];
    print('Corporate ID: $responseData');
  } catch (error) {
    print('Error: $error');
  }
}

void main() {
  createCorporate();
}
