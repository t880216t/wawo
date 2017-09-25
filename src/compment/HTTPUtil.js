var HTTPUtil = {};

/**
 * 基于 fetch 封装的 GET请求
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
HTTPUtil.get = function(url, params, headers) {
    if (params) {
        let paramsArray = [];
        //encodeURIComponent  
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({status:-1});
            })
    })
}


/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param formData
 * @param headers
 * @returns {Promise}
 */
HTTPUtil.post = function(url, formData, headers) {
    return new Promise(function (resolve, reject) {
        console.log('formdata:',formData)
        fetch(url, {
            method: 'POST',
            headers: headers,
            body:formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({status:-1});
            })
    })
}

/**
 * 上传图片
 */

HTTPUtil.uploadImage =(url, params)=> {
    return new Promise(function (resolve, reject) {
        var ary = params.path.split('/');
        //设置formData数据
        let formData = new FormData();
        let file = {uri: params.path, type: "multipart/form-data", name: ary[ary.length-1]};
        formData.append("file", file);
        //fetch post请求
        fetch(url, {
            method: "POST",
            //设置请求头，请求体为json格式，identity为未压缩
            headers: {
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData)=> {
                console.log("uploadImage", responseData);
                resolve(responseData);
            })
            .catch((err)=> {
                console.log("err", err);
                reject(err);
            });
    });
};

export default HTTPUtil;  