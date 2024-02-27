import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(),
        bottomNavigationBar:
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Icon(Icons.phone),
            Icon(Icons.account_box_outlined),
            Icon(Icons.message)
          ],
        ),
          body: ListView(
          children: [
            Row(
              children: [
                Icon(Icons.person),
                Text("홍길동")
              ],
            ),
            Row(
              children: [
                Icon(Icons.person),
                Text("홍길동")
              ],
            ),
            Row(
              children: [
                Icon(Icons.person),
                Text("홍길동")
              ],
            ),
          ],
        )

        ),
      ); //-> 커스터마이징
  }
}

