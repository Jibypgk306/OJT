var counter = 0;

function adduser() {

    var input3 = document.getElementById('email').value;

    var html = '<div class="row" id="data' + counter + '"style="margin-bottom:15px;">' +
        '<div class="col-md-3 col-sm-6 col-xs-5">' +
        '<input type="text" class="form-control" value="' + input3 + '"disabled>' +
        '<div class="col-md-3 col-sm-6 col-xs-5">' +
        '<button type="button" class="btn btn-success"><a href="editemail.html">Submit</a></button>' +

        '</div>' +
        '</div>'
    document.getElementById('userList').insertAdjacentHTML('beforeend', html);
    counter++;
}