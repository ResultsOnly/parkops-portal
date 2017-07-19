/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      if (navigator.onLine) {
        document.getElementById('portalView').style.display = 'block';
        var window_sizes = this.getWindowSizes;
        document.getElementById('portalView').width = window_sizes[0];
        document.getElementById('portalView').height = window_sizes[1];
        document.getElementById('appView').style.display = 'none';
      } else {
        var ref = window.open('offline.html', '_self', 'location=no');
      }
    },
    getWindowSizes: function() {
      var windowHeight = 0, windowWidth = 0;
      if (typeof (window.innerWidth) == 'number') {
          windowHeight = window.innerHeight;
          windowWidth = window.innerWidth;

      } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
          windowHeight = document.documentElement.clientHeight;
          windowWidth = document.documentElement.clientWidth;

      } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
         windowHeight = document.body.clientHeight;
         windowWidth = document.body.clientWidth;
      }
      return [windowWidth, windowHeight];
    }
};
