import 'dart:convert';
import 'package:crypto/crypto.dart' as crypto;
import 'package:http/http.dart' as http;

final String apiKey = '254a77c02181016c9668b3e33e92485f';
final String apiSecret =
    'b5bdce01207059c9c1665ec833153d303785bb4e9a87651a1c7dda3f1050a331';

final String baseUrl = 'http://127.0.0.1:8080';

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
