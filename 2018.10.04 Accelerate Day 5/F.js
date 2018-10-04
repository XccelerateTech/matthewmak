var decode = ['j','a','b','c','d','e','f','g','h','i'];

function transform(st) {
    let sts = st.split("");
    let res = '';
    sts.sort();
    sts.forEach(i => {
        res = res + decode[i];
    });
    return res;
}

var output = transform('213'); // abc

console.log(output);