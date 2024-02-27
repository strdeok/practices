import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp //-> 커스터마이징
        (
            home: Scaffold(
                appBar: AppBar(title: Text("앱")),
                body: Align(
                  alignment: Alignment.bottomCenter,
                  child: Container(
                    width: double.infinity,
                    height: 50,
                    color: Colors.blue,
                  ),
                )));
  }
}
