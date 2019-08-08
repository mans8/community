

/*提交回复*/
function post() {
    var questionId = $("#question_id").val();
    var content = $("#comment_content").val();
    if (content == null){
        alert("回复内容不能为空");
        return;
    }
    $.ajax({
        type:"POST",
        url:"/comment",
        contentType:"application/json",
        data:JSON.stringify({
            "parentId":questionId,
            "content":content,
            "type":1
        }),
        success:function (response) {
            if (response.code == 200){
                window.location.reload();
            } else {
                if (response.code == 2003){
                    var isAccepted = confirm(response.message);
                    if (isAccepted) {
                        window.open("https://github.com/login/oauth/authorize?client_id=3368284ea0dcfd3882b0&redirect_uri=http://localhost:8887/callback&scope=user&state=1");
                        window.localStorage.setItem("closable",true);
                    }
                }else {
                    alert(response.message);
                }
            }
        },
        dataType:"json"
    });
}

/*展开二级评论*/
function collapseComments(e) {
    var id = e.getAttribute("data-id");
    var comments = $("#comment-" + id);

    //获取二级评论的展开状态
    var collapse = e.getAttribute("data-collapse");
    if (collapse) {
        //折叠二级评论
        comments.removeClass("in");
        e.removeAttribute("data-collapse");
        e.classList.remove("active");
    }else{
        //展开二级评论
        comments.addClass("in");
        //标记二级评论
        e.setAttribute("data_collapse","in");
        e.classList.add("active");
    }
}
