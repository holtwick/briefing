//
//  ViewController.swift
//  Briefing
//
//  Created by Dirk Holtwick on 30.08.20.
//  Copyright © 2020-2021 Dirk Holtwick. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {
    
    @IBOutlet weak var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        let url = "https://brie.fi/ng/"
        webView?.load(URLRequest(url: URL(string: url)!))
    }
        
}

