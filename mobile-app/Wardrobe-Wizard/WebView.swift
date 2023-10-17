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

// for testing
struct ContainerWebView: View {
    var body: some View {
        WebView(url: URL(string: "https://baidu.com")!)
    }
}

#Preview {
    ContainerWebView()
}
