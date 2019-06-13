'use strict';

// ********** CONTENT ******************//
const ws = process.env.WS_URI || false;
let ws_script = '';
if (ws) {
  ws_script = `<script src="/socket.io/socket.io.js"></script>
    <script>
      var socket = io.connect('${process.env.WS_URI}');
    </script>`;
}
global.content = `<body>
<style rel="stylesheet" type="text/css">
* { padding: 0; margin: 20; }
body {
 font-family: Arial, Helvetica, sans-serif;
 font-size: 13px;
}
</style>
<div style="text-align: center; font-size: 60px">
<p>${process.env.LABEL} ${process.env.TEAM}</p>
<p><strong>${process.env.VERSION}</strong></p>
<p><img src="https://storage.googleapis.com/khaly-img/${process.env.TEAM}.png" alt="" width="500"></p>
</div>
${ws_script}
</body>`;
// ********** CONTENT ******************//



const routing = process.env.ROUTING || false;
// With router (to test contour prefixRewrite)
if (routing === 'true') {
  require('./with-route');
} else {
  if (ws) {
    require('./with-websocket');
  } else {
    require('./without-route');
  }
}


// [END all]
