/**
 * Html5 Fetch API 封装
 * @fileOverview
 * @author pycoder.Junting
 * @email: 342766475@qq.com
 * @Date: 2018-06-20 10:16:20
 * @Last Modified by: pycoder.Junting
 * @Last Modified time: 2018-06-20 10:25:18
 */

 function get(url) {
    return fetch(url, {
        method: "GET",
        headers: headers,
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.log(`Request failed. Url = ${url} . Message = ${err}`);
        return { error: { message: "Request failed." } };
    })
 }

 function post(url, data) {
    return fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.log(`Request failed. Url = ${url} . Message = ${err}`);
        return { error: { message: "Request failed." } };
    })
 }

function put(url, data) {
    return fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.log(`Request failed. Url = ${url} . Message = ${err}`);
        return { error: { message: "Request failed." } };
    })
 }


function  handleResponse (url, response) {
    if (response.status < 500) {
        return response.json();
    } else {
        console.log(`Request failed. Url = ${url} . Message = ${response.statusText}`);
        return {
            error: {
                message: "Request failed due to server error."
            }
        }
    }
}

export { get, post, put }
