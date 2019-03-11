window.onload = function () {
    var file = document.getElementById('file');
    var button = document.getElementById('button');
    var ofile = null;


    button.onclick = function () {
//用户还没有点击“选择文件”把文件添加进input里（input里为空）
//而直接点击了上传按钮，就让它退出
        if (file.files.length == 0) {
            console.log('请选择文件');
            return false;
        }
//这里只选择了一个文件
        ofile = file.files[0];
        console.log(ofile);
    }
}