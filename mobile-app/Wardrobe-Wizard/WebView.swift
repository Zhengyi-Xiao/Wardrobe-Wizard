//
//  WebView.swift
//  Wardrobe-Wizard
//
//  Created by 肖正义 on 10/17/23.
//

import SwiftUI
import UIKit
import WebKit


struct WebView: UIViewRepresentable {
    let url: URL

    func makeUIView(context: Context) -> WKWebView {
        return WKWebView()
    }

    func updateUIView(_ webView: WKWebView, context: Context) {
        let request = URLRequest(url: url)
        webView.load(request)
    }
}

struct ContentWebView: View {
    var body: some View {
        ZStack {
            Color(#colorLiteral(red: 1, green: 0.937254902, blue: 0.9137254902, alpha: 1)) // Set the background color to #FFEFE9
                .ignoresSafeArea()

            WebView(url: URL(string: "http://52.87.179.156:3000")!)
                .ignoresSafeArea()
        }
    }
}

#Preview {
    ContentWebView()
}
