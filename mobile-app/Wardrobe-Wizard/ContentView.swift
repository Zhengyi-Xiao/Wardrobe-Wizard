//
//  ContentView.swift
//  Wardrobe-Wizard
//
//  Created by 肖正义 on 10/17/23.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        if #available(iOS 16.0, *) {
            NavigationStack {
                WebView(url: URL(string: "http://52.87.179.156:3000")!)
                    .ignoresSafeArea()
            }
        } else {
            Text("Sorry, this feature requires iOS 16.0 or higher.")
                .foregroundColor(.red)
                .ignoresSafeArea()
        }
    }
}

#Preview {
    ContentView()
}
