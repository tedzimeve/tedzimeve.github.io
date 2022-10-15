var group_id = '199380286';

var API_URL = 'https://api.vk.com/method/';

api = {
    'wall': {
        'get': API_URL+"wall.get"
    }
}

var and = "&access_token=vk1.a.JM5JmVhanz37WXic9_UwbtRNCGRUjDO4MOBjKKkaRXfAnS5mNauHEEmeBcr_hZhkr6YTu3Eks-SLdLE3UezMJTGZkwyU2ejU9VeuovaTe5dV4ZZBkKXGY6gp8zVDCa5MSiEYiNHYi7IvHDHIvDIAIa86fVFO4nFsDbf03rGkvTdAWfuq1RiAct_29JK9-hfJ&v=5.131";
function apim(url, properties) {
    var req = new XMLHttpRequest();
    req.open("GET", url+'?'+properties+and);
    return req.send(null);
}

//wall.get?owner_id=199380286