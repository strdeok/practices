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
            home: Scaffold //상중하로 나누어짐
                (
                    appBar: AppBar(title: Text("앱")),
                    body: Container(
                      child: Text("안녕"),
                    ),
                    bottomNavigationBar: BottomAppBar(
                      child: SizedBox(
                        height: 60,
                        child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              Icon(Icons.phone),
                              Icon(Icons.message),
                              Icon(Icons.contact_page),
                            ]),
                      ),
                    )));
  }
}
