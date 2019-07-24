const axios = require('axios')

axios.get('http://www.smallmi.com/index.php?r=nine/listajax&n_id=58&page='+7+'&cac_id=cXVlcnlUaGVuRmV0Y2g7Njs2OTI5NjYyNjM6MFp2eFdjTzJTU09ESWd3SzhmQkVJZzs2OTI4Mzg3NTY6M1p2RllodDNRMzIyTmtrVkJnbU5iZzsxMzg1NzQ1NDY6RUM2MkNBMm5TbjZCTWRrOUNhVlhHdzsxMzgzOTg2OTc6LTRfeVI1dHRTbGFvUlBhYnMxc3VhQTsxMDYyNzMyMjMxOjFJSGNjLV9lUTF5bzNTOFRMaEY2QVE7MTQyNjMxNDU3NTp1aUxxcHNfRFJXNlVWb0JhbHlVOUF3OzA7')
    .then(function (res) {
        console.log(res.data.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });