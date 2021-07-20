"use strict"
import React, { Component } from 'react';
import './Footer.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Footer extends Component {
    state = {}
   
    render() {
        
        return (
            <div>
                <footer class="footer-section">
                <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
            </div>
        );
    }

}
export default Footer;