//
//  ViewController.swift
//  Briefing
//
//  Created by Dirk Holtwick on 30.08.20.
//  Copyright © 2020 Dirk Holtwick. All rights reserved.
//

import UIKit
import SafariServices

//struct SafariView: UIViewControllerRepresentable {
//
//    let url: URL
//
//    func makeUIViewController(context: UIViewControllerRepresentableContext<SafariView>) -> SFSafariViewController {
//        return SFSafariViewController(url: url)
//    }
//
//    func updateUIViewController(_ uiViewController: SFSafariViewController,
//                                context: UIViewControllerRepresentableContext<SafariView>) {
//
//    }
//
//}

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        let safari = SFSafariViewController(url: URL(string: "https://brie.fi/ng")!)
        //        if let sview = safari.view {
        //            sview.frame = view.bounds
        //            sview.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        //            view.addSubview(sview)
        self.present(safari, animated: true) {
            
        }
        //        }
    }
    
}

